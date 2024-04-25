import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TutorialStartBox.module.css";

const TutorialStartBox: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTutorialStartBoxClick = useCallback(() => {
    navigate("/proto-menu-page");
  }, [navigate]);

  return (
    <footer
      className={styles.tutorialstartbox}
      onClick={onTutorialStartBoxClick}
    >
      <div className={styles.tutorialoutputtextWrapper}>
        <h1 className={styles.tutorialoutputtext}>
          Click the menu button below to get started.
        </h1>
      </div>
      <div className={styles.messageInputBox}>
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
      </div>
    </footer>
  );
};

export default TutorialStartBox;
