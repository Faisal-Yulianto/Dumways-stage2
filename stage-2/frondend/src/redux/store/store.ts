// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import statusReducer from './../statusSlice';
import userReducer from '../userSlice';
import followReducer from '../followSlice';
import replyReducer from "../replySlice"

const store = configureStore({
  reducer: {
    status: statusReducer,
    user: userReducer,
    follow: followReducer,
    replies: replyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
