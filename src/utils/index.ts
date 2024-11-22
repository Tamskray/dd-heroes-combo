import { Party, PartyCombo } from "../types";

export const findMatch = (
  party: Party,
  combos: PartyCombo[]
): PartyCombo | null => {
  return (
    combos.find((combo) => {
      return (
        party.length === combo.heroes.length &&
        party.every((hero, index) => hero?.name === combo.heroes[index])
      );
    }) || null
  );
};

export const findCombos = (
  party: Party,
  combos: PartyCombo[]
): PartyCombo[] => {
  return combos.filter((combo) => {
    for (let i = 0; i < party.length; i++) {
      const partyHero = party[i];

      if (partyHero) {
        if (partyHero.name !== combo.heroes[i]) {
          return false;
        }
      }
    }

    return true;
  });
};

export const findSimilarCombos = (
  party: Party,
  combos: PartyCombo[]
): PartyCombo[] => {
  const filteredParty = party.filter((hero) => hero !== null);

  return combos.filter((combo) => {
    return filteredParty.every((partyHero) =>
      combo.heroes.includes(partyHero.name)
    );
  });
};
