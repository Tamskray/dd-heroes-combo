export interface PartyCombo {
  name: string;
  description: string;
  heroes: string[];
}

export interface Hero {
  name: string;
  portrait: string;
}

export type Party = (Hero | null)[];
