import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ConfigureWallets.module.css";

const ConfigureWallets: FunctionComponent = () => {
  const navigate = useNavigate();

  const onConfigureWalletsContainerClick = useCallback(() => {
    navigate("/proto-wallets-menu");
  }, [navigate]);

  return (
    <div
      className={styles.configurewallets}
      onClick={onConfigureWalletsContainerClick}
    >
      <div className={styles.walletproviderbox}>
        <div className={styles.walletdropdownbox}>
          <div className={styles.walletdisplay} />
          <div className={styles.swapWallet}>Meme Coins</div>
        </div>
      </div>
      <div className={styles.connectedwallet}>
        <div className={styles.settingsIcon}>
          <img className={styles.walleticon} alt="" src="/walleticon@2x.png" />
        </div>
        <img
          className={styles.dropdownicon}
          alt=""
          src="/dropdownicon@2x.png"
        />
      </div>
    </div>
  );
};

export default ConfigureWallets;
