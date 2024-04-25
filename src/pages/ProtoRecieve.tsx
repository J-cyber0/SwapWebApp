import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent4 from "../components/FrameComponent41";
import FrameComponent3 from "../components/FrameComponent32";
import FrameComponent2 from "../components/FrameComponent23";
import CommandsListIcon from "../components/CommandsListIcon";
import styles from "./ProtoRecieve.module.css";

const ProtoRecieve: FunctionComponent = () => {
  const navigate = useNavigate();

  const onConfigureWalletsContainerClick = useCallback(() => {
    navigate("/proto-wallets-menu");
  }, [navigate]);

  const onConfigureWalletsContainer1Click = useCallback(() => {
    navigate("/proto-wallets-menu");
  }, [navigate]);

  const onSettingsMenuContainerClick = useCallback(() => {
    navigate("/proto-app-settings-page");
  }, [navigate]);

  const onMessageInputBoxClick = useCallback(() => {
    navigate("/proto-menu-page");
  }, [navigate]);

  return (
    <div className={styles.protoRecieve}>
      <div className={styles.protoRecieveInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.configurewalletsParent}>
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
              <div
                className={styles.configurewallets1}
                onClick={onConfigureWalletsContainer1Click}
              >
                <div className={styles.walletproviderbox1}>
                  <div className={styles.walletdropdownbox1}>
                    <div className={styles.walletdisplay1} />
                    <div className={styles.swapWallet1}>Meme Coins</div>
                  </div>
                </div>
                <div className={styles.connectedwallet1}>
                  <div className={styles.walleticonContainer}>
                    <img
                      className={styles.walleticon1}
                      loading="lazy"
                      alt=""
                      src="/walleticon@2x.png"
                    />
                  </div>
                  <img
                    className={styles.dropdownicon1}
                    loading="lazy"
                    alt=""
                    src="/dropdownicon@2x.png"
                  />
                </div>
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
      <main className={styles.backgroundfilterParent}>
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
        <img
          className={styles.messageTailIcon1}
          loading="lazy"
          alt=""
          src="/message-tail.svg"
        />
      </main>
      <FrameComponent4 />
      <div className={styles.protoRecieveChild}>
        <div className={styles.frameGroup}>
          <FrameComponent3 />
          <FrameComponent2 />
          <CommandsListIcon />
        </div>
      </div>
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

export default ProtoRecieve;
