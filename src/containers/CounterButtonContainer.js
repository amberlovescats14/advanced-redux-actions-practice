import { connect } from 'react-redux'
import CounterButton from '../components/CounterButton'
import { increaseCounter, decreaseCounter } from '../actions/index'

const mapDispatchToProps = (dispatch) => ({
  increase: () => dispatch(increaseCounter()),
  decrease: () => dispatch(decreaseCounter())
})

export default connect(null, mapDispatchToProps)(CounterButton)