import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: FunctionComponent = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.messageframeParent}>
        <button className={styles.messageframe}>
          <div className={styles.messageFrame}>
            <div className={styles.swapText}>/Swap</div>
          </div>
        </button>
        <div className={styles.frameContainer}>
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
            <div className={styles.toInitiateASwapEnterTheWrapper}>
              <div className={styles.toInitiateAContainer}>
                <p
                  className={styles.toInitiateA}
                >{`To initiate a swap, enter the Contract Address of the Token you’d like to swap to. You can use Swaps’ Token Contract Address to get started: `}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
