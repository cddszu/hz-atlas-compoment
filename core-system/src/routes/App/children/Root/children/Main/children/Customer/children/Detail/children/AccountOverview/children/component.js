import React, { Component } from "react";
import "./component.scss";

class component extends Component {
  render() {
    const { detailInfo } = this.props;
    return (
      <div className="account-detail-component">
        <div className="detail-item">
          <p>
            <span className="left">账号</span>
            <span className="right">{detailInfo.id || '--'}</span>
          </p>
          <p>
            <span className="left">账户类型</span>
            <span className="right">{detailInfo.accountType || '--'}</span>
          </p>
        </div>
        
        <div className="detail-item">
          <p>
            <span className="left">账户状态</span>
            <span className="right">{detailInfo.accountStatus || '--'}</span>
          </p>
          <p>
            <span className="left">币种</span>
            <span className="right">{detailInfo.moneyType === 'CNY'?'人民币':'--'}</span>
          </p>
        </div>
        <div className="detail-item">
          <p>
            <span className="left">开户日期</span>
            <span className="right">{detailInfo.openingDate || '--'}</span>
          </p>
          <p>
            <span className="left">销户日期</span>
            <span className="right">{detailInfo.closingDate || '--'}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default component;
