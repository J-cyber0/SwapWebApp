import { FunctionComponent } from "react";
import styles from "./FrameComponent23.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.messageframeParent}>
        <button className={styles.messageframe}>
          <div className={styles.messageFrame}>
            <div className={styles.avatarIconRound}>/Receive</div>
          </div>
        </button>
        <div className={styles.ethereumWalletLabel}>
          <div className={styles.inputBoxCommands}>
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
            <h2 className={styles.receivingCryptoBeforeContainer}>
              <p className={styles.receivingCrypto}>📤 Receiving Crypto</p>
              <p className={styles.beforeWeProceed}>
                Before we proceed, let's clarify the base currency you'll be
                using for the transaction:
              </p>
              <p className={styles.baseCurrencyPlease}>
                Base Currency: Please specify the cryptocurrency you'll be
                sending (e.g., $SOL, $ETH, etc.).
              </p>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
