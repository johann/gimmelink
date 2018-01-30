import React, { Component } from "react";
import "./LinkContainer.css";
import LinkRedirectPage from "../components/LinkRedirectPage";
import LinkForm from "../components/LinkForm";
import LinkDetail from "../components/LinkDetail";
import { createLink } from "../services/link";
import { Route, Switch } from "react-router-dom";

class LinkContainer extends Component {
  state = {
    word: "",
    link: ""
  };

  addLink = link => {
    console.log(link);
    //
    createLink(link, (word, savedLink) => {
      console.log(word, savedLink);
      this.setState({
        word,
        link: savedLink
      });
    });
  };

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div className="link-form">
                  <LinkForm onAddLink={this.addLink} />
                  <div className="link-detail">
                    {this.state.word && this.state.link ? (
                      <LinkDetail {...this.state} />
                    ) : null}
                  </div>
                </div>
              );
            }}
          />
          <Route
            path="/:link"
            render={props => {
              const { link } = props.match.params;
              return <LinkRedirectPage {...props} link={link} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default LinkContainer;
