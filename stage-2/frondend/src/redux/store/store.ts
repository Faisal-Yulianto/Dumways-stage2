// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import statusReducer from './../statusSlice';
import userReducer from '../userSlice';

const store = configureStore({
  reducer: {
    status: statusReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
