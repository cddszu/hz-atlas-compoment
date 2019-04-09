import moment from 'moment'
export const timestampToDate = (value) => {
    if (!value) {
        return ''
    }
    return moment(value, 'x').format('YYYY-MM-DD')
}

export const formatMsgDate = value => {
  if (!value) {
    return ''
  }
  if (value === 'today') {
    return moment(new Date()).format('YYYY-MM-DD')
  }
  if (moment(value).format('YYYY-MM-DD') === moment(new Date()).format('YYYY-MM-DD')) {
    return moment(value).format('HH:mm')
  } else {
    return moment(value).format('YYYY-MM-DD')
  }
}
