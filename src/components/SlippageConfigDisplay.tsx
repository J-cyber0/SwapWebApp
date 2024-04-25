import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SlippageConfigDisplay.module.css";

export type SlippageConfigDisplayType = {
  /** Style props */
  theFoldPadding?: CSSProperties["padding"];

  /** Action props */
  onAutobuyButtonContainerClick?: () => void;
  onSwapButtonContainerClick?: () => void;
  onBridgeButtonContainerClick?: () => void;
  onSendButtonContainerClick?: () => void;
  onReceiveButtonContainerClick?: () => void;
};

const SlippageConfigDisplay: FunctionComponent<SlippageConfigDisplayType> = ({
  theFoldPadding,
  onAutobuyButtonContainerClick,
  onSwapButtonContainerClick,
  onBridgeButtonContainerClick,
  onSendButtonContainerClick,
  onReceiveButtonContainerClick,
}) => {
  const slippageConfigDisplayStyle: CSSProperties = useMemo(() => {
    return {
      padding: theFoldPadding,
    };
  }, [theFoldPadding]);

  return (
    <div
      className={styles.slippageConfigDisplay}
      style={slippageConfigDisplayStyle}
    >
      <div className={styles.transactionPriorityBox}>
        <div className={styles.priorityButton}>
          <nav className={styles.autobuy}>
            <div
              className={styles.autobuybutton}
              onClick={onAutobuyButtonContainerClick}
            >
              <div className={styles.right} />
              <img
                className={styles.image15Icon}
                loading="lazy"
                alt=""
                src="/image-15@2x.png"
              />
              <div className={styles.autobuy1}>Autobuy</div>
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
    </div>
  );
};

export default SlippageConfigDisplay;
