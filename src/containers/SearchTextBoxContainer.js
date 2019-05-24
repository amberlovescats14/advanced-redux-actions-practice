import { connect } from 'react-redux'
import SearchTextBox from '../components/SearchTextBox'
import { setSearchText } from '../actions/index'

const mapDispatchToProps = (dispatch) => ({
  action: (text) => dispatch(setSearchText(text))
})

export default connect(mapDispatchToProps)(SearchTextBox)