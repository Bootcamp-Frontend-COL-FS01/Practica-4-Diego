import "./index.css";
import { GameState, Movement, Player } from "./common/types";
import { players, winnerRoutes } from "./config/game-elements";
import getPlayerTurn from "./utils/get-player-turn";
import isValidPlay from "./utils/is-valid-play";
import isWinner from "./utils/is-winner";

let gameState: GameState = [];

const board: HTMLDivElement = document.querySelector(".board-container")!;
const button: HTMLButtonElement = document.querySelector(".restart-button")!;
const turnMessage: HTMLParagraphElement = document.querySelector("#turn")!;

// Event delegation pattern
const handleClickBoard = (event: Event) => {
  const receivedEventTarget = event.target as HTMLDivElement;
  const currentMovement: Movement = receivedEventTarget.id;
  const playerTurn: Player = getPlayerTurn(gameState, players);
  const isCurrentValidPlay: boolean = isValidPlay(gameState, currentMovement);
  const isPlayer1Winner: boolean = isWinner(
    gameState,
    players[1],
    winnerRoutes
  );
  const isPlayer2Winner: boolean = isWinner(
    gameState,
    players[2],
    winnerRoutes
  );

  if (isCurrentValidPlay) {
    if (!isPlayer1Winner && !isPlayer2Winner) {
      gameState.push({
        player: playerTurn,
        movement: currentMovement,
      });
      // document.querySelector does not work if the string for the id start with a number
      // For that reason, document.getElementById was used
      // https://stackoverflow.com/questions/37270787/uncaught-syntaxerror-failed-to-execute-queryselector-on-document
      const square: HTMLElement = document.getElementById(currentMovement)!;
      square.textContent = gameState[gameState.length - 1].player;
      turnMessage.textContent = `Current turn is for Player (${
        playerTurn === players[1] ? players[2] : players[1]
      })`;
    }
  }
};

const handleClickButton = (): void => {
  gameState = [];
  const squares = board.children;

  for (const square of squares) {
    square.textContent = "";
  }
};

// An event handler is attached to a parent element (Event delegation)
board.addEventListener("click", handleClickBoard);

// Handle the reset action
button.addEventListener("click", handleClickButton);
