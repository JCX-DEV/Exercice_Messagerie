import React, { Component } from "react";
import PropTypes from "prop-types";
import Icons from "../Assets/icons.svg"

class Icon extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    fill: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
  };

  static defaultProps = {
    id: null,
    fill: "white",
    width: "25px",
    height: "25px"
  };

  render() {
    return this.props.id ? (
      <svg width={this.props.width} height={this.props.height} fill={this.props.fill}>
        <use xlinkHref={`${Icons}#${this.props.id}`}/>
      </svg>
    ) : null;  
  }
}

export default Icon;
