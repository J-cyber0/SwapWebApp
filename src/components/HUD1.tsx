import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./HUD1.module.css";

export type HUDType = {
  /** Style props */
  propMarginLeft?: CSSProperties["marginLeft"];
};

const HUD: FunctionComponent<HUDType> = ({ propMarginLeft }) => {
  const hUDStyle: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  return (
    <div className={styles.hud} style={hUDStyle}>
      <div className={styles.balance}>
        <i className={styles.i}>$100,000</i>
      </div>
      <div className={styles.hudInner}>
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
