import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import ReduxThunk from 'redux-thunk'
import { userReducer } from './reducers/userReducer.js';

// import { rootReducer } from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// export const store = createStore(
//   appModule: appReducer,
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// )


const rootReducer = combineReducers({
  // reviewModule: reviewReducer,
  userModule: userReducer,
  // rootModule: rootReducer,
})


export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk))) //Passing the reducer
