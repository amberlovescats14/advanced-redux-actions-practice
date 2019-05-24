import { connect } from 'react-redux'
import ShowModal from '../components/ShowModal'
import { setIsLoading } from '../actions/index'

const mapDispatchToProps = (dispatch) => ({
  setIsLoading: (isLoading) => dispatch(setIsLoading(isLoading))
})

export default connect(mapDispatchToProps)(ShowModal)