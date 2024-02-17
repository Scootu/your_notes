import { configureStore } from "@reduxjs/toolkit";
import { notesData } from "./notesData";
export default configureStore({
  reducer: notesData.reducer,
});
