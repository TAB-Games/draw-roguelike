import React from "react";
import { useSelector } from "react-redux";
import StartGamePage from "./StartGamePage";
import GamePage from "./GamePage";
import FetchingPage from "./FetchingPage";
import EndGamePage from "./EndGamePage";
import * as stages from "../utils/constants";

const MainPage = () => {
  const currentStage = useSelector((state) => state.gameState.stage);

  let displayedPage;

  switch (currentStage) {
    case stages.START_GAME:
      displayedPage = <StartGamePage />;
      break;
    case stages.FETCHING_GAME:
      displayedPage = <FetchingPage />;
      break;
    case stages.GAME:
      displayedPage = <GamePage />;
      break;
    case stages.END_GAME:
      displayedPage = <EndGamePage />;
      break;
    default:
      break;
  }
  return (
    <div className="font-mono bg-sky-50 min-h-screen">
      <h1 className="bg-sky-500 text-white p-4 text-2xl text-center uppercase">
        Drawing Roguelike
      </h1>
      {displayedPage}
    </div>
  );
};

export default MainPage;
