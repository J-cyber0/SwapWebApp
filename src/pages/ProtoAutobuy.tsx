import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MessageInputBoxCommands from "../components/MessageInputBoxCommands";
import FrameComponent from "../components/FrameComponent2";
import styles from "./ProtoAutobuy.module.css";

const ProtoAutobuy: FunctionComponent = () => {
  const navigate = useNavigate();

  const onConfigureWalletsContainerClick = useCallback(() => {
    navigate("/proto-wallets-menu");
  }, [navigate]);

  const onSettingsMenuContainerClick = useCallback(() => {
    navigate("/proto-app-settings-page");
  }, [navigate]);

  const onMessageInputBoxClick = useCallback(() => {
    navigate("/proto-menu-page");
  }, [navigate]);

  return (
    <div className={styles.protoAutobuy}>
      <div className={styles.protoAutobuyInner}>
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
      <div className={styles.protoAutobuyChild}>
        <div className={styles.messageInputBoxCommandsParent}>
          <MessageInputBoxCommands />
          <FrameComponent />
        </div>
      </div>
      <main className={styles.dailyPctChg}>
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
      <footer
        className={styles.messageInputBox}
        onClick={onMessageInputBoxClick}
      >
        <img
          className={styles.commandsListIcon}
          loading="lazy"
          alt=""
          src="/commands-list@2x.png"
        />
        <h1 className={styles.userinputbox}>Type your message here...</h1>
        <img
          className={styles.paperPlaneIcon}
          loading="lazy"
          alt=""
          src="/paper-plane@2x.png"
        />
      </footer>
    </div>
  );
};

export default ProtoAutobuy;
