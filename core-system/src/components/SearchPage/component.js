import React from 'react'
import { DatePicker, List } from 'antd-mobile';
import styles from './component.module.scss'
import { withRouter } from "react-router"
import Header from 'rmc-calendar/lib/calendar/Header';
import noResult from './images/no-search-result@2x.png'

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowHistory: true,
      // isShowBlurResult: false,
      isShowResult: false,
      isShowNoResult: false,
      value: '',
      beginDate: '',
      endDate: ''
    }
    this.showHistoryHandler = this.showHistoryHandler.bind(this)
    // this.showBlurResultHandler = this.showBlurResultHandler.bind(this)
    this.showResultHandler = this.showResultHandler.bind(this)
    // this.showNoResultHandler = this.showNoResultHandler.bind(this)
    this.changeInputHandler = this.changeInputHandler.bind(this)
    this.onKeyUpHandler = this.onKeyUpHandler.bind(this)
    this.clickHistoryHandler = this.clickHistoryHandler.bind(this)
    this.getHistoryResultHandler = this.getHistoryResultHandler.bind(this)
    this.clickSearchBtnHandler = this.clickSearchBtnHandler.bind(this)
    this.clearValueHandler = this.clearValueHandler.bind(this)
    this.resetHandler = this.resetHandler.bind(this)
    this.confirmHandler = this.confirmHandler.bind(this)
  }
  // 时间重置按钮
  resetHandler() {
    this.setState({
      beginDate: '',
      endDate: ''
    })
  }
  // 时间确定按钮
  confirmHandler() {
    this.setState({
      isShowHistory: false,
      isShowResult: true,
    })
    this.props.confirmHandler(this.state.beginDate, this.state.endDate, this.state.value)
  }
  showHistoryHandler() {
    this.setState({
      isShowHistory: true,
      // isShowBlurResult: false,
      isShowResult: false,
      // isShowNoResult: false
    })
  }
  // showBlurResultHandler() {
  //   this.setState({
  //     isShowHistory: false,
  //     isShowBlurResult: true,
  //     isShowResult: false,
  //     isShowNoResult: false
  //   })
  // }
  showResultHandler() {
    this.setState({
      isShowHistory: false,
      isShowResult: true,
    })
  }
  // showNoResultHandler() {
  //   this.setState({
  //     isShowHistory: false,
  //     isShowResult: false,
  //     isShowNoResult: true
  //   })
  // }
  changeInputHandler(e) {
    let value = e.target.value
    this.setState({
      value: value
    })
    if (value === '') {
      this.setState({
        isShowHistory: true,
        isShowResult: false,
      })
    }
    //else {
    //   this.setState({
    //     isShowHistory: false,
    //     isShowResult: true,
    //     isShowNoResult: false
    //   })
    // }
  }
  onKeyUpHandler(e) {
    let value = e.target.value
    if (e.keyCode === 13 && value !== '') {
      this.clickSearchBtnHandler(value,this.subSearch.state)
    }
  }
  clickHistoryHandler(e) {
    let value = e.target.textContent
    this.clickSearchBtnHandler(value)
  }
  clickSearchBtnHandler(value,subState) {
    this.setState({
      value: value,
      isShowHistory: false,
      isShowResult: true,
    })
    this.props.getKeyWordHandler(value,subState)
  }
  clearValueHandler(value,subState) {
    //判断取消的标识
    let tag =true;
    this.setState({
      value: '',
      isShowHistory: true,
      isShowResult: false,
    })
    this.props.getKeyWordHandler(value,subState,tag)
  }
  getHistoryResultHandler() {
    let param = {

    }
    if (this.props.historyParam) {
      param = Object.assign(param, this.props.historyParam.param)
      let option = {
        url: this.props.historyParam.url,
        method: this.props.historyParam.method,
        param: param
      }
      this.props.getHistoryResult(option)
    } else return

  }

  componentWillMount() {
    this.getHistoryResultHandler()
  }
  componentWillReceiveProps({data}) {
    if (data !== this.props.data && this.props.subSearch) {
      this.setState({
        isShowResult : true
      })
    }
  }

  render() {
    const {historyResult,subSearch : SubSearch,filter} = this.props
    // const { historyResult } = this.props
    return (
      <div className={` ${styles['search-page-component']} ${styles[`${this.props.isShow ? 'show' : 'hide'}`]} `}>
        <div className={styles['search-page-head']}>
          <div className={styles['search-page-input']}>
            <div className={styles['attach']}>
              <i className={`${styles['search-icon']} iconfont icon-sousuo`}></i>
            </div>
            {
              this.state.value ? (
                <div className={styles['delete-attach']} onClick={this.clearValueHandler.bind(this,this.state.value,this.subSearch.state)}>
                  <i className={`${styles['delete-icon']} iconfont icon-delete`}></i>
                </div>
              ) : ''
            }
            <input
              placeholder={this.props.inputText || '请输入客户名称'}
              className={styles['search-input']}
              onChange={this.changeInputHandler}
              value={this.state.value}
              onKeyUp={this.onKeyUpHandler}
            />
            {
              this.state.value ? (
                <div className={styles['search-confirm']} onClick={this.clickSearchBtnHandler.bind(this, this.state.value,this.subSearch.state)}>
                  <span>搜索</span>
                </div>
              ) : (
                  <div className={styles['search-cancel']} onClick={this.props.searchCancelHandler}>
                    <span className={styles['cancel-text']}>取消</span>
                  </div>
              )
            }
          </div>
        </div>
        {
          SubSearch ? (
            <div>
              <SubSearch data={this.props.data} title={this.state.value} ref={subSearch => this.subSearch = subSearch}></SubSearch>
            </div>
          ) : (
            ''
          )
        }
        {
          filter ?
            (
              <div className={`${styles['search-content']}`}>
                {
                  filter && filter.showChoose ? (
                    <div className={`${styles['search-wrapper']}`}>
                      <span className={`${styles['left']}`}>{filter.showChoose.left}</span>
                      <span className={`${styles['right']}`} onClick={this.props.clickRight}>{filter.showChoose.right}</span>
                    </div>
                  ) : ''
                }
                {
                  filter && filter.showDate ? (
                    <div className={`${styles['search-date']}`}>
                      <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
                        <DatePicker
                          mode="date"
                          title="选择开始时间"
                          extra=""
                          value={this.state.beginDate}
                          onChange={beginDate => this.setState({ beginDate })}
                        >
                          <List.Item arrow="horizontal" className={`${styles['list-item']}`}>
                            <i className={`iconfont icon-zushijian ${styles['date-icon']}`}></i>
                            <span className={`${styles['text']}`}>开始时间</span>
                          </List.Item>
                        </DatePicker>
                        <DatePicker
                          mode="date"
                          title="选择结束时间"
                          extra=""
                          value={this.state.endDate}
                          onChange={endDate => this.setState({ endDate })}
                        >
                          <List.Item arrow="horizontal">
                            <i className={`iconfont icon-zushijian ${styles['date-icon']}`}></i>
                            <span className={`${styles['text']}`}>结束时间</span>
                          </List.Item>
                        </DatePicker>
                      </List>
                      <div className={`${styles['btn-area']}`}>
                        <div className={`${styles['btn']} ${styles['btn-reset']}`} onClick={this.resetHandler}>重置</div>
                        <div className={`${styles['btn']} ${styles['btn-confirm']}`} onClick={this.confirmHandler}>确定</div>
                      </div>
                    </div>
                  ) : ''
                }
              </div>
            ) : ('')
        }
        <div className={` ${styles['search-container']} ${styles['search-history']} ${styles[`${this.state.isShowHistory ? 'show' : 'hide'}`]} `}>
          {
            this.props.historyParam ? (
              <div>
                <div className={styles['history-head']}>
                  <div className={styles['attach']}>
                    <i className={`${styles['history-icon']} iconfont icon-history`}></i>
                  </div>
                  <span className={styles['history-text']}>搜索历史</span>
                </div>
                <div className={styles['history-result']}>
                  <ul className={styles['history-items']}>
                    {
                      historyResult.uglyData.map((item, index) => (
                        <li className={styles['history-item']} onClick={this.clickHistoryHandler} key={index}>{item.queryCondition}</li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            ) : ''
          }
        </div>
        {/* <div className={` ${styles['search-container']} ${styles['search-blur-result']} ${styles[`${this.state.isShowBlurResult ? 'show': 'hide'}`]} `}>
          <div className={styles['search-blur']}>
            <ul className={styles['blur-items']}>
              <li className={styles['blur-item']} onClick={this.getValueHandler}>九江新希望有限公司</li>
              <li className={styles['blur-item']} onClick={this.getValueHandler}>九江新希望有限公司</li>
              <li className={styles['blur-item']} onClick={this.getValueHandler}>九江新希望有限公司</li>
              <li className={styles['blur-item']} onClick={this.getValueHandler}>九江新希望有限公司</li>
              <li className={styles['blur-item']} onClick={this.getValueHandler}>九江新希望有限公司</li>
              <li className={styles['blur-item']} onClick={this.getValueHandler}>九江新希望有限公司</li>
            </ul>
          </div>
        </div> */}
        <div className={` ${styles['search-container']} ${styles['search-result']} ${styles[`${this.state.isShowResult ? 'show' : 'hide'}`]} `}>
          {this.props.children}
        </div>
        <div className={` ${styles['search-container']} ${styles['search-no-result']} ${styles[`${this.state.isShowNoResult ? 'show' : 'hide'}`]} `}>
          <img alt='no-result' src={noResult} className={styles['search-no-result-img']} />
          <div className={styles['search-no-result-text']}>{this.props.noResultText || '未搜索到相关结果'}</div>
        </div>
      </div>
    )
  }
}

export default withRouter(SearchPage)
