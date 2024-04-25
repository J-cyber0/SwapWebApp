import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ProtoRecieve from "./pages/ProtoRecieve";
import ProtoFirstPage from "./pages/ProtoFirstPage";
import ProtoTutorialPage from "./pages/ProtoTutorialPage";
import ProtoAutobuy from "./pages/ProtoAutobuy";
import ProtoSendPage from "./pages/ProtoSendPage";
import ProtoBridgePage from "./pages/ProtoBridgePage";
import ProtoSwapPage from "./pages/ProtoSwapPage";
import ProtoMENUPage from "./pages/ProtoMENUPage";
import ProtoBotSettingsPage from "./pages/ProtoBotSettingsPage";
import ProtoPositionsPage from "./pages/ProtoPositionsPage";
import ProtoConnectWallet from "./pages/ProtoConnectWallet";
import ProtoImportRecoveryPhrase from "./pages/ProtoImportRecoveryPhrase";
import ProtoImportPrivateKey from "./pages/ProtoImportPrivateKey";
import ProtoAddWalletPage from "./pages/ProtoAddWalletPage";
import ProtoWalletsMenu from "./pages/ProtoWalletsMenu";
import ProtoAppSettingsPage from "./pages/ProtoAppSettingsPage";
import SplashPage from "./pages/SplashPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/proto-first-page":
        title = "";
        metaDescription = "";
        break;
      case "/proto-tutorial-page":
        title = "";
        metaDescription = "";
        break;
      case "/proto-autobuy":
        title = "";
        metaDescription = "";
        break;
      case "/proto-send-page":
        title = "";
        metaDescription = "";
        break;
      case "/proto-bridge-page":
        title = "";
        metaDescription = "";
        break;
      case "/proto-swap-page":
        title = "";
        metaDescription = "";
        break;
      case "/proto-menu-page":
        title = "";
        metaDescription = "";
        break;
      case "/proto-bot-settings-page":
        title = "";
        metaDescription = "";
        break;
      case "/proto-positions-page":
        title = "";
        metaDescription = "";
        break;
      case "/proto-connect-wallet":
        title = "";
        metaDescription = "";
        break;
      case "/proto-import-recovery-phrase":
        title = "";
        metaDescription = "";
        break;
      case "/proto-import-private-key":
        title = "";
        metaDescription = "";
        break;
      case "/proto-add-wallet-page":
        title = "";
        metaDescription = "";
        break;
      case "/proto-wallets-menu":
        title = "";
        metaDescription = "";
        break;
      case "/proto-app-settings-page":
        title = "";
        metaDescription = "";
        break;
      case "/splash-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ProtoRecieve />} />
      <Route path="/proto-first-page" element={<ProtoFirstPage />} />
      <Route path="/proto-tutorial-page" element={<ProtoTutorialPage />} />
      <Route path="/proto-autobuy" element={<ProtoAutobuy />} />
      <Route path="/proto-send-page" element={<ProtoSendPage />} />
      <Route path="/proto-bridge-page" element={<ProtoBridgePage />} />
      <Route path="/proto-swap-page" element={<ProtoSwapPage />} />
      <Route path="/proto-menu-page" element={<ProtoMENUPage />} />
      <Route
        path="/proto-bot-settings-page"
        element={<ProtoBotSettingsPage />}
      />
      <Route path="/proto-positions-page" element={<ProtoPositionsPage />} />
      <Route path="/proto-connect-wallet" element={<ProtoConnectWallet />} />
      <Route
        path="/proto-import-recovery-phrase"
        element={<ProtoImportRecoveryPhrase />}
      />
      <Route
        path="/proto-import-private-key"
        element={<ProtoImportPrivateKey />}
      />
      <Route path="/proto-add-wallet-page" element={<ProtoAddWalletPage />} />
      <Route path="/proto-wallets-menu" element={<ProtoWalletsMenu />} />
      <Route
        path="/proto-app-settings-page"
        element={<ProtoAppSettingsPage />}
      />
      <Route path="/splash-page" element={<SplashPage />} />
    </Routes>
  );
}
export default App;
