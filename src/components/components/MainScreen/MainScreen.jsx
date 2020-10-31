import React from "react";
import s from "./MainScreen.module.css";
import mouse from "../../../Files/Images/mouse.png";
import line from "../../../Files/Images/line.png";

const MainScreen = () => {
  return (
    <div className={s.container}>
      <div className={s.container__title}>
        <span>{`Clients `}</span> <p>{`in your business`}</p>
      </div>
      <div className={s.container__subtitle}>
        <span>Your clients on the internet. Learn how to receive them.</span>
      </div>
      <div className={s.container__button}>
        <div className={s.button__text}>I want clients</div>
        <div className={s.button__mouse}>
          <img src={mouse} alt="" />
          <img src={line} alt="" />
        </div>
      </div>

      <a href="#">
        <div className={s.container__scroll}></div>
      </a>
    </div>
  );
};

export default MainScreen;
