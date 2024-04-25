import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AutobuyButton.module.css";

const AutobuyButton: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAutobuyButtonContainerClick = useCallback(() => {
    navigate("/proto-autobuy");
  }, [navigate]);

  return (
    <div
      className={styles.autobuybutton}
      onClick={onAutobuyButtonContainerClick}
    >
      <div className={styles.bridgeButton} />
      <img
        className={styles.image15Icon}
        loading="lazy"
        alt=""
        src="/image-15@2x.png"
      />
      <div className={styles.autobuy}>Autobuy</div>
    </div>
  );
};

export default AutobuyButton;
