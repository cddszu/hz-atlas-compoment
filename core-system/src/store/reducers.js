import {combineReducers} from 'redux'

import account from './modules/account'
import loginOut from './modules/loginOut'

export const injectReducer = (store, {key, reducer}) => {

  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export const makeRootReducer = (asyncReducers) => {
  const appReducer = combineReducers({
    account,
    loginOut,
    global,
    ...asyncReducers
  })
  return (state, action) => {
    if (action.type === 'LOGOUT') {
      state = undefined
    }
    return appReducer(state, action)
  }
}

export default makeRootReducer
