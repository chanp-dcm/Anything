import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TextArea extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dispText: this.props.dispText
    };
  }

  handleInput(event) {
    this.setState({dispText: event.target.value})
    console.log(this.state.dispText);
  }

  render() {
    return (<div>何か入力してください：
      <textarea
        value={this.state.dispText}
        onChange={this.handleInput.bind(this)}
        rows='3'
      />
    </div>);
  }

}

ReactDOM.render(
  <TextArea dispText='未編集'/>,
  document.getElementById('content')
)

export {TextArea};
