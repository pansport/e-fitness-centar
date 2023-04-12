import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img src={logo} alt="Logo image" className={styles["logo-img"]} />
      </Link>
      <div className={styles["links-container"]}>
        <Link to="/" className={styles.link}>
          POČETNA
        </Link>
        <Link to="/promotions" className={styles.link}>
          PROMOCIJE
        </Link>
        <Link to="/" className={styles.link}>
          PT
        </Link>
        <Link to="/" className={styles.link}>
          USLUGE
        </Link>
        <Link to="/" className={styles.link}>
          NAŠ TIM
        </Link>
        <Link to="/" className={styles.link}>
          GALERIJA
        </Link>
        <Link to="/" className={styles.link}>
          KONTAKT
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
