import React, { Component } from 'react';


class Editor extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
export default Editor