import React from "react";
import { cancelGame } from "../store/slices/gameInit";
import { useDispatch } from "react-redux";
import Button from "../components/Button";

function FetchingPage() {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-center items-center mt-80">
      <div className="w-15 h-15 bg-green-700 rounded-full flex items-center justify-center mb-12 animate-bounce">
        <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full animate-ping animate-spin shadow "></div>
      </div>
      Fetching...
      <Button
        onClick={() => {
          dispatch(cancelGame());
        }}
      >
        Cancel
      </Button>
    </div>
  );
}

export default FetchingPage;
