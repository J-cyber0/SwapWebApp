import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ReceiveButton1.module.css";

const ReceiveButton1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onReceiveButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
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
  );
};

export default ReceiveButton1;
