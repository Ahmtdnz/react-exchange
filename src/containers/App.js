import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {children} = this.props;
    return (
      <div>
        <header className="block-header bg-primary">
            <div className="nav-header pull-left">
              <span className="brand-logo m-t-10 link-effect">
                <div className="clearfix navigation-menu pull-right m-l-50">
                </div>
              </span>
            </div>
            <div className="clearfix navigation-menu pull-right">
              <a className="link-effect" href="#"> </a>
            </div>
        </header>
        {children}
      </div>
    )
  }
}
