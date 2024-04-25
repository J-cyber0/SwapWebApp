import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TutorialButton.module.css";

const TutorialButton: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTutorialButtonContainerClick = useCallback(() => {
    navigate("/proto-tutorial-page");
  }, [navigate]);

  return (
    <div
      className={styles.tutorialbutton}
      onClick={onTutorialButtonContainerClick}
    >
      <h2 className={styles.tutorial}>Tutorial</h2>
    </div>
  );
};

export default TutorialButton;
