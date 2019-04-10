import React from 'react'
import './component.scss'
import PaginationList from 'components/PaginationList'
import { SwipeAction } from 'antd-mobile'
import ContactDetail from './children/contactDetail'
import { InnerPage } from 'components/lib'

class contactList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: {},
    }
  }
  showContactDetailHandler(content) {
    this.setState({
      content: content
    })
    this.contactDetail.show()
  }
  componentDidMount() {
  }
  render () {
    const {
      companyBasicContactInfo,
    } = this.props
    return (
      <div className="contact-list-component">
        {
          // [{},{},{},{},{},{},{},{}].map((item, index)=>(
          companyBasicContactInfo.companyBasicContactInfoVos.map((item, index)=>(
            <div className='border' key={index}>
              <div className='border-head' onClick={this.showContactDetailHandler.bind(this,item)}>
                <div className='head-left'>
                  <span className='head-title'>{item.contactName}</span>
                  <span className='customer-tag'>{item.position}</span>
                </div>
                <div className='head-right'>
                  <i className='iconfont icon-gengduo'></i>
                </div>
              </div>
              <div className='border-content'>
                <div className='border-item'>
                  <div className='item-content'>{item.contactPhoneNumber || '--'}</div>
                  <div className='item-title'>联系电话</div>
                </div>
                <div className='border-item'>
                  <div className='item-content'>{item.mobilePhone || '--'}</div>
                  <div className='item-title'>手机</div>
                </div>
              </div>
            </div>
          ))
        }
        <InnerPage
          from='right'
          ref={contactDetail => this.contactDetail = contactDetail }
          title='联系人详情'
        >
          <ContactDetail content={this.state.content}/>
        </InnerPage>
      </div>
    )
  }
}

export default contactList
