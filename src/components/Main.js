import Loader from "./Loader.js";
import Error from "./Error.js";
import StartScreen from "./StartScreen.js";
import Qestion from "./Qestion.js";
import NextButton from "./NextButton.js";
import Progres from "./Progres.js";
import FinishScreen from "./FinishScreen.js";
import Footer from "./Footer.js";
import Timer from "./Timer.js";
import { useQuize } from "../context/QuizeContext.js";

function Main() {
  const { status } = useQuize();

  return (
    <main className="main">
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && <StartScreen />}
      {status === "active" && (
        <>
          <Progres />
          <Qestion />
          <Footer>
            <Timer />
            <NextButton />
          </Footer>
        </>
      )}
      {status === "finish" && <FinishScreen />}
    </main>
  );
}

export default Main;
