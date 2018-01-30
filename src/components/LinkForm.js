import React, { Component } from "react";

class LinkForm extends Component {
  state = {
    inputLink: "",
    inputExpiration: 5
  };

  handleInput = e => {
    this.setState({
      inputLink: e.target.value
    });
  };

  handleExpireChange = e => {
    console.log(e.target.value);
    this.setState({
      inputExpiration: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);
    const obj = {
      link: this.state.inputLink,
      expiration: this.state.inputExpiration
    };
    this.props.onAddLink(obj);
  };

  render() {
    return (
      <div className="ui grid">
        <div className="six wide column" />
        <div className="four wide column">
          <form className="ui form" onSubmit={this.handleSubmit}>
            <div className="field">
              <label>Enter a new link</label>
              <input type="text" onChange={this.handleInput} />
            </div>
            <div className="field">
              <label>Expires in</label>
              <select
                onChange={this.handleExpireChange}
                className="ui fluid dropdown"
              >
                <option value="5">5 minutes</option>
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
              </select>
            </div>
            <input className="ui button" type="submit" value="Add Link" />
          </form>
        </div>
      </div>
    );
  }
}

export default LinkForm;
