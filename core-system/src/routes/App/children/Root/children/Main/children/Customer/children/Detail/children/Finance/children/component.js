import React, { Component } from "react";
import "./component.scss";
const keyMap = {
  "贷款账户": {
    account: "账号",
    status: "状态",
    currency: "币种",
    biz_type: "业务品种",
    amount: "贷款金额",
    balance: "贷款余额",
    start_dt: "起始日",
    due_dt: "到期日",
    rate: "利率",
    category: "五级分类"
  },
  "银行承兑汇票": {
    bill: "票据号码",
    bill_acct: "票面金额",
    bail_acct: "保证金金额",
    start_dt: "出票日期",
    due_dt: "到期日期",
    bill_property: "票据属性"
  },
  "贴现": {
    bill: "票据号码",
    type: "业务品种",
    amount: "承兑金额",
    discount_amount: "实付贴现金额",
    start_dt: "签发日期",
    due_dt: "到期日期",
    discount_dt: "贴现日期",
    bill_type: "票据类型",
    bill_property: "票据属性",
    rate: "利率"
  },
  "保函": {
    type_: "品种",
    currency: "币种",
    amount: "金额",
    gurt_currency: "保证金币种",
    gurt_amount: "保证金金额",
    due_dt: "到期日期",
    discount_dt: "贴现日期"
  },
  "信用证": {
    card_no: "信用证号码",
    currency: "开证币种",
    amount: "开证金额",
    start_dt: "开证日期",
    days: "期限",
    pay_dt: "承兑付款日",
    pay_amount: "承兑金额",
    gurt_currency: "保证金币种",
    gurt_amount: "保证金余额",
  },
}

class component extends Component {

