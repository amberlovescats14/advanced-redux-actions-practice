import { connect } from 'react-redux'
import CurrentCity from '../components/CurrentCity'

const mapStateToProps = (state) => {
  return {
    text: state.text
  }
}

export default connect(mapStateToProps)(CurrentCity)