import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent1.module.css";

const FrameComponent: FunctionComponent = () => {
  const navigate = useNavigate();

  const onWalletsTitleContainerClick = useCallback(() => {
    navigate("/proto-first-page");
  }, [navigate]);

  return (
    <section className={styles.walletstitleParent}>
      <div
        className={styles.walletstitle}
        onClick={onWalletsTitleContainerClick}
      >
        <div className={styles.backbutton}>
          <img
            className={styles.backIcon}
            loading="lazy"
            alt=""
            src="/back@2x.png"
          />
          <div className={styles.wallets}>
            <div className={styles.back}>Back</div>
          </div>
        </div>
        <div className={styles.walletIcon}>
          <i className={styles.wallets1}>
            <span>Wallets</span>
            <span className={styles.span}>{` `}</span>
          </i>
        </div>
      </div>
      <div className={styles.walletAddressX}>
        <div className={styles.swapWalletMemeCoins}>
          <div className={styles.swapwallet}>
            <button className={styles.nowConnectedToMemeCoinsWrapper}>
              <i
                className={styles.nowConnectedTo}
              >{`Now Connected to Meme Coins! `}</i>
            </button>
            <div className={styles.swapwalletChild} />
            <div className={styles.walletIcon1}>
              <img
                className={styles.walleticon}
                loading="lazy"
                alt=""
                src="/walleticon1@2x.png"
              />
            </div>
            <div className={styles.swapWalletParent}>
              <i className={styles.swapWallet}>Swap Wallet</i>
              <i className={styles.balance000}>Balance: $0.00</i>
              <div className={styles.aDDAWALLET}>
                <div className={styles.walletAddress0xabcdef}>
                  Wallet Address: 0xABC...DEF
                </div>
              </div>
            </div>
          </div>
          <div className={styles.memecoinswallet}>
            <div className={styles.memecoinswalletChild} />
            <div className={styles.walleticonWrapper}>
              <img
                className={styles.walleticon1}
                loading="lazy"
                alt=""
                src="/walleticon1@2x.png"
              />
            </div>
            <div className={styles.memeCoinsParent}>
              <i className={styles.memeCoins}>Meme Coins</i>
              <i className={styles.balance10000000}>Balance: $100,000.00</i>
            </div>
            <div className={styles.walletAddress0x123tuvWrapper}>
              <div className={styles.walletAddress0x123tuv}>
                Wallet Address: 0x123...tuv
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
