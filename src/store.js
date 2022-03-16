// import { createStore, combineReducers, compose } from 'redux';

// const initialState = {};

// const reducer = combineReducers({
// });

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer, initialState, composeEnhancer());

// export default store;

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
