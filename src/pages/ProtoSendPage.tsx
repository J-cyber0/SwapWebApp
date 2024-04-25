import { FunctionComponent, useCallback } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent21";
import { useNavigate } from "react-router-dom";
import styles from "./ProtoSendPage.module.css";

const ProtoSendPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMessageInputBoxClick = useCallback(() => {
    navigate("/proto-menu-page");
  }, [navigate]);

  return (
    <div className={styles.protoSendPage}>
      <div className={styles.protoSendPage1}>
        <div className={styles.frameParent}>
          <FrameComponent3 />
          <FrameComponent2 />
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
            <div className={styles.position2}>
              <b className={styles.transactionSummaryContainer}>
                <p
                  className={styles.transactionSummary}
                >{`📋 Transaction Summary   /  CONFIRMED `}</p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.recipientsWalletAddress}>
                  Recipient's Wallet Address:
                  0x8e91b87D6F5A281f1D5f2e2a1bD4304a85dC4b3E
                </p>
                <p className={styles.blankLine1}>&nbsp;</p>
                <p className={styles.transactionDetails}>
                  Transaction Details:
                </p>
                <ul className={styles.cryptocurrencySolanaSolA}>
                  <li className={styles.cryptocurrencySolanaSol}>
                    Cryptocurrency: Solana (SOL)
                  </li>
                  <li>Amount: 25 SOL</li>
                </ul>
              </b>
            </div>
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
          src="/message-tail-1.svg"
        />
        <img
          className={styles.messageTailIcon2}
          loading="lazy"
          alt=""
          src="/message-tail.svg"
        />
        <img
          className={styles.messageTailIcon3}
          loading="lazy"
          alt=""
          src="/message-tail-3.svg"
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
        <h3 className={styles.userinputbox}>Type your message here...</h3>
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

export default ProtoSendPage;
