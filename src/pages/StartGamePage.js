import React, { useState } from "react";
import { useAppDispatch } from "../../frontend/src/store/hooks";
import { startGame } from "../store/slices/gameInit";
import { addUser } from "../store/slices/users";
import Button from "../components/Button";

function StartGamePage() {
  const [username, setUsername] = useState("");
  const dispatch = useAppDispatch();

  const startGameHandler = () => {
    // TODO: check for duplicate users
    dispatch(addUser({ username }));
    dispatch(startGame({ username }));
  };
  return (
    <div className="flex flex-col justify-center items-center mt-80">
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Nickname"
        className="py-2 px-4 outline-none rounded shadow w-64 mb-6"
      />
      <Button onClick={startGameHandler}>Start Game</Button>
    </div>
  );
}

export default StartGamePage;
