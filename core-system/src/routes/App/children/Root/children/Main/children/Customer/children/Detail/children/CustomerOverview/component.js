import React from 'react'
import './component.scss'
import PaginationList from 'components/PaginationList'
import { SwipeAction } from 'antd-mobile'

class CustomerView extends React.Component {
  componentDidMount() {
  }
  render () {
    const {
      customerBaseMsg,
    } = this.props
    return (
      <div className="customer-view-component">
        <div className='border'>
          <div className='border-item'>
            <span className='item-title'>所属行业</span>
            <span className='item-content'>{customerBaseMsg.subordinateIndustry}</span>
          </div>
          <div className={`border-item ${customerBaseMsg.isInside ? 'show' : 'hide'}`}>
            <span className='item-title'>信用评级</span>
            <span className='item-content'>{customerBaseMsg.internalCreditRating || '--'}</span>
          </div>
          <div className={`border-item ${customerBaseMsg.isInside ? 'show' : 'hide'}`}>
            <span className='item-title'>合作年限</span>
            <span className='item-content'>{customerBaseMsg.cooperationYear || '--'}</span>
          </div>
          <div className={`border-item ${customerBaseMsg.isInside ? 'hide' : 'show'}`}>
            <span className='item-title'>企业风险评级</span>
            <span className='item-content'>{(+customerBaseMsg.riskLevel).toFixed(2) || '--'}</span>
          </div>
        </div>
        <div className='border business-scope'>
          <div className='item-title'>经营范围:</div>
          <div className='item-content'>{customerBaseMsg.businessScope}</div>
        </div>
      </div>
    )
  }
}

export default CustomerView
