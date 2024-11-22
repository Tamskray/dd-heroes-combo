import type { FC } from "react";
import HeroPortrait from "./Hero";
import { PartyCombo } from "../types";
import { heroes } from "../data/heroes";

interface CombinationsProps {
  title: string;
  combos: PartyCombo[];
}

const Combinations: FC<CombinationsProps> = ({ title, combos }) => {
  return (
    <div>
      <h2>{title} combinations</h2>
      <div>
        {combos.length > 0 ? (
          combos.map((combo, index) => (
            <div className="heroes-party-combo" key={index}>
              <h3>{combo.name}</h3>
              <div className="party-combo">
                {combo.heroes.map((heroName, index) => {
                  const hero = heroes.find((h) => h.name === heroName);
                  return (
                    hero && (
                      <HeroPortrait key={index} portrait={hero?.portrait} />
                    )
                  );
                })}
              </div>
            </div>
          ))
        ) : (
          <p>No possible combos yet.</p>
        )}
      </div>
    </div>
  );
};

export default Combinations;
