import { createSlice } from "@reduxjs/toolkit";
interface userInfo {
  userName: string;
  Phone: number;
  BirthdayYear: number;
}
export interface User {
  Id: string;
  Email: string;
  Password: string;
  UserInfo: userInfo[];
  Todos: string[];
}
export interface Users {
  users: User[];
}
const initialState: Users = {
  users: [],
};
export const notesData = createSlice({
  name: "notes",
  initialState,
  reducers: {},
});
export default notesData.reducer;
