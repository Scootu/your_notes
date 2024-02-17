import { createSlice } from "@reduxjs/toolkit";
const initialNotes: string[] = [];
export const notesData = createSlice({
  name: "notes",
  initialState: initialNotes,
  reducers: {},
});
export default notesData.reducer;
