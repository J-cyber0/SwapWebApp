import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import TutorialStartBox from "../components/TutorialStartBox";
import styles from "./ProtoTutorialPage.module.css";

const ProtoTutorialPage: FunctionComponent = () => {
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
    <div className={styles.protoTutorialPage}>
      <img
        className={styles.backgroundfilterIcon}
        alt=""
        src="/backgroundfilter.svg"
      />
      <div className={styles.backgroundFilterAdjustment}>
        <div className={styles.frameParent}>
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
      </div>
      <div className={styles.outputbox} />
      <section className={styles.protoTutorialPageInner}>
        <div className={styles.frameGroup}>
          <FrameComponent />
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
          <div className={styles.thefold} />
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
            <h2 className={styles.welcomeToTheContainer}>
              <p className={styles.welcomeToThe}>
                Welcome to the Swap.io Chatbot! 🤖
              </p>
              <p className={styles.iveCreatedACryptoWalletF}>
                {`
I’ve created a Crypto wallet for you right out the box on the Solana blockchain network! Here’s your Swap Wallet address:  
`}
                <span
                  className={styles.cvm7s4pj3hm2n7n98e9xqg63d81vzb}
                >{`3CvM7s4pJ3hM2n7n98e9XQG63d81VZbeRF9PqN8tNvRJ
`}</span>
              </p>
              <p className={styles.wonderingWhatI}>
                Wondering what I can do for you? Let me show you:
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.blazinglyFastTradingTrade}>
                🚀 Blazingly-fast trading: Trade cryptocurrencies with lightning
                speed right from your fingertips.
              </p>
              <p className={styles.blankLine1}>&nbsp;</p>
              <p className={styles.heresHowTo}>Here's how to get started:</p>
              <p className={styles.blankLine2}>&nbsp;</p>
              <p className={styles.tutorial}>Tutorial:</p>
              <p className={styles.blankLine3}>&nbsp;</p>
              <p className={styles.newToSwapio}>
                New to Swap.io? Let's walk you through our features step by
                step. Click the Tutorial button to start the guided tour.
              </p>
              <p className={styles.manualExploration}>{`
Manual Exploration:`}</p>
              <p className={styles.blankLine4}>&nbsp;</p>
              <p
                className={styles.alreadyFamiliarWith}
              >{`Already familiar with our platform? Hit the menu button to check our newest features.
`}</p>
              <p className={styles.inOurMenu}>In our menu, you'll find:</p>
              <p className={styles.blankLine5}>&nbsp;</p>
              <p className={styles.instantSwapsSwap}>
                🔄 Instant Swaps: Swap cryptocurrencies swiftly and seamlessly.
              </p>
              <p className={styles.newTokenAlerts}>
                🔔 New Token Alerts: Stay updated with alerts for new tokens.
              </p>
              <p className={styles.tradeTrackingKeep}>
                📊 Trade Tracking: Keep track of your trades effortlessly.
              </p>
              <p className={styles.pnlMonitoringMonitor}>
                💰 PNL Monitoring: Monitor your Profit and Loss with ease.
              </p>
              <p className={styles.andMuchMore}>And much more.</p>
              <p className={styles.blankLine6}>&nbsp;</p>
              <p className={styles.readyToDive}>
                Ready to dive in? Let's explore!
              </p>
            </h2>
          </div>
        </div>
      </section>
      <div className={styles.tutorialbuttonWrapper}>
        <div className={styles.tutorialbutton}>
          <h2 className={styles.tutorial1}>Tutorial</h2>
        </div>
      </div>
      <TutorialStartBox />
    </div>
  );
};

export default ProtoTutorialPage;
