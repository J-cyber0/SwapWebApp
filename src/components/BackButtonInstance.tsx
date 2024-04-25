import { FunctionComponent } from "react";
import styles from "./BackButtonInstance.module.css";

const BackButtonInstance: FunctionComponent = () => {
  return (
    <div className={styles.backButtonInstance}>
      <div className={styles.backbutton}>
        <img
          className={styles.backIcon}
          loading="lazy"
          alt=""
          src="/back@2x.png"
        />
        <div className={styles.backWrapper}>
          <div className={styles.back}>Back</div>
        </div>
      </div>
      <div className={styles.appsettingstextWrapper}>
        <h1 className={styles.appsettingstext}>App Settings</h1>
      </div>
    </div>
  );
};

export default BackButtonInstance;
