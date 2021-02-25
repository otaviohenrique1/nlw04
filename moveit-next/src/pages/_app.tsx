import { ChallengesProvider } from "../contexts/ChallengesContext";
import "../styles/global.css";

// _app -> carregado em todas as paginas

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp
