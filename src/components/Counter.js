import React from 'react';
// import { connect } from 'react-redux'
function Counter(props) {
  console.log(props)
  return (
      <div>
        Counter: {props.count}
      </div>
  );
}
export default Counter
// const mapStateToProps = state => ({
//   count: state.currentCount
// })
// export default connect(mapStateToProps)(Counter);