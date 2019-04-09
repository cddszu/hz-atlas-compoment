import React from 'react'
import './component.scss'
import PropTypes from 'prop-types'

class Component extends React.Component {
  // import PropTypes from 'prop-types'
  static propTypes = {
    iconType: PropTypes.string,
    title: PropTypes.string,
    amount: PropTypes.string,
    isArrowUp: PropTypes.bool,
    desc: PropTypes.string,
  }

  static defaultProps = {

  }
  constructor(props) {
    super(props)
    this.state = {
      navData: {
        active: "渠道类",
        children: [
          {title: "渠道类"},
          {title: "代收代付类"}
        ]
      },
      channelData: {
        "已签约业务": [
          // {
          //   title: "短信",
          //   isShow: false,
          //   icon: "icon-duanxin",
          //   iconColor: "#CAE4AD",
          //   backgroundColor: "rgba(110,182,35,0.1)"
          // },
          {
            title: "网银",
            type: 'is_cyber_pay',
            isShow: false,
            icon: "icon-wangyin",
            iconColor: "#BBD5F4",
            backgroundColor: "rgba(74,144,226,0.1)"
          },
          // {
          //   title: "手机银行",
          //   isShow: false,
          //   icon: "icon-shoujiyinhang",
          //   iconColor: "#FBB5B5",
          //   backgroundColor: "rgba(248,56,56,0.1)"
          // },
          // {
          //   title: "支付密码器",
          //   isShow: false,
          //   icon: "icon-zhifumimaqi",
          //   iconColor: "#D5A7FE",
          //   backgroundColor: "rgba(144,19,254,0.1)"
          // },
          {
            title: "POS机",
            type: 'is_pos',
            isShow: false,
            icon: "icon-POSji",
            iconColor: "#FBDEAD",
            backgroundColor: "rgba(245,166,35,0.1)"
          },
          // {
          //   title: "现金管理平台",
          //   icon: "icon-xianjinguanlipingtai",
          //   iconColor: "#9FD9FF",
          //   backgroundColor: "rgba(0,154,255,0.1)"
          // }
        ],
        "未签约业务": [
          // {
          //   title: "短信",
          //   isShow: false,
          //   icon: "icon-duanxin",
          //   iconColor: "#CAE4AD",
          //   backgroundColor: "rgba(110,182,35,0.1)"
          // },
          {
            title: "网银",
            type: 'is_cyber_pay',
            isShow: true,
            icon: "icon-wangyin",
            iconColor: "#BBD5F4",
            backgroundColor: "rgba(74,144,226,0.1)"
          },
          // {
          //   title: "手机银行",
          //   isShow: false,
          //   icon: "icon-shoujiyinhang",
          //   iconColor: "#FBB5B5",
          //   backgroundColor: "rgba(248,56,56,0.1)"
          // },
          // {
          //   title: "支付密码器",
          //   isShow: false,
          //   icon: "icon-zhifumimaqi",
          //   iconColor: "#D5A7FE",
          //   backgroundColor: "rgba(144,19,254,0.1)"
          // },
          {
            title: "POS机",
            type: 'is_pos',
            isShow: true,
            icon: "icon-POSji",
            iconColor: "#FBDEAD",
            backgroundColor: "rgba(245,166,35,0.1)"
          },
          // {
          //   title: "现金管理平台",
          //   icon: "icon-xianjinguanlipingtai",
          //   iconColor: "#9FD9FF",
          //   backgroundColor: "rgba(0,154,255,0.1)"
          // }
        ]
      },
      collectionPayData: {
        "已签约业务": [
          {
            title: "代发工资",
            isShow: false,
            count: '',
            salary: '',
            icon: "icon-daifagongzi",
            iconColor: "#FBCB9F",
            backgroundColor: "rgba(248,118,0,0.1)"
          },
        ],
        "未签约业务": [
          {
            title: "代发工资",
            isShow: true,
            count: '',
            salary: '',
            icon: "icon-daifagongzi",
            iconColor: "#FBCB9F",
            backgroundColor: "rgba(248,118,0,0.1)"
          },
        ]
      }
    }
    this.companyKey = this.props.location.search.split("key=")[1]
    this.bizCollectionPay = this.props.bizCollectionPay
    this.bizChannel = this.props.bizChannel

    this.navItemClickHandle = this.navItemClickHandle.bind(this)
  }

  navItemClickHandle(e){
    e.persist()
    if(e.target.textContent === "渠道类"){
      this.props.getBizChannel(this.companyKey)
    }else{
      this.props.getBizCollectionPay(this.companyKey)
    }
    this.setState((oldState)=>{
      oldState.navData.active = e.target.textContent
      return oldState
    })
  }

