import React from 'react'
import './component.scss'
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
                <a href=''>开始使用</a>
                <a href='http://git.sz.haizhi.com/department/frontend/jquery-hzui' className='github' target='_blank'>Gitlab</a>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Home
