import React, { Component } from "react";
import { findLink } from "../services/link";
import { Link } from "react-router-dom";
class LinkRedirect extends Component {
  state = {
    found: true
  };
  componentDidMount() {
    console.log(this.props);
    const { link } = this.props;

    findLink(link, (status, data) => {
      if (status) {
        console.log("status", status, "data", data);

        window.location.replace(data.link);
      } else {
        // 404
        this.setState({
          found: false
        });
      }
    });
  }

  render() {
    console.log(this.props, this.state);
    return (
      <div>
        {this.state.found ? (
          <div className="ui icon message">
            <i className="notched circle loading icon" />
            <div className="content">
              <div className="header">Just one second</div>
              <p>We're redirecting you .</p>
            </div>
          </div>
        ) : (
          <div className="ui icon message">
            <i className="window closeicon" />
            <div className="content">
              <div className="header">This link is inactive</div>
              <p>
                <Link to="/new">Create a new link</Link>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default LinkRedirect;
