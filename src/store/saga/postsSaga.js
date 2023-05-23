import { call, put, takeEvery } from 'redux-saga/effects';
import { getPostsFailure, getPostsSuccess } from '../slicers/postSlice/postSlice';
import { getUserFailure, getUserSuccess } from '../slicers/currentUserSlice/currentUserSlice';
import { getUserPostsFailure, getUserPostsSuccess } from '../slicers/userPostsSlicer/userPostsSlice';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* workGetPostsFetch() { // получаем все посты
    try {
        const posts = yield call(() => fetch('https://jsonplaceholder.typicode.com/posts'));
        const formattedPosts = yield posts.json();
        yield delay(500);
        yield put(getPostsSuccess(formattedPosts));  
    } catch (error) {
        console.log(`Произошла ошибка ${error}`);
        yield put(getPostsFailure())
    }
}

function* workGetCurrentUserFetch(action) { // получаем пользователья по айди
    try {
        const id = action.payload.id;
        const posts = yield call(() => fetch(`https://jsonplaceholder.typicode.com/users/${id}`));
        const formattedUser = yield posts.json();
        yield delay(500);
        yield put(getUserSuccess(formattedUser));
    } catch (error) {
        console.log(`Произошла ошибка ${error}`);
        yield put(getUserFailure())
    }
}

function* workGetCurrentUserPostsFetch(action) { // получаем посты пользователя
    try {
        const id = action.payload.id;
        const userPosts = yield call(() => fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`));
        const formattedUserPosts = yield userPosts.json();
        yield delay(700);
        yield put(getUserPostsSuccess(formattedUserPosts));
    } catch (error) {
        console.log(`Произошла ошибка ${error}`);
        yield put(getUserPostsFailure())
    }
}

function* postsSaga() {
    yield takeEvery('posts/getPostsFetch', workGetPostsFetch);
    yield takeEvery('user/getUserFetch', workGetCurrentUserFetch);
    yield takeEvery('userPosts/getUserPostsFetch', workGetCurrentUserPostsFetch);
}

export default postsSaga;