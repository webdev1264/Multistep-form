import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../Header";
import Button from "../Navigation/Button";
import { nextStep } from "../../features/stepSlice";
import styles from "./info.module.css";
import { InitialInfo } from "../../types/interfaces";

interface InfoProps {
  info: InitialInfo;
  infoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface InitialValidation {
  [key: string]: boolean;
}

const Info = ({ info, infoChange }: InfoProps) => {
  const [isValidated, setIsValidated] = useState<InitialValidation>({
    name: true,
    email: true,
    tel: true,
  });
  const dispatch = useDispatch();

  const validation = ({ name, email, tel }: InitialInfo) => {
    let nameValidation: boolean = false;
    let emailValidation: boolean = false;
    let telValidation: boolean = false;
    if (name) {
      nameValidation = true;
    }
    if (email.includes("@")) {
      emailValidation = true;
    }
    if (tel) {
      telValidation = true;
    }
    return { name: nameValidation, email: emailValidation, tel: telValidation };
  };

  const handleCheckValidation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationResult = validation(info);
    setIsValidated(validationResult);
    if (!Object.values(validationResult).includes(false)) {
      dispatch(nextStep());
    }
  };

  return (
    <div className={styles.container}>
      <Header
        heading="Personal info"
        descr="Please provide your name, email address and phone number."
      />
      <form onSubmit={handleCheckValidation}>
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
            onChange={infoChange}
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
            onChange={infoChange}
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
            onChange={infoChange}
            value={info.tel}
          />
        </label>
        <div className={styles.btnWrapper}>
          <Button disable={true} />
        </div>
      </form>
    </div>
  );
};

export default Info;
