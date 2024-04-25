import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent11.module.css";

export type FrameComponent1Type = {
  /** Style props */
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propAlignSelf1?: CSSProperties["alignSelf"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  propPadding,
  propAlignSelf,
  propFlex,
  propAlignSelf1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      alignSelf: propAlignSelf,
    };
  }, [propPadding, propAlignSelf]);

  const hUD1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const balanceStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  return (
    <div className={styles.hudWrapper} style={frameDivStyle}>
      <div className={styles.hud} style={hUD1Style}>
        <div className={styles.balance} style={balanceStyle}>
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
    </div>
  );
};

export default FrameComponent1;
