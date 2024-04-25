import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent11";
import styles from "./ProtoMENUPage.module.css";

const ProtoMENUPage: FunctionComponent = () => {
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

  const onMenuSelectionBoxClick = useCallback(() => {
    navigate("/proto-swap-page");
  }, [navigate]);

  const onBridgeSwapFromOneBlockchClick = useCallback(() => {
    navigate("/proto-bridge-page");
  }, [navigate]);

  const onSendSendTokensToDifferenClick = useCallback(() => {
    navigate("/proto-send-page");
  }, [navigate]);

  const onTrackTrackWalletsCopytrClick = useCallback(() => {
    navigate("/proto-wallets-menu");
  }, [navigate]);

  const onAutobuyActivateAutobuyCClick = useCallback(() => {
    navigate("/proto-autobuy");
  }, [navigate]);

  const onPositionsListCurrentTokenClick = useCallback(() => {
    navigate("/proto-positions-page");
  }, [navigate]);

  const onSettingsCustomizeYourBotClick = useCallback(() => {
    navigate("/proto-bot-settings-page");
  }, [navigate]);

  return (
    <div className={styles.protoMenuPage}>
      <img
        className={styles.backgroundfilterIcon}
        alt=""
        src="/backgroundfilter.svg"
      />
      <div className={styles.protoMenuPageInner}>
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
      <section className={styles.protoMenuPageChild}>
        <div className={styles.frameGroup}>
          <FrameComponent1
            propPadding="0px var(--padding-35xl) 0px var(--padding-42xl)"
            propAlignSelf="stretch"
            propFlex="1"
            propAlignSelf1="stretch"
          />
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
            <div className={styles.manualExplorationAlreadyContainer}>
              <p className={styles.manualExploration}>Manual Exploration:</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p
                className={styles.alreadyFamiliarWith}
              >{`Already familiar with our platform? Hit the menu button to check our newest features.

In our menu, you'll find:`}</p>
              <p className={styles.blankLine1}>&nbsp;</p>
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
              <p className={styles.blankLine2}>&nbsp;</p>
              <p className={styles.readyToDive}>
                Ready to dive in? Let's explore
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.menudisplay}>
        <div className={styles.frameContainer}>
          <div className={styles.tutorialoutputtextWrapper}>
            <b className={styles.tutorialoutputtext}>
              Type or click '/Swap', then tap the paper plane icon to send.
            </b>
          </div>
          <div className={styles.menu}>
            <input
              className={styles.menuselectionbox}
              type="text"
              onClick={onMenuSelectionBoxClick}
            />
            <div className={styles.menuoptions}>
              <div className={styles.swapSwapTokenPairsOnThe}>
                <div className={styles.swapSwapContainer}>
                  <p className={styles.swapSwap}>
                    /Swap - Swap Token pairs on the Solana network
                  </p>
                  <p className={styles.blankLine3}>&nbsp;</p>
                </div>
              </div>
              <div
                className={styles.bridgeSwapFromOneBlockch}
                onClick={onBridgeSwapFromOneBlockchClick}
              >
                <div
                  className={styles.bridgeSwap}
                >{`/Bridge - Swap from one blockchain network to another `}</div>
              </div>
              <div
                className={styles.sendSendTokensToDifferen}
                onClick={onSendSendTokensToDifferenClick}
              >
                <div className={styles.sendSend}>
                  /Send - Send Tokens to different Wallets
                </div>
              </div>
              <div
                className={styles.trackTrackWalletsCopytr}
                onClick={onTrackTrackWalletsCopytrClick}
              >
                <div className={styles.trackTrackContainer}>
                  <p className={styles.walletsOpen}>
                    /Wallets - Open wallet drop down menu
                  </p>
                  <p className={styles.blankLine4}>&nbsp;</p>
                </div>
              </div>
              <div
                className={styles.autobuyActivateAutobuyC}
                onClick={onAutobuyActivateAutobuyCClick}
              >
                <div className={styles.autobuyActivateContainer}>
                  <p
                    className={styles.autobuyActivate}
                  >{`/Autobuy - Activate Autobuy & Configuration Commands`}</p>
                  <p className={styles.blankLine5}>&nbsp;</p>
                </div>
              </div>
              <div
                className={styles.positionsListCurrentToken}
                onClick={onPositionsListCurrentTokenClick}
              >
                <div className={styles.positionsListContainer}>
                  <p className={styles.positionsList}>
                    /Positions - List current Token holdings
                  </p>
                  <p className={styles.blankLine6}>&nbsp;</p>
                </div>
              </div>
              <div
                className={styles.settingsCustomizeYourBot}
                onClick={onSettingsCustomizeYourBotClick}
              >
                <div className={styles.settingsCustomizeContainer}>
                  <p className={styles.settingsCustomize}>
                    /Settings - Customize your bot
                  </p>
                  <p className={styles.blankLine7}>&nbsp;</p>
                  <p className={styles.blankLine8}>&nbsp;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className={styles.messageInputBox}>
          <img
            className={styles.commandsListIcon}
            loading="lazy"
            alt=""
            src="/commands-list@2x.png"
          />
          <h3 className={styles.userinputbox}>/Swap</h3>
          <img
            className={styles.paperPlaneIcon}
            loading="lazy"
            alt=""
            src="/paper-plane@2x.png"
          />
        </footer>
      </section>
    </div>
  );
};

export default ProtoMENUPage;
