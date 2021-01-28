import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//multiple middlewares can be used
const middlewares = [logger];

// can also be written as - const store = createStore(rootReducer, applyMiddleware(logger))
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;