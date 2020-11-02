import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Header.scss";
import Icon from "../Atoms/Icon.jsx";
import Select from "../Atoms/Select.jsx";

class Header extends Component {
  static propTypes = {
    user: PropTypes.string,
    users: PropTypes.array,
    annonce: PropTypes.string,
    annonces: PropTypes.array,
    selectUser: PropTypes.func,
    selectAnnonce: PropTypes.func,
    reset: PropTypes.func
  };

  static defaultProps = {
    user: "",
    users: [],
    annonce: "",
    annonces: [],
    selectUser: null,
    selectAnnonce: null,
    reset: null
  };

  render() {
    return (
      <div className="header">
        <div className="header-select">
          <div className="header-icon">
            <Icon id="USER" />
          </div>
          <Select
            selected={this.props.user}
            menu={this.props.users}
            onChange={this.props.selectUser}
          />
        </div>
        <div className="header-select">
          <div className="header-icon">
            <Icon id="BUILD" />
          </div>
          <Select
            selected={this.props.annonce}
            menu={this.props.annonces}
            onChange={this.props.selectAnnonce}
          />
        </div>
        <div className="header-refresh" onClick={this.props.reset}>
          <div className="icon-refresh">
            <Icon
              fill={"#FF6E14"}
              width={"20px"}
              height={"20px"}
              id="REFRESH"
            />
          </div>
          <div className="header-refresh-caption">{`RESET`}</div>
        </div>
      </div>
    );
  }
}

export default Header;
