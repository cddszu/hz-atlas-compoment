import React from 'react'
import './component.scss'
import PaginationList from 'components/PaginationList'
import { SwipeAction } from 'antd-mobile'
import InnerPage from 'components/hz/InnerPage'
import ExecutiveDetail from './children/executiveDetail'

class OutsideMsg extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: '注册信息',
      executiveDetail: {}
    }
    this.changeNavHandler = this.changeNavHandler.bind(this)
    this.showExecutiveDetailHandler = this.showExecutiveDetailHandler.bind(this)
  }
  showExecutiveDetailHandler(content) {
    this.setState({
      executiveDetail: content
    })
    this.executiveDetail.show()
  }
  changeNavHandler(e) {
    this.setState({
      selected: e.target.innerText
    })
  }
  componentWillMount() {
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.customerId !== this.props.customerId) {
      this.props.getCompanyBasicRegisterInfo(this.props.customerId)
      this.props.getCompanyBasicCapitalFormation(this.props.customerId)
      this.props.getCompanyBasicForeignInvestment(this.props.customerId)
      this.props.getCompanyBasicExecutiveInfo(this.props.customerId)
    }
  }
  componentWillReceiveProps({selected}) {
    if(selected !== this.props.selected) {
      this.setState({
        selected: selected
      })
    }
  }
  render () {
    const {
      companyBasicRegisterInfo,
      companyBasicCapitalFormation,
      companyBasicForeignInvestment,
      companyBasicExecutiveInfo,
      isInside,
    } = this.props
    const registerInfoOption = [
      {
        title: '统一社会信用代码',
        data: companyBasicRegisterInfo.unifiedSocialCreditCode || '--',
      },
      {
        title: '核准日期',
        data: companyBasicRegisterInfo.approvalDate || '--',
      },
      {
        title: '注册号',
        data: companyBasicRegisterInfo.registrationNumber || '--',
      },
      {
        title: '注册机关',
        data: companyBasicRegisterInfo.registrationAuthority || '--',
      },
      {
        title: '法人代表',
        data: companyBasicRegisterInfo.legalRepresentative || '--',
      },
      {
        title: '注册状态',
        data: companyBasicRegisterInfo.registrationStatus || '--',
      },
      {
        title: '注册资本',
        data: companyBasicRegisterInfo.registeredCapital || '--',
      },
      {
        title: '注册地址',
        data: companyBasicRegisterInfo.registeredAddress || '--',
      },
      {
        title: '注册日期',
        data: companyBasicRegisterInfo.registrationDate || '--',
      },
      {
        title: '经营范围',
        data: companyBasicRegisterInfo.businessScope || '--',
      },
      {
        title: '营业期限',
        data: companyBasicRegisterInfo.businessTerm || '--',
      },
    ]
    return (
      <div className={`outside-msg-component`}>
        {
          this.props.isInside ? (
            <div className='nav'>
              <div className={`subtab ${this.state.selected === '注册信息' ? 'selected' : ''}`} onClick={this.changeNavHandler}>注册信息</div>
              <div className={`subtab ${this.state.selected === '资本构成' ? 'selected' : ''}`} onClick={this.changeNavHandler}>资本构成</div>
              <div className={`subtab ${this.state.selected === '对外投资' ? 'selected' : ''}`} onClick={this.changeNavHandler}>对外投资</div>
              <div className={`subtab ${this.state.selected === '高管信息' ? 'selected' : ''}`} onClick={this.changeNavHandler}>高管信息</div>
            </div>
          ) : ''
        }
        <div className={`outside-msg-container ${isInside ? '' : 'out-side'}`}>
          {
            this.state.selected === '注册信息' ? (
              <div className='register-info' id='register-info'>
                <div className='border-content'>
                  {
                    registerInfoOption.map(item=>(
                      <div className='border-item' key={item.title}>
                        <div className='item-content'>{item.data}</div>
                        <div className='item-title'>{item.title}</div>
                      </div>
                    ))
                  }
                </div>
              </div>
            ) : ''
          }
          {
            this.state.selected === '资本构成' ? (
              <div className='card-modal' id='capital-formation'>
                {
                  // [{},{},{},{},{},{},{},{}].map((item,index)=>(
                  companyBasicCapitalFormation.uglyData.map((item,index)=>(
                    <div className='border' key={index}>
                      <div className='border-head'>
                        <div className='head-left'>
                          <div className='customer-logo'>
                            <i className='iconfont icon-morentouxiang'></i>
                          </div>
                          <span className='head-title'>{item.name}</span>
                          <span className='customer-tag'>{item.type}</span>
                        </div>
                        <div className='head-right'></div>
                      </div>
                      <div className='border-content'>
                        <div className='border-item'>
                          <div className='item-content'>{item.subscribedAmount || '--'}</div>
                          <div className='item-title'>认缴额（万元）</div>
                        </div>
                        <div className='border-item'>
                          <div className='item-content'>{item.actuallyAmount || '--'}</div>
                          <div className='item-title'>实缴额（万元）</div>
                        </div>
                        <div className='border-item'>
                          <div className='item-content'>{item.stake || '--'}</div>
                          <div className='item-title'>持股比例</div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            ) : ''
          }
          {
            this.state.selected === '对外投资' ? (
              <div className='card-modal' id='foreign-investment'>
                {
                  // [{},{},{},{},{},{},{},{}].map((item,index)=>(
                  companyBasicForeignInvestment.uglyData.map((item,index)=>(
                    <div className='border' key={index}>
                      <div className='border-head'>
                        <div className='head-left'>
                          <div className='customer-logo'>
                            <i className='iconfont icon-company'></i>
                          </div>
                          <span className='head-title'>{item.name}</span>
                        </div>
                        <div className='head-right'></div>
                      </div>
                      <div className='border-content'>
                        <div className='border-item'>
                          <div className='item-content'>{item.unifiedSocialCreditCode || '--'}</div>
                          <div className='item-title'>社会统一信用代码</div>
                        </div>
                        <div className='border-item'>
                          <div className='item-content'>{item.dollars || '--'}</div>
                          <div className='item-title'>投资金额（万元）</div>
                        </div>
                        <div className='border-item'>
                          <div className='item-content'>{item.proportion || '--'}</div>
                          <div className='item-title'>投资比例</div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            ) : ''
          }
          {
            this.state.selected === '高管信息' ? (
              <div className='card-modal' id='executive-info'>
                {
                  // [{},{},{},{},{},{},{},{}].map((item,index)=>(
                  companyBasicExecutiveInfo.uglyData.map((item,index)=>(
                    <div className='border' key={index}>
                      <div className='border-head' onClick={this.showExecutiveDetailHandler.bind(this,item)}>
                        <div className='head-left'>
                          <div className='customer-logo'>
                            <i className='iconfont icon-morentouxiang'></i>
                          </div>
                          <span className='head-title'>{item.name}</span>
                          <span className='customer-tag'>{item.type}</span>
                        </div>
                        <div className='head-right'>
                          <i className='iconfont icon-gengduo'></i>
                        </div>
                      </div>
                      <div className='border-content'>
                        <div className='border-item'>
                          <div className='item-content'>{item.gender || '--'}</div>
                          <div className='item-title'>性别</div>
                        </div>
                        <div className='border-item'>
                          <div className='item-content'>{item.age || '--'}</div>
                          <div className='item-title'>年龄（岁）</div>
                        </div>
                        <div className='border-item'>
                          <div className='item-content'>{item.education || '--'}</div>
                          <div className='item-title'>学历</div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            ) : ''
          }
        </div>
        <InnerPage
          from='right'
          ref={executiveDetail => this.executiveDetail = executiveDetail }
          title='高管详情'
        >
          <ExecutiveDetail content={this.state.executiveDetail}/>
        </InnerPage>
      </div>
    )
  }
}

export default OutsideMsg
