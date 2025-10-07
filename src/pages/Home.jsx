import eman from "../images/eman1.jpeg";
import Social from "@/components/Social";
import { Heart, Star } from "@/components/Icons";

function HomeComponent() {
  return (
    <div className="h-screen flex justify-center p-4">
      <div className="w-80 h-75 mx-auto bg-black rounded-[50%] relative font-mono">
        <img
          src={eman}
          alt="Eman Suliman"
          className="rounded-[50%] mx-auto w-80 h-70 animate-wave"
        />

        <div className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="border-4 border-stone-700 p-1 translate-y-7 rotate-45  "
          >
            <path d="m16 18 6-6-6-6" />
            <path d="m8 6-6 6 6 6" />
          </svg>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-zap-icon lucide-zap border-b-4 border-stone-700 p-1 absolute top-0 right-0 translate-x-8 -translate-y-4 animation-iconel"
        >
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
        </svg>
        <p className="font-[1000] text-6xl flex justify-center whitespace-nowrap">
          FRONT-END
        </p>

        <div className="border-4 border-stone-300 rounded-[50%] w-40 h-40 flex items-center justify-center absolute top-4 left-0 -translate-x-16 lg:-translate-x-40 z-[-10] animate-[bounce_10s_ease-in-out_infinite]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="gray"
            stroke="gray[300]"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-star-icon lucide-star"
          >
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
          </svg>
        </div>
        <p className=" text-white bg-black rounded-[20%] h-20 w-72 sm:w-80 animate-waveText font-bold text-4xl sm:text-5xl flex justify-center items-center whitespace-nowrap absolute -bottom-50 ">
          DEVELOPER
        </p>
      </div>
    </div>
  );
}

function IconNewPage() {
  return (
    <div className="bg-black mt-50 ">
      <div className="flex justify-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="60"
          viewBox="0 0 24 24"
          fill="white"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-circle-chevron-down-icon lucide-circle-chevron-down relative z-10 bottom-6 animate-bounce "
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m16 10-4 4-4-4" />
        </svg>
      </div>
      <svg viewBox="0 0 1200 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,50 Q300,20 600,50 T1200,50 L1200,0 L0,0 Z" fill="white" />
      </svg>
      <Star />
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

export default function Home() {
  return (
    <div className="overflow-x-hidden ">
      <HomeComponent />;
      <Social />
      <IconNewPage />
    </div>
  );
}
