import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import localization from "moment/locale/fr";
import "./Message.scss";
import User from "./User.jsx";
import Icon from "../Atoms/Icon.jsx";

class Message extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    sender: PropTypes.string,
    private: PropTypes.bool,
    date: PropTypes.string,
    text: PropTypes.string
  };

  static defaultProps = {
    id: "",
    sender: "",
    private: false,
    date: "",
    text: ""
  };

  renderPrivateRibbon = () => {
    return this.props.private ? (
      <div className="private-ribbon">
        <Icon id="LOCK" fill={"#FF6E14"} width={"15px"} height={"15px"} />
        <span className="private-label">{"Message privé"}</span>
      </div>
    ) : null;
  };

  render() {
    return (
      <div
        className={`message ${
          this.props.private ? "message-prive" : "message-public"
        }`}
      >
        <User contact={this.props.sender} />
        {this.renderPrivateRibbon()}
        <div className="message-content">
          {this.props.text.split("\n").map((textLine, index) => (
            <div key={`${this.props.id}-${index}`} className={`message-line`}>
              {textLine}
            </div>
          ))}
        </div>
        <div className="message-horodate">
          {`le ${moment(this.props.date)
                .locale("fr", localization)
                .format("L")} à ${moment(this.props.date)
                .locale("fr", localization)
                .format("LT")}`
          }
        </div>
      </div>
    );
  }
}

export default Message;
