import React from 'react';
class Plugins extends React.Component {
  render() {
    return (
      
      <div>
        { this.props.children }
        {/* { React.Children.map(this.props.children, child => {
           return React.cloneElement(child, {
             ...this.props,
             contentChange: this.props.contentChange
            })
        }) } */}
      </div>
    )
  }
}

export default Plugins;