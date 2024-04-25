import { FunctionComponent } from "react";
import styles from "./FrameComponent21.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.avatariconWrapper}>
            <div className={styles.avataricon}>
              <div className={styles.ellipse} />
              <img
                className={styles.ethereumIcon}
                loading="lazy"
                alt=""
                src="/ethereum@2x.png"
              />
            </div>
          </div>
          <div className={styles.recipientsWalletAddress}>
            Recipient's Wallet Address: Enter the wallet address of the person
            you're sending crypto to.
          </div>
        </div>
        <div className={styles.messageFrameWrapper}>
          <div className={styles.messageFrame}>
            <div className={styles.swapText}>
              <p className={styles.x8e91b87d6f5a281f1d5f2e2a1bd43}>
                0x8e91b87D6F5A281f1D5f2e2a1bD4304a85dC4b3E
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.avatariconParent}>
          <div className={styles.avataricon1}>
            <div className={styles.ellipse1} />
            <img
              className={styles.ethereumIcon1}
              loading="lazy"
              alt=""
              src="/ethereum@2x.png"
            />
          </div>
          <div className={styles.amountSpecifyTheContainer}>
            <p className={styles.amountSpecifyThe}>
              Amount: Specify the amount of crypto you wish to send.
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
          </div>
        </div>
        <div className={styles.messageframe}>
          <div className={styles.messageFrame1}>
            <div className={styles.swapText1}>25</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
