import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import { createStructuredSelector } from 'reselect';
import { selectHi, selectCount } from './reselector';
import { Helmet } from "react-helmet";


class Hi extends Component {
  handleAdd = (num) => {
    this.props.addCount(num);
  }
  render() {
    const { hi, count } = this.props;
    return (
      <div>
        <Helmet>
          <title>页面HI</title>
        </Helmet>
        Hi部分2
        {hi}
        <br/>
        {count}
        <br/>
        <button onClick={() => this.handleAdd(2)}>+2</button>
        <button onClick={() => this.handleAdd(-1)}>-1</button>
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
export default connect(mapStateToProps, mapActionsToProps)(Hi);
// export default Hi;