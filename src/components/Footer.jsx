import { Star, Heart } from "./Icons";
import { useLocation, useNavigate } from "react-router-dom";
import { Github, Linkedin, Smartphone, FileUser } from "lucide-react";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const goNext = () => {
    switch (location.pathname) {
      case "/":
        navigate("/about");
        break;
      case "/about":
        navigate("/projects");
        break;
      case "/projects":
        navigate("/connect");
        break;
      default:
        navigate("/");
    }
  };
  return (
    <div className="bg-black ">
      <div className="flex justify-center ">
        <button onClick={goNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="white"
            stroke="black"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-arrow-big-right-dash-icon lucide-arrow-big-right-dash relative z-10 bottom-6 animate-bounce "
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" />
            <path d="M4 9v6" />
          </svg>
        </button>
      </div>
      <svg viewBox="0 0 1200 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,50 Q300,20 600,50 T1200,50 L1200,0 L0,0 Z" fill="white" />
      </svg>
      <Star />
      <div className="text-white flex justify-center gap-6 py-4">
        <a
          href="https://drive.google.com/file/d/1iA28zO3p-4HcdMy5auTk5MpVnaMaqw3l/view?usp=sharing"
          target="_blank"
          className="hover:scale-125 transition-colors"
        >
          <FileUser size={32} />
        </a>
        <a
          href="https://github.com/emansuliman4"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-colors"
        >
          <Github size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/eman-magdy-suliman"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-colors"
        >
          <Linkedin size={32} />
        </a>
        <a
          href="https://wa.me/201220265743"
          target="_blank"
          className="hover:scale-125 transition-colors"
        >
          <Smartphone size={32} />
        </a>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100">
        <path
          fill="white"
          fill-opacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="flex justify-around items-center ">
        <Heart />
        <Star />
      </div>
    </div>
  );
}
