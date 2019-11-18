import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import { createStructuredSelector } from 'reselect';
import { selectHi, selectCount } from './reselector';
import { Helmet } from "react-helmet";


class Home extends Component {
  handleAdd = (num) => {
    this.props.addCount(num);
  }
  render() {
    const { hi, count } = this.props;
    return (
      <div>
        <Helmet>
          <title>首页</title>
        </Helmet>
        这是首页
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    hi: selectHi(state),
    count: selectCount(state),
  };
}
const mapActionsToProps = (dispatch) => bindActionCreators({ ...actions }, dispatch);
// const mapStateToProps = createStructuredSelector({
//   hi: selectHi(),
// })
export default connect(mapStateToProps, mapActionsToProps)(Home);
// export default Hi;