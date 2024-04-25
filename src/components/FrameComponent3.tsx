import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onConfigureWalletsContainerClick = useCallback(() => {
    navigate("/proto-wallets-menu");
  }, [navigate]);

  const onSettingsMenuContainerClick = useCallback(() => {
    navigate("/proto-app-settings-page");
  }, [navigate]);

  const onAutobuyButtonContainerClick = useCallback(() => {
    navigate("/proto-autobuy");
  }, [navigate]);

  const onSwapButtonContainerClick = useCallback(() => {
    navigate("/proto-swap-page");
  }, [navigate]);

  const onBridgeButtonContainerClick = useCallback(() => {
    navigate("/proto-bridge-page");
  }, [navigate]);

  const onSendButtonContainerClick = useCallback(() => {
    navigate("/proto-send-page");
  }, [navigate]);

  const onReceiveButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.configurewalletsWrapper}>
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
                <div className={styles.walleticonWrapper}>
                  <img
                    className={styles.walleticon}
                    alt=""
                    src="/walleticon@2x.png"
                  />
                </div>
                <img
                  className={styles.dropdownicon}
                  alt=""
                  src="/dropdownicon@2x.png"
                />
              </div>
            </div>
          </div>
          <div
            className={styles.settingsmenu}
            onClick={onSettingsMenuContainerClick}
          >
            <img
              className={styles.settingsicon}
              loading="lazy"
              alt=""
              src="/settingsicon@2x.png"
            />
          </div>
        </div>
        <div className={styles.amountInputBox}>
          <div className={styles.hudParent}>
            <div className={styles.hud}>
              <div className={styles.balance}>
                <i className={styles.i}>$100,000</i>
              </div>
              <div className={styles.hudInner}>
                <div className={styles.frameDiv}>
                  <div className={styles.balancepnlWrapper}>
                    <div className={styles.balancepnl}>
                      <b className={styles.b}>{`+$24040       `}</b>
                    </div>
                  </div>
                  <div className={styles.dailypctchg}>
                    <b className={styles.b1}>+2300%</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <nav className={styles.autobuybuttonParent}>
                <div
                  className={styles.autobuybutton}
                  onClick={onAutobuyButtonContainerClick}
                >
                  <div className={styles.autobuybuttonChild} />
                  <img
                    className={styles.image15Icon}
                    loading="lazy"
                    alt=""
                    src="/image-15@2x.png"
                  />
                  <div className={styles.autobuy}>Autobuy</div>
                </div>
                <div
                  className={styles.swapbutton}
                  onClick={onSwapButtonContainerClick}
                >
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
                <div
                  className={styles.bridgebutton}
                  onClick={onBridgeButtonContainerClick}
                >
                  <div className={styles.bridgebuttonChild} />
                  <img
                    className={styles.image17Icon}
                    loading="lazy"
                    alt=""
                    src="/image-17@2x.png"
                  />
                  <div className={styles.bridgeWrapper}>
                    <div className={styles.bridge}>Bridge</div>
                  </div>
                </div>
                <div
                  className={styles.sendbutton}
                  onClick={onSendButtonContainerClick}
                >
                  <div className={styles.sendbuttonChild} />
                  <img
                    className={styles.image18Icon}
                    loading="lazy"
                    alt=""
                    src="/image-18@2x.png"
                  />
                  <div className={styles.sendWrapper}>
                    <div className={styles.send}>Send</div>
                  </div>
                </div>
                <div
                  className={styles.receivebutton}
                  onClick={onReceiveButtonContainerClick}
                >
                  <div className={styles.receivebuttonChild} />
                  <img
                    className={styles.image19Icon}
                    loading="lazy"
                    alt=""
                    src="/image-19@2x.png"
                  />
                  <div className={styles.receiveWrapper}>
                    <div className={styles.receive}>Receive</div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className={styles.thefoldWrapper}>
          <div className={styles.thefold} />
        </div>
        <div className={styles.messageframeWrapper}>
          <button className={styles.messageframe}>
            <div className={styles.messageFrame}>
              <div className={styles.swapText}>/Send</div>
            </div>
          </button>
        </div>
      </div>
      <div className={styles.frameWrapper1}>
        <div className={styles.frameParent1}>
          <div className={styles.frameWrapper2}>
            <div className={styles.avatariconParent}>
              <div className={styles.avataricon}>
                <div className={styles.ellipse} />
                <img
                  className={styles.ethereumIcon}
                  loading="lazy"
                  alt=""
                  src="/ethereum@2x.png"
                />
              </div>
              <div className={styles.sendingCryptoBeforeContainer}>
                <p className={styles.sendingCrypto}>📤 Sending Crypto</p>
                <p className={styles.beforeWeProceed}>
                  Before we proceed, let's clarify the base currency you'll be
                  using for the transaction:
                </p>
                <p className={styles.baseCurrencyPlease}>
                  Base Currency: Please specify the cryptocurrency you'll be
                  sending (e.g., $SOL, $ETH, etc.).
                </p>
              </div>
            </div>
          </div>
          <button className={styles.messageframe1}>
            <div className={styles.messageFrame1}>
              <div className={styles.swapText1}>$SOL</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
