import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { getPostsFailure, getPostsSuccess } from '../slicers/postSlice/postSlice';
import { getUserFailure, getUserSuccess } from '../slicers/currentUserSlice/currentUserSlice';
import { getUserPostsFailure, getUserPostsSuccess } from '../slicers/userPostsSlicer/userPostsSlice';
import { getPostCommentsFailure, getPostCommentsSuccess } from '../slicers/postCommentsSlice/postCommentsSlice/postCommentsSlice';
import { postsProject } from './axios/instanceAxios';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* workGetPostsFetch() { // получаем все посты
    try {
        const posts = yield call(() => postsProject.get('/posts'));
        yield delay(500);
        yield put(getPostsSuccess(posts.data));  
    } catch (error) {
        console.log(`Произошла ошибка ${error}`);
        yield put(getPostsFailure())
    }
}

function* workGetCurrentUserFetch(action) { // получаем пользователья по айди
    try {
        const id = action.payload.id;
        const currentUser = yield call(() => postsProject.get(`/users/${id}`));
        yield delay(500);
        yield put(getUserSuccess(currentUser.data));
    } catch (error) {
        console.log(`Произошла ошибка ${error}`);
        yield put(getUserFailure())
    }
}

function* workGetCurrentUserPostsFetch(action) { // получаем посты пользователя
    try {
        const id = action.payload.id;
        const userPosts = yield call(() => postsProject.get(`/users/${id}/posts`));
        yield delay(1000);
        yield put(getUserPostsSuccess(userPosts.data));
    } catch (error) {
        console.log(`Произошла ошибка ${error}`);
        yield put(getUserPostsFailure())
    }
}

function* workGetPostCommentsFetch(action) { // получаем коментарии к посту
    try {
        const postId = action.payload; // получаем айди поста через экшн
        const comments = yield call(() => postsProject.get(`/posts/${postId}/comments`));
        yield delay(1000);
        yield put(getPostCommentsSuccess(comments.data));
    } catch (error) {
        console.log(`Произошла ошибка ${error}`);
        yield put(getPostCommentsFailure())
    }
}

function* postsSaga() {
    yield takeEvery('posts/getPostsFetch', workGetPostsFetch);
    yield takeEvery('user/getUserFetch', workGetCurrentUserFetch);
    yield takeEvery('userPosts/getUserPostsFetch', workGetCurrentUserPostsFetch);
    yield takeLatest('comments/getPostCommentsFetch', workGetPostCommentsFetch);
}

export default postsSaga;