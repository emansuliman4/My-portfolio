import Header from "./components/Header";
import SplashCursor from "./components/SplashCursor";
import Home from "./pages/Home";
import "./index.css";
function App() {
  return (
    <div className="halftone-gradient ">
      <SplashCursor />
      <div className="flex justify-center items-center">
        <Header />
      </div>
      <Home />
    </div>
  );
}

export default App;
