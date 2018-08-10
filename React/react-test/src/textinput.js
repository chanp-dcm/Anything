import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dispText: '入力欄'
    }
  }
　　　　
  handleInput(event) {
    this.setState({
      dispText: event.target.value
    })
  }　　

  render() {
    return (
      <div>InputText:
        <input
          type='text'
          value={this.state.dispText}
          onChange={this.handleInput.bind(this)}
        />
        <h2>{this.state.dispText}</h2>
      </div>
    )
  }
}

export {TextInput}
