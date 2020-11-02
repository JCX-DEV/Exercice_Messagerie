import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MessageViewer.scss";
import Message from "../Molecules/Message.jsx";
import NewMessage from "../Molecules/NewMessage.jsx";

class MessageViewer extends Component {
  static propTypes = {
    contact: PropTypes.string,
    echange: PropTypes.array,
    sendMessage: PropTypes.func
  };

  static defaultProps = {
    contact: "",
    echange: [],
    sendMessage: null
  };

  render() {
    return (
      <div className="message-viewer">
        <div className="message-editor">
          <NewMessage
            key={this.props.contact}
            contact={this.props.contact}
            postFunction={this.props.sendMessage}
          />
        </div>
        <div className="message-flow">
          {this.props.echange.map((message) => (
            <Message
              key={message.id}
              id={message.id}
              date={message.date}
              sender={message.sender}
              text={message.text}
              private={message.private}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MessageViewer;
