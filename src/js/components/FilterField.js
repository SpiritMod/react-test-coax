import React, { Component } from 'react';

export default class FilterField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  };


  handleChangeActive = (label, event) => {
    const linkActive = !this.state.isActive ? true : false;
    this.setState({
      isActive: !this.state.isActive
    });
    this.props.updateActive({
      id: event.target.id,
      active: linkActive
    });
  };


  render () {
    const data = this.props.data;
    return (
      <a href="#" id={data} className={this.state.isActive ? "active" : ""} onClick={this.handleChangeActive.bind(this, data)}>{data}</a>
    )
  }
}