import { FunctionComponent } from "react";
import BackButtonInstance from "../components/BackButtonInstance";
import styles from "./ProtoAppSettingsPage.module.css";

const ProtoAppSettingsPage: FunctionComponent = () => {
  return (
    <div className={styles.protoAppSettingsPage}>
      <footer className={styles.dropdownscreenParent}>
        <div className={styles.dropdownscreen} />
        <BackButtonInstance />
        <section className={styles.appsettingsdisplayWrapper}>
          <div className={styles.appsettingsdisplay}>
            <div className={styles.topmenu}>
              <img
                className={styles.qrCodeIcon}
                loading="lazy"
                alt=""
                src="/qr-code@2x.png"
              />
            </div>
            <div className={styles.darkthemetoggle}>
              <img
                className={styles.toggleOffIcon}
                loading="lazy"
                alt=""
                src="/toggle-off@2x.png"
              />
              <i className={styles.darkTheme}>Dark Theme</i>
            </div>
            <div className={styles.bottommenu}>
              <div className={styles.connectpremiumaccbutton}>
                <i className={styles.connectPremiumAccount}>
                  Connect Premium Account
                </i>
                <img
                  className={styles.forwardIcon}
                  loading="lazy"
                  alt=""
                  src="/forward@2x.png"
                />
              </div>
              <div className={styles.securitybutton}>
                <i className={styles.security}>Security</i>
                <img
                  className={styles.forwardIcon1}
                  loading="lazy"
                  alt=""
                  src="/forward@2x.png"
                />
              </div>
              <div className={styles.notificationsbutton}>
                <i className={styles.notifications}>Notifications</i>
                <img
                  className={styles.forwardIcon2}
                  loading="lazy"
                  alt=""
                  src="/forward-2@2x.png"
                />
              </div>
              <div className={styles.billingbutton}>
                <i className={styles.billing}>Billing</i>
                <img
                  className={styles.forwardIcon3}
                  loading="lazy"
                  alt=""
                  src="/forward-2@2x.png"
                />
              </div>
              <div className={styles.languagereligionbutton}>
                <i
                  className={styles.languageReligion}
                >{`Language & Religion`}</i>
                <img
                  className={styles.forwardIcon4}
                  loading="lazy"
                  alt=""
                  src="/forward-2@2x.png"
                />
              </div>
              <div className={styles.accessibilitybutton}>
                <i className={styles.accessibility}>Accessibility</i>
                <img
                  className={styles.forwardIcon5}
                  loading="lazy"
                  alt=""
                  src="/forward-2@2x.png"
                />
              </div>
              <div className={styles.connectedsocialaccs}>
                <i className={styles.connectedSocialAccounts}>
                  Connected Social Accounts
                </i>
                <img
                  className={styles.forwardIcon6}
                  loading="lazy"
                  alt=""
                  src="/forward@2x.png"
                />
              </div>
              <div className={styles.helpsupportbutton}>
                <i className={styles.helpSupport}>{`Help & Support`}</i>
                <img
                  className={styles.forwardIcon7}
                  loading="lazy"
                  alt=""
                  src="/forward-2@2x.png"
                />
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default ProtoAppSettingsPage;
