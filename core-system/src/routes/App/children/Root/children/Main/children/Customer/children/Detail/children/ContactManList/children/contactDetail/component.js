import React from 'react'
import './component.scss'
import { CreateItem } from 'components/lib'

class contactDetail extends React.Component {
  componentDidMount() {
  }
  render () {
    const {
      content,
    } = this.props
    return (
      <div className="executive-detail-component">
        <CreateItem
          type='text'
          leftTitle='联系人姓名'
          hasBottomLine={true}
        >
          <div className='item-right' >
            <span className='text'>{content.contactName || '--'}</span>
          </div>
        </CreateItem>
        <CreateItem
          type='text'
          leftTitle='职位'
        >
          <div className='item-right' >
            <span className='text'>{content.position || '--'}</span>
          </div>
        </CreateItem>
        <CreateItem
          type='text'
          leftTitle='联系人电话'
          hasTopSpace={true}
          hasBottomLine={true}
        >
          <div className='item-right' >
            <span className='text'>{content.contactPhoneNumber || '--'}</span>
          </div>
        </CreateItem>
        <CreateItem
          type='text'
          leftTitle='手机'
          hasBottomLine={true}
        >
          <div className='item-right' >
            <span className='text'>{content.mobilePhone || '--'}</span>
          </div>
        </CreateItem>
        <CreateItem
          type='text'
          leftTitle='电子邮箱'
          hasBottomLine={true}
        >
          <div className='item-right' >
            <span className='text'>{content.email || '--'}</span>
          </div>
        </CreateItem>
        <div className='remark-item'>
          <span className='remart-content'>{content.remark || '--'}</span>
        </div>
      </div>
    )
  }
}

export default contactDetail
