import { FunctionComponent } from "react";
import ConnectExternalWalletButotn from "./ConnectExternalWalletButotn";
import ImportSecretPhraseButton from "./ImportSecretPhraseButton";
import ImportPrivateKeyButton from "./ImportPrivateKeyButton";
import styles from "./ImportSecretPhraseBtn.module.css";

const ImportSecretPhraseBtn: FunctionComponent = () => {
  return (
    <section className={styles.importSecretPhraseBtn}>
      <div className={styles.addwalletoptions}>
        <ConnectExternalWalletButotn />
        <ImportSecretPhraseButton />
        <ImportPrivateKeyButton />
      </div>
    </section>
  );
};

export default ImportSecretPhraseBtn;
