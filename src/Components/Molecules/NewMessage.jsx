import React, { Component } from "react";
import PropTypes from "prop-types";
import "./NewMessage.scss";
import Icon from "../Atoms/Icon.jsx";
import Toggle from "../Atoms/Toggle.jsx";

class NewMessage extends Component {
  static propTypes = {
    contact: PropTypes.string,
    maxSize: PropTypes.number,
    postFunction: PropTypes.func
  };

  static defaultProps = {
    contact: "",
    maxSize: 300,
    postFunction: null
  };

  constructor(props) {
    super(props);

    this.state = {
      content: "",
      private: false
    };
  }

  getContentChecked = () => {
    return this.state.content && this.state.content !== "";
  };

  handleChange = (event) => {
    this.setState({
      content: event.target.value
    });
  };

  handleClick = (event) => {
    this.setState({
      private: !this.state.private
    });
  };

  handleSubmit = (event) => {
    if (this.props.postFunction && this.getContentChecked()) {
      this.props.postFunction(this.state.content, this.state.private);
    }
    this.setState({ content: "", private: false });
  };

  render() {
    return (
      <div className="new-message">
        <div className="new-message-form">
          <div className="new-message-ribbon">
            <div className="new-message-to">{`Ecrire un message ${
              this.state.private ? "privé" : "public"
            }`}</div>
            <div className="ribbon-right">
              <Toggle
                label={"Message privé"}
                value={this.state.private}
                onClick={this.handleClick}
              />
            </div>
          </div>
          <textarea
            className="input-msg"
            placeholder="Saissez votre message"
            maxLength={this.props.maxSize}
            value={this.state.content}
            onChange={this.handleChange}
          />
          <div className="new-message-submit">
            <div className="new-message-control">
              {`Nombre de caractères : ${this.state.content.length}/${this.props.maxSize}`}
            </div>
            <div
              className={`submit-label submit-label${
                this.getContentChecked() ? "-enabled" : "-disabled"
              }`}
            >
              {`Publier`}
            </div>
            <div
              className={`submit-button submit-button${
                this.getContentChecked() ? "-enabled" : "-disabled"
              }`}
              onClick={this.handleSubmit}
            >
              <Icon fill={null} height="25px" width="20px" id="SEND" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewMessage;
