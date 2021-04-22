import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './rootReducer';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    ['development'].includes(process.env.NODE_ENV) &&
      typeof window === 'object' &&
      typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f,
  ),
);

export default store;
