import React from 'react'
import styles from './component.module.scss'
import {withRouter} from "react-router"
import { S_IFDIR } from 'constants';


class FadePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    let position = ''
    switch(this.props.position)   //自定义块的显示位置
    {
      case 'top':
      position = 'top';
      break;
      case 'bottom':
      position = 'bottom';
      break;
      default:
      position = 'bottom';
      break;
    }
    return (
      <div className={`${styles['fade-page-component']} ${this.props.isShow ? styles['show'] : styles['hide']}`}>
        <div>
          <div className={`${styles['fade-page-container']} ${styles[`${position}`]}`}>
            {this.props.children}
          </div>
        </div>
        <div className={`${styles['fade-out']} ${styles[`${position}`]}`} onClick={this.props.toggleFadePage}></div>
      </div>
    )
  }
}
export default withRouter(FadePage)
