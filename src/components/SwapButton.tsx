import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SwapButton.module.css";

const SwapButton: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSwapButtonContainerClick = useCallback(() => {
    navigate("/proto-swap-page");
  }, [navigate]);

  return (
    <div className={styles.swapbutton} onClick={onSwapButtonContainerClick}>
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
  );
};

export default SwapButton;
