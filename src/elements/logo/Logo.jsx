import React, { Component } from "react";
import s from "./Logo.module.css";
class Logo extends Component {
  render() {
    return (
      <a href="/">
        <div className={s.container}>
          <div className={s.logo}>{this.props.content}</div>
          <h3 className={s.container__title}>Daisy</h3>
        </div>
      </a>
    );
  }
}

export default Logo;
