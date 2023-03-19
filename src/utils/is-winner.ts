import { GameState, Player, WinnerRoutes } from "../common/types";

export default function isWinner(
  state: GameState,
  player: Player,
  routes: WinnerRoutes
): boolean {
  // Filter the gameState by player and then obtain the movements
  // Example of derivedStateFilteredPositions = ["1A", "2A", "3A"]
  const derivedStateFilteredPositions = state
    .filter((play) => play.player === player)
    .map((specificPlays) => specificPlays.movement);

  // Return true if any of the winner routes is present in the movements of a player
  return routes.some((route) =>
    route.every((winnerMovement) =>
      derivedStateFilteredPositions.includes(winnerMovement)
    )
  );
}
