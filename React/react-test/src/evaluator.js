import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Evaluator extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      expression: ''
    };
  }

  reCalValue(event) {
    if (event.key === 'Enter') {
      this.setState({
        expression: event.target.value
      });
    }
  }

  render() {
    return(
      <div>
        <input
          type='text'
          onKeyPress={this.reCalValue.bind(this)}
        />
        <h2>{eval(this.state.expression)}</h2>
      </div>
    )
  }
}

export {Evaluator}
