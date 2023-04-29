import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  error: null,
  score: null,
  currentQuestionIndex: null,
  answers: [],
};

const initialChatState = {
  answers: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    fetchQuestionsSuccess(state, action) {
      state.questions = action.payload;
      state.score = 0;
      state.currentQuestionIndex = 0;
      state.answers = [];
    },
    fetchQuestionsFail(state, action) {
      state.error = action.payload;
    },
    answerQuestion(state, action) {
      const currentQuestion = state.questions[state.currentQuestionIndex];
      state.score +=
        action.payload.answer === currentQuestion.correct_answer ? 1 : 0;
      state.answers.push({
        question: currentQuestion.question,
        answer: action.payload.answer,
        correctAnswer: currentQuestion.correct_answer,
        isCorrect: action.payload.answer === currentQuestion.correct_answer,
      });
    },
    nextQuestion(state, action) {
      state.currentQuestionIndex += 1;
    },
  },
});

const chatSlice = createSlice({
  name: "chat",
  initialChatState,
  reducers: {
    addMessage(state, action) {
      // TODO: make sure this grabs the right thing from payload
      state.answers.push(action.payload);
    },
  },
});

export const {
  fetchQuestionsSuccess,
  fetchQuestionsFail,
  answerQuestion,
  nextQuestion,
} = quizSlice.actions;

export default quizSlice.reducer;
