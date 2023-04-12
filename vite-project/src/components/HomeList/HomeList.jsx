import React from "react";
import styles from "./HomeList.module.css";
import one from "../../images/1.jpg";
import two from "../../images/2.jpg";
import three from "../../images/3.jpg";
import four from "../../images/4.jpg";

export default function HomeList() {
  return (
    <div className={styles.homelist}>
      <div className={styles["homelist-container"]}>
        <div className={styles["homelist-item-container"]}>
          <div className={styles["text-container"]}>
            <h3>TRENIRAJ PAMETNO</h3>
            <p>
              Ukoliko niste sigurni odakle da počnete ili koji vid treniranja
              ili vrstu treninga da odaberete – Imamo rešenje! Program TRAIN
              SMART je osmišljen sa ciljem da svim našim članovima omogući
              bezbedno i efikasno dostizanje trenažnog cilja, bilo da vežbaju
              samostalno ili u grupi. Jedino adekvatnim i efektivnim
              upražnjavanjem fizičke aktivnosti možemo da kažemo da je vežbanje
              lek i da se na taj način može smanjiti rizik od nastanka brojnih
              nezaraznih oboljenja ili smanje tegobe uzrokovane... Pročitaj ceo
              tekst
            </p>
          </div>
          <img src={one} alt="" className={styles.image} />
        </div>
        <div className={styles["homelist-item-container"]}>
          <img src={two} alt="" className={styles.image} />
          <div className={styles["text-container"]}>
            <h3>UNAPREDI SVOJ TRENING</h3>
            <p>
              Za sve naše članove, bilo da vežbaju samostalno ili u grupi nudimo
              savetovanje sa personalnim trenerima svakog ponedeljka i srede u
              terminu od 17:00 do 21:00. Cilj ove usluge je da preciznije
              odgovorimo na vaše potrebe i da vam omogućimo bezbednije vežbanje.
              Tim naših personalnih trenera će se potruditi da odgovori na vaša
              pitanja i da vam ukaže na efikasnije metode treninga i trenažne
              sadržaje.
            </p>
          </div>
        </div>
        <div className={styles["homelist-item-container"]}>
          <div className={styles["text-container"]}>
            <h3>RADIONICA ZDRAVLJA</h3>
            <p>
              Još jedan u nizu projekata E Fitnes Centra koji ima za cilj da
              ukaže na važnost redovnog učešća u fizičkoj aktivnosti i
              adekvatnog režima ishrane jesu Radionice zdravlja. Jednom na svaka
              dva meseca, organizujemo radionice na kojima ćemo pričati o novim
              trendovima, saznanjima i smernicama vodećih svetskih organizacija
              iz oblasti fizičkog vežbanja i zdravlja. Ulaz je otvoren za sve
              zainteresovane.
            </p>
          </div>
          <img src={three} alt="" className={styles.image} />
        </div>
        <div className={styles["homelist-item-container"]}>
          <img src={four} alt="" className={styles.image} />
          <div className={styles["text-container"]}>
            <h3>E-FITNESS LABORATORIJA</h3>
            <p>
              Zadatak E Fitness Laboratorije je da kroz nekoliko oblasti
              delovanja postane pouzdan partner svim organizacijama koje za cilj
              imaju promociju fizičke aktivnosti i pravilnog režima ishrane
              osoba oba pola i svih uzrasta. Članovi našeg tima svoju delatnost
              sprovode kroz utvrđivanje faktora povezanih sa zdravljem,
              određivanjem vrste fizičke aktivnosti i režima ishrane za
              različite trenažne ciljeve, a sve u saradnji sa Savezom za
              Rekreaciju i Fitnes Vojvodine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
