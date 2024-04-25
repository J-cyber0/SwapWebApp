import { FunctionComponent } from "react";
import HUD from "./HUD";
import AutobuyButton from "./AutobuyButton";
import SwapButton from "./SwapButton";
import BridgeButton from "./BridgeButton";
import SendButton from "./SendButton";
import ReceiveButton1 from "./ReceiveButton1";
import TutorialButton from "./TutorialButton";
import styles from "./ReceiveButton.module.css";

const ReceiveButton: FunctionComponent = () => {
  return (
    <div className={styles.receiveButton}>
      <div className={styles.avatarIconParent}>
        <div className={styles.avatarIcon}>
          <HUD />
        </div>
        <div className={styles.topMenu}>
          <nav className={styles.topmenu}>
            <AutobuyButton />
            <SwapButton />
            <BridgeButton />
            <SendButton />
            <ReceiveButton1 />
          </nav>
        </div>
        <div className={styles.thefold} />
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
          <h2 className={styles.welcomeToTheContainer}>
            <p className={styles.welcomeToThe}>
              Welcome to the Swap.io Chatbot! 🤖
            </p>
            <p className={styles.iveCreatedACryptoWalletF}>
              {`
I’ve created a Crypto wallet for you right out the box on the Solana blockchain network! Here’s your Swap Wallet address:  
`}
              <span
                className={styles.cvm7s4pj3hm2n7n98e9xqg63d81vzb}
              >{`3CvM7s4pJ3hM2n7n98e9XQG63d81VZbeRF9PqN8tNvRJ
`}</span>
            </p>
            <p className={styles.wonderingWhatI}>
              Wondering what I can do for you? Let me show you:
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blazinglyFastTradingTrade}>
              🚀 Blazingly-fast trading: Trade cryptocurrencies with lightning
              speed right from your fingertips.
            </p>
            <p className={styles.blankLine1}>&nbsp;</p>
            <p className={styles.heresHowTo}>Here's how to get started:</p>
            <p className={styles.blankLine2}>&nbsp;</p>
            <p className={styles.tutorial}>Tutorial:</p>
            <p className={styles.blankLine3}>&nbsp;</p>
            <p className={styles.newToSwapio}>
              New to Swap.io? Let's walk you through our features step by step.
              Click the Tutorial button to start the guided tour.
            </p>
            <p className={styles.manualExploration}>{`
Manual Exploration:`}</p>
            <p className={styles.blankLine4}>&nbsp;</p>
            <p
              className={styles.alreadyFamiliarWith}
            >{`Already familiar with our platform? Hit the menu button to check our newest features.
`}</p>
            <p className={styles.inOurMenu}>In our menu, you'll find:</p>
            <p className={styles.blankLine5}>&nbsp;</p>
            <p className={styles.instantSwapsSwap}>
              🔄 Instant Swaps: Swap cryptocurrencies swiftly and seamlessly.
            </p>
            <p className={styles.newTokenAlerts}>
              🔔 New Token Alerts: Stay updated with alerts for new tokens.
            </p>
            <p className={styles.tradeTrackingKeep}>
              📊 Trade Tracking: Keep track of your trades effortlessly.
            </p>
            <p className={styles.pnlMonitoringMonitor}>
              💰 PNL Monitoring: Monitor your Profit and Loss with ease.
            </p>
            <p className={styles.andMuchMore}>And much more.</p>
            <p className={styles.blankLine6}>&nbsp;</p>
            <p className={styles.readyToDive}>
              Ready to dive in? Let's explore!
            </p>
          </h2>
        </div>
      </div>
      <div className={styles.component}>
        <TutorialButton />
      </div>
    </div>
  );
};

export default ReceiveButton;
