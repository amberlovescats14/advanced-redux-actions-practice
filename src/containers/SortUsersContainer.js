import { connect } from 'react-redux'
import SortUsers from '../components/SortUsers'
import { setCurrentUserSort } from '../actions/index'

const mapDispatchToProps = (dispatch) => ({
  set: (sort) => dispatch(setCurrentUserSort(sort))
})

export default connect(null, mapDispatchToProps)(SortUsers)