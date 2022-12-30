import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../reducers/users.reducer";
export const store = configureStore({
  reducer: {
    user: usersReducer,
  },
});
