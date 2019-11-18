import React from 'react';

class Hello extends React.Component {
  render() {
    console.log(123123123);
    return (
      <div>
        Hello
        { this.props.children }
      </div>
    )
  }
}

export default Hello;