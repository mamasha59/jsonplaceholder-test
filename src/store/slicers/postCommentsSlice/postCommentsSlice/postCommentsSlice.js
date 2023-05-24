import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    comments : [],
    idPost: '',
    isLoading: false,
}

export const commentsSlice  = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        getPostCommentsFetch: (state,action) => {
            state.isLoading = true;
            state.idPost = action.payload;
        },
        getPostCommentsSuccess: (state,action) => {
            state.comments = action.payload;
            state.isLoading = false;
        },
        getPostCommentsFailure: (state) => {
            state.isLoading = false;
        }
    }
})

export const { getPostCommentsFetch, getPostCommentsSuccess, getPostCommentsFailure} = commentsSlice.actions;

export default commentsSlice.reducer;