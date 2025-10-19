import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SplashCursor from "./components/SplashCursor";
import Home from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import Footer from "./components/Footer";
import "./index.css";
import { MyProjects } from "./pages/MyProjects";
import ConnectMe from "./pages/ConnectMe";
function App() {
  return (
    <Router>
      <Header />
      <SplashCursor />
      <div className="halftone-gradient  selection:bg-violet-400">
        <div className="flex justify-center items-center"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<MyProjects />} />
          <Route path="/connect" element={<ConnectMe />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
