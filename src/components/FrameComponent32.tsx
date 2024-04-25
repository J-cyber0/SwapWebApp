import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent32.module.css";

const FrameComponent3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAutobuyButtonContainerClick = useCallback(() => {
    navigate("/proto-autobuy");
  }, [navigate]);

  const onAutobuyButtonContainer1Click = useCallback(() => {
    navigate("/proto-autobuy");
  }, [navigate]);

  const onSwapButtonContainerClick = useCallback(() => {
    navigate("/proto-swap-page");
  }, [navigate]);

  const onSwapButtonContainer1Click = useCallback(() => {
    navigate("/proto-swap-page");
  }, [navigate]);

  const onBridgeButtonContainerClick = useCallback(() => {
    navigate("/proto-bridge-page");
  }, [navigate]);

  const onBridgeButtonContainer1Click = useCallback(() => {
    navigate("/proto-bridge-page");
  }, [navigate]);

  const onSendButtonContainerClick = useCallback(() => {
    navigate("/proto-send-page");
  }, [navigate]);

  const onSendButtonContainer1Click = useCallback(() => {
    navigate("/proto-send-page");
  }, [navigate]);

  const onReceiveButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onReceiveButtonContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.frameWrapper}>
      <div className={styles.userInputBoxParent}>
        <div className={styles.userInputBox}>
          <nav className={styles.frameParent}>
            <div className={styles.autobuybuttonParent}>
              <div
                className={styles.autobuybutton}
                onClick={onAutobuyButtonContainerClick}
              >
                <div className={styles.autobuybuttonChild} />
                <img
                  className={styles.image15Icon}
                  alt=""
                  src="/image-15@2x.png"
                />
                <div className={styles.autobuy}>Autobuy</div>
              </div>
              <div
                className={styles.autobuybutton1}
                onClick={onAutobuyButtonContainer1Click}
              >
                <div className={styles.autobuybuttonItem} />
                <img
                  className={styles.image15Icon1}
                  loading="lazy"
                  alt=""
                  src="/image-15@2x.png"
                />
                <div className={styles.autobuy1}>Autobuy</div>
              </div>
            </div>
            <div className={styles.swapbuttonParent}>
              <div
                className={styles.swapbutton}
                onClick={onSwapButtonContainerClick}
              >
                <div className={styles.swapbuttonChild} />
                <img
                  className={styles.image16Icon}
                  alt=""
                  src="/image-16@2x.png"
                />
                <div className={styles.swapWrapper}>
                  <div className={styles.swap}>{`Swap `}</div>
                </div>
              </div>
              <div
                className={styles.swapbutton1}
                onClick={onSwapButtonContainer1Click}
              >
                <div className={styles.swapbuttonItem} />
                <img
                  className={styles.image16Icon1}
                  loading="lazy"
                  alt=""
                  src="/image-16@2x.png"
                />
                <div className={styles.swapContainer}>
                  <div className={styles.swap1}>{`Swap `}</div>
                </div>
              </div>
            </div>
            <div className={styles.bridgebuttonParent}>
              <div
                className={styles.bridgebutton}
                onClick={onBridgeButtonContainerClick}
              >
                <div className={styles.bridgebuttonChild} />
                <img
                  className={styles.image17Icon}
                  alt=""
                  src="/image-17@2x.png"
                />
                <div className={styles.bridgeWrapper}>
                  <div className={styles.bridge}>Bridge</div>
                </div>
              </div>
              <div
                className={styles.bridgebutton1}
                onClick={onBridgeButtonContainer1Click}
              >
                <div className={styles.bridgebuttonItem} />
                <img
                  className={styles.image17Icon1}
                  loading="lazy"
                  alt=""
                  src="/image-17@2x.png"
                />
                <div className={styles.bridgeContainer}>
                  <div className={styles.bridge1}>Bridge</div>
                </div>
              </div>
            </div>
            <div className={styles.sendbuttonParent}>
              <div
                className={styles.sendbutton}
                onClick={onSendButtonContainerClick}
              >
                <div className={styles.sendbuttonChild} />
                <img
                  className={styles.image18Icon}
                  alt=""
                  src="/image-18@2x.png"
                />
                <div className={styles.sendWrapper}>
                  <div className={styles.send}>Send</div>
                </div>
              </div>
              <div
                className={styles.sendbutton1}
                onClick={onSendButtonContainer1Click}
              >
                <div className={styles.sendbuttonItem} />
                <img
                  className={styles.image18Icon1}
                  loading="lazy"
                  alt=""
                  src="/image-18@2x.png"
                />
                <div className={styles.sendContainer}>
                  <div className={styles.send1}>Send</div>
                </div>
              </div>
            </div>
            <div className={styles.receivebuttonParent}>
              <div
                className={styles.receivebutton}
                onClick={onReceiveButtonContainerClick}
              >
                <div className={styles.receivebuttonChild} />
                <img
                  className={styles.image19Icon}
                  alt=""
                  src="/image-19@2x.png"
                />
                <div className={styles.receiveWrapper}>
                  <div className={styles.receive}>Receive</div>
                </div>
              </div>
              <div
                className={styles.receivebutton1}
                onClick={onReceiveButtonContainer1Click}
              >
                <div className={styles.receivebuttonItem} />
                <img
                  className={styles.image19Icon1}
                  loading="lazy"
                  alt=""
                  src="/image-19@2x.png"
                />
                <div className={styles.receiveContainer}>
                  <div className={styles.receive1}>Receive</div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className={styles.thefold} />
      </div>
    </div>
  );
};

export default FrameComponent3;
