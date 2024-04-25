import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "./FrameComponent31";
import styles from "./FrameComponent22.module.css";

const FrameComponent2: FunctionComponent = () => {
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
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <FrameComponent3
          onAutobuyButtonContainerClick={onAutobuyButtonContainerClick}
          onSwapButtonContainerClick={onSwapButtonContainerClick}
          onBridgeButtonContainerClick={onBridgeButtonContainerClick}
          onSendButtonContainerClick={onSendButtonContainerClick}
          onReceiveButtonContainerClick={onReceiveButtonContainerClick}
        />
        <div className={styles.messageInputBoxInstance}>
          <button className={styles.messageframe}>
            <div className={styles.messageFrame}>
              <div className={styles.bridgetext}>/Bridge</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
