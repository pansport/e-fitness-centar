import React from "react";
import styles from "./Home.module.css";
import banner from "../../images/banner.jpg";
import footer from "../../images/footer.jpg";
import HomeList from "../../components/HomeList/HomeList";

export default function Home() {
  return (
    <>
      <div className={styles["banner-container"]}>
        <img src={banner} alt="banner image" className={styles.banner} />
      </div>
      <HomeList />
      <div
        className={styles.numbers}
        style={{ backgroundImage: `url(${footer})` }}
      >
        <div className={styles["numbers-info"]}>
          <span>700</span>
          <p>KVADRATNIH METARA</p>
        </div>
        <div className={styles["numbers-info"]}>
          <span>200</span>
          <p>SPRAVA ZA VEŽBANJE</p>
        </div>
        <div className={styles["numbers-info"]}>
          <span>2</span>
          <p>SAUNE</p>
        </div>
        <div className={styles["numbers-info"]}>
          <span>15</span>
          <p>LIČNIH TRENERA</p>
        </div>
      </div>
      <div className={styles.motivation}>
        <div className={styles["motivation-container"]}>
          <span>WAKE UP</span>
          <span>WORK OUT</span>
          <span>LOOK HOT</span>
          <span>KICK ASS</span>
        </div>
      </div>
    </>
  );
}
