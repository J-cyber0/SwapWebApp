import { FunctionComponent } from "react";
import styles from "./SplashPage.module.css";

const SplashPage: FunctionComponent = () => {
  return (
    <div className={styles.splashPage}>
      <div className={styles.swap}>
        <i className={styles.swap1}>Swap</i>
      </div>
    </div>
  );
};

export default SplashPage;
