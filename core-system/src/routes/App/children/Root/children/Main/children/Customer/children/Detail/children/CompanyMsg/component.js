import React from 'react'
import './component.scss'
import PaginationList from 'components/PaginationList'
import { SwipeAction } from 'antd-mobile'
import icon_info from '../../images/基本信息 copy@2x.png'

class CompanyInfo extends React.Component {
  componentDidMount() {
  }
  render () {
    const {
      customerBaseMsg,
    } = this.props
    const baseInfoOption = [
      {
        title: '客户编号',
        data: customerBaseMsg.customerNumber || '--',
      },
      {
        title: '客户名称',
        data: customerBaseMsg.customerName || '--',
      },
      {
        title: '英文名称',
        data: customerBaseMsg.englishNames || '--',
      },
      {
        title: '客户类型',
        data: customerBaseMsg.isInside ? '行内' : '行外',
      },
      {
        title: '证件类型',
        data: customerBaseMsg.documentType || '--',
      },
      {
        title: '证件号码',
        data: customerBaseMsg.certificateNumber || '--',
      },
      {
        title: '开户日期',
        data: customerBaseMsg.openingDate || '--',
      },
      {
        title: '基本开户户行',
        data: customerBaseMsg.basicAccountOpeningBank || '--',
      },
      {
        title: '开户许可证',
        data: customerBaseMsg.accountOpeningPermit || '--',
      },
      {
        title: '所属支行',
        data: customerBaseMsg.ownershipBranchName || '--',
      },
      {
        title: '客户经理',
        data: customerBaseMsg.customerManagerName || '--',
      },
    ]
    const businessInfoOption = [
      {
        title: '客户行业',
        data: customerBaseMsg.subordinateIndustry || '--',
      },
      {
        title: '从业人数',
        data: customerBaseMsg.employeesNumber || '--',
      },
      {
        title: '企业规模',
        data: customerBaseMsg.enterpriseScale || '--',
      },
      {
        title: '实际控制人',
        data: customerBaseMsg.actualController || '--',
      },
      {
        title: '控股类型',
        data: customerBaseMsg.holdingType || '--',
      },
      {
        title: '企业所有制',
        data: customerBaseMsg.enterpriseOwnership || '--',
      },
      {
        title: '环评等级',
        data: customerBaseMsg.eiaLevel || '--',
      },
      {
        title: '是否上市',
        data: customerBaseMsg.isListed ? '是' : '否',
      },
      {
        title: '是否政府融资平台',
        data: customerBaseMsg.isGovernmentPlatform ? '是' : '否',
      },
      {
        title: '进出口权标示',
        data: customerBaseMsg.importExportMark || '--',
      },
      {
        title: '优势企业',
        data: customerBaseMsg.isSuperior ? '是' : '否',
      },
      {
        title: '地区重点企业',
        data: customerBaseMsg.isRegionalKey ? '是' : '否',
      },
      {
        title: '高新企业',
        data: customerBaseMsg.isHighTech ? '是' : '否',
      },
      {
        title: '国家宏观调控限控行业',
        data: customerBaseMsg.isNationalControl ? '是' : '否',
      },
      {
        title: '是否两高一剩企业',
        data: customerBaseMsg.isTwoHighLeft ? '是' : '否',
      },
    ]
    const otherInfoOption = [
      {
        title: '集团客户类型',
        data: customerBaseMsg.groupCustomerType || '--',
      },
      {
        title: '是否信贷户',
        data: customerBaseMsg.isCreditAccount ? '是' : '否',
      },
      {
        title: '内部信用等级',
        data: customerBaseMsg.internalCreditRating || '--',
      },
      {
        title: '内部信用等级评定日期',
        data: customerBaseMsg.internalCreditRatingDate || '--',
      },
      {
        title: '地税税务登记代码',
        data: customerBaseMsg.localTaxCode || '--',
      },
      {
        title: '国税税务登记代码',
        data: customerBaseMsg.nationalTaxCode || '--',
      },
    ]
    return (
      <div className="company-info-component">
        <div className='border'>
          <div className='border-head'>
            <img className='border-img' alt='info-icon' src={icon_info}/>
            <div className='border-title'>基础信息</div>
          </div>
          <div className='border-content'>
            {
              baseInfoOption.map(item=>(
                <div className='border-item' key={item.title}>
                  <div className='item-content'>{item.data}</div>
                  <div className='item-title'>{item.title}</div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='border'>
          <div className='border-head'>
            <img className='border-img' alt='info-icon' src={icon_info}/>
            <div className='border-title'>工商信息</div>
          </div>
          <div className='border-content'>
            {
              businessInfoOption.map(item=>(
                <div className='border-item' key={item.title}>
                  <div className='item-content'>{item.data}</div>
                  <div className='item-title'>{item.title}</div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='border'>
          <div className='border-head'>
            <img className='border-img' alt='info-icon' src={icon_info}/>
            <div className='border-title'>其它</div>
          </div>
          <div className='border-content'>
            {
              otherInfoOption.map(item=>(
                <div className='border-item' key={item.title}>
                  <div className='item-content'>{item.data}</div>
                  <div className='item-title'>{item.title}</div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='no-border'>
          <span className='content'>没有更多咯...</span>
        </div>
      </div>
    )
  }
}

export default CompanyInfo
