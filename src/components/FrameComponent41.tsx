import { FunctionComponent } from "react";
import HUD from "./HUD1";
import styles from "./FrameComponent41.module.css";

const FrameComponent4: FunctionComponent = () => {
  return (
    <div className={styles.protoRecieveInner}>
      <div className={styles.hudParent}>
        <HUD />
        <HUD propMarginLeft="-259px" />
      </div>
    </div>
  );
};

export default FrameComponent4;
