import React from "react";
import "./component.scss";
import HangWai from "./children/HangWai";
import CustomerBusiness from "./children/CustomerBusiness";
import CustomerSchedule from "./children/CustomerSchedule";
import creatHistory from "history/createBrowserHistory";
import icon_zhuce from "./images/注册信息@2x.png";
import icon_waibu from "./images/外部信息@2x.png";
import icon_lianxiren from "./images/联系人@2x.png";
import icon_jichu from "./images/基础信息@2x.png";
import icon_hangnei from "./images/行内关系@2x.png";
import icon_wajue from "./images/挖掘关系@2x.png";
import icon_chaxun from "./images/关系查询@2x.png";
import icon_ziben from "./images/资本构成@2x.png";
import icon_touzi from "./images/对外投资@2x.png";
import icon_gaoguan from "./images/高管信息@2x.png";
import icon_zhangwu from "./images/账户总览@2x.png";
import icon_rongzilei from "./images/融资类业务@2x.png";
import icon_qianyue from "./images/签约业务@2x.png";
// 内页
import { InnerPage } from "components/lib"
import CustomerView from "./children/CustomerOverview";
import CompanyInfo from "./children/CompanyMsg";
import OutsideMsg from "./children/OutsideInfo";
import ContactList from "./children/ContactManList";
import CompanyTag from "./children/CompanyTag";
import AccountOverview from "./children/AccountOverview";
import ContractBusiness from "./children/ContractBusiness";
import Finance from "./children/Finance";

