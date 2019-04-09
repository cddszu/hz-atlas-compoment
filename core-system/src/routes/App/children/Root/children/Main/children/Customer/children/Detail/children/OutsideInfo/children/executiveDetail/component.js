import React from 'react'
import './component.scss'
import CreateItem from 'components/hz/CreateItem'

class ExecutiveDetail extends React.Component {
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
          leftTitle='高管姓名'
          hasBottomLine={true}
        >
          <div className='item-right' >
            <span className='text'>{content.name || '--'}</span>
          </div>
        </CreateItem>
        <CreateItem
          type='text'
          leftTitle='高管类型'
        >
          <div className='item-right' >
            <span className='text'>{content.type || '--'}</span>
          </div>
        </CreateItem>
        <CreateItem
          type='text'
          leftTitle='性别'
          hasTopSpace={true}
          hasBottomLine={true}
        >
          <div className='item-right' >
            <span className='text'>{content.gender || '--'}</span>
          </div>
        </CreateItem>
        <CreateItem
          type='text'
          leftTitle='年龄（岁）'
          hasBottomLine={true}
        >
          <div className='item-right' >
            <span className='text'>{content.age || '--'}</span>
          </div>
        </CreateItem>
        <CreateItem
          type='text'
          leftTitle='学历'
        >
          <div className='item-right' >
            <span className='text'>{content.education || '--'}</span>
          </div>
        </CreateItem>
        <CreateItem
          type='text'
          leftTitle='联系电话'
          hasTopSpace={true}
          hasBottomLine={true}
        >
          <div className='item-right' >
            <span className='text'>{content.phone || '--'}</span>
          </div>
        </CreateItem>
        <CreateItem
          type='text'
          leftTitle='电子邮箱'
        >
          <div className='item-right' >
            <span className='text'>{content.email || '--'}</span>
          </div>
        </CreateItem>

      </div>
    )
  }
}

export default ExecutiveDetail
