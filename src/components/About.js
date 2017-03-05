import React from 'react';

export default class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      fullname: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h3>{this.state.fullname}</h3>
        <input
          type="password"
          value={this.state.fullname}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
