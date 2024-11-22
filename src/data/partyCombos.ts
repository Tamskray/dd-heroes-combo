import { PartyCombo } from "../types";

export const partyCombos: PartyCombo[] = [
  {
    name: `The Usual Suspects`,
    description: `Reference  to the setup being the first many players will form, and possibly the film of the same name. Alternatively, this may refer to the classic film Casablanca wherein the police captain, Renault turns to his subordinate on several occasions and instructs him to "Round up The Usual Suspects"`,
    heroes: ["vestal", "plagueDoctor", "highwayman", "crusader"],
  },
  {
    name: "Witch Hunt",
    description:
      "The party references the witch trials which were especially prevalent during the late 15th–early 16th century, with the Leper as the king, the Crusader as a guard, the Plague Doctor as the witch, and the Vestal as a priest.",
    heroes: ["vestal", "plagueDoctor", "crusader", "leper"],
  },
  {
    name: "Undying Light",
    description:
      "A play on the skills of this class to be able to constantly add +7 torch light per team member per round through use of skills, meaning the torch should never die.",
    heroes: ["vestal", "vestal", "vestal", "vestal"],
  },
  {
    name: "Smokey and Bandit",
    description: `Reference to the 1977 movie "Smokey and the Bandit".`,
    heroes: ["graveRobber", "highwayman", "graveRobber", "highwayman"],
  },
];
