export const commonChangeHandler = (_this, stateObjKey, key, value) => {
  const stateObj = _this.state[stateObjKey]

  if (typeof value === 'object') {
    if (value === null) {
      stateObj[key] = value
    } else {
      // datepicker的值也是value，但是它没有target属性，所以要区分出来
      if (Array.isArray(value) === true || value._isAMomentObject === true) {
        stateObj[key] = value
      } else {
        if (value.target.type === 'checkbox') {
          stateObj[key] = value.target.checked
        } else if (value.target.type === 'text' || value.target.type === 'password'){
          stateObj[key] = value.target.value
        }
      }
    }
  } else {
    stateObj[key] = value
  }
  _this.setState({
    stateObjKey: stateObj
  })
}
