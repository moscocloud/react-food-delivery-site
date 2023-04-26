import styles from "./Header.module.css";
import React from "react";
import rollsImage from "../../assets/rolls.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Япона Кухня</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={rollsImage} alt="Роллы" />
      </div>
    </React.Fragment>
  );
};

export default Header;
