import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        <div className="ui ordered steps">
          <div className="step">
            <div className="content">
              <div className="title">Enter your link</div>
            </div>
          </div>
          <div className="step">
            <div className="content">
              <div className="title">Get shortened link</div>
            </div>
          </div>
          <div className="step">
            <div className="content">
              <div className="title">Send out link</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
