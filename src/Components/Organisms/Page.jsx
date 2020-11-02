import React, { Component } from "react";
import PropTypes from "prop-types";
import Annonce from "../Molecules/Annonce.jsx";
import MessageViewer from "./MessageViewer.jsx";
import "./Page.scss";

class Page extends Component {
  static propTypes = {
    user: PropTypes.string,
    annonce: PropTypes.object,
    messages: PropTypes.array,
    postMessage: PropTypes.func
  };

  static defaultProps = {
    user: "",
    annonce: null,
    messages: [],
    postMessage: null
  };

  render() {
    return (
      <div className="page">
        <div className="message-header">
          <Annonce
            id={this.props.annonce.id}
            author={this.props.annonce.author}
            date={this.props.annonce.date}
            title={this.props.annonce.object}
            text={this.props.annonce.text}
          />
        </div>
        <div className="echange-viewer">
          <MessageViewer
            key={`${this.props.annonce}-${this.props.user}`}
            contact={this.props.annonce.author}
            echange={this.props.messages}
            sendMessage={
              this.props.postMessage
                ? (text, confidential) => {
                    this.props.postMessage(text, confidential);
                  }
                : null
            }
          />
        </div>
      </div>
    );
  }
}

export default Page;