const history = creatHistory();
class CustomerDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerId: "",
      companyKey: "",
      changeHead: false,
      outSideTitle: "外部信息",
      accountType: "SETTLE"
    };
    this.finacingData = []
    this.roleTyle = localStorage.getItem("currentRole");
    this.getOutevetTypeHandler = this.getOutevetTypeHandler.bind(this);
    this.listenScrollHandler = this.listenScrollHandler.bind(this);
    // 内页切换 start
    this.showCustomerViewHandler = this.showCustomerViewHandler.bind(this);
    this.showCompanyInfoHandler = this.showCompanyInfoHandler.bind(this);
    this.showAccountOverviewHandler = this.showAccountOverviewHandler.bind(
      this
    );
    this.showOutsideMsgHandler = this.showOutsideMsgHandler.bind(this);
    this.showContactListHandler = this.showContactListHandler.bind(this);
    this.showCompanyTagHandler = this.showCompanyTagHandler.bind(this);
    this.clickShowHangWaiPageHandler = this.clickShowHangWaiPageHandler.bind(
      this
    );
    this.clickShowCustomerBusinessPageHandler = this.clickShowCustomerBusinessPageHandler.bind(
      this
    );
    this.clickShowCustomerSchedulePageHandler = this.clickShowCustomerSchedulePageHandler.bind(
      this
    );
    this.accountTypeChangeHandler = this.accountTypeChangeHandler.bind(this);
    this.showFanaceHandler = this.showFanaceHandler.bind(this);
    this.getFinacingDataHandle = this.getFinacingDataHandle.bind(this)
    // 内页切换 end
  }
  showFanaceHandler = () => {
    this.finance.show();
  };
  showContractBusinessHandler() {
    this.contractData.show();
  }
  // 内页切换 start
  showCustomerViewHandler() {
    this.customerView.show();
  }
  showCompanyInfoHandler() {
    this.companyInfo.show();
  }
  showAccountOverviewHandler() {
    this.accountOverview.show();
  }
  showOutsideMsgHandler(title) {
    this.setState({
      outSideTitle: title
    });
    this.outsideMsg.show();
  }
  showContactListHandler() {
    this.contactList.show();
  }
  clickShowHangWaiPageHandler() {
    let outSideOption = {
      pageNo: 1,
      pageSize: 100,
      type: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
    };
    this.props.getCustomerOutevet(outSideOption);
    this.hangwaiPage.show();
  }

  clickShowCustomerBusinessPageHandler() {
    let businessOption = {
      companyId: this.state.customerId,
      pageNo: 1,
      pageSize: 100
    };
    this.props.getCustomerBusinessList(businessOption);
    this.customerBusinessPage.show();
  }

  clickShowCustomerSchedulePageHandler() {
    let scheduleOption = {
      companyId: this.state.customerId,
      pageNo: 1,
      pageSize: 100
    };
    this.props.getCustomerScheduleList(scheduleOption);
    this.customerSchedulePage.show();
  }
  showCompanyTagHandler() {
    this.companyTag.show();
  }
  // 内页切换 end

  getOutevetTypeHandler(type) {
    let typeStr = "";
    switch (type) {
      case "1":
        typeStr = "机会事件 | 工商信息变更";
        break;
      case "2":
        typeStr = "机会事件 | 招投标信息";
        break;
      case "3":
        typeStr = "机会事件 | 投融资信息";
        break;
      case "4":
        typeStr = "机会事件 | 新注册企业";
        break;
      case "5":
        typeStr = "风险事件 | 重大事件";
        break;
      case "6":
        typeStr = "风险事件 | 新闻舆情";
        break;
      case "7":
        typeStr = "风险事件 | 客户涉诉";
        break;
      case "8":
        typeStr = "风险事件 | 客户涉黑";
        break;
      case "9":
        typeStr = "风险事件 | 股权变更";
        break;
      case "10":
        typeStr = "风险事件 | 行业风险";
        break;
      case "11":
        typeStr = "风险事件 | 区域风险";
        break;
      default:
        break;
    }
    return typeStr;
  }
  componentDidMount() {
    let param = window.location.hash.split("?")[1];
    let hashArr = param.split("&");
    for (let item in hashArr) {
      let key = hashArr[item].split("=")[0];
      let value = hashArr[item].split("=")[1];
      if (key === "id") {
        this.setState({
          customerId: value
        });
      }
      if (key === "key") {
        this.setState({
          companyKey: value
        });
      }
    }
  }
  listenScrollHandler(e) {
    let clientHeight = this.refs.bodyBox.clientHeight; //可视区域高度
    let scrollTop = this.refs.bodyBox.scrollTop; //滚动条滚动高度
    if (scrollTop / clientHeight >= 0.26087) {
      this.setState({
        changeHead: true
      });
    } else {
      this.setState({
        changeHead: false
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    let accountOption = {
      companyKey: this.state.companyKey,
      accountType: this.state.accountType,
      pageNo: 1,
      pageSize: 10
    };
    if (prevState.customerId !== this.state.customerId) {
      let businessOption = {
        companyId: this.state.customerId,
        pageNo: 1,
        pageSize: 2
      };
      let scheduleOption = {
        companyId: this.state.customerId
      };
      let outSideOption = {
        pageNo: 1,
        pageSize: 2,
        type: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
      };
      this.props.getCustomerBaseMsg(this.state.customerId);
      this.props.getCustomerBusinessList(businessOption);
      this.props.getCustomerScheduleList(scheduleOption);
      this.props.getCustomerOutevet(outSideOption);
      this.props.getCompanyBasicContactInfo(this.state.customerId);
      this.props.getCompanyBasicTag(this.state.companyKey);
      this.props.getCustomerBussinessAccount(accountOption);
    }
    if (prevState.accountType !== this.state.accountType) {
      this.props.getCustomerBussinessAccount(accountOption);
    }
  }
  componentWillReceiveProps({acountLoan,
    bankAcceptance,
    creditLetter,
    discount,
    guarantee,}) {
      if(acountLoan !== this.props.acountLoan){
        console.log('acountLoan',acountLoan)
        this.finacingData = acountLoan.data
      }else if(bankAcceptance !== this.props.bankAcceptance){
        console.log('bankAcceptance',bankAcceptance)
        this.finacingData = bankAcceptance.data
      }else if(creditLetter !== this.props.creditLetter){
        console.log('creditLetter',creditLetter)
        this.finacingData = creditLetter.data
      }else if(discount !== this.props.discount){
        console.log('discount',discount)
        this.finacingData = discount.data
      }else if(guarantee !== this.props.guarantee){
        console.log('guarantee',guarantee)
        this.finacingData = guarantee.data
      }
  }
  render() {
    // console.log(this.props)
    const {
      customerBaseMsg,
      customerBusinessList,
      customerScheduleList,
      customerOutevet,
      companyBasicContactInfo,
      companyBasicTag,
      customerBussinessAccount
    } = this.props;
    // 关联日程数据处理
    customerScheduleList.schedulerMapVos =
      customerScheduleList.schedulerMapVos || {};
    let scheduleList = [];
    for (let item in customerScheduleList.schedulerMapVos) {
      scheduleList = scheduleList.concat(
        customerScheduleList.schedulerMapVos[item]
      );
    }
    // 行外事件数据处理
    for (let item in customerOutevet.content) {
      let type = customerOutevet.content[item].type;
      if (customerOutevet.content[item] && type !== undefined) {
        customerOutevet.content[item].typeStr = this.getOutevetTypeHandler(
          type
        );
        customerOutevet.content[item].typeColor =
          ["1", "2", "3", "4"].indexOf(type) !== -1 ? "bule" : "yellow";
      }
    }
    return (
      <div className={`customer-detail-component`}>
        <InnerPage
          from="right"
          title="行外事件"
          ref={hangwaiPage => (this.hangwaiPage = hangwaiPage)}
        >
          <HangWai customerOutevet={customerOutevet} />
        </InnerPage>
        <InnerPage
          from="right"
          title="客户商机"
          ref={customerBusinessPage =>
            (this.customerBusinessPage = customerBusinessPage)
          }
        >
          <CustomerBusiness customerBusinessList={customerBusinessList} />
        </InnerPage>
        <InnerPage
          from="right"
          title="客户日程"
          ref={customerSchedulePage =>
            (this.customerSchedulePage = customerSchedulePage)
          }
        >
          <CustomerSchedule scheduleList={scheduleList} />
        </InnerPage>
        <div className="customer-detail">
          <div
            className={`customer-detail-head ${
              this.state.changeHead ? "change-head" : ""
            }`}
          >
            <i
              className="select-cancel iconfont icon-return"
              onClick={() => {
                history.goBack();
              }}
            />
            <span className={`select-title`}>
              {this.state.changeHead ? customerBaseMsg.companyName : "客户详情"}
            </span>
            <span className={`select-confirm`} />
          </div>
          <div
            className="customer-detail-container"
            onScroll={this.listenScrollHandler}
            ref="bodyBox"
          >
            <div className="company-msg">
              <div className="first-line">
                <div className="company-logo">
                  <i className="iconfont icon-company" />
                </div>
                <div className="company-name">
                  {customerBaseMsg.companyName}
                </div>
                <div className="company-tag">
                  {customerBaseMsg.isInside ? "行内" : "行外"}
                </div>
              </div>
              <div className="second-line">
                <div className="item register-capital">
                  <i className="iconfont icon-effective-time" />
                  <span className="title">
                    {customerBaseMsg.registeredCapital}
                  </span>
                </div>
                <div className="item register-time">
                  <i className="iconfont icon-zhucezijin" />
                  <span className="title">
                    {customerBaseMsg.registrationDate}
                  </span>
                </div>
                <div className="item register-address">
                  <i className="iconfont icon-dizhi" />
                  <span className="title">
                    {customerBaseMsg.companyAddress}
                  </span>
                </div>
              </div>
            </div>
            <div className="detail-content">
              <div className="border">
                <div
                  className="border-head"
                  onClick={this.showCustomerViewHandler.bind(this)}
                >
                  <span className="border-title">客户概览</span>
                  <i className="border-right-icon iconfont icon-gengduo" />
                </div>
                <div className="border-content">
                  <div className="border-part">
                    <div className="part-item">
                      <div className="part-icon industry-icon">
                        <i className="iconfont icon-suoshuhangye" />
                      </div>
                      <div className="part-content">
                        {customerBaseMsg.subordinateIndustry || "--"}
                      </div>
                      <div className="part-title">所属行业</div>
                    </div>
                    <div
                      className={`part-item ${
                        customerBaseMsg.isInside ? "show" : "hide"
                      }`}
                    >
                      <div className="part-icon credit-icon">
                        <i className="iconfont icon-xinyongpingji" />
                      </div>
                      <div className="part-content">
                        {customerBaseMsg.internalCreditRating || "--"}
                      </div>
                      <div className="part-title">信用评级</div>
                    </div>
                    <div
                      className={`part-item ${
                        customerBaseMsg.isInside ? "show" : "hide"
                      }`}
                    >
                      <div className="part-icon cooperate-icon">
                        <i className="iconfont icon-hezuonianxian" />
                      </div>
                      <div className="part-content">
                        {customerBaseMsg.cooperationYear || "--"}
                      </div>
                      <div className="part-title">合作年限</div>
                    </div>
                    <div
                      className={`part-item ${
                        customerBaseMsg.isInside ? "hide" : "show"
                      }`}
                    >
                      <div className="part-icon risk-icon">
                        <i className="iconfont icon-fengxianpingji" />
                      </div>
                      <div className="part-content">
                        {(+customerBaseMsg.riskLevel).toFixed(2) || "--"}
                      </div>
                      <div className="part-title">企业风险评级</div>
                    </div>
                  </div>
                  <div className="border-bottom">
                    <span className="business-scope">
                      {customerBaseMsg.businessScope}
                    </span>
                  </div>
                </div>
              </div>
              <div className="border">
                <div
                  className="border-head"
                  onClick={this.showCompanyTagHandler}
                >
                  <span className="border-title">企业标签</span>
                  <i className="border-right-icon iconfont icon-gengduo" />
                </div>
                <div className="border-content company-tag">
                  {companyBasicTag.uglyData.map(item => (
                    <span className="tag" key="item.id">
                      {item.tagName}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border">
                <div className="border-head">
                  <span className="border-title">基本信息</span>
                  <i className="border-right-icon" />
                </div>
                {customerBaseMsg.isInside ? (
                  <div className="border-content">
                    <div
                      className="border-item"
                      onClick={this.showCompanyInfoHandler}
                    >
                      <img className="item-img" alt="" src={icon_zhuce} />
                      <div className="item-title">企业信息</div>
                    </div>
                    <div
                      className="border-item"
                      onClick={this.showOutsideMsgHandler.bind(
                        this,
                        "外部信息"
                      )}
                    >
                      <img className="item-img" alt="" src={icon_waibu} />
                      <div className="item-title">外部信息</div>
                    </div>
                    <div
                      className="border-item"
                      onClick={this.showContactListHandler}
                    >
                      <img className="item-img" alt="" src={icon_lianxiren} />
                      <div className="item-title">联系人</div>
                    </div>
                  </div>
                ) : (
                  <div className="border-content">
                    <div
                      className="border-item"
                      onClick={this.showOutsideMsgHandler.bind(
                        this,
                        "注册信息"
                      )}
                    >
                      <img className="item-img" alt="" src={icon_zhuce} />
                      <div className="item-title">注册信息</div>
                    </div>
                    <div
                      className="border-item"
                      onClick={this.showOutsideMsgHandler.bind(
                        this,
                        "资本构成"
                      )}
                    >
                      <img className="item-img" alt="" src={icon_ziben} />
                      <div className="item-title">资本构成</div>
                    </div>
                    <div
                      className="border-item"
                      onClick={this.showOutsideMsgHandler.bind(
                        this,
                        "对外投资"
                      )}
                    >
                      <img className="item-img" alt="" src={icon_touzi} />
                      <div className="item-title">对外投资</div>
                    </div>
                    <div
                      className="border-item"
                      onClick={this.showOutsideMsgHandler.bind(
                        this,
                        "高管信息"
                      )}
                    >
                      <img className="item-img" alt="" src={icon_gaoguan} />
                      <div className="item-title">高管信息</div>
                    </div>
                  </div>
                )}
              </div>
              <div className="border">
                <div className="border-head">
                  <span className="border-title">关联关系</span>
                  <i className="border-right-icon" />
                </div>
                <div className="border-content">
                  <div
                    className="border-item"
                    onClick={() => {
                      window.location.href =
                        "/#/root/main/customer/relation/basic?name=" +
                        this.state.companyKey;
                    }}
                  >
                    <img className="item-img" alt="" src={icon_jichu} />
                    <div className="item-title">基础关系</div>
                  </div>
                  <div
                    className="border-item"
                    onClick={() => {
                      window.location.href =
                        "/#/root/main/customer/relation?name=" +
                        this.state.companyKey;
                    }}
                  >
                    <img className="item-img" alt="" src={icon_hangnei} />
                    <div className="item-title">行内关系</div>
                  </div>
                  <div
                    className="border-item"
                    onClick={() => {
                      window.location.href =
                        "/#/root/main/customer/relation/excavation?name=" +
                        this.state.companyKey;
                    }}
                  >
                    <img className="item-img" alt="" src={icon_wajue} />
                    <div className="item-title">挖掘关系</div>
                  </div>
                  <div className="border-item">
                    <img className="item-img" alt="" src={icon_chaxun} />
                    <div className="item-title">关系查询</div>
                  </div>
                </div>
              </div>
              <div className="border">
                <div className="border-head">
                  <span className="border-title">已开展业务</span>
                  <i className="border-right-icon" />
                </div>
                <div className="border-content">
                  <div
                    className="border-item"
                    onClick={this.showAccountOverviewHandler}
                  >
                    <img className="item-img" alt="" src={icon_zhangwu} />
                    <div className="item-title">账务总览</div>
                  </div>
                  <div className="border-item" onClick={this.showFanaceHandler}>
                    <img className="item-img" alt="" src={icon_rongzilei} />
                    <div className="item-title">融资类业务</div>
                  </div>
                  <div
                    className="border-item"
                    onClick={this.showContractBusinessHandler.bind(this)}
                  >
                    <img className="item-img" alt="" src={icon_qianyue} />
                    <div className="item-title">签约业务</div>
                  </div>
                </div>
              </div>

              <div className="border">
                <div
                  className="border-head"
                  onClick={this.clickShowHangWaiPageHandler}
                >
                  <span className="border-title">行外事件</span>
                  <i className="border-right-icon iconfont icon-gengduo" />
                </div>
                <div className="border-content out-side">
                  {customerOutevet.content.map(item => (
                    <div className="item-content" key={item.objectKey}>
                      <div className="title">{item.name}</div>
                      <div className="second-row">
                        <span className={`eventType ${item.typeColor}`}>
                          {item.typeStr}
                        </span>
                        <span className="eventTime">{item.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border">
                <div
                  className="border-head"
                  onClick={this.clickShowCustomerBusinessPageHandler}
                >
                  <span className="border-title">关联商机</span>
                  <i className="border-right-icon iconfont icon-gengduo" />
                </div>
                <div className="border-content relate-business">
                  {customerBusinessList.businessChanceVosList.length > 0 ? (
                    customerBusinessList.businessChanceVosList
                      .slice(0, 2)
                      .map(item => (
                        <div className="item-content" key={item.id}>
                          <div className="title">{item.name}</div>
                          <div className="third-row">
                            <span
                              className={`customerType ${
                                item.customerType === "行内" ? "" : "yellow"
                              }`}
                            >
                              {item.customerType}
                            </span>
                            <span className="customerName">
                              {item.customerName}
                            </span>
                          </div>
                        </div>
                      ))
                  ) : (
                    <div className="no-result">暂无关联商机</div>
                  )}
                </div>
              </div>
              <div className="border customer-view">
                <div
                  className="border-head"
                  onClick={this.clickShowCustomerSchedulePageHandler}
                >
                  <span className="border-title">关联日程</span>
                  <i className="border-right-icon iconfont icon-gengduo" />
                </div>
                <div className="border-content relate-schedule">
                  {scheduleList.length > 0 ? (
                    scheduleList.slice(0, 2).map(item => (
                      <div className="item-content" key={item.id}>
                        <div className="left-part">
                          <div className="title">{item.topic}</div>
                          <div className="customer">
                            {item.companyVo
                              ? item.companyVo.companyName || "--"
                              : "--"}
                          </div>
                        </div>
                        <div className="right-part">
                          <div className="data">
                            {item.startDt.substr(0, 10)}
                          </div>
                          <div className="time">{`${item.startDt &&
                            item.startDt.split(" ")[1]}-${item.endDt &&
                            item.endDt.split(" ")[1]}`}</div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="no-result">暂无关联日程</div>
                  )}
                </div>
              </div>
              <div className="no-border">
                <span className="content">没有更多咯...</span>
              </div>
            </div>
          </div>
        </div>
        <InnerPage
          from="right"
          ref={customerView => (this.customerView = customerView)}
          title="客户概览"
        >
          <CustomerView customerBaseMsg={customerBaseMsg} />
        </InnerPage>
        <InnerPage
          from="right"
          ref={companyInfo => (this.companyInfo = companyInfo)}
          title="企业信息"
        >
          <CompanyInfo customerBaseMsg={customerBaseMsg} />
        </InnerPage>
        <InnerPage
          from="right"
          ref={accountOverview => (this.accountOverview = accountOverview)}
          title="账户总览"
        >
          <AccountOverview
            customerBussinessAccount={customerBussinessAccount}
            accountTypeChangeHandler={this.accountTypeChangeHandler}
          />
        </InnerPage>
        <InnerPage
          from="right"
          ref={contractData => (this.contractData = contractData)}
          title="签约业务"
        >
          <ContractBusiness
            location={this.props.location}
            getBizChannel={this.props.getBizChannel}
            getBizCollectionPay={this.props.getBizCollectionPay}
            bizChannel={this.props.bizChannel}
            bizCollectionPay={this.props.bizCollectionPay}
          />
        </InnerPage>
        <InnerPage
          from="right"
          ref={finance => (this.finance = finance)}
          title="融资类业务"
        >
          <Finance
            location={this.props.location}
            finacingData={this.finacingData}
            getFinacingDataHandle={this.getFinacingDataHandle}
          />
        </InnerPage>
        <InnerPage
          from="right"
          ref={outsideMsg => (this.outsideMsg = outsideMsg)}
          title={this.state.outSideTitle}
        >
          <OutsideMsg
            isInside={customerBaseMsg.isInside}
            customerId={this.state.customerId}
            selected={this.state.outSideTitle}
          />
        </InnerPage>
        <InnerPage
          from="right"
          ref={contactList => (this.contactList = contactList)}
          title="联系人"
        >
          <ContactList companyBasicContactInfo={companyBasicContactInfo} />
        </InnerPage>
        <InnerPage
          from="right"
          ref={companyTag => (this.companyTag = companyTag)}
          title="企业标签"
        >
          <CompanyTag companyBasicTag={companyBasicTag} />
        </InnerPage>
      </div>
    );
  }
  accountTypeChangeHandler = accountType => {
    this.setState({
      accountType
    });
  };
  getFinacingDataHandle(type, companykey){
    console.log(1)
    switch(type){
      case "贷款账户":
        this.props.getAcountLoan(companykey)
        break;
        case "银行承兑汇票":
        this.props.getBankAcceptance(companykey)
        break;
        case "贴现":
        this.props.getDiscount(companykey)
        break;
        case "保函":
        this.props.getGuarantee(companykey)
        break;
        case "信用证":
        this.props.getCreditLetter(companykey)
        break;
    }
  }
  accountTypeChangeHandler = accountType => {
    this.setState({
      accountType
    });
  };
}

export default CustomerDetail;
