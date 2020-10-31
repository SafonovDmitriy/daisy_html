import React from "react";
import s from "./MenuHeader.module.css";
const MenuHeader = () => {
  const menuItems = [
    { title: "about" },
    { title: "portfolio" },
    { title: "services" },
    { title: "contact" },
  ];
  return (
    <ul className={s.container}>
      {menuItems.map((item, idx) => {
        return (
          <li key={"navItem-" + idx}>
            <a href={`/${item.title}`}>{item.title}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuHeader;
