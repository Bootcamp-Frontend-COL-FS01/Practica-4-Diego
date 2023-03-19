import { PossibleMovements, Players, WinnerRoutes } from "../common/types";

export const possibleMovements: PossibleMovements = [
  "1A",
  "2A",
  "3A",
  "1B",
  "2B",
  "3B",
  "1C",
  "2C",
  "3C",
];

export const players: Players = {
  1: "O",
  2: "X",
};

export const winnerRoutes: WinnerRoutes = [
  ["1A", "2A", "3A"],
  ["1B", "2B", "3B"],
  ["1C", "2C", "3C"],
  ["1A", "1B", "1C"],
  ["2A", "2B", "2C"],
  ["3A", "3B", "3C"],
  ["1A", "2B", "3C"],
  ["1C", "2B", "3A"],
];
