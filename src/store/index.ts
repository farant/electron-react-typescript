import { combineReducers, compose, applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { rootReducer, RootState } from '../reducers';
import { rootSaga } from '../sagas';

export type AppStore = Store<RootState>;

const configureStore = (initialState?: RootState): Store<RootState | undefined> => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares: any[] = [sagaMiddleware];
    const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
    let store = createStore(rootReducer, initialState, enhancer);

    sagaMiddleware.run(rootSaga, [store]);
    return store;
};

const store = configureStore();

if (typeof module.hot !== 'undefined') {
    module.hot.accept('../reducers', () =>
        store.replaceReducer(require('../reducers').rootReducer)
    );
}

export default store;
