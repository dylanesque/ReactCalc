import React from 'react';

class Button extends React.Component {

  render() {
    const { char } = this.props;
    return ( <button onClick={this.handleClick}>{char}</button> );
  }
}

export default Button;