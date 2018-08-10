import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CheckBox extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selection: ['first']
    };
  }

  handleChange(event) {
    console.log(this.state.selection);
    var selection = this.state.selection;
    var position = selection.indexOf(event.target.value);
    if (position === -1) {
      selection.push(event.target.value);
    } else {
      selection.splice(position, 1);
    }
    this.setState({selection: selection});
    console.log(this.state);
  };

  // handleChange(event) {
  //   console.log(event.target.value);
  //   this.setState({selection: event.target.value});
  // }

  render() {
    return(
      <div>いくつでも選んでください
      <div><input
        type='checkbox'
        value='first'
        checked={this.state.selection.indexOf('first') !== -1}
        onChange={this.handleChange.bind(this)}
      />最初の選択肢</div>
      <div><input
        type='checkbox'
        value='secound'
        checked={this.state.selection.indexOf('secound') !== -1}
        onChange={this.handleChange.bind(this)}
      />二番目の選択肢</div>
      <div><input
        type='checkbox'
        value='third'
        checked={this.state.selection.indexOf('third') !== -1}
        onChange={this.handleChange.bind(this)}
      />三番目の選択肢</div>
      </div>
    );
  }
}
//   render() {
//     return (<div>どれか一つ選んでください：
//       <select
//         onChange={this.handleChange.bind(this)}
//         multiple={true}
//         value={this.state.selection}
//         size='3'>
//         <option value='first'>最初の選択肢</option>
//         <option value='secound'>次の選択肢</option>
//         <option value='third'>最後の選択肢</option>
//       </select></div>
//     )
//   }
// }

export {CheckBox};
