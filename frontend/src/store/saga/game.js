import { take, race, delay, put } from "redux-saga/effects";
import { fetchQuestionsSuccess } from "../slices/game";
import { finishGame } from "../slices/gameInit";
import { answerQuestion, nextQuestion } from "../slices/game";

function* answersSaga() {
  for (let i = 0; i < 10; i++) {
    yield take(answerQuestion.type);
    yield put(nextQuestion());
  }
}

export default function* gameSaga() {
  while (true) {
    yield take(fetchQuestionsSuccess.type);
    // time to answer
    yield race({
      delay: delay(6000000),
      done: answersSaga(),
    });
    yield put(finishGame());
  }
}
