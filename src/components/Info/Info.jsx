import Header from "../Header";
import Button from "../Navigation/Button";
import styles from "./info.module.css";

const Info = ({ info, setInfo, isValidated, checkValidation }) => {
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  return (
    <div className={styles.container}>
      <Header
        heading="Personal info"
        descr="Please provide your name, email address and phone number."
      />
      <form
        onSubmit={(event) => {
          checkValidation(event);
        }}
      >
        <label>
          Name
          {!isValidated.name ? (
            <span className={styles.required}>This field is required</span>
          ) : (
            ""
          )}
          <input
            type="text"
            name="name"
            placeholder="e.g. Stephen King"
            className={!isValidated.name ? styles.invalid : ""}
            onChange={onChangeHandler}
            value={info.name}
          />
        </label>
        <label>
          Email address
          {!isValidated.email ? (
            <span className={styles.required}>This field is required</span>
          ) : (
            ""
          )}
          <input
            type="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            className={!isValidated.email ? styles.invalid : ""}
            onChange={onChangeHandler}
            value={info.email}
          />
        </label>
        <label>
          Phone number
          {!isValidated.tel ? (
            <span className={styles.required}>This field is required</span>
          ) : (
            ""
          )}
          <input
            type="tel"
            name="tel"
            placeholder="e.g. +1 234 567 890"
            className={!isValidated.tel ? styles.invalid : ""}
            onChange={onChangeHandler}
            value={info.tel}
          />
        </label>
        <Button />
      </form>
    </div>
  );
};

export default Info;
