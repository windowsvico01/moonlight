import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as actions from './actions';
import { createStructuredSelector } from 'reselect';
// import { selectHi, selectCount } from './reselector';
import { Helmet } from "react-helmet";


class Index extends Component {
  handleAdd = (num) => {
    this.props.addCount(num);
  }
  render() {
    const { hi, count } = this.props;
    return (
      <div>
        <Helmet>
          <title>页面Index</title>
        </Helmet>
        没有东西
      </div>
    )
  }
}
// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     hi: selectHi(state),
//     count: selectCount(state),
//   };
// }
// const mapActionsToProps = (dispatch) => bindActionCreators({ ...actions }, dispatch);
// const mapStateToProps = createStructuredSelector({
//   hi: selectHi(),
// })
// export default connect(mapStateToProps, mapActionsToProps)(Hi);
export default Index;