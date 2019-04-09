import React from 'react'
import styles from './component.module.scss'
import {withRouter} from "react-router"
import { S_IFDIR } from 'constants';


class CreateItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.clickSelectRightPartHandler = this.clickSelectRightPartHandler.bind(this)
  }
  clickSelectRightPartHandler() {
    let option = this.props.option
    let title = {
      title : this.props.leftTitle
    }
    Object.assign(option, title)
    this.props.clickRightPart()
    this.props.getOption(option)
  }
  componentWillMount() {
  }
  componentWillReceiveProps({ userPermission }) {
  }

  render() {
    return (
      this.props.type !== 'textArea' ? (
        <div className={`${styles['create-item']} ${this.props.hasTopSpace ? styles['top-space'] : '' } `}>
          <div className={styles['left-attach']}>
            <i className={`${styles['item-icon']} iconfont ${this.props.leftIcon}`}></i>
          </div>
          <div className={`${styles['item-content']} ${this.props.hasBottomLine ? styles['bootom-line'] : ''} ${this.props.leftIcon ? '' : styles['no-left-icon']}`}>

            <div className={styles['item-left']}>
              <span className={styles['item-left-title']}>{this.props.leftTitle}</span>
              {
                this.props.isImportant ? (<span className={styles['red']}>*</span>) : ''
              }
            </div>

            {/* {rightPart} */}
            <div onClick={this.props.onClick}>
              {this.props.children}
            </div>
          </div>
        </div>
      ) : (
        <div className={`${styles['item-textarea']} ${this.props.hasTopSpace ? styles['top-space'] : '' }`}>
          <textarea
            className={styles['text-area']}
            placeholder={this.props.leftTitle}
            value={this.props.value}
            onChange={this.props.onChange}
          />
        </div>
      )
    )
  }
}

export default withRouter(CreateItem)
