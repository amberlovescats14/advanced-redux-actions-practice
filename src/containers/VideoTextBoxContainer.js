import { connect } from 'react-redux'
import VideoTextBox from '../components/VideoTextBox'
import { setVideoURL } from '../actions/index'

const mapDispatchToProps = (dispatch) => ({
  set: (URL) => dispatch(setVideoURL(URL))
})

export default connect(null, mapDispatchToProps)(VideoTextBox)