  renderItem(detailInfo, tab){
    if(tab === "贷款账户"){
      return (
        <div>
          <div className="detail-item">
          <p>
            <span className="left">账号</span>
            <span className="right">{detailInfo.account || '--'}</span>
          </p>
          <p>
            <span className="left">账户类型</span>
            <span className="right">{detailInfo.status || '--'}</span>
          </p>
        </div>
        <div className="detail-item">
          <p>
            <span className="left">业务品种</span>
            <span className="right">{detailInfo.biz_type || '--'}</span>
          </p>
          <p>
            <span className="left">币种</span>
            <span className="right">{detailInfo.currency || '--'}</span>
          </p>
        </div>
        <div className="detail-item">
          <p>
            <span className="left">起始日</span>
            <span className="right">{detailInfo.start_dt || '--'}</span>
          </p>
          <p>
            <span className="left">到期日</span>
            <span className="right">{detailInfo.due_dt || '--'}</span>
          </p>
        </div>
        <div className="detail-item">
          <p>
            <span className="left">利率(%)</span>
            <span className="right">{Number(detailInfo.rate) || '0'}</span>
          </p>
          <p>
            <span className="left">五级分类</span>
            <span className="right">{detailInfo.category || '--'}</span>
          </p>
        </div>
        </div>
      )
    }else if(tab === "银行承兑汇票"){
      return (
        <div>
          <div className="detail-item">
          <p>
            <span className="left">票据号码</span>
            <span className="right">{detailInfo.bill || '--'}</span>
          </p>
          <p>
            <span className="left">票据属性</span>
            <span className="right">{detailInfo.bill_property || '--'}</span>
          </p>
        </div>
        <div className="detail-item">
          <p>
            <span className="left">票面金额(元)</span>
            <span className="right">{Number(detailInfo.bill_acct).toFixed || '0'}</span>
          </p>
          <p>
            <span className="left">保证金金额(元)</span>
            <span className="right">{Number(detailInfo.bail_acct) || '0'}</span>
          </p>
        </div>
        <div className="detail-item">
          <p>
            <span className="left">出票日期</span>
            <span className="right">{detailInfo.start_dt || '--'}</span>
          </p>
          <p>
            <span className="left">到期日期</span>
            <span className="right">{detailInfo.due_dt || '--'}</span>
          </p>
        </div>
        </div>
      )
    }else if(tab === "贴现"){
      return (
        <div>
          <div className="detail-item">
          <p>
            <span className="left">票据号码</span>
            <span className="right">{detailInfo.bill || '--'}</span>
          </p>
          <p>
            <span className="left">票据属性</span>
            <span className="right">{detailInfo.bill_property || '--'}</span>
          </p>
        </div>
        <div className="detail-item">
          <p>
            <span className="left">票据类型</span>
            <span className="right">{detailInfo.bill_type || '--'}</span>
          </p>
          <p>
            <span className="left">业务种类</span>
            <span className="right">{detailInfo.type || '--'}</span>
          </p>
        </div>
        <div className="detail-item">
          <p>
            <span className="left">票面金额(元)</span>
            <span className="right">{Number(detailInfo.dis_amount).toFixed(2)  || '0'}</span>
          </p>
          <p>
            <span className="left">贴现利率(%)</span>
            <span className="right">{Number(detailInfo.rate) || '0'}</span>
          </p>
        </div>
        <div className="detail-item">
          <p>
            <span className="left">实付贴现金额(元)</span>
            <span className="right">{Number(detailInfo.discount_amount).toFixed(2) || '0'}</span>
          </p>
          <p>
            <span className="left">签发日期</span>
            <span className="right">{detailInfo.start_dt || '--'}</span>
          </p>
        </div>
        <div className="detail-item">
          <p>
            <span className="left">到期日期</span>
            <span className="right">{detailInfo.due_dt || '--'}</span>
          </p>
          <p>
            <span className="left">贴现日期</span>
            <span className="right">{detailInfo.discount_dt || '--'}</span>
          </p>
        </div>
        </div>
      )
    }else if(tab === "保函"){
      return (
        <div>
          <div className="detail-item">
          <p>
            <span className="left">品种</span>
            <span className="right">{detailInfo.type_ || '--'}</span>
          </p>
          <p>
            <span className="left">币种</span>
            <span className="right">{detailInfo.currency || '--'}</span>
          </p>
        </div>
        <div className="detail-item">
          <p>
            <span className="left">金额(元)</span>
            <span className="right">{detailInfo.amount || '0'}</span>
          </p>
          <p>
            <span className="left">保证金币种</span>
            <span className="right">{detailInfo.gurt_currency || '--'}</span>
          </p>
        </div>
        <div className="detail-item">
          <p>
            <span className="left">保证金金额(元)</span>
            <span className="right">{Number(detailInfo.gurt_amount).toFixed(2) || '0'}</span>
          </p>
          <p>
            <span className="left">到期日期</span>
            <span className="right">{detailInfo.due_dt || '--'}</span>
          </p>
        </div>
        <div className="detail-item">
          <p>
            <span className="left">贴现日期</span>
            <span className="right">{detailInfo.discount_dt || '--'}</span>
          </p>
        </div>
        </div>
      )
    }else if(tab === "信用证"){
      return (
        <div>
          <div className="detail-item">
          <p>
            <span className="left">信用证号码</span>
            <span className="right">{detailInfo.cred_no || '--'}</span>
          </p>
          <p>
            <span className="left">开证币种</span>
            <span className="right">{detailInfo.currency || '--'}</span>
          </p>
        </div>
        <div className="detail-item">
          <p>
            <span className="left">开证金额(元)</span>
            <span className="right">{Number(detailInfo.amount).toFixed(2) || '0'}</span>
          </p>
          <p>
            <span className="left">开证日期</span>
            <span className="right">{detailInfo.start_dt || '--'}</span>
          </p>
        </div>
        <div className="detail-item">
          <p>
            <span className="left">期限</span>
            <span className="right">{detailInfo.days || '--'}</span>
          </p>
          <p>
            <span className="left">承兑付款日</span>
            <span className="right">{detailInfo.pay_dt || '--'}</span>
          </p>
        </div>
        <div className="detail-item">
          <p>
            <span className="left">承兑金额(元)</span>
            <span className="right">{Number(detailInfo.pay_amount).toFixed(2) || '0'}</span>
          </p>
          <p>
            <span className="left">保证金币种</span>
            <span className="right">{detailInfo.gurt_currency || '--'}</span>
          </p>
        </div>
        <div className="detail-item">
          <p>
            <span className="left">保证金金额(元)</span>
            <span className="right">{Number(detailInfo.gurt_amount).toFixed(2) || '0'}</span>
          </p>
        </div>
        </div>
      )
    }
  }

  render() {
    const { detailInfo, tab } = this.props;
    return (
      <div className="account-detail-component">
        {this.renderItem(detailInfo, tab)}
      </div>
    );
  }
}

export default component;

