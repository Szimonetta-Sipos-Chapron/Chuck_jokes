import { createReducer } from "@reduxjs/toolkit";
import { changeJoke } from "../actions/jokeAction";

const initialState = {
    value: undefined,
}

const jokeReducer = createReducer(initialState, (builder) => {
    builder.addCase(changeJoke.fulfilled, (state, action) => {
        //console.log(action.payload)
        state.value = action.payload
    })
})

export default jokeReducer;