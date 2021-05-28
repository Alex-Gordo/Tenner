import { combineReducers } from 'redux'
// import { gigReducer } from './gigReducer'
import { userReducer } from './userReducer'
import { systemReducer } from './systemReducer'
// import { orderReducer } from './orderReducer'

export const rootReducer = combineReducers({
  systemModule: systemReducer,
  // gigModule: gigReducer,
  userModule: userReducer
  // orderModule: orderReducer
})
