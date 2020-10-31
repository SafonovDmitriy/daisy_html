import React from "react";
import Logo from "./../../../elements/logo/Logo";

import s from "./Header.module.css";
import MenuHeader from "./../../../elements/MenuHeader/MenuHeader";
const Header = () => {
  return (
    <div className={s.container} >
      <Logo content="d" className={s.logo} />
      <MenuHeader className={s.navbar} />
    </div>
  );
};

export default Header;
