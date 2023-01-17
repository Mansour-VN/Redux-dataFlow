import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [
    {
      id: "0",
      name: "Mansour VN",
    },
    {
      id: "1",
      name: "Mohsen OL",
    },
    {
      id: "2",
      name: "Naser",
    },
  ],
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
