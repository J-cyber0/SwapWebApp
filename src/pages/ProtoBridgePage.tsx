import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "../components/FrameComponent22";
import styles from "./ProtoBridgePage.module.css";

const ProtoBridgePage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onConfigureWalletsContainerClick = useCallback(() => {
    navigate("/proto-wallets-menu");
  }, [navigate]);

  const onSettingsMenuContainerClick = useCallback(() => {
    navigate("/proto-app-settings-page");
  }, [navigate]);

  const onMessageInputBoxClick = useCallback(() => {
    navigate("/proto-menu-page");
  }, [navigate]);

  return (
    <div className={styles.protoBridgePage}>
      <div className={styles.protoBridgePageInner}>
        <div className={styles.frameParent}>
          <div className={styles.configurewalletsWrapper}>
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
      <div className={styles.protoBridgePageChild}>
        <div className={styles.frameGroup}>
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
            <div className={styles.bridgeresponse}>
              <div className={styles.bridgetextresponse}>
                <div className={styles.welcomeToOurContainer}>
                  <p className={styles.welcomeToOur}>
                    Welcome to our bridging service! 💼 We're all about making
                    smart moves in the crypto world. Think of 'bridging' as your
                    shortcut to profit.
                  </p>
                  <p className={styles.blankLine}>&nbsp;</p>
                  <p className={styles.forExampleImagine}>
                    For example, imagine you have Ethereum (ETH) but see
                    potential gains in Bitcoin (BTC). These are on separate
                    crypto platforms, each with its own value. Our bridge
                    efficiently moves your assets between them, maximizing your
                    opportunities for profit. 💰
                  </p>
                  <p className={styles.blankLine1}>&nbsp;</p>
                  <p className={styles.questionsJustAsk}>
                    Questions? Just ask. Let's make some moves and grow your
                    portfolio! 🚀
                  </p>
                </div>
              </div>
              <div className={styles.bridgemenu}>
                <div className={styles.selectchaintextbox}>
                  <div className={styles.selectChain}>SELECT CHAIN</div>
                </div>
                <div className={styles.fromtextbox}>
                  <div className={styles.from}>FROM</div>
                </div>
                <div className={styles.totextbox}>
                  <div className={styles.to}>TO</div>
                </div>
                <div className={styles.bridgefromdropdown}>
                  <div className={styles.bridgefromframe}>
                    <div className={styles.sol}>SOL</div>
                    <img
                      className={styles.image5Icon}
                      alt=""
                      src="/image-5@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.bridgetodropdown}>
                  <div className={styles.bridgetodropdownframe}>
                    <div className={styles.eth}>ETH</div>
                    <img
                      className={styles.image5Icon1}
                      alt=""
                      src="/image-5@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.bridgefromdropdownamount}>
                  <div className={styles.div}>{`25 `}</div>
                </div>
                <div className={styles.bridgetodropdownamount}>
                  <div className={styles.div1}>1.5</div>
                </div>
                <div className={styles.feesandtimetextbox}>
                  <div className={styles.fees01Sol}>
                    FEES: 0.1 SOL TIME: 1 Min
                  </div>
                </div>
                <div className={styles.confirmswapbutton}>
                  <div className={styles.confirmSwap}>CONFIRM SWAP</div>
                </div>
              </div>
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

export default ProtoBridgePage;
