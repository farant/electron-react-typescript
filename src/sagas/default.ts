import { AppStore } from '../store';
import { INCREMENT } from '../actions/counterActions';
import { takeEvery } from 'redux-saga';

export function* testSaga(_: AppStore, action: INCREMENT) {
    console.log("And now you're cooking with portal... I mean sagas");
}

export function* watchTest(store: AppStore) {
    yield takeEvery([INCREMENT], testSaga, store);
}

export const onStart = [watchTest];
