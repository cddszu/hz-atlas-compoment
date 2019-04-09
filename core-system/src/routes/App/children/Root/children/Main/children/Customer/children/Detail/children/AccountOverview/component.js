import React from "react";
import "./component.scss";
import PaginationList from "components/PaginationList";
import { SwipeAction } from "antd-mobile";
import InnerPage from "components/hz/InnerPage";
import icon_info from "../../images/基本信息 copy@2x.png";
import Detail from "./children/component";

class CompanyInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: "SETTLE",
      detailInfo: {}
    };
    this.changeTabHandler = this.changeTabHandler.bind(this);
    this.showDetailHandler = this.showDetailHandler.bind(this);
  }
  componentDidMount() {}
  render() {
    const { customerBussinessAccount } = this.props;
    const accountVos = customerBussinessAccount.accountVos || [];
    const filterMap = [
      { key: "SETTLE", value: "活期账户" },
      { key: "LOAN", value: "定期账户" },
      { key: "PERIODICAL", value: "理财账户" },
      { key: "FINANCING", value: "保证金账户" }
    ];
    return (
      <div className="account-overview-component">
        <div className="border">
          <div className="border-head" style={{ borderBottom: "none" }}>
            {filterMap.map(item => {
              return (
                <div
                  key={item.key}
                  onClick={() => this.changeTabHandler(item.key)}
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
        {accountVos.map((item, index) => {
          return (
            <div className="border account-item" key={item.id}>
              <div
                className="border-head"
                onClick={() => this.showDetailHandler(index)}
              >
                <img className="border-img" alt="info-icon" src={icon_info} />
                <div className="border-title">
                  <span className="title">{item.id}</span>
                  <span className="type">{item.accountType}</span>
                  <i className="border-right-icon iconfont icon-gengduo" />
                </div>
              </div>
              <div className="border-content">
                <div className="border-item">
                  <div className="item-content">
                    <p className="value">{item.accountStatus || "--"}</p>
                    <p className="title">账户状态</p>
                  </div>
                  <div className="item-content">
                    <p className="value">
                      {item.moneyType === "CNY" ? "人民币" : "--"}
                    </p>
                    <p className="title">币种</p>
                  </div>
                  <div className="item-content">
                    <p className="value">{item.openingDate || "--"}</p>
                    <p className="title">开户日期</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="no-border">
          <span className="content">没有更多咯...</span>
        </div>
        <InnerPage
          from="right"
          ref={detail => (this.detail = detail)}
          title="账户详情"
        >
          <Detail detailInfo={this.state.detailInfo} />
        </InnerPage>
      </div>
    );
  }
  changeTabHandler = index => {
    if (index === this.state.currentTab) return;
    this.setState({
      currentTab: index
    });
    this.props.accountTypeChangeHandler(index);
  };
  showDetailHandler = index => {
    const detailInfo =
      this.props.customerBussinessAccount.accountVos[index] || {};
    this.detail.show();
    this.setState({
      detailInfo
    });
  };
}

export default CompanyInfo;
