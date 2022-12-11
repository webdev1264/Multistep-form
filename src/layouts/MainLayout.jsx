import Menu from "../components/Menu";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={styles.container}>
      <Menu />
    </div>
  );
};

export default MainLayout;
