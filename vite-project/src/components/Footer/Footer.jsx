import React from "react";
import styles from "./Footer.module.css";
import logo from "../../images/logo-black.png";
import { Link } from "react-router-dom";
import { BsInstagram, BsGoogle } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <div className={styles["footer-container"]}>
        <img
          src={logo}
          alt="footer logo image"
          className={styles["footer-logo"]}
        />
        <div className={styles["footer-navigation"]}>
          <h5>NAVIGACIJA</h5>
          <Link to="/">Pocetna</Link>
          <Link to="/promotions">Promocije</Link>
          <Link to="/">PT</Link>
          <Link to="/">Usluge</Link>
          <Link to="/">Nas tim</Link>
          <Link to="/">Galerija</Link>
          <Link to="/">Kontakt</Link>
        </div>
        <div className={styles["footer-info"]}>
          <div className={styles["footer-icons"]}>
            <BsInstagram />
            <BsGoogle />
          </div>
          <p>21000 Novi Sad Novosadskog Sajma 2, 11 sprat</p>
          <p>Facebook: @ E fitnes centar</p>
          <p>Instagram: @e.fitness.centar</p>
          <p>Phone: 0213004771</p>
          <p>E-mail: office@efitnesscentar.rs</p>
          <p>E Fitnes Perform Phone: 0213027470</p>
        </div>
      </div>
    </footer>
  );
}
