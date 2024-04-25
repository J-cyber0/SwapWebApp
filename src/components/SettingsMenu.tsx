import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SettingsMenu.module.css";

const SettingsMenu: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSettingsMenuContainerClick = useCallback(() => {
    navigate("/proto-app-settings-page");
  }, [navigate]);

  return (
    <div className={styles.settingsmenu} onClick={onSettingsMenuContainerClick}>
      <img
        className={styles.settingsicon}
        loading="lazy"
        alt=""
        src="/settingsicon@2x.png"
      />
    </div>
  );
};

export default SettingsMenu;
