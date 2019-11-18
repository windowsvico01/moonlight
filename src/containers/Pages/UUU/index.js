import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import { createStructuredSelector } from 'reselect';
import { selectHi, selectCount } from './reselector';
import { Helmet } from "react-helmet";


class UUU extends Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>UUUUUUU</title>
        </Helmet>
        UUUUU

      </div>
    )
  }
}

export default UUU;