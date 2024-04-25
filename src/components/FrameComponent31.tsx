import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent31.module.css";

export type FrameComponent3Type = {
  /** Style props */
  ellipseDivAlignSelf?: CSSProperties["alignSelf"];
  ellipseDivWidth?: CSSProperties["width"];

  /** Action props */
  onAutobuyButtonContainerClick?: () => void;
  onSwapButtonContainerClick?: () => void;
  onBridgeButtonContainerClick?: () => void;
  onSendButtonContainerClick?: () => void;
  onReceiveButtonContainerClick?: () => void;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  ellipseDivAlignSelf,
  ellipseDivWidth,
  onAutobuyButtonContainerClick,
  onSwapButtonContainerClick,
  onBridgeButtonContainerClick,
  onSendButtonContainerClick,
  onReceiveButtonContainerClick,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: ellipseDivAlignSelf,
      width: ellipseDivWidth,
    };
  }, [ellipseDivAlignSelf, ellipseDivWidth]);

  return (
    <div className={styles.hUDInstanceParent} style={frameDiv1Style}>
      <div className={styles.hUDInstance}>
        <div className={styles.hud}>
          <div className={styles.balance}>
            <i className={styles.i}>$100,000</i>
          </div>
          <div className={styles.hudInner}>
            <div className={styles.balancePNLParent}>
              <div className={styles.balancePNL}>
                <div className={styles.balancepnl}>
                  <b className={styles.b}>{`+$24040       `}</b>
                </div>
              </div>
              <div className={styles.dailypctchg}>
                <b className={styles.bridgeButton}>+2300%</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sendButton}>
        <nav className={styles.receiveButton}>
          <div
            className={styles.autobuybutton}
            onClick={onAutobuyButtonContainerClick}
          >
            <div className={styles.autobuybuttonChild} />
            <img
              className={styles.image15Icon}
              loading="lazy"
              alt=""
              src="/image-15@2x.png"
            />
            <div className={styles.autobuy}>Autobuy</div>
          </div>
          <div
            className={styles.swapbutton}
            onClick={onSwapButtonContainerClick}
          >
            <div className={styles.swapbuttonChild} />
            <img
              className={styles.image16Icon}
              loading="lazy"
              alt=""
              src="/image-16@2x.png"
            />
            <div className={styles.swapWrapper}>
              <div className={styles.swap}>{`Swap `}</div>
            </div>
          </div>
          <div
            className={styles.bridgebutton}
            onClick={onBridgeButtonContainerClick}
          >
            <div className={styles.bridgebuttonChild} />
            <img
              className={styles.image17Icon}
              loading="lazy"
              alt=""
              src="/image-17@2x.png"
            />
            <div className={styles.bridgeWrapper}>
              <div className={styles.bridge}>Bridge</div>
            </div>
          </div>
          <div
            className={styles.sendbutton}
            onClick={onSendButtonContainerClick}
          >
            <div className={styles.sendbuttonChild} />
            <img
              className={styles.image18Icon}
              loading="lazy"
              alt=""
              src="/image-18@2x.png"
            />
            <div className={styles.sendWrapper}>
              <div className={styles.send}>Send</div>
            </div>
          </div>
          <div
            className={styles.receivebutton}
            onClick={onReceiveButtonContainerClick}
          >
            <div className={styles.receivebuttonChild} />
            <img
              className={styles.image19Icon}
              loading="lazy"
              alt=""
              src="/image-19@2x.png"
            />
            <div className={styles.receiveWrapper}>
              <div className={styles.receive}>Receive</div>
            </div>
          </div>
        </nav>
      </div>
      <div className={styles.thefold} />
    </div>
  );
};

export default FrameComponent3;
