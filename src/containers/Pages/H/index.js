import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import { createStructuredSelector } from 'reselect';
import { selectHi, selectCount } from './reselector';
import { Helmet } from "react-helmet";


class H extends Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>页面H</title>
        </Helmet>
        H部分2

      </div>
    )
  }
}

export default H;