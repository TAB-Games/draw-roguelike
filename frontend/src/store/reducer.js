import { combineReducers } from "redux";
import gameState from "./slices/gameInit";
import quiz from "./slices/game";
import chat from "./slices/chat";
import users from "./slices/users";

export default combineReducers({ gameState, quiz, chat, users });
