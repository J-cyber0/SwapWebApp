import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BridgeButton.module.css";

const BridgeButton: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBridgeButtonContainerClick = useCallback(() => {
    navigate("/proto-bridge-page");
  }, [navigate]);

  return (
    <div className={styles.bridgebutton} onClick={onBridgeButtonContainerClick}>
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
  );
};

export default BridgeButton;
