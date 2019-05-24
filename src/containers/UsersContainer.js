import { connect } from 'react-redux'
import  Users from '../components/Users'

const mapStateToProps = (state) => {
  return {
    users: state.users,
    searchText: state.searchText,
    sortOn: state.setCurrentUserSort
  }
}
export default connect(mapStateToProps, null)(Users)


