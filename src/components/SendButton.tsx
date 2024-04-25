import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SendButton.module.css";

const SendButton: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSendButtonContainerClick = useCallback(() => {
    navigate("/proto-send-page");
  }, [navigate]);

  return (
    <div className={styles.sendbutton} onClick={onSendButtonContainerClick}>
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
  );
};

export default SendButton;
