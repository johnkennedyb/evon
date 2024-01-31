// store.js

import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers'; // Import your root reducer

const store = configureStore({
  reducer: rootReducer, // Pass your root reducer here
  enhancers: [composeWithDevTools()],
});

export default store;
