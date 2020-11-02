import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Select.scss";

class Select extends Component {
  static propTypes = {
    menu: PropTypes.array,
    selected: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    menu: [],
    selected: null,
    onChange: null
  };

  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false
    };
  }

  handleChange = (selection) => {
    this.setState({ displayMenu: false });
    if (this.props.onChange) {
      this.props.onChange(selection);
    }
  };

  getSelectedItem = () => {
    let selected = null;
    if (this.props.menu && this.props.menu.length > 0) {
      let currentItem = this.props.menu.filter(
        (item) => item.id === this.props.selected
      );
      if (currentItem.length > 0) {
        selected = currentItem[0].label;
      }
    }
    return selected;
  };

  render() {
    return (
      <div className="select-container">
        <div
          className="select-box"
          onClick={() =>
            this.setState({ displayMenu: !this.state.displayMenu })
          }
        >
          <div className="select-label">{this.getSelectedItem()}</div>
          <div className="dropdown" />
        </div>
        {this.state.displayMenu ? (
          <div className="select-menu">
            {this.props.menu.map((item) => (
              <div
                key={item.id}
                className={`menu-item ${
                  item.id === this.props.selected ? "menu-item-selected" : ""
                }`}
                onClick={() => this.handleChange(item.id)}
              >
                {item.label}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Select;
