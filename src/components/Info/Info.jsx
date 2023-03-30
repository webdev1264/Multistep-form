import { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../Header";
import Button from "../Navigation/Button";
import { nextStep } from "../../features/stepSlice";
import styles from "./info.module.css";

const Info = ({ info, setInfo }) => {
  const [isValidated, setIsValidated] = useState({
    name: true,
    email: true,
    tel: true,
  });
  const dispatch = useDispatch();

  const validation = ({ name, email, tel }) => {
    if (!name) {
      name = false;
    }
    if (!email.includes("@")) {
      email = false;
    }
    if (!tel) {
      tel = false;
    }
    return { name, email, tel };
  };

  const handleCheckValidation = (e) => {
    e.preventDefault();
    const validationResult = validation(info);
    setIsValidated(validationResult);
    if (!Object.values(validationResult).includes(false)) {
      dispatch(nextStep());
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
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
        onSubmit={(e) => {
          handleCheckValidation(e);
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
            onChange={handleOnChange}
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
            onChange={handleOnChange}
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
            onChange={handleOnChange}
            value={info.tel}
          />
        </label>
        <div className={styles.btnWrapper}>
          <Button />
        </div>
      </form>
    </div>
  );
};

export default Info;
