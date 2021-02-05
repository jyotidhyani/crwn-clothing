import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

//multiple middlewares can be used
const middlewares = [];

if(process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

// can also be written as - const store = createStore(rootReducer, applyMiddleware(logger))
export const store = createStore(rootReducer, applyMiddleware(...middlewares))

//persisted version of store
export const persistor = persistStore(store);

export default { store, persistor };