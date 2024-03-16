import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ClickState {
  isClick: boolean;
}
// Define the initial state using that type
const initialState: ClickState = {
  isClick: true,
};

export const uiChange = createSlice({
  name: "ui",
  initialState,
  reducers: {
    isBtnClick(state, action) {
      state.isClick = action.payload;
    },
  },
});

export const { isBtnClick } = uiChange.actions;
