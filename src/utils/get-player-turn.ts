import { GameState, Players, Player } from "../common/types";

export default function getPlayerTurn(
  state: GameState,
  players: Players
): Player {
  if (state.length === 0) {
    return players[1];
  }

  if (state[state.length - 1].player === players[1]) {
    return players[2];
  }
  return players[1];
}
