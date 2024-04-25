import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ImportSecretPhraseButton.module.css";

const ImportSecretPhraseButton: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImportSecretPhraseButtonContainerClick = useCallback(() => {
    navigate("/proto-import-recovery-phrase");
  }, [navigate]);

  return (
    <div
      className={styles.importsecretphrasebutton}
      onClick={onImportSecretPhraseButtonContainerClick}
    >
      <div className={styles.importsecretphrasebuttonChild} />
      <div className={styles.importSecretRecoveryContainer}>
        <p className={styles.importSecretRecoveryPhrase}>
          <i className={styles.importSecretRecovery}>
            Import Secret Recovery Phrase
          </i>
        </p>
        <p className={styles.connectYourWalletUsingYour}>
          <i>Connect your wallet using your Recovery Phrase.</i>
        </p>
      </div>
    </div>
  );
};

export default ImportSecretPhraseButton;
