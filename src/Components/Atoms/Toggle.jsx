import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./Toggle.scss";

class Toggle extends Component {
  static propTypes = {
    value: PropTypes.bool,
    label: PropTypes.string
  };

  static defaultProps = {
    value: false,
    label: ""
  };

  render() {
    return (
      <Fragment>
        {this.props.label && this.props.label !== "" ? (
          <span
            onClick={this.props.onClick}
            className={`toggle-label toggle-label${
              this.props.value ? "-on" : "-off"
            }`}
          >
            {this.props.label}
          </span>
        ) : null}
        <div className="toggle" onClick={this.props.onClick}>
          <div
            className={`toggle-background toggle-background${
              this.props.value ? "-on" : "-off"
            }`}
          >
            <div
              className={`toggle-input toggle-input${
                this.props.value ? "-on" : "-off"
              }`}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Toggle;
