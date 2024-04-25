import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.hudWrapper}>
      <div className={styles.hud}>
        <div className={styles.balance}>
          <i className={styles.sendButtonInstance}>$100,000</i>
        </div>
        <div className={styles.receiveButtonInstance}>
          <div className={styles.frameParent}>
            <div className={styles.balancepnlWrapper}>
              <div className={styles.balancepnl}>
                <b className={styles.b}>{`+$24040       `}</b>
              </div>
            </div>
            <div className={styles.dailypctchg}>
              <b className={styles.b1}>+2300%</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
