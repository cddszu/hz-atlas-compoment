// import { hashHistory } from 'react-router'
import { combineReducers } from 'redux'
import { get, post } from 'utils/dataAccess/axios'


const IS_MOCK =  1 ? '/mock': ''
const GET_ACCOUNT_LIST = 'GET_ACCOUNT_LIST'
const DISTRIBUTE_ACCOUNT = 'DISTRIBUTE_ACCOUNT'



// ----------------- dispatcher ------------------------

export const getAccountList = (filterObj = {}) => {
  const postConfig = {
    url:  `/crm-fd/api/customer/searchAccount`,
    actionType: GET_ACCOUNT_LIST,
    bodyData: filterObj,
    successConfig: { },
    failConfig: {
      message: '获取账户信息失败'
    }
  }
  return post(postConfig)
}

// 账户分配
export function distributeAccount(account, data, callback = () => {}) {
  return post({
    url: `/crm-fd/api/allocationCustomer/updateAccount/${account}`,
    actionType: DISTRIBUTE_ACCOUNT,
    bodyData: data,
    successConfig: {
      callback
    },
    failConfig: {
      message: '分配账户失败'
    }
  })
}


// -------------------------- reducers --------------------------

export function accountList (previousState = {content: []}, action) {
  if (action.type === GET_ACCOUNT_LIST) {
    return action.data
  } else {
    return previousState
  }
}



const accountMgt = combineReducers({
  accountList
})
export default accountMgt
