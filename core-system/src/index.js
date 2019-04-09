import 'core-js'
// import 'lib-flexible'
import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/createStore'
import App from './routes/App/index'

// 除以100可以模拟vw，但是得出的结果可能chrome支持的最小font-size12px，故改为除以10
document.querySelector('html').setAttribute('style', 'font-size:' + window.innerWidth / 10 + 'px !important;')
// require('core-js');

// Store Initialization
// ------------------------------------
const store = createStore(window.__INITIAL_STATE__)

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.querySelector('#root')

let render = () => {
  ReactDOM.render(
    <App store={store}  />,
    MOUNT_NODE
  )
}
render()
