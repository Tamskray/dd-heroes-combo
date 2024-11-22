import { useEffect, useState } from "react";
import HeroPortrait from "./components/Hero";

import { Hero, Party } from "./types";
import { findCombos, findMatch, findSimilarCombos } from "./utils";

import { partyCombos } from "./data/partyCombos";
import { heroes } from "./data/heroes";

import { default as emptySlot } from "./assets/hero_slot.background.png";
import { default as highlightedEmptySlot } from "./assets/hero_slot.backgroundhightlight.png";
import Combinations from "./components/Combinations";

type Dragging = number | null;

function App() {
  const [party, setParty] = useState<Party>([null, null, null, null]);

  const [draggingIndex, setDraggingIndex] = useState<Dragging>(null);
  const [currentHero, setCurrentHero] = useState<boolean>();

  const currentCombo = findMatch(party, partyCombos);
  const possibleCombos = findCombos(party, partyCombos);
  const similarCombos = findSimilarCombos(party, partyCombos);

  const addHeroToParty = (hero: Hero) => {
    setParty((prevParty) => {
      const newParty = [...prevParty];
      const emptySlotIndex = newParty.findIndex((slot) => slot === null);
      if (emptySlotIndex !== -1) {
        newParty[emptySlotIndex] = hero;
      }
      return newParty;
    });
  };

  const removeHeroFromParty = (heroIndex: number) => {
    setParty((prevParty) => {
      const newParty = [...prevParty];
      newParty[heroIndex] = null;
      return newParty;
    });
  };

  const dragStart = (index: number, isHero?: boolean) => {
    setDraggingIndex(index);
    if (isHero) setCurrentHero(true);
  };

  const dragOver = (event: React.DragEvent) => {
    event.preventDefault();
    console.log("dragOver");
  };

  const onDrop = (targetIndex: number) => {
    if (draggingIndex === null || targetIndex === null) {
      console.error("Dragging index is null, cannot drop.");
      return;
    }

    if (currentHero) {
      setParty((prevParty) => {
        const updatedParty = [...prevParty];
        updatedParty[targetIndex] = heroes[draggingIndex];
        return updatedParty;
      });
    }

    setParty((prevParty) => {
      const updatedParty = [...prevParty];
      const draggedHero = updatedParty[draggingIndex];

      if (draggedHero) {
        updatedParty[draggingIndex] = updatedParty[targetIndex];
        updatedParty[targetIndex] = draggedHero;
      }

      return updatedParty;
    });

    setDraggingIndex(null);
    setCurrentHero(false);
  };

  // useEffect(() => {
  //   console.log(draggingIndex);
  // }, [draggingIndex]);

  // useEffect(() => {
  //   console.log(currentHero);
  // }, [currentHero]);

  useEffect(() => {
    console.log(party);
  }, [party]);

  return (
    <div className="main">
      <section className="all-heroes-section">
        <h2>Full Roster of the Heroes</h2>
        <div>
          {heroes.map((hero, index) => (
            <div
              key={index}
              onClick={() => addHeroToParty(hero)}
              draggable
              onDragStart={() => dragStart(index, true)}
              onDragOver={dragOver}
              onDrop={() => onDrop(index)}
            >
              <HeroPortrait portrait={hero.portrait} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="party-section">
          <div className="party-name">
            {currentCombo ? (
              <h2>{currentCombo.name}</h2>
            ) : (
              <h2 className="party-name-empty">
                Build a Party From the Roster
              </h2>
            )}
          </div>

          <div className="party">
            {party.map((hero, index) => (
              <div
                key={index}
                draggable={!!hero}
                onDragStart={() => dragStart(index)}
                onDragOver={dragOver}
                onDrop={() => onDrop(index)}
                onClick={() => hero && removeHeroFromParty(index)}
              >
                {hero ? (
                  <HeroPortrait portrait={hero.portrait || ""} />
                ) : (
                  <div>
                    <img
                      src={
                        currentHero || draggingIndex !== null
                          ? highlightedEmptySlot
                          : emptySlot
                      }
                      alt="empty-slot"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          <br />
          <div>Clear party</div>
        </div>

        <div className="combinations">
          <Combinations title="Possible" combos={possibleCombos} />
          <Combinations title="Similar" combos={similarCombos} />
        </div>
      </section>
    </div>
  );
}

export default App;
