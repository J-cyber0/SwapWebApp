import { FunctionComponent, useCallback } from "react";
import ConfigureWallets from "../components/ConfigureWallets";
import SettingsMenu from "../components/SettingsMenu";
import ReceiveButton from "../components/ReceiveButton";
import { useNavigate } from "react-router-dom";
import styles from "./ProtoFirstPage.module.css";

const ProtoFirstPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMessageInputBoxClick = useCallback(() => {
    navigate("/proto-menu-page");
  }, [navigate]);

  const onCommandsListContainerClick = useCallback(() => {
    navigate("/proto-menu-page");
  }, [navigate]);

  return (
    <div className={styles.protoFirstPage}>
      <div className={styles.outputbox} />
      <main className={styles.backgroundfilterParent}>
        <section className={styles.backgroundfilter} />
        <div className={styles.configureWalletsComponentWrapper}>
          <div className={styles.configureWalletsComponent}>
            <div className={styles.walletProviderBox}>
              <ConfigureWallets />
            </div>
            <SettingsMenu />
          </div>
        </div>
        <section className={styles.sendButton}>
          <ReceiveButton />
        </section>
        <footer
          className={styles.messageInputBox}
          onClick={onMessageInputBoxClick}
        >
          <div
            className={styles.commandsList}
            onClick={onCommandsListContainerClick}
          >
            <img
              className={styles.commandsListIcon}
              loading="lazy"
              alt=""
              src="/commands-list@2x.png"
            />
          </div>
          <h1 className={styles.userinputbox}>Type your message here...</h1>
          <img
            className={styles.paperPlaneIcon}
            loading="lazy"
            alt=""
            src="/paper-plane@2x.png"
          />
        </footer>
      </main>
    </div>
  );
};

export default ProtoFirstPage;
