import { useSelector, useDispatch } from "react-redux";
import { addAddon, removeAddon } from "../../features/selectionSlice";
import styles from "./addons.module.css";

const Addon = ({ id, addon, billing }) => {
  const selection = useSelector((state) => state.selection);
  const dispatch = useDispatch();
  const isSelected = selection.addonIds.includes(id);
  const handleChange = () => {
    isSelected ? dispatch(removeAddon(id)) : dispatch(addAddon(id));
  };
  return (
    <label
      className={
        isSelected ? `${styles.wrapper} ${styles.selected}` : styles.wrapper
      }
    >
      <input type="checkbox" onChange={handleChange} checked={isSelected} />
      <span className={styles.checkmark}></span>
      <div className={styles.descrWrapper}>
        <h2 className={styles.header}>{addon.name}</h2>
        <p className={styles.descr}>{addon.descr}</p>
      </div>
      <div className={styles.price}>
        {`+$${addon.price}/${billing ? "mo" : "yr"}`}
      </div>
    </label>
  );
};

export default Addon;