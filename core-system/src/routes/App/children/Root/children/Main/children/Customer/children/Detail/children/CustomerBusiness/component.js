import React from 'react'
import './component.scss'

class CustomerBusiness extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }

  render() {
    const {customerBusinessList} = this.props
    return (
      <div className="customer-detail-customerBusiness-component">
        <div className="customerBusiness-list">
          {
            customerBusinessList.businessChanceVosList.length > 0
            ?
            customerBusinessList.businessChanceVosList.map((item) => {
              return (
                <div className="customerBusiness-item" key={item.id}>
                  <div className='title'>{item.name}</div>
                    <div className='tags'>
                      <span className={item.customerType === '行内' ? 'customerType' : 'customerType-hangwai'}>{item.customerType}</span>
                      <span className='customerName'>{item.customerName}</span>
                    </div>
                </div>
              )
            })
            : null
          }

        </div>
      </div>
    )
  }
}

export default CustomerBusiness
