export interface Player {
  id: string;
  name: string;
  img: string;
  deck: Deck;
  cards: Card[];
  isBot?: boolean;
  playerSouls: number;
  playerLife: number;
  playerShield: number;
}

export interface Deck {
  id: string;
  name: string;
  img: string;
  cards: Card[];
}

export interface Card {
  id?: string;
  layoutId?: string;
  digit?: number;
  color?: "red" | "blue" | "green" | "yellow" | "black";
  image?: "";
  action?: "reverse" | "skip" | "draw two" | "draw four" | "wild";
  flip?: boolean;
  rotationY?: number;
  playable?: boolean;
  forPlayer?: number;
}

export interface GameServer {
  id: string;
  name: string;
  isPrivate: boolean;
  cntPlayers: string;
}
