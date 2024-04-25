import { FunctionComponent, useCallback } from "react";
import FrameComponent1 from "./FrameComponent11";
import { useNavigate } from "react-router-dom";
import styles from "./MessageInputBoxCommands.module.css";

const MessageInputBoxCommands: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAutobuyButtonContainerClick = useCallback(() => {
    navigate("/proto-autobuy");
  }, [navigate]);

  const onSwapButtonContainerClick = useCallback(() => {
    navigate("/proto-swap-page");
  }, [navigate]);

  const onBridgeButtonContainerClick = useCallback(() => {
    navigate("/proto-bridge-page");
  }, [navigate]);

  const onSendButtonContainerClick = useCallback(() => {
    navigate("/proto-send-page");
  }, [navigate]);

  const onReceiveButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.messageInputBoxCommands}>
      <div className={styles.frameParent}>
        <FrameComponent1 />
        <div className={styles.frameWrapper}>
          <nav className={styles.autobuybuttonParent}>
            <div
              className={styles.autobuybutton}
              onClick={onAutobuyButtonContainerClick}
            >
              <div className={styles.commandsListPaperPlane}>
                <div className={styles.commandsListPaperPlaneChild} />
                <img
                  className={styles.image15Icon}
                  loading="lazy"
                  alt=""
                  src="/image-15@2x.png"
                />
              </div>
              <div className={styles.autobuy}>Autobuy</div>
            </div>
            <div
              className={styles.swapbutton}
              onClick={onSwapButtonContainerClick}
            >
              <div className={styles.imagesSwapBridgeSendReceiv} />
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

export default MessageInputBoxCommands;
