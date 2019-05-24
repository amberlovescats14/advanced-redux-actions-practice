import { connect } from 'react-redux'
import CityDropDown from '../components/CityDropDown'
import { setCurrentCity } from '../actions/index'

const mapDispatchToProps = (dispatch) => ({
  set: (city) => dispatch(setCurrentCity(city))
})

export default connect(mapDispatchToProps)(CityDropDown)