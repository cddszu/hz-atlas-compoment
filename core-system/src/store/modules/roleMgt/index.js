import { combineReducers } from 'redux'
import { get, post } from 'utils/dataAccess/axios'
import { mockClosure } from 'utils/mock'

const IS_MOCK_CURRENT_MODULE = false // 控制当前模块的所有接口是否使用mock
const isMock = mockClosure(IS_MOCK_CURRENT_MODULE)

const CONFIRM_ROLE = 'CONFIRM_ROLE'

export const confirmRole = (roleId, successConfig) => {
  const config = {
    url: `${isMock()}/crm-jj/api/auth/confirmRole`,
    actionType: CONFIRM_ROLE,
    queryData: {
      roleId
    },
    successConfig,
    failConfig: {
    },
  }
  return post(config)
}


// const msgNums = (previousState = {content: []}, action) => {
//   if (action.type === GET_MSG_NUMS) {
//     return action.data
//   } else {
//     return previousState
//   }
// }

const roleMgt = combineReducers({
})
export default roleMgt
