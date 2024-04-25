import { FunctionComponent } from "react";
import styles from "./UserInputBox.module.css";

const UserInputBox: FunctionComponent = () => {
  return (
    <div className={styles.userInputBox}>
      <div className={styles.avataricon}>
        <div className={styles.paperPlane} />
        <img
          className={styles.ethereumIcon}
          loading="lazy"
          alt=""
          src="/ethereum@2x.png"
        />
      </div>
      <div className={styles.backgroundFilter}>
        <div className={styles.settingsGeneralSettingsContainer}>
          <p className={styles.settings}>Settings:</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.generalSettings}>GENERAL SETTINGS</p>
          <p className={styles.blankLine1}>&nbsp;</p>
          <p className={styles.autoBuy}>/AUTO BUY</p>
          <p className={styles.immediatelyBuyWhen}>
            Immediately buy when pasting token address. Tap to toggle.
          </p>
          <p className={styles.blankLine2}>&nbsp;</p>
          <p className={styles.buttonsConfig}>/BUTTONS CONFIG</p>
          <p className={styles.customizeYourBuy}>
            Customize your buy and sell buttons for buy token and manage
            position. Tap to edit.
          </p>
          <p className={styles.blankLine3}>&nbsp;</p>
          <p className={styles.slippageConfig}>/SLIPPAGE CONFIG</p>
          <p className={styles.customizeYourSlippage}>
            Customize your slippage settings for buys and sells. Tap to edit.
          </p>
          <p className={styles.maxPriceImpact}>
            Max Price Impact is to protect against trades in extremely illiquid
            pools.
          </p>
          <p className={styles.blankLine4}>&nbsp;</p>
          <p className={styles.transactionPriority}>/TRANSACTION PRIORITY</p>
          <p className={styles.increaseYourTransaction}>
            Increase your Transaction Priority to improve transaction speed.
            Select preset or tap to edit.
          </p>
          <p className={styles.blankLine5}>&nbsp;</p>
        </div>
        <div className={styles.blockchainSelectionDropDown}>
          <div className={styles.blockchainselectiondropdown}>
            <div className={styles.solanaChainWrapper}>
              <div className={styles.solanaChain}>SOLANA CHAIN</div>
            </div>
            <img
              className={styles.image5Icon}
              loading="lazy"
              alt=""
              src="/image-5@2x.png"
            />
          </div>
          <div className={styles.autobuysetttingsbox}>
            <div className={styles.autobuySettings}>AUTOBUY SETTINGS</div>
          </div>
          <div className={styles.autobuySetttingsBox}>
            <div className={styles.buypctbutton}>
              <div className={styles.buy10}>{`BUY: 10% `}</div>
            </div>
            <div className={styles.sellpctbutton}>
              <div className={styles.sell10}>{`SELL: 10% `}</div>
            </div>
          </div>
          <div className={styles.buybuttonconfigbox}>
            <div className={styles.buyButtonConfig}>BUY BUTTON CONFIG</div>
          </div>
          <div className={styles.autobuySetttingsBox1}>
            <div className={styles.leftbuttonconfigbutton}>
              <div className={styles.left5Sol}>LEFT: 5 SOL</div>
            </div>
            <div className={styles.rightbuttonconfigbutton}>
              <div className={styles.right10Sol}>RIGHT: 10 SOL</div>
            </div>
          </div>
          <div className={styles.slippageconfigdisplay}>
            <div className={styles.slippageConfig1}>SLIPPAGE CONFIG</div>
          </div>
          <div className={styles.autobuySetttingsBox2}>
            <div className={styles.autobuyamount1}>
              <div className={styles.sol}>1.5 SOL</div>
            </div>
            <div className={styles.autobuyamount2}>
              <div className={styles.sol1}>11.5 SOL</div>
            </div>
          </div>
          <div className={styles.transactionprioritybox}>
            <div
              className={styles.transactionPriority1}
            >{`TRANSACTION PRIORITY `}</div>
          </div>
          <div className={styles.autobuySetttingsBox3}>
            <div className={styles.prioritybutton}>
              <div className={styles.fast}>FAST</div>
            </div>
            <div className={styles.transactionfeesamountbutton}>
              <div className={styles.sol2}>0.1 SOL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInputBox;
