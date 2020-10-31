import React from "react";
import Header from "./../../components/components/Header/Header";
import MainScreen from "./../../components/components/MainScreen/MainScreen";
import s from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <div>
        <div className={s.mainScreen_container}>
          <Header className={s.header}/>
          <MainScreen />
        </div>
      </div>
    </div>
  );
};

export default Home;
