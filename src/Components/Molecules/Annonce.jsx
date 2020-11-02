import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Annonce.scss";
import moment from "moment";
import localization from "moment/locale/fr";
import Icon from "../Atoms/Icon.jsx";

class Annonce extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    author: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string    
  };

  static defaultProps = {
    id: "",
    author: "",
    title: "",
    date: "",
    text: ""
  };

  render() {
    let date = moment(this.props.date).locale("fr", localization).format("L");
    return (
      <div className={`annonce`}>
        <div className="annonce-image">
          <Icon id="BUILD" fill={"#919191"} />
        </div>
        <div className="annonce-content">
          <div className="annonce-info">
            <div className="annonce-title">{this.props.title}</div>
            <div className="annonce-horodate">
              {`Publiée par ${this.props.author} le ${date}`}
            </div>
          </div>
          <div className="annonce-text">
            {this.props.text.split("\n").map((line, index) => (
              <div
                key={`${this.props.id}-${index}`}
                className="annonce-text-line"
              >
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Annonce;
