import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ConnectExternalWalletButotn.module.css";

const ConnectExternalWalletButotn: FunctionComponent = () => {
  const navigate = useNavigate();

  const onConnectExternalWalletButotnContainerClick = useCallback(() => {
    navigate("/proto-connect-wallet");
  }, [navigate]);

  return (
    <div
      className={styles.connectexternalwalletbutotn}
      onClick={onConnectExternalWalletButotnContainerClick}
    >
      <div className={styles.connectexternalwalletbutotnChild} />
      <div className={styles.connectAnExternalContainer}>
        <p className={styles.connectAnExternalWallet}>
          <i
            className={styles.connectAnExternal}
          >{`Connect an external Wallet `}</i>
        </p>
        <p className={styles.connectSecurelyWithAnExter}>
          <i>Connect securely with an external wallet like Phantom.</i>
        </p>
      </div>
    </div>
  );
};

export default ConnectExternalWalletButotn;
