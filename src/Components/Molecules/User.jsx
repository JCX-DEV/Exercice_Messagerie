import React, { Component } from "react";
import PropTypes from "prop-types";
import "./User.scss";
import Icon from "../Atoms/Icon.jsx";

class User extends Component {
  static propTypes = {
    icon: PropTypes.element,
    contact: PropTypes.string
  };

  static defaultProps = {
    icon: null,
    contact: ""
  };

  getUserIcon = () => {
    return this.props.icon ? (
      this.props.icon
    ) : (
      <Icon id="USER" width={"20px"} height={"20px"} />
    );
  };

  render() {
    return (
      <div className={`user`}>
        <div className="user-icon">{this.getUserIcon()}</div>
        <div className="user-info">
          <div className="user-name">{`${this.props.contact}`}</div>
        </div>
      </div>
    );
  }
}

export default User;
