export const formatMoney = (val, unit) => {
  if (Number(val) !== val) {
    return val
  }
  unit = unit || '万元'

  if (unit === '万元') {
    val /= 10000
  }
  val = val.toFixed(2).toString().split('')
  var dotIndex = val.indexOf('.')
  if (dotIndex !== -1) {
    var cnt = 0
    for (var i = dotIndex; i > 0; i--) {
      if (cnt === 3) {
        val.splice(i, 0, ',')
        i++
        cnt = 0
      } else {
        cnt++
      }
    }
  }

  return val.join('') + unit
}
