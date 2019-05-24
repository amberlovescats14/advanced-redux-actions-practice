import { connect } from 'react-redux';
import SpecialText from "../components/SpecialText";
import { setSpecialText } from '../actions/index'

//map a prop called text to the state specialText
const mapStateToProps = (state) => {
  return {
    text: state.specialText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    set: (text) => dispatch(setSpecialText(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecialText);
