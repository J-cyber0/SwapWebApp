import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent6";
import SlippageConfigDisplay from "../components/SlippageConfigDisplay";
import UserInputBox from "../components/UserInputBox";
import styles from "./ProtoBotSettingsPage.module.css";

const ProtoBotSettingsPage: FunctionComponent = () => {
  const navigate = useNavigate();

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

  const onConfigureWalletsContainerClick = useCallback(() => {
    navigate("/proto-wallets-menu");
  }, [navigate]);

  return (
    <div className={styles.protoBotSettingsPage}>
      <div className={styles.configureWalletsWrapper}>
        <div className={styles.configureWallets}>
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
          <div className={styles.sendButton}>
            <div className={styles.settingsmenu}>
              <div className={styles.settingsbutton} />
              <img
                className={styles.settingsicon}
                loading="lazy"
                alt=""
                src="/settingsicon@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <FrameComponent />
      <div className={styles.leftButtonConfigButton}>
        <SlippageConfigDisplay
          onAutobuyButtonContainerClick={onAutobuyButtonContainerClick}
          onSwapButtonContainerClick={onSwapButtonContainerClick}
          onBridgeButtonContainerClick={onBridgeButtonContainerClick}
          onSendButtonContainerClick={onSendButtonContainerClick}
          onReceiveButtonContainerClick={onReceiveButtonContainerClick}
        />
        <div className={styles.transactionFeesAmountButton}>
          <button className={styles.blockchainSelectionDropDown}>
            <div className={styles.messageFrame}>
              <div className={styles.settingsMenu}>/Settings</div>
            </div>
          </button>
        </div>
        <UserInputBox />
      </div>
      <main className={styles.slippageConfigDisplay}>
        <img
          className={styles.backgroundfilterIcon}
          alt=""
          src="/backgroundfilter.svg"
        />
        <img
          className={styles.messageTailIcon}
          loading="lazy"
          alt=""
          src="/message-tail.svg"
        />
      </main>
      <footer className={styles.commandsList}>
        <div className={styles.messageInputBox}>
          <img
            className={styles.commandsListIcon}
            alt=""
            src="/commands-list@2x.png"
          />
          <input
            className={styles.userinputbox}
            placeholder="Type your message here..."
            type="text"
          />
          <img
            className={styles.paperPlaneIcon}
            alt=""
            src="/paper-plane@2x.png"
          />
        </div>
      </footer>
    </div>
  );
};

export default ProtoBotSettingsPage;
