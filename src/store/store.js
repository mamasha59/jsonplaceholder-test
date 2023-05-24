import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';

import postSlice from "./slicers/postSlice/postSlice";
import currentUserSlice from "./slicers/currentUserSlice/currentUserSlice";
import currentUserPostsSlice from "./slicers/userPostsSlicer/userPostsSlice";
import postCommentsSlice from "./slicers/postCommentsSlice/postCommentsSlice/postCommentsSlice";

import postsSaga from "./saga/postsSaga";

const saga = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        posts: postSlice,
        currentUser: currentUserSlice,
        currentUserPosts: currentUserPostsSlice,
        postComments: postCommentsSlice,
    },
    middleware: [saga]
})

saga.run(postsSaga);