import { configureStore } from "@reduxjs/toolkit";
import jokeReducer from './reducers/jokeReducer';

const store = configureStore({
    reducer: {
        joke: jokeReducer,
    }
});

export default store;