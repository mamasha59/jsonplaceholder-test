import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userPosts : [],
}

export const currentUserPostsSlice  = createSlice({
    name: 'userPosts',
    initialState,
    reducers: {
        getUserPostsFetch: (state, action) => {
            state.isLoading = true;
            state.id = action.payload;
        },
        getUserPostsSuccess: (state,action) => {
            state.userPosts = action.payload;
            state.isLoading = false;
        },
        getUserPostsFailure: (state) => {
            state.isLoading = false;
        }
    }
})

export const { getUserPostsFetch, getUserPostsSuccess, getUserPostsFailure} = currentUserPostsSlice.actions;

export default currentUserPostsSlice.reducer;