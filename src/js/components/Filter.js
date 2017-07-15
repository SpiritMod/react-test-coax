import React, { Component } from 'react';
import FilterField from './../components/FilterField';

export default class Filter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterArr: []
    };
  };

  addFilterEl = key => {
    const filterArr = [...this.state.filterArr, key];

    this.setState({filterArr});
    this.props.filterUpdate(filterArr);
  };

  removeFilterEl = key => {
    const filterArr = this.state.filterArr.filter(el => key !== el);
    this.setState({filterArr});

    this.props.filterUpdate(filterArr);
  };

  handleFilterUpdate = (key) => {
    key.active ? this.addFilterEl(key.id) : this.removeFilterEl(key.id);
  };

  render () {
    const fields = this.props.data;

    return (
      <div className="block-filter">
        {
          fields.map((label) => {
            return (
              <div className="field-filter" key={label}>
                <FilterField data={label} updateActive={this.handleFilterUpdate} />
              </div>
            )
          })
        }
      </div>
    )
  }
}

