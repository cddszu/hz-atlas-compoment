import {combineReducers} from 'redux'

import global from './modules/global'
import account from './modules/account'
import loginOut from './modules/loginOut'

import msgMgt from './modules/msgMgt'
import queryScheduler from './modules/queryScheduler'
import roleMgt from './modules/roleMgt'
import search from './modules/search'
import businessChanceMgt from './modules/businessChanceMgt'
import scheduleMgt from './modules/scheduleMgt'
import institutionMgt from './modules/institutionMgt'
import legWork from './modules/legWork'

import groupMgt from './modules/group'
import custMgt from './modules/customerMgt/custMgt'
import tagMgt from './modules/customerMgt/tagMgt'
import relation from './modules/relation'
import report from './modules/workReport'
import affiche from './modules/afficheMgt'
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
    msgMgt,
    queryScheduler,
    roleMgt,
    scheduleMgt,
    institutionMgt,
    search,
    groupMgt,
    custMgt,
    businessChanceMgt,
    legWork,
    relation,
    tagMgt,
    report,
    affiche,
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
