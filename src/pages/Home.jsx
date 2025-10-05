// import eman from "../images/eman1.jpeg";
// export default function Home() {
//   return (
//     <div>
//       <div className=" w-80 h-75 mx-auto bg-stone-800  rounded-[50%] ">
//         <img
//           src={eman}
//           alt="Eman Suliman"
//           className="rounded-[50%] w-64 h-64 mx-auto w-80 h-70 animate-wave "
//         />
//         <div className="animate-bounce">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="60"
//             height="60"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="border-4 border-stone-700 p-1 translate-y-7 rotate-45  "
//           >
//             <path d="m16 18 6-6-6-6" />
//             <path d="m8 6-6 6 6 6" />
//           </svg>
//         </div>
//       </div>

//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="60"
//         height="60"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         stroke-width="2"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         className="lucide lucide-zap-icon lucide-zap border-b-4 border-stone-700 p-1 -translate-y-60 mx-85 s animation-iconel "
//       >
//         <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
//       </svg>
//       <p className="font-mono font-[1000] text-6xl flex justify-center">
//         FRONT-END
//       </p>
//       <div className="border-4 border-stone-300 rounded-[50%] w-40 h-40 flex items-center justify-center -translate-y-105 translate-x-5 sm:-translate-y-110 sm:translate-x-20 md:-translate-y-115 md:translate-x-40 lg:-translate-y-110 lg:translate-x-60  xl:translate-x-100 relative z-[-10] animate-[bounce_10s_ease-in-out_infinite] ">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="50"
//           height="50"
//           viewBox="0 0 24 24"
//           fill="gray"
//           stroke="gray[300]"
//           stroke-width="1"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           className="lucide lucide-star-icon lucide-star"
//         >
//           <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
//         </svg>
//       </div>

//       <p>DEVELOPER</p>
//     </div>
//   );
// }
import eman from "../images/eman1.jpeg";

export default function Home() {
  return (
    <div>
      <div className="w-80 h-75 mx-auto bg-stone-800 rounded-[50%] relative">
        <img
          src={eman}
          alt="Eman Suliman"
          className="rounded-[50%] w-64 h-64 mx-auto w-80 h-70 animate-wave"
        />

        {/* Code Icon - Bottom */}
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

        {/* Zap Icon - Top Right */}
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
        <p className="font-mono font-[1000] text-6xl flex justify-center whitespace-nowrap">
          FRONT-END
        </p>

        {/* Star Icon - Top Left */}
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
      </div>

      <p>DEVELOPER</p>
    </div>
  );
}
