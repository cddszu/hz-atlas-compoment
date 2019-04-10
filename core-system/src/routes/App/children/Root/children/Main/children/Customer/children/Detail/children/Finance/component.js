import React from "react";
import "./component.scss";
import PaginationList from "components/PaginationList";
import { SwipeAction } from "antd-mobile";
import { InnerPage } from "components/lib"
import icon_info from "../../images/基本信息 copy@2x.png";
import Detail from "./children/component";

const renderListData = {
  "贷款账户": {
    firstTitle: "业务名称",
    secondTitle: "币种",
    thirdTitle: "利率",
    colorMap: {
      "正常": {
        background:"rgba(0,154,255,0.1)",
        border:"1px solid rgba(0,154,255,1)",
        color: "rgba(0,154,255,1)"
      },
      "销户": {
        background:"rgba(153,153,153,0.1)",
        border:"1px solid rgba(153,153,153,1)",
        color: "rgba(153,153,153,1)"
      },
      "睡眠": {
        background:"rgba(244,51,60,0.1)",
        border:"1px solid rgba(244,51,60,1)",
        color: "rgba(244,51,60,1)"
      },
      "冻结": {
        background:"rgba(255,157,19,0.1)",
        border:"1px solid rgba(255,157,19,1)",
        color: "rgba(255,157,19,1)"
      }
    }
  },
  "银行承兑汇票": {
    firstTitle: "票面金额",
    secondTitle: "保证金金额",
    thirdTitle: "出票日期",
    colorMap: {
      "实物": {
        background:"rgba(110,182,35,0.1)",
        border:"1px solid rgba(110,182,35,1)",
        color: "rgba(110,182,35,1)"
      },
      "电子": {
        background:"rgba(173,79,255,0.1)",
        border:"1px solid rgba(173,79,255,1)",
        color: "rgba(173,79,255,1)"
      }
    }
  },
  "贴现": {
    firstTitle: "票面金额",
    secondTitle: "贴现利率",
    thirdTitle: "签发日期",
    colorMap: {
      "实物": {
        background:"rgba(110,182,35,0.1)",
        border:"1px solid rgba(110,182,35,1)",
        color: "rgba(110,182,35,1)"
      },
      "电子": {
        background:"rgba(173,79,255,0.1)",
        border:"1px solid rgba(173,79,255,1)",
        color: "rgba(173,79,255,1)"
      },
      "银票": {
        background:"rgba(255,206,26,0.1)",
        border:"1px solid rgba(255,206,26,1)",
        color: "rgba(255,206,26,1)"
      },
      "商票": {
        background:"rgba(244,51,60,0.1)",
        border:"1px solid rgba(244,51,60,1)",
        color: "rgba(244,51,60,1)"
      }
    }
  },
  "保函": {
    firstTitle: "金额",
    secondTitle: "保证金金额",
    thirdTitle: "到期日期"
  },
  "信用证": {
    firstTitle: "开证币种",
    secondTitle: "开证金额",
    thirdTitle: "开证日期"
  }
}

class CompanyInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: "1",
      currentTabText: '贷款账户',
      detailInfo: {}
    };
    this.pageXstart = 0;
    this.pageXend = 0;
    this.diff = 0;
    this.finacingData = []
    this.companyKey = this.props.location.search.split('&key=')[1]
    this.changeTabHandler = this.changeTabHandler.bind(this);
    this.showDetailHandler = this.showDetailHandler.bind(this);
    this.tabTouchStart = this.tabTouchStart.bind(this);
    this.tabTouchMove = this.tabTouchMove.bind(this);
    this.tabTouchEnd = this.tabTouchEnd.bind(this);
  }

  renderListItem(data){
    if(this.state.currentTabText === "贷款账户"){
      return data.map((item, index) => {
        return (
          <div className="border account-item" key={index}>
            <div
              className="border-head"
              onClick={() => this.showDetailHandler(index)}
            >
              <img className="border-img" alt="info-icon" src={icon_info} />
              <div className="border-title">
                <span className="title">{item.account}</span>
                <span className="type" style={renderListData["贷款账户"].colorMap[item.status]}>{item.status}</span>
                <i className="border-right-icon iconfont icon-gengduo" />
              </div>
            </div>
            <div className="border-content">
              <div className="border-item">
                <div className="item-content">
                  <p className="value">{item.biz_type || "--"}</p>
                  <p className="title">{item.firstTitle}</p>
                </div>
                <div className="item-content">
                  <p className="value">
                    {item.currency || "--"}
                  </p>
                  <p className="title">{item.secondTitle}</p>
                </div>
                <div className="item-content">
                  <p className="value">{Number(item.rate) || "0"}</p>
                  <p className="title">{item.thirdTitle+"(%)"}</p>
                </div>
              </div>
            </div>
          </div>
        )
    })
    }else if(this.state.currentTabText === "银行承兑汇票"){
      return data.map((item, index) => {
        return (
          <div className="border account-item" key={index}>
            <div
              className="border-head"
              onClick={() => this.showDetailHandler(index)}
            >
              <img className="border-img" alt="info-icon" src={icon_info} />
              <div className="border-title">
                <span className="title">{item.bill}</span>
                <span className="type" style={renderListData["银行承兑汇票"].colorMap[item.bill_property]}>{item.bill_property}</span>
                <i className="border-right-icon iconfont icon-gengduo" />
              </div>
            </div>
            <div className="border-content">
              <div className="border-item">
                <div className="item-content">
                  <p className="value">{Number(item.bill_acct).toFixed(2) || "0"}</p>
                  <p className="title">{item.firstTitle+"(元)"}</p>
                </div>
                <div className="item-content">
                  <p className="value">
                    {Number(item.bail_acct).toFixed(2) || "0"}
                  </p>
                  <p className="title">{item.secondTitle+"(元)"}</p>
                </div>
                <div className="item-content">
                  <p className="value">{item.start_dt || "--"}</p>
                  <p className="title">{item.thirdTitle}</p>
                </div>
              </div>
            </div>
          </div>
        )
    })
    }else if(this.state.currentTabText === "贴现"){
      return data.map((item, index) => {
        return (
          <div className="border account-item" key={index}>
            <div
              className="border-head"
              onClick={() => this.showDetailHandler(index)}
            >
              <img className="border-img" alt="info-icon" src={icon_info} />
              <div className="border-title">
                <span className="title">{item.bill}</span>
                <span className="type" style={renderListData["贴现"].colorMap[item.bill_property]}>{item.bill_property}</span>
                <span className="type" style={renderListData["贴现"].colorMap[item.bill_type]}>{item.bill_type}</span>
                <i className="border-right-icon iconfont icon-gengduo" />
              </div>
            </div>
            <div className="border-content">
              <div className="border-item">
                <div className="item-content">
                  <p className="value">{Number(item.dis_amount).toFixed(2) || "0"}</p>
                  <p className="title">{item.firstTitle+"(元)"}</p>
                </div>
                <div className="item-content">
                  <p className="value">
                    {Number(item.rate )|| "0"}
                  </p>
                  <p className="title">{item.secondTitle+"(%)"}</p>
                </div>
                <div className="item-content">
                  <p className="value">{item.start_dt || "--"}</p>
                  <p className="title">{item.thirdTitle}</p>
                </div>
              </div>
            </div>
          </div>
        )
    })
    }else if(this.state.currentTabText === "保函"){
      return data.map((item, index) => {
        return (
          <div className="border account-item" key={index}>
            <div
              className="border-head"
              onClick={() => this.showDetailHandler(index)}
            >
              <img className="border-img" alt="info-icon" src={icon_info} />
              <div className="border-title">
                <span className="title">{item.type_}</span>
                <i className="border-right-icon iconfont icon-gengduo" />
              </div>
            </div>
            <div className="border-content">
              <div className="border-item">
                <div className="item-content">
                  <p className="value">{Number(item.amount).toFixed(2) || "0"}</p>
                  <p className="title">{item.firstTitle+"(元)"}</p>
                </div>
                <div className="item-content">
                  <p className="value">
                    {Number(item.gurt_currency).toFixed(2) || "0"}
                  </p>
                  <p className="title">{item.secondTitle+"(元)"}</p>
                </div>
                <div className="item-content">
                  <p className="value">{item.due_dt || "--"}</p>
                  <p className="title">{item.thirdTitle}</p>
                </div>
              </div>
            </div>
          </div>
        )
    })
    }else if(this.state.currentTabText === "信用证"){
      return data.map((item, index) => {
        return (
          <div className="border account-item" key={index}>
            <div
              className="border-head"
              onClick={() => this.showDetailHandler(index)}
            >
              <img className="border-img" alt="info-icon" src={icon_info} />
              <div className="border-title">
                <span className="title">{item.cred_no}</span>
                <i className="border-right-icon iconfont icon-gengduo" />
              </div>
            </div>
            <div className="border-content">
              <div className="border-item">
                <div className="item-content">
                  <p className="value">{item.currency || "--"}</p>
                  <p className="title">{item.firstTitle}</p>
                </div>
                <div className="item-content">
                  <p className="value">
                    {Number(item.amount).toFixed(2) || "0"}
                  </p>
                  <p className="title">{item.secondTitle+"(元)"}</p>
                </div>
                <div className="item-content">
                  <p className="value">{item.start_dt || "--"}</p>
                  <p className="title">{item.thirdTitle}</p>
                </div>
              </div>
            </div>
          </div>
        )
    })
    }
  }
  tabTouchStart(e) {
    this.pageXstart = e.touches[0].pageX;
    console.log(`start:${e.touches[0].pageX}`);
  }
  tabTouchMove(e) {
    this.diff = e.touches[0].pageX - this.pageXstart;

    if(this.tab.style.transform){
      let tran = this.tab.style.transform.split("(")[1].split("px)")[0];
      console.log(`tran:${Math.abs(tran)},width:${this.tab.clientWidth / 5}`);
      if (Math.abs(tran) > this.tab.clientWidth / 5) return;
    }
    this.pageXend = e.touches[0].pageX;
    this.tab.style["transform"] = `translateX(${this.delta + this.diff}px)`;
  }
  tabTouchEnd(e) {
    this.delta = this.diff;
    // this.pageXstart = this.pageXend;
    console.log(`end:${this.pageXend}`);
  }
  changeTabHandler(index, event) {
    // event.persist()
    if (index === this.state.currentTab) return;
    console.log("event", event.target.textContent)
    console.log(this.companyKey)
    this.setState({
      currentTab: index,
      currentTabText: event.target.textContent
    });
    this.props.getFinacingDataHandle(event.target.textContent, this.companyKey);
  };
  showDetailHandler(index) {
    const detailInfo = this.props.finacingData[index] || {};
    this.detail.show();
    this.setState({
      detailInfo
    });
  };
  componentWillMount(){
    this.props.getFinacingDataHandle(this.state.currentTabText, this.companyKey);
  }
  componentDidMount() {
    // this.detail.show();
  }
  componentWillReceiveProps({finacingData}){
    if(finacingData !== this.props.finacingData){
      console.log(finacingData)
      const copyData = JSON.parse(JSON.stringify(finacingData))
      this.finacingData = copyData.map((item)=>{
        return {...item, ...renderListData[this.state.currentTabText]}
      })
      console.log(this.finacingData)
    }
  }
  render() {
    // const { customerBussinessAccount } = this.props;
    // const accountVos = customerBussinessAccount.accountVos || [];
    // console.log("accountVos", accountVos)
    const filterMap = [
      { key: "1", value: "贷款账户" },
      { key: "2", value: "银行承兑汇票" },
      { key: "3", value: "贴现" },
      { key: "4", value: "保函" },
      { key: "5", value: "信用证" }
    ];
    return (
      <div className="finance-component">
        <div className="border">
          <div
            ref={tab => (this.tab = tab)}
            className="border-head tab-filter"
            onTouchStart={this.tabTouchStart}
            onTouchMove={this.tabTouchMove}
            onTouchEnd={this.tabTouchEnd}
            style={{ borderBottom: "none" }}
          >
            {filterMap.map(item => {
              return (
                <div
                  key={item.key}
                  onClick={this.changeTabHandler.bind(this, item.key)}
                  className={
                    this.state.currentTab === item.key
                      ? "filter-item active"
                      : "filter-item"
                  }
                >
                  {item.value}
                </div>
              );
            })}
          </div>
        </div>
        {this.renderListItem(this.finacingData)}

        <div className="no-border">
          <span className="content">没有更多咯...</span>
        </div>
        <InnerPage
          from="right"
          ref={detail => (this.detail = detail)}
          title={this.state.currentTabText + "详情"}
        >
          <Detail detailInfo={this.state.detailInfo} tab={this.state.currentTabText} />
        </InnerPage>
      </div>
    );
  }
}

export default CompanyInfo;
