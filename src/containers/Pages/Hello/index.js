import React from 'react';

class Hello extends React.Component {
  render() {
    return (
      <div>
        Hello
        { this.props.children }
      </div>
    )
  }
}

export default Hello;