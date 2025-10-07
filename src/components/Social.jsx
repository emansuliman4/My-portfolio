import { LinkedIn, GitHub } from "@/components/Icons";

function SocialComponent({ children, colorIN, color }) {
  return (
    <div
      className="w-40 h-20  rounded-4xl -translate-2 shadow-[10px_6px_0px_black]"
      style={{
        backgroundColor: colorIN,
        color: color,
        border: "3px solid black",
      }}
    >
      {children}
    </div>
  );
}

export default function Social() {
  return (
    <div className="flex justify-center gap-6 font-bold text-xl sm:text-2xl -m-40">
      <SocialComponent colorIN="white">
        <div className="flex justify-center items-center w-full h-full gap-2">
          <LinkedIn />
          <a
            href="https://www.linkedin.com/in/eman-magdy-suliman"
            target="_blank"
          >
            LINKEDIN
          </a>
        </div>
      </SocialComponent>
      <SocialComponent colorIN="black" color="white">
        <div className="flex justify-center items-center w-full h-full gap-2">
          <GitHub />
          <a
            href="https://github.com/emansuliman4?tab=repositories"
            target="_blank"
          >
            GITHUB
          </a>
        </div>
      </SocialComponent>
    </div>
  );
}
