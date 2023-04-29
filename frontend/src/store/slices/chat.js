import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  answers: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage(state, action) {
      // TODO: make sure this grabs the right thing from payload
      state.answers.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
