import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const changeJoke = createAsyncThunk('joke/changeJoke', async (payload) => {
    const res = await axios.get('https://api.chucknorris.io/jokes/random');
    //console.log(res.data.value)
    return res.data.value;
})