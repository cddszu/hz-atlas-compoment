import { connect } from 'react-redux'
import Component from './component.js'
import {getBizCollectionPay, getBizChannel} from 'store/modules/customerMgt/custMgt'

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
