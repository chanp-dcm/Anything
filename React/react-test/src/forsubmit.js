import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ForSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: this.props.selection
    }
  }

  handleChange(event) {
    var selection = this.state.selection
    var position = selection.indexOf(event.target.value)
    if (event.target.checked) {
      selection.push(event.target.value)
    } else {
      selection.splice(position, 1)
    }
    this.setState({selection: selection})
  };

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.selection.length < 2) {
      return;
    }
    console.log('Submitting：', this.state.selection)
    this.setState({selection: []})
  };

  render() {
    return(<form onSubmit={this.handleSubmit.bind(this)}>２つ以上を選んでください：
        <div>
          <input
            type='checkbox'
            value='first'
            checked={this.state.selection.indexOf('first') !== -1}
            onChange={this.handleChange.bind(this)}
          />最初の選択肢
        </div>
        <div>
          <input
            type='checkbox'
            value='secound'
            checked={this.state.selection.indexOf('secound') !== -1}
            onChange={this.handleChange.bind(this)}
          />次の選択肢
        </div>
        <div>
          <input
            type='checkbox'
            value='third'
            checked={this.state.selection.indexOf('third') !== -1}
            onChange={this.handleChange.bind(this)}
          />最後の選択肢
        </div>
        <input type='submit' value='決定'　/>
      </form>)
  }
}

export {ForSubmit}
