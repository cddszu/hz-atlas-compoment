import React from 'react'
import './component.scss'

class BussinessRemind extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {

  }


  render() {
    const {  } = this.state
    const { msgList } = this.props


    return (
      <div className="home-innerDynamic-component">
        <div className="innerDynamic-list">
          {
            msgList.content.map((item, index) => {
              return (
                <div className="innerDynamic-item" key={index}>
                  <div className="content">
                    <div className="title">
                      <span className="msgTitle">{item.msgTitle}</span>
                      <span className="msgTime">{item.pushDate}</span>
                    </div>
                    <div className="second-row">
                      <span className="companyName">{item.companyName ? item.companyName : '--'}</span>
                    </div>
                  </div>
                </div>
              )
            })
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
