import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SlippageConfigDisplay from "./SlippageConfigDisplay";
import styles from "./FrameComponent24.module.css";

const FrameComponent2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAutobuyButtonContainerClick = useCallback(() => {
    navigate("/proto-autobuy");
  }, [navigate]);

  const onSwapButtonContainerClick = useCallback(() => {
    navigate("/proto-swap-page");
  }, [navigate]);

  const onBridgeButtonContainerClick = useCallback(() => {
    navigate("/proto-bridge-page");
  }, [navigate]);

  const onSendButtonContainerClick = useCallback(() => {
    navigate("/proto-send-page");
  }, [navigate]);

  const onReceiveButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPositionsResponseTextContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='sWAPCOMSWAPProfit1']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.frameParent}>
      <SlippageConfigDisplay
        theFoldPadding="0px var(--padding-6xs-9) var(--padding-4xs) var(--padding-base)"
        onAutobuyButtonContainerClick={onAutobuyButtonContainerClick}
        onSwapButtonContainerClick={onSwapButtonContainerClick}
        onBridgeButtonContainerClick={onBridgeButtonContainerClick}
        onSendButtonContainerClick={onSendButtonContainerClick}
        onReceiveButtonContainerClick={onReceiveButtonContainerClick}
      />
      <button className={styles.messageframe}>
        <div className={styles.messageFrame}>
          <div className={styles.bridgetext}>/Positions</div>
        </div>
      </button>
      <div className={styles.frameWrapper}>
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
          <div className={styles.positionsresponsetextParent}>
            <div
              className={styles.positionsresponsetext}
              onClick={onPositionsResponseTextContainerClick}
            >
              <div className={styles.position1}>
                <b className={styles.swapcomSwapProfitContainer}>
                  <p className={styles.swapcomSwap}>SWAP.COM $SWAP</p>
                  <p className={styles.profit120}>Profit: +120% / 104 SOL</p>
                  <p className={styles.value60000}>Value: $60000 / 312 SOL</p>
                  <p className={styles.mc1124b}>MC: 1.124B / @ $1.59</p>
                </b>
              </div>
              <div className={styles.position11}>
                <b
                  className={styles.swapcomSwapProfitContainer1}
                  data-scroll-to="sWAPCOMSWAPProfit1"
                >
                  <p className={styles.swapcomSwap1}>SWAP.COM $SWAP</p>
                  <p className={styles.profit1201}>Profit: +120% / 104 SOL</p>
                  <p className={styles.value600001}>Value: $60000 / 312 SOL</p>
                  <p className={styles.mc1124b1}>MC: 1.124B / @ $1.59</p>
                </b>
              </div>
            </div>
            <div className={styles.positionsMenuItems}>
              <div className={styles.buySolButton}>
                <div className={styles.positions1menu}>
                  <div className={styles.buy10solbutton}>
                    <b className={styles.buy10Sol}>{`BUY  10 SOL `}</b>
                  </div>
                  <div className={styles.buyxbutton}>
                    <b className={styles.buyX}>{`BUY X `}</b>
                  </div>
                  <div className={styles.sell100pctbutton}>
                    <b className={styles.sell100}>SELL 100%</b>
                  </div>
                  <div className={styles.sellxbutton}>
                    <b className={styles.sellX}>SELL X</b>
                  </div>
                  <div className={styles.managebutton}>
                    <b className={styles.manage}>{`MANAGE `}</b>
                  </div>
                </div>
                <div className={styles.positions2menu}>
                  <div className={styles.buy10solbutton1}>
                    <b className={styles.buy10Sol1}>{`BUY  10 SOL `}</b>
                  </div>
                  <div className={styles.buyxbutton1}>
                    <b className={styles.buyX1}>{`BUY X `}</b>
                  </div>
                  <div className={styles.sell100pctbutton1}>
                    <b className={styles.sell1001}>SELL 100%</b>
                  </div>
                  <div className={styles.sellxbutton1}>
                    <b className={styles.sellX1}>SELL X</b>
                  </div>
                  <div className={styles.managebutton1}>
                    <b className={styles.manage1}>{`MANAGE `}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
