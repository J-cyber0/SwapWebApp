import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import styles from "./ProtoSwapPage.module.css";

const ProtoSwapPage: FunctionComponent = () => {
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
    <div className={styles.protoSwapPage}>
      <div className={styles.protoSwapPageInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
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
          <FrameComponent5 />
          <FrameComponent4 />
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
          src="/message-tail-11.svg"
        />
      </main>
      <div className={styles.messageframeWrapper}>
        <button className={styles.messageframe}>
          <div className={styles.messageFrame}>
            <div className={styles.contracttokenaddress}>
              CXb92fEG87ziY8h2U9S2kg5eNfFHH2bHTDNfCQ2VJeT3
            </div>
          </div>
        </button>
      </div>
      <div className={styles.responseMenu}>
        <div className={styles.launchChartButton}>
          <div className={styles.buyOneSolButton}>
            <div className={styles.avataricon}>
              <div className={styles.buySolButton} />
              <img
                className={styles.ethereumIcon}
                loading="lazy"
                alt=""
                src="/ethereum@2x.png"
              />
            </div>
            <div className={styles.swapcomSwapContainer}>
              <p className={styles.swapcomSwap}>Swap.com ($SWAP)</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.caCxb92feg87ziy8h2u9s2kg5enf}>
                🪅 CA: CXb92fEG87ziY8h2U9S2kg5eNfFHH2bHTDNfCQ2VJeT3 🅲
              </p>
              <p className={styles.exchangeRaydium}>🎯 Exchange: Raydium</p>
              <p className={styles.marketCap14521k}>💡 Market Cap: $145.21K</p>
              <p className={styles.liquidity2905k}>💧 Liquidity: $29.05K</p>
              <p className={styles.tokenPrice00001452}>
                💰 Token Price: $0.0001452
              </p>
              <p className={styles.pooledSol1566}>⛽ Pooled SOL: 156.6 SOL</p>
              <p className={styles.burn100}>🔥 Burn: 100%</p>
              <p className={styles.renounced}>👤 Renounced: ✅</p>
            </div>
          </div>
          <div className={styles.pctSlippage}>
            <div className={styles.caresponsemenu}>
              <div className={styles.launchchartbutton}>
                <div className={styles.launchChart}>LAUNCH CHART</div>
              </div>
              <div className={styles.buyonesolbutton}>
                <div className={styles.buy1Sol}>{`BUY 1 SOL `}</div>
              </div>
              <div className={styles.buy10solbutton}>
                <div className={styles.buy10Sol}>BUY 10 SOL</div>
              </div>
              <div className={styles.buy5solbutton}>
                <div className={styles.buy5Sol}>{`BUY 5 SOL `}</div>
              </div>
              <div className={styles.buyxsolbutton}>
                <div className={styles.buyXSol}>{`BUY X SOL `}</div>
              </div>
              <div className={styles.buyslippagebutton}>
                <div className={styles.buySlippage}>{`BUY SLIPPAGE `}</div>
              </div>
              <div className={styles.pctslippage}>
                <div className={styles.div}>{`15% `}</div>
              </div>
              <div className={styles.buytipbutton}>
                <div className={styles.buyTip}>{`BUY TIP `}</div>
              </div>
              <div className={styles.tipamount}>
                <div className={styles.sol}>{`0.01 SOL `}</div>
              </div>
              <div className={styles.trackbutton}>
                <div className={styles.track}>TRACK</div>
              </div>
              <div className={styles.limitorderbutton}>
                <div className={styles.limitOrder}>{`LIMIT ORDER `}</div>
              </div>
              <div className={styles.dcabutton}>
                <div className={styles.dca}>DCA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default ProtoSwapPage;
