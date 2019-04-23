import React from 'react'
import './component.scss'
import { Link } from 'react-router-dom'
import Logo from './images/logobig.png'
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }
  render() {
    return (
      <div className='home-component'>
          <div className='container'>
            <div className='box'>
              <img src={Logo} alt='' />
              <p className='des'>react-mobile-ui组件库</p>
              <div className='btn'>
                <Link to='/root/main'>开始使用</Link>
                <a href='http://git.sz.haizhi.com/department/frontend/jquery-hzui' className='github' target='_blank'>Gitlab</a>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Home
