import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.backdropForFigmaParent}>
      <div className={styles.backdropForFigma}>
        <button className={styles.messageframe}>
          <div className={styles.messageFrame}>
            <div className={styles.bridgetext}>/Autobuy</div>
          </div>
        </button>
      </div>
      <div className={styles.avatariconParent}>
        <div className={styles.avataricon}>
          <div className={styles.ellipse} />
          <img
            className={styles.ethereumIcon}
            loading="lazy"
            alt=""
            src="/ethereum@2x.png"
          />
        </div>
        <div className={styles.autoBuyActivatedSitTigWrapper}>
          <h2 className={styles.autoBuyActivatedContainer}>
            <p className={styles.autoBuyActivated}>🚀 Auto-Buy Activated! 🚀</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.sitTightWhile}>
              Sit tight while we secure the lowest gas fees for you. Your
              portfolio's about to get a boost! Enter a token address and we'll
              ping you when it's done. Happy swapping! 📈🔒
            </p>
            <p className={styles.blankLine1}>&nbsp;</p>
            <p className={styles.blankLine2}>&nbsp;</p>
            <p className={styles.blankLine3}>&nbsp;</p>
            <p className={styles.blankLine4}>&nbsp;</p>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
