import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProtoImportPrivateKey.module.css";

const ProtoImportPrivateKey: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImportButtonClick = useCallback(() => {
    navigate("/proto-connect-wallet");
  }, [navigate]);

  return (
    <div className={styles.protoImportPrivateKey}>
      <img
        className={styles.backgroundfilterIcon}
        alt=""
        src="/backgroundfilter1.svg"
      />
      <footer className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <section className={styles.frameParent}>
          <div className={styles.backbuttonParent}>
            <div className={styles.backbutton}>
              <img
                className={styles.backIcon}
                loading="lazy"
                alt=""
                src="/back@2x.png"
              />
              <div className={styles.privateKeyInput}>
                <div className={styles.back}>Back</div>
              </div>
            </div>
            <div className={styles.importPrivateKeyForm}>
              <h1 className={styles.importPrivateKey}>Import Private Key</h1>
            </div>
          </div>
          <div className={styles.importprivatekeyformWrapper}>
            <div className={styles.importprivatekeyform}>
              <div className={styles.form}>
                <img
                  className={styles.importicon}
                  loading="lazy"
                  alt=""
                  src="/importicon@2x.png"
                />
              </div>
              <div className={styles.form1}>
                <div className={styles.wrapperNameinputbox}>
                  <input
                    className={styles.nameinputbox}
                    placeholder="Name"
                    type="text"
                  />
                  <div className={styles.namefield}>
                    <i className={styles.name}>Name</i>
                  </div>
                </div>
                <div className={styles.wrapperPrivatekeyinputbox}>
                  <input
                    className={styles.privatekeyinputbox}
                    placeholder="Private Key"
                    type="text"
                  />
                  <div className={styles.privatekeyfield}>
                    <i className={styles.privateKey}>Private Key</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.importbuttonWrapper}>
          <button className={styles.importbutton} onClick={onImportButtonClick}>
            <img
              className={styles.importbuttonChild}
              alt=""
              src="/rectangle-271.svg"
            />
            <b className={styles.import}>IMPORT</b>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ProtoImportPrivateKey;
