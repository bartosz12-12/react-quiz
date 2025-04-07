import Header from "./Header.js";
import Main from "./Main.js";
import { QuizeProvider } from "../context/QuizeContext";

function App() {
  return (
    <div className="app">
      <QuizeProvider>
        <Header></Header>
        <Main />
      </QuizeProvider>
    </div>
  );
}

export default App;
