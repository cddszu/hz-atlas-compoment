/**
 * @Desc: 导航左侧的主题切换
 * @Author: linjianhuang
 * @Date: 2019-08-26 14:43:29
 * @Last Modified by: linjianhuang
 * @Last Modified time: 2019-08-28 14:42:13
 */
import React from 'react'
import './component.less'

let themeMap = [{
  title: '撞色',
  type: 'mix'
}, {
  title: '纯净',
  type: 'pure'
}, {
  title: '深邃',
  type: 'deep'
}]

class ThemePicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowPicker: false,
      pickedType: 'mix'
    }

    themeMap = this.props.themeMap ? this.props.themeMap : themeMap

    this.handleShow = this.handleShow.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleShow (e) {
    this.stopPropagation(e)
    this.setState({
      isShowPicker: !this.state.isShowPicker
    })
  }

  handleHide = () => {
    this.setState({
      isShowPicker: false
    })
  }

  handleChange(t) {
    if (t.type === this.state.pickedType) return;
    this.props.saveTheme
    ?
      this.props.saveTheme({
        themeCode: t.type,
        themeName: t.title
      })
    :
      this.setState({
        pickedType: t.type,
      }, () => {
      })
  }

  stopPropagation(e) {
    e.stopPropagation()
    // e.nativeEvent.stopImmediatePropagation();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.theme && nextProps.theme !== prevState.pickedType) {
      return {
        pickedType: nextProps.theme
      }
    }
      return null
  }

  componentDidMount() {
    window.addEventListener('click', this.handleHide)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleHide)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isShowPicker === true) {
      // 如果弹出框显示超过底部边界，则弹出框距离底部位置调高
      let bottom = this.pickerBoxRef.getBoundingClientRect().bottom
      let innerHeight = window.innerHeight
      if (bottom > innerHeight) {
        this.pickerBoxRef.style.top = '-40px'
      }
    }
  }

  render() {
    const { isShowPicker, pickedType } = this.state
    const { className } = this.props
    return (
      <div className={`theme-picker ${className ? className : ''}`} onClick={this.stopPropagation}>
        <i className="iconfont icon-colour" onClick={(e) => this.handleShow(e)}/>
        {
          isShowPicker
          ? (
            <div className="theme-picker-box" ref={ref => this.pickerBoxRef = ref} >
              <ul>
                {
                  themeMap.map((t, i) => {
                    let isPicked = false
                    if (t.type === pickedType) {
                      isPicked = true
                    }
                    return (
                      <li
                        key={ t.type }
                        className={`theme-item ${isPicked ? 'theme-item-picked' : ''}`}
                        onClick={() => this.handleChange(t)}>
                          <i className={`theme-item-circle theme-item-circle-${t.type}`}/>
                          <span className="theme-item-title">{ t.title }</span>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          )
          : null
        }
      </div>
    )
  }
}

export default ThemePicker
