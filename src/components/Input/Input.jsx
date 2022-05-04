import React from 'react';

export default class Input extends React.Component {
  handleChange = (e) => {
    const value = e.target.value;
    this.props.onChange(value);
  }

  render() {
    const { type, value } = this.props;

    return (
      <input type={type} onChange={this.handleChange} />
    )
  }
}