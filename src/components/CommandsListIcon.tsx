import { FunctionComponent } from "react";
import styles from "./CommandsListIcon.module.css";

const CommandsListIcon: FunctionComponent = () => {
  return (
    <div className={styles.commandsListIcon}>
      <div className={styles.messageframeWrapper}>
        <button className={styles.messageframe}>
          <div className={styles.messageFrame}>
            <div className={styles.swapText}>$SOL</div>
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
        <div className={styles.solanaWalletAddress0x8e91bWrapper}>
          <div className={styles.solanaWalletAddressContainer}>
            <p className={styles.solanaWalletAddress}>
              Solana Wallet Address: 0x8e91b87D6F5A281f1D5f2e2a1bD4304a85dC4b3E
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.toReceiveSol}>
              To Receive $SOL, You must Send $SOL to the Wallet Address:
              0x8e91b87D6F5A281f1D5f2e2a1bD4304a85dC4b3E
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandsListIcon;
