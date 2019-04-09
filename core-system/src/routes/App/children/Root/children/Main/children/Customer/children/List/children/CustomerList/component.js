import React from 'react'

import './component.scss'
import {withRouter} from "react-router"
import customerHead from './images/customer-head@2x.png'

class CustomerList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.clickItemHandler = this.clickItemHandler.bind(this)
  }
  clickItemHandler(id) {
    this.props.getItemId(id)
    this.props.togglePage()
  }
  componentWillMount() {
  }
  componentWillReceiveProps({ userPermission }) {
  }

  render() {
    return (
      <div className={'customer-list-component'}>
        {
          this.props.customerList && this.props.customerList.length > 0 ? (
            this.props.customerList.map((item, index) => (
              <div className={'list-item'} key={index}>
                <div className={'first-line'}>
                  <div className={'left-icon'}>
                    <i className='company-logo iconfont icon-company'></i>
                  </div>
                  <div className='right-title'>
                    <div className='customer-name'>
                      <span className={'customer-title'}>{item.companyName || '--'}</span>
                      <span className={'customer-id'}>{item.companyNo || ''}</span>
                    </div>
                    <div className='customer-tags'>
                      <span className='business-status'>{item.businessScope}</span>
                      <span className='industry'>{item.subordinateIndustry}</span>
                    </div>
                  </div>
                </div>
                <div className={'second-line'}>
                  <div className={'customer-msg'}>
                    <div className={'msg-content'}>{item.legalPerson || '--'}</div>
                    <div className={'msg-title'}>法人代表</div>
                  </div>
                  <div className={'customer-msg'}>
                    <div className={'msg-content'}>{formatMoney(item.registeredCapital) || '--'}</div>
                    <div className={'msg-title'}>注册资金</div>
                  </div>
                  <div className={'customer-msg'}>
                    <div className={'msg-content'}>{item.registrationDate || '--'}</div>
                    <div className={'msg-title'}>注册日期</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={'no-result-title'}>{this.props.noResultTitle || '暂无数据'}</div>
          )
        }
      </div>
    )
  }
}

export default withRouter(CustomerList)
