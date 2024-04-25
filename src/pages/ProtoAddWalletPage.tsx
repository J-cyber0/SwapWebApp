import { FunctionComponent } from "react";
import ImportSecretPhraseBtn from "../components/ImportSecretPhraseBtn";
import styles from "./ProtoAddWalletPage.module.css";

const ProtoAddWalletPage: FunctionComponent = () => {
  return (
    <div className={styles.protoAddWalletPage}>
      <footer className={styles.walletdropdownscreenParent}>
        <div className={styles.walletdropdownscreen} />
        <div className={styles.backButton}>
          <div className={styles.backbutton}>
            <img
              className={styles.backIcon}
              loading="lazy"
              alt=""
              src="/back@2x.png"
            />
            <div className={styles.back}>
              <div className={styles.back1}>Back</div>
            </div>
          </div>
          <div className={styles.addYourWalletWrapper}>
            <h1 className={styles.addYourWallet}>{`Add Your Wallet `}</h1>
          </div>
        </div>
        <ImportSecretPhraseBtn />
      </footer>
    </div>
  );
};

export default ProtoAddWalletPage;
