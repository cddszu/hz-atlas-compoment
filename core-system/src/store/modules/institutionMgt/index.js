import { combineReducers } from 'redux'
import { get, post } from 'utils/dataAccess/axios'
import { mockClosure } from 'utils/mock'

const IS_MOCK_CURRENT_MODULE = false // 控制当前模块的所有接口是否使用mock
const isMock = mockClosure(IS_MOCK_CURRENT_MODULE)

const GET_USER_BY_INSTITUTION_NO = 'GET_USER_BY_INSTITUTION_NO'
const GET_INSTITUTION_TREE = 'GET_INSTITUTION_TREE'
export const getUserByInstitutionNo = (orgNo, callback, searchName) => {
  var url = `${isMock()}/crm-jj/api/user/getUserByInstitutionNo`
  // var url = `${isMock()}/crm-jj/api/user/getUserByInstitutionNo`
  // if(institutionNo === '000000' || !institutionNo) {
  //   url = `${isMock()}/crm-jj/api/user/searchUser`
  // }
  var queryData = {
    institutionNo: orgNo
  }
  if (!orgNo) {
    url = `${isMock()}/crm-jj/api/auth/institution/v2/searchUserByOrgNo`
    queryData = {
      orgNo: orgNo || '',
      searchName
    }
  }
  const config = {
    url: url,
    actionType: GET_USER_BY_INSTITUTION_NO,
    queryData: queryData,
    successConfig: {
      callback
    },
    failConfig: {
    },
  }
  return get(config)
}
const userByInstitutionNo = (previousState = {businessChanceResultVos: {
  content: []
}}, action) => {
  if (action.type === GET_USER_BY_INSTITUTION_NO) {
    return action.data
  } else {
    return previousState
  }
}
export const getInstitutionTree = (callback) => {
  const config = {
    url: `${isMock()}/crm-jj/api/auth/institution/findInstitutionTreeByUserNo2`,
    actionType: GET_INSTITUTION_TREE,
    successConfig: {
      callback
    },
    failConfig: {
    },
  }
  return get(config)
}
const institutionTree = (previousState = {}, action) => {
  if (action.type === GET_INSTITUTION_TREE) {
    return action.data
  } else {
    return previousState
  }
}

// ---------------------------
// combine and export
// ---------------------------
const institutionMgt = combineReducers({
  userByInstitutionNo,
  institutionTree
})
export default institutionMgt
