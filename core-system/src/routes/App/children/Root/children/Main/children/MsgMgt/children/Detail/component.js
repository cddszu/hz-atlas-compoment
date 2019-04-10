import React from 'react'
import './component.scss'
import { GoBack } from 'components/lib'
import { getQueryObj } from 'utils/url.js'

class MsgDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }

  componentWillMount() {
    const queryObj = getQueryObj(this.props.location.search)
    this.msgId = queryObj.id
    this.msgType = queryObj.msgType
  }

  componentDidMount() {
    if (this.msgType === '1') {
      this.props.getMsgDetail(this.msgId)
    }
  }

  render() {
    const { msgDetail } = this.props
    return (
      <div className="msg-detail-component">
        <div className="msg-detail-head">
          <GoBack><i className="detail-cancel iconfont icon-return"></i></GoBack>
          <span className="detail-title">消息详情</span>
          <span className="detail-confirm"></span>
        </div>
        <div className="msg-detail-container">
          <div className="title">
            <div className="first-row">{msgDetail.msgTitle}</div>
            <div className="second-row">
              <span className="firstTag">{msgDetail.msgCategoryName}</span>
              <span className="secondTag">{msgDetail.messageStatus}</span>
              <span className="time">{msgDetail.pushDt}</span>
            </div>
          </div>
          <div className="content">{msgDetail.content}</div>
        </div>
        {
          !(this.msgType === '1') ?
            (
              <div className="basicInfo">
                <div className="basicInfo-head">
                  <i className="iconfont icon-essential-informatio basicInfo-icon"></i>
                  <span className="title">基本信息</span>
                </div>
                <div className="basicInfo-content">
                  <div className="basicInfo-item">
                    <i className="iconfont icon-customer item-icon"></i>
                    <div className="right-column">
                      <span className="left-part">客户名称</span>
                      <span className="right-part">九江新希望股份有限公司</span>
                    </div>
                  </div>
                  <div className="basicInfo-item">
                    <i className="iconfont icon-kehuzhanghu item-icon"></i>
                    <div className="right-column">
                      <span className="left-part">客户账户</span>
                      <span className="right-part">九江新希望股份有限公司</span>
                    </div>
                  </div>
                  <div className="basicInfo-item">
                    <i className="iconfont icon-effective-time item-icon"></i>
                    <div className="right-column">
                      <span className="left-part">起息日期</span>
                      <span className="right-part">九江新希望股份有限公司</span>
                    </div>
                  </div>
                  <div className="basicInfo-item">
                    <i className="iconfont icon-zhanghuleixing item-icon"></i>
                    <div className="right-column">
                      <span className="left-part">账户类型</span>
                      <span className="right-part">九江新希望股份有限公司</span>
                    </div>
                  </div>
                  <div className="basicInfo-item">
                    <i className="iconfont icon-zhanghuyue item-icon"></i>
                    <div className="right-column">
                      <span className="left-part">账户余额</span>
                      <span className="right-part">九江新希望股份有限公司</span>
                    </div>
                  </div>
                  <div className="basicInfo-item">
                    <i className="iconfont icon-chanpin item-icon"></i>
                    <div className="right-column">
                      <span className="left-part">产品利率</span>
                      <span className="right-part">九江新希望股份有限公司</span>
                    </div>
                  </div>
                  <div className="basicInfo-item">
                    <i className="iconfont icon-effective-time item-icon"></i>
                    <div className="right-column noborder">
                      <span className="left-part">到期日期</span>
                      <span className="right-part">九江新希望股份有限公司</span>
                    </div>
                  </div>
                </div>
              </div>
            ) :
              msgDetail.messageStatus === '已处理' ?
                (
                  <div className="handleInfo">
                    <div className="handleInfo-head">
                      <i className="iconfont icon-chuliyijian handleInfo-icon"></i>
                      <span className="title">处理意见</span>
                    </div>
                    <div className="handleInfo-content">
                      <i className="leg-img"></i>
                      <div className="right-part">
                        <div className="first-row">
                          <span className="handle-name">李梓童</span>
                          <span className="handle-time">{msgDetail.handleTime}</span>
                        </div>
                        <div className="second-row">{msgDetail.ramark}</div>
                      </div>
                    </div>
                  </div>
                ) :
                  (
                    <div className="handleMsg">
                      <input type="search" placeholder="请输入处理意见..." className="handle-input"/>
                    </div>
                  )

        }

      </div>
    )
  }
}

export default MsgDetail
