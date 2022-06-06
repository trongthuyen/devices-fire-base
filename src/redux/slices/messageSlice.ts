import { MessageItem } from "./../../types/messsage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messageList: [] as MessageItem[],
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    saveMessage(state, action) {
      state.messageList = action.payload;
    },
  },
});

const { actions, reducer } = messageSlice;

export const { saveMessage } = actions;

export default reducer;
