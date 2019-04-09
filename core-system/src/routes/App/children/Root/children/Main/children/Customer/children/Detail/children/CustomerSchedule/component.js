import React from 'react'
import './component.scss'

class CustomerSchedule extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }

  render() {
    const {scheduleList} = this.props
    return (
      <div className="customer-detail-customerSchedule-component">
        <div className="customerSchedule-list">
          {
            scheduleList.map((item) => {
              return (
                <div className="customerSchedule-item" key={item.id}>
                  <div className='left-part'>
                    <div className='title'>{item.topic}</div>
                    <div className='customer'>{item.companyVo ? (item.companyVo.companyName || '--') : '--'}</div>
                  </div>
                  <div className='right-part'>
                    <div className='data'>{item.startDt.substr(0, 10)}</div>
                    <div className='time'>{ `${item.startDt && item.startDt.split(' ')[1]}-${item.endDt && item.endDt.split(' ')[1]}`}</div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default CustomerSchedule
