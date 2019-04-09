import React from 'react'
import './component.scss'

class BussinessRemind extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.getBusinessStatus = this.getBusinessStatus.bind(this)
  }

  getBusinessStatus(type) {
    let businessStatus = ''
    switch (type)
    {
      case '4':
      businessStatus = '终止';
      break;
      case '3':
      businessStatus = '完成';
      break;
      case '2':
      businessStatus = '沟通';
      break;
      case '1':
      businessStatus = '新建';
      break;
      default:
      break;
    }
    return businessStatus
  }
  componentDidMount() {

  }


  render() {
    const {  } = this.state
    const { msgList } = this.props


    return (
      <div className="home-bussinessRemind-component">
        <div className="bussinessRemind-list">
          {
            msgList.content.map((item, index) => (
              <div className="bussinessRemind-item" key={index}>
                <div className="first-row">
                  <span className="title">{item.msgTitle ? item.msgTitle : '--'}</span>
                  <span className="time">{item.pushDate ? item.pushDate : '--'}</span>
                </div>
                <div className="second-row">
                {/* TODO: 缺少返回字段 */}
                  <span>自建商机</span> | <span>{this.getBusinessStatus(item.status)}</span> | <span>{item.pushDate ? item.pushDate : '--'}</span>
                </div>
                <div className="third-row">
                  <span className={item.isInner ? "customerType" : "customerType-hangwai"}>{item.isInner === '是' ? '行内' : '行外'}</span>
                  <span className="companyName">{item.companyName ? item.companyName : '--'}</span>
                </div>
              </div>
            ))
          }
          {/* <div className="bussinessRemind-item">
            <div className="first-row">
              <span className="title">有大额转入，准备跟进客户沟通资金需求</span>
              <span className="time">09:30</span>
            </div>
            <div className="second-row">
              <span>自建商机</span> | <span>新建</span> | <span>2019-05-20 12:00:00</span>
            </div>
            <div className="third-row">
              <span className="customerType">行内</span>
              <span className="companyName">云南百通电子有限公司</span>
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}

export default BussinessRemind
