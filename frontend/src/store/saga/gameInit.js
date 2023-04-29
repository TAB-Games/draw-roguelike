import { take, fork, put, call, delay, cancel } from "redux-saga/effects";
import { cancelGame, startGame } from "../slices/gameInit";
import { fetchQuizFromApi } from "../../utils/api";
import { fetchQuestionsSuccess, fetchQuestionsFail } from "../slices/game";

function* fetchQuestionsSaga() {
  try {
    yield delay(1000);
    const data = yield call(fetchQuizFromApi);
    yield put(fetchQuestionsSuccess(data));
  } catch (error) {
    put(fetchQuestionsFail("Failed to fetch questions"));
  }
}

function* cancelFetchQuiz(forkedSaga) {
  while (true) {
    yield take(cancelGame.type);
    yield cancel(forkedSaga);
  }
}

export default function* startGameSaga() {
  while (true) {
    yield take(startGame.type);
    const forkedSaga = yield fork(fetchQuestionsSaga);
    yield fork(cancelFetchQuiz, forkedSaga);
  }
}
