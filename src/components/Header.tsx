import React from "react";
import styles from "./header.module.css";

interface HeaderProps {
  heading: string;
  descr: string;
}

const Header: React.FC<HeaderProps> = ({ heading, descr }) => {
  return (
    <>
      <h1 className={styles.heading}>{heading}</h1>
      <p className={styles.descr}>{descr}</p>
    </>
  );
};

export default Header;
