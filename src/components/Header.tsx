
import styles from "./header.module.css";

const Header = ({ heading, descr }) => {

  return (
    <>
      <h1 className={styles.heading}>{heading}</h1>
      <p className={styles.descr}>{descr}</p>
    </>
  );
};

export default Header;
