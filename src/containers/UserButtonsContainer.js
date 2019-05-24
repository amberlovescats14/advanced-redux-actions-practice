import { connect } from 'react-redux'
import UserBottons from '../components/UserButtons'
import { addUser, removeUser } from '../actions/index'

const mapDispatchToProps = (dispatch) => {
  return {
    increase: (user) => dispatch(addUser(user)),
    decrease: () => dispatch(removeUser()),

  }
}

export default connect(mapDispatchToProps)(UserBottons)