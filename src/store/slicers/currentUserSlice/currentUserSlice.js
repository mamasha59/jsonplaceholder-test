import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user : [],
    id: '',
    isLoading: false,
}

export const currentUserSlice  = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUserFetch: (state, action) => {
            state.isLoading = true;
            state.id = action.payload;
        },
        getUserSuccess: (state,action) => {
            state.user = action.payload;
            state.isLoading = false;
        },
        getUserFailure: (state) => {
            state.isLoading = false;
        }
    }
})

export const { getUserFetch, getUserSuccess, getUserFailure} = currentUserSlice.actions;

export default currentUserSlice.reducer;