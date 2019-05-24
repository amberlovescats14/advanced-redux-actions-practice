import { connect } from 'react-redux'
import UserBottons from '../components/UserButtons'
import { addUser, removeUser } from '../actions/index'

const mapDispatchToProps = (dispatch) => {
  return {
    add: (users) => dispatch(addUser(users)),
    remove: (users) => dispatch(removeUser(users)),

  }
}

export default connect(null, mapDispatchToProps)(UserBottons)