import React from 'react';

export default class Input extends React.Component {
  constructor(props){
    super(props);
  }

  getText() {
    return this.refs.input.value;
  }

  render(){
      return(
        <div className={this.props.className}>
          <label htmlFor={this.props.name}>{this.props.label}</label>
          <input
            ref="input"
            className="form-control"
            onChange={this.props.inputChange}
            onKeyPress={this.props.onKeyPress}
            type={this.props.type}
            id={this.props.id}
            name={this.props.name}
            placeholder={this.props.placeholder}
            value={this.props.value}
            defaultValue={this.props.defaultValue}
            disabled={this.props.disabled}/>
        </div>
      )
  }
}
