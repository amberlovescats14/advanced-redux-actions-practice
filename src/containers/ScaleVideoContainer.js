import { connect } from 'react-redux'
import ScaleVideo from '../components/ScaleVideo'
import { setVideoScale } from '../actions/index'

const mapDispatchToProps = (dispatch) => ({
  set: (scale) => dispatch(setVideoScale(scale))
})

export default connect(mapDispatchToProps)(ScaleVideo)