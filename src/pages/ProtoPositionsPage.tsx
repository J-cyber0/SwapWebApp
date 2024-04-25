import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent6";
import FrameComponent2 from "../components/FrameComponent24";
import styles from "./ProtoPositionsPage.module.css";

const ProtoPositionsPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onConfigureWalletsContainerClick = useCallback(() => {
    navigate("/proto-wallets-menu");
  }, [navigate]);

  const onUserInputBoxTextClick = useCallback(() => {
    navigate("/proto-bot-settings-page");
  }, [navigate]);

  return (
    <div className={styles.protoPositionsPage}>
      <div className={styles.protoPositionsPageInner}>
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
          <div className={styles.settingsmenuWrapper}>
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
      <FrameComponent propPadding="0px var(--padding-51xl) var(--padding-8xs) var(--padding-52xl)" />
      <div className={styles.protoPositionsPageChild}>
        <FrameComponent2 />
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
      </main>
      <footer className={styles.messageInputBox}>
        <img
          className={styles.commandsListIcon}
          loading="lazy"
          alt=""
          src="/commands-list@2x.png"
        />
        <h2 className={styles.userinputbox} onClick={onUserInputBoxTextClick}>
          /Settings
        </h2>
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

export default ProtoPositionsPage;
