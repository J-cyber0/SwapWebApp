import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ImportPrivateKeyButton.module.css";

const ImportPrivateKeyButton: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImportPrivateKeyButtonContainerClick = useCallback(() => {
    navigate("/proto-import-private-key");
  }, [navigate]);

  return (
    <div
      className={styles.importprivatekeybutton}
      onClick={onImportPrivateKeyButtonContainerClick}
    >
      <div className={styles.importprivatekeybuttonChild} />
      <div className={styles.importPrivateKeyContainer}>
        <p className={styles.importPrivateKey}>
          <i className={styles.importPrivateKey1}>Import Private Key</i>
        </p>
        <p className={styles.connectDirectlyToYourWalle}>
          <i>Connect directly to your wallet using a Private Key.</i>
        </p>
      </div>
    </div>
  );
};

export default ImportPrivateKeyButton;
