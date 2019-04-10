import { combineReducers } from 'redux'
import { get, post } from 'utils/dataAccess/axios'
import { mockClosure } from 'utils/mock'

const IS_MOCK_CURRENT_MODULE = false // 控制当前模块的所有接口是否使用mock
const isMock = mockClosure(IS_MOCK_CURRENT_MODULE)

const GET_INBANK_DATA = 'GET_INBANK_DATA'

export const getRelationGraph = (type,name, successConfig) => {

  const config = {
    url: `${isMock()}/crm-jj/api/relation_graph/` + type,
    actionType: GET_INBANK_DATA,
    successConfig,
    queryData: {
      name : ''
    },
    extendData: {
      key: type
    },
    failConfig: {
    },
  }

  if (name) {
    config.queryData.name = name;
  }


  return get(config)
}


const relationGraph = (previousState = null, action) => {
  if (action.type === GET_INBANK_DATA) {

    return action.data
  } else {
    return previousState
  }
}

const relation = combineReducers({
  relationGraph
})
export default relation
