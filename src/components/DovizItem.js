import React from 'react';
import  { Router, Route, Link, browserHistory } from 'react-router';

export default class DovizItem extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
      var src = `../../static/img/${this.props.code}.png`
      var tutar = (this.props.selectedItem / this.props.selling) * this.props.tutar;
      return(
          <tr>
            <td><img src={src} /></td>
            <td>
              <div className="m-b-5">{this.props.full_name}</div>
              <div className="label label-info">{parseFloat(this.props.selling.toFixed(4))}</div>
            </td>
            <td>{parseFloat(tutar.toFixed(4))} {this.props.code}</td>
          </tr>
      )
  }
}
