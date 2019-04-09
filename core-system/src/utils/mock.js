
// 用于控制整个系统是否统一使用mock
const IS_MOCK_ALL = false

export const mockClosure = (is_mock_current_module) => {
  return (is_mock_current_api) => {
    return (IS_MOCK_ALL || is_mock_current_module || is_mock_current_api) ? '/mock' : ''
  }
}
