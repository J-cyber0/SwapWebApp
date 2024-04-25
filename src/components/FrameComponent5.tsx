import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "./FrameComponent31";
import styles from "./FrameComponent5.module.css";

const FrameComponent5: FunctionComponent = () => {
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
      <FrameComponent3
        ellipseDivAlignSelf="unset"
        ellipseDivWidth="347.1px"
        onAutobuyButtonContainerClick={onAutobuyButtonContainerClick}
        onSwapButtonContainerClick={onSwapButtonContainerClick}
        onBridgeButtonContainerClick={onBridgeButtonContainerClick}
        onSendButtonContainerClick={onSendButtonContainerClick}
        onReceiveButtonContainerClick={onReceiveButtonContainerClick}
      />
    </div>
  );
};

export default FrameComponent5;