  // 更新代收代付数据
  updateCollectionPayData(data){
    if(data.length === 0){
      this.setState((oldState)=>{
        oldState.collectionPayData['已签约业务'].forEach((item, index, arr)=>{
          arr[index].isShow = false
        })
        oldState.collectionPayData['未签约业务'].forEach((item, index, arr)=>{
          arr[index].isShow = true
        })
        return oldState
      })
    }else{
      if(Object.keys(data[0]).includes('is_salary') && data[0]['is_salary'] == "1"){
        // console.log(data[0])
        this.setState((oldState)=>{
          oldState.collectionPayData["已签约业务"][0].isShow = true
          oldState.collectionPayData["已签约业务"][0].salary = data[0].salary_amount
          oldState.collectionPayData["已签约业务"][0].count = data[0].salary_num
          oldState.collectionPayData["未签约业务"][0].isShow = false
          return oldState
        })
      }else{
        this.setState((oldState)=>{
          oldState.collectionPayData["已签约业务"][0].isShow = false
          oldState.collectionPayData["未签约业务"][0].isShow = true
          oldState.collectionPayData["未签约业务"][0].salary = data[0].salary_amount
          oldState.collectionPayData["未签约业务"][0].count = data[0].salary_num
          return oldState
        })
      }
    }
  }

  // 更新渠道类数据
  updateChannelData(data){
    if(data.length === 0){
      this.setState((oldState)=>{
        oldState.channelData['已签约业务'].forEach((item, index, arr)=>{
          arr[index].isShow = false
        })
        oldState.channelData['未签约业务'].forEach((item, index, arr)=>{
          arr[index].isShow = true
        })
        return oldState
      })
    }else{
      if(Object.keys(data[0]).includes('is_pos') && data[0]['is_pos'] == "1"){
          this.setState((oldState)=>{
            oldState.channelData["已签约业务"][1].isShow = true
            oldState.channelData["未签约业务"][1].isShow = false
            return oldState
          })
      }else{
        this.setState((oldState)=>{
          oldState.channelData["已签约业务"][1].isShow = false
          oldState.channelData["未签约业务"][1].isShow = true
          return oldState
        })
      }

      if(Object.keys(data[0]).includes('is_cyber_bank') && data[0]['is_cyber_bank'] == "1"){
        this.setState((oldState)=>{
          oldState.channelData["已签约业务"][0].isShow = true
          oldState.channelData["未签约业务"][0].isShow = false
          return oldState
        })
      }else{
        this.setState((oldState)=>{
          oldState.channelData["已签约业务"][0].isShow = false
          oldState.channelData["未签约业务"][0].isShow = true
          return oldState
        })
      }
    }
  }

  // 菜单栏
  renderNav(){
    return (
      <div className="nav-component">
          {this.state.navData.children.map((item, index)=>{
            return (
              <div className='nav-item' key={index}>
                <div
                className={`item ${this.state.navData.active === item.title ? 'active' : ''}`}
                onClick={this.navItemClickHandle}
                >{item.title}</div>
              </div>
            )
          })}
      </div>
    )
  }

  // 每一个业务卡
  renderCheckedCard(data){
    // console.log(data)
    return this.state.navData.active === "渠道类" ?
    (
      <div className="checked-card">
        <div className="checked-title">
          <span className="iconfont icon-qianyueyewu logo"></span>
          <div className='title'>已签约业务</div>
        </div>
        <div className="checked-content clearfix">
          {data.map((item, index)=>{
            if(item.isShow){
              return (
                <div
                key={index}
                className="little-card fl"
                style={{backgroundColor: item.backgroundColor}}>
                  <span className="title">{item.title ? item.title : "--"}</span>
                  <span
                  className={`icon iconfont ${item.icon}`}
                  style={{color: item.iconColor}}></span>
                </div>
              )
            }
          })}
        </div>
      </div>
    )
    :
    (
      <div className="checked-card">
        <div className="checked-title">
          <span className="iconfont icon-qianyueyewu logo"></span>
          <div className='title'>已签约业务</div>
        </div>
        <div className="checked-content clearfix">
          {data.map((item, index)=>{
            if(item.isShow){
              return (
                <div className="big-card fl" style={{backgroundColor: item.backgroundColor}} key={index}>
                  <span className="title">{item.title ? item.title : "--"}</span>
                  <span className="title second-title">{item.count ? "" : "--"}<span className={`num ${item.count ? '' : 'hide'}`}>{item.count}</span><span className={`unit ${item.count ? '' : 'hide'}`}>次</span></span>
                  <span className="title third-title">{item.salary ? "" : "--"}<span className={`num ${item.salary ? '' : 'hide'}`}>{item.salary}</span><span className={`unit ${item.salary ? '' : 'hide'}`}>元</span></span>
                  <span
                  className={`icon iconfont ${item.icon}`}
                  style={{color: item.iconColor}}></span>
                </div>
              )
           }
          })}
        </div>
      </div>
    )
  }
  componentWillMount(){
    this.props.getBizChannel(this.companyKey)
  }

  componentWillReceiveProps({ bizCollectionPay,bizChannel }) {
    if (this.props.bizCollectionPay !== bizCollectionPay) {
      if(bizCollectionPay.data){
        this.updateCollectionPayData(bizCollectionPay.data)
      }
    }else if(this.props.bizChannel !== bizChannel){
      if(bizChannel.data){
        this.updateChannelData(bizChannel.data)
      }
    }
  }
  render () {
    return (
      <div className="customer-detail-contract-component">
          {this.renderNav()}
          <div className='body-component'>
            {
              this.state.navData.active === "渠道类" ? this.renderCheckedCard(this.state.channelData['已签约业务']) : this.renderCheckedCard(this.state.collectionPayData['已签约业务'])
            }
          </div>
      </div>
    )
  }
}

export default Component
