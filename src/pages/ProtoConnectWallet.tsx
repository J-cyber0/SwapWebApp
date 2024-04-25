import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import styles from "./ProtoConnectWallet.module.css";

const ProtoConnectWallet: FunctionComponent = () => {
  return (
    <div className={styles.protoConnectWallet}>
      <footer className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <FrameComponent />
        <div className={styles.addconnectWalletsWrapper}>
          <button className={styles.addconnectWallets}>
            <img
              className={styles.addconnectWalletsChild}
              alt=""
              src="/rectangle-27.svg"
            />
            <b className={styles.addAWallet}>ADD A WALLET</b>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ProtoConnectWallet;
