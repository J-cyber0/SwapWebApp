import { FunctionComponent } from "react";
import styles from "./HUD.module.css";

const HUD: FunctionComponent = () => {
  return (
    <div className={styles.hud}>
      <div className={styles.balance}>
        <i className={styles.messageInputBox}>$100,000</i>
      </div>
      <div className={styles.commandsListInstance}>
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
  );
};

export default HUD;
