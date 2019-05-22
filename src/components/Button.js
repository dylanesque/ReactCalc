import React from 'react';

class Button extends React.Component {

  render() {
    const { char } = this.props;
    return ( <button>{char}</button> );
  }
}

export default Button;