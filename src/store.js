import { configureStore } from '@reduxjs/toolkit';
import { GraphReducer } from './reducer/graphReducer';

export const store = configureStore({
  reducer: GraphReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
