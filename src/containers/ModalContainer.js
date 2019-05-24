import { connect } from 'react-redux'
import { setIsLoading } from '../actions/index'
import Modal from '../components/Modal'

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading
  }
}
const mapDispatchToProps = (dispatch) => ({
  setIsLoading: (isLoading) => dispatch(setIsLoading(isLoading))
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)