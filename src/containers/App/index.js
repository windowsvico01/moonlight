import React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import * as actions from './actions';

const AppWrapper = styled.div`
  overflow: hidden;
  min-height: 100%;
`;

class App extends React.Component { // eslint-disable-line
  componentWillMount() {
    // this.props.loadProfile();
  }
  render() {
    return (
      <AppWrapper>
        {React.Children.toArray(this.props.children)}
      </AppWrapper>
    );
  }
}

// App.propTypes = {
//   children: React.PropTypes.node,
//   loadProfile: React.PropTypes.func,
// };


// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ ...actions }, dispatch);
// }
export default connect(() => ({}), null)(App);