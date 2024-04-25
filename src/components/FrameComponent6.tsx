import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent6.module.css";

export type FrameComponentType = {
  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  propPadding,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.hudWrapper} style={frameDiv2Style}>
      <div className={styles.hud}>
        <div className={styles.balance}>
          <i className={styles.dailyPctChg}>$100,000</i>
        </div>
        <div className={styles.theFold}>
          <div className={styles.frameParent}>
            <div className={styles.balancepnlWrapper}>
              <div className={styles.balancepnl}>
                <b
                  className={styles.settingsGeneralSettings}
                >{`+$24040       `}</b>
              </div>
            </div>
            <div className={styles.dailypctchg}>
              <b className={styles.buyButtonConfig}>+2300%</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
