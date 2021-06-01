import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

//multiple middlewares can be used
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

// can also be written as - const store = createStore(rootReducer, applyMiddleware(logger))
export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga);

//persisted version of store
export const persistor = persistStore(store);

export default { store, persistor };