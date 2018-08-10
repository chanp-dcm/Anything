import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ColorButton extends React.Component {
  render() {
    return (
      <button {...this.props}>
        {this.props.children}
      </button>
    )
  }
}

export {ColorButton}
