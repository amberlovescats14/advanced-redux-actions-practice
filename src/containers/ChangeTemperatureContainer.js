import { connect } from 'react-redux'
import ChangeTemperature from '../components/ChangeTemperature'
import { setTemp } from '../actions/index'

const mapDispatchToProps = (dispatch) => ({
  set: (temp) => dispatch(setTemp(temp))
})

export default connect(mapDispatchToProps)(ChangeTemperature)