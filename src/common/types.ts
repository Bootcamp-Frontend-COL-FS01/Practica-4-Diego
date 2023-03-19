export type Movement = string;
export type Player = string;
export type PossibleMovements = Movement[];
export type WinnerRoutes = Movement[][];
export type Players = {
  1: Player;
  2: Player;
};
export type Play = {
  player: Player;
  movement: Movement;
};
export type GameState = Play[];
