import { onStart as defaultSaga } from './default';

export function* rootSaga([store]) {
    yield [...defaultSaga.map(saga => saga(store))];
}
