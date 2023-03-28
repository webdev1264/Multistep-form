import styles from "./addons.module.css";

const Addon = ({ id, addon, billing, addAddon, removeAddon, selection }) => {
  const isSelected = selection.addonIds.includes(id);
  console.log(isSelected);
  const handleChange = () => {
    isSelected ? removeAddon(id) : addAddon(id);
  };
  return (
    <label
      className={
        isSelected ? `${styles.wrapper} ${styles.selected}` : styles.wrapper
      }
    >
      <input
        type="checkbox"
        onChange={handleChange}
        checked={isSelected}
      />
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
