import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProtoWalletsMenu.module.css";

const ProtoWalletsMenu: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAddaWalletButtonClick = useCallback(() => {
    navigate("/proto-add-wallet-page");
  }, [navigate]);

  return (
    <div className={styles.protoWalletsMenu}>
      <footer className={styles.dropdownbackgroundParent}>
        <div className={styles.dropdownbackground} />
        <section className={styles.frameParent}>
          <div className={styles.backbuttonParent}>
            <div className={styles.backbutton}>
              <img
                className={styles.backIcon}
                loading="lazy"
                alt=""
                src="/back@2x.png"
              />
              <div className={styles.backWrapper}>
                <div className={styles.back}>Back</div>
              </div>
            </div>
            <div className={styles.swapWalletParent}>
              <h1 className={styles.wallets}>{`Wallets `}</h1>
            </div>
          </div>
          <div className={styles.swapWalletTitle}>
            <div className={styles.swapwallet}>
              <div className={styles.swapwalletChild} />
              <div className={styles.inputField}>
                <img
                  className={styles.walleticon}
                  loading="lazy"
                  alt=""
                  src="/walleticon1@2x.png"
                />
              </div>
              <div className={styles.swapWalletGroup}>
                <i className={styles.swapWallet}>Swap Wallet</i>
                <i className={styles.balance000}>Balance: $0.00</i>
              </div>
              <div className={styles.walletAddress0xabcdefWrapper}>
                <div className={styles.walletAddress0xabcdef}>
                  Wallet Address: 0xABC...DEF
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.figmaDesign}>
          <button
            className={styles.addawalletbutton}
            onClick={onAddaWalletButtonClick}
          >
            <img
              className={styles.addawalletbuttonChild}
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

export default ProtoWalletsMenu;
