import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeIcon, setActiveIcon] = useState(null);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActiveIcon("rocket");
    } else if (path === "/about") {
      setActiveIcon("coffee");
    } else if (path === "/projects") {
      setActiveIcon("code");
    } else if (path === "/connect") {
      setActiveIcon("heart");
    }
  }, [location.pathname]);

  const handleIconClick = (iconName) => {
    if (iconName === "rocket") {
      navigate("/");
    } else if (iconName === "coffee") {
      navigate("/about");
    } else if (iconName === "code") {
      navigate("/projects");
    } else if (iconName === "heart") {
      navigate("/connect");
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="w-l sm:w-2xl lg:w-4xl p-3 sm:p-6 m-3 flex items-center justify-between text-stone-950 bg-white rounded-4xl border-4 border-stone-600 shadow-lg ">
        <div className="whitespace-nowrap font-mono font-extrabold text-2xl tracking-tight flex  gap-1 sm:text-3xl lg:text-4xl mt-2 ">
          <span>EMAN SULIMAN</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-sparkles-icon lucide-sparkles pb-2 animate-spin "
          >
            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
            <path d="M20 2v4" />
            <path d="M22 4h-4" />
            <circle cx="4" cy="20" r="2" />
          </svg>
        </div>

        <div className="flex gap-1 sm:gap-4 lg:gap-5">
          <button
            onClick={() => handleIconClick("rocket")}
            className="transition-all hover:scale-110 focus:outline-none"
            aria-label="Rocket"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill={activeIcon === "rocket" ? "black" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="border-2 rounded-full border-black p-1 transition-colors "
            >
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
          </button>

          <button
            onClick={() => handleIconClick("coffee")}
            className="transition-all hover:scale-110 focus:outline-none"
            aria-label="Coffee"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill={activeIcon === "coffee" ? "black" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="border-2 rounded-full border-black p-1 transition-colors"
            >
              <path d="M10 2v2" />
              <path d="M14 2v2" />
              <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
              <path d="M6 2v2" />
            </svg>
          </button>

          <button
            onClick={() => handleIconClick("code")}
            className="transition-all hover:scale-110 focus:outline-none"
            aria-label="Code"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill={activeIcon === "code" ? "black" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="border-2 rounded-full border-black p-1 transition-colors"
            >
              <path d="m16 18 6-6-6-6" />
              <path d="m8 6-6 6 6 6" />
            </svg>
          </button>

          <button
            onClick={() => handleIconClick("heart")}
            className="transition-all hover:scale-110 focus:outline-none"
            aria-label="Heart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill={activeIcon === "heart" ? "black" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="border-2 rounded-full border-black p-1 transition-colors"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
