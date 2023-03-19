import { GameState, Movement } from "../common/types";

export default function isValidPlay(
  state: GameState,
  currentMovement: Movement
): boolean {
  const derivedStatePositions = state.map((play) => play.movement);
  return !derivedStatePositions.includes(currentMovement);
}
