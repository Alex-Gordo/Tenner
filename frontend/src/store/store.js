import { createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'
import { rootReducer } from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)



// import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
// import ReduxThunk from 'redux-thunk';
// import {toyReducer} from './reducers/toy.reducer.js';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const rootReducer = combineReducers({
//     toyModule : toyReducer
// })

// export const store = createStore(rootReducer,
//     composeEnhancers(applyMiddleware(ReduxThunk)));