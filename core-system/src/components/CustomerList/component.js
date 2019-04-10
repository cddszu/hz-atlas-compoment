import React from 'react'

import styles from './component.module.scss'
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
    const {formData} = this.props
    return (
      <div className={styles['customer-list-component']}>
        {
          this.props.customerList && this.props.customerList.length > 0 ? (
            this.props.customerList.map((item, index) => (
              <div className={styles['list-item']} key={index} onClick={this.clickItemHandler.bind(this, item.id)}>
                <div className={styles['first-line']}>
                  <div className={styles['left-icon']} style={this.props.style}>
                    <img className={styles['list-icon']} alt='Logo' src={customerHead}/>
                  </div>
                  <span className={styles['customer-title']}>{item.customerName || '--'}</span>
                  <span className={styles['customer-id']}>{item.customerId || '--'}</span>
                  <i className={`${styles['right-icon']} iconfont icon-gengduo`}></i>
                </div>
                <div className={styles['second-line']}>
                  {
                    formData.map((value, key)=>(
                      <div className={styles['customer-msg']} key={key}>
                        <div className={styles['msg-content']}>{item[value.label] || '--'}</div>
                        <div className={styles['msg-title']}>{value.title}</div>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          ) : (
            <div className={styles['no-result-title']}>{this.props.noResultTitle || '暂无数据'}</div>
          )
        }
      </div>
    )
  }
}

export default withRouter(CustomerList)
