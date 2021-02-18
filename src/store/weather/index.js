import { createSlice } from '@reduxjs/toolkit'

const day = createSlice({
    name: 'day',
    initialState: null,
    reducers: {
        loadSuccessfully: (state, action) =>  action.payload
    },
});

export const actions = day.actions;

export default day.reducer
