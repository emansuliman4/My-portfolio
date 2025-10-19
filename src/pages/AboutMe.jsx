import { Sparkles, MousePointerClick, GraduationCap } from "lucide-react";
import { useState } from "react";

export function AboutMe() {
  const [open, setOpen] = useState(false);
  const skills = {
    technical: [
      "HTML5",
      "CSS",
      "JavaScript",
      "jQuery",
      "React.js",
      "Figma",
      "Tailwind CSS",
      "Git",
      "Bash",
      "Docker",
      "Linux",
    ],
    interpersonal: [
      "Communication",
      "Presentation",
      "Critical Thinking",
      "Team Building",
      "Time Management",
    ],
  };

  const aboutLines = [
    "I'm a frontend developer who made an unconventional career shift from Agriculture to programming. Unexpected? Maybe. But it's been one of the best decisions I've made.",
    <strong key="why">Why Frontend?</strong>,
    "I chose programming because it never stays the same – there's always something new to learn, a better way to build things, and problems that actually make you think. Frontend development specifically drew me in because I get to see ideas come to life right in front of me. Writing code and watching it work instantly? That feeling never gets old.",
    <strong key="what">What I Do?</strong>,
    "I build clean, responsive interfaces using React. I'm all about creating experiences that feel smooth and intuitive, and I genuinely enjoy the process of solving problems – whether it's a tricky bug or figuring out the best way to structure a component. The challenge is what keeps me going. Every project is a puzzle, and I love working through it.",
  ];

  return (
    <div className="overscroll-x-none">
      <div className="flex justify-center pt-6 pb-6">
        <p className="font-[1000] text-4xl md:text-6xl flex justify-center items-center whitespace-nowrap bg-white size-fit h-[10vh] -skew-3">
          About Me
        </p>
      </div>

      <div
        className="pb-6 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex justify-center items-center "
        onClick={() => setOpen(!open)}
      >
        {!open ? (
          <h1
            className="-ml-4 shadow-xl text-l md:text-2xl bg-white italic pt-6 pb-6 md:p-8 text-black indent-6 cursor-pointer md:text-lg leading-relaxed flex justify-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-slate-50 w-full max-w-4xl font-extrabold"
            style={{ borderRadius: "20px 5px" }}
          >
            If you want to know Who i am, Click on me
            <MousePointerClick size={20} color="black" />
          </h1>
        ) : (
          <div className="shadow-2xl bg-black italic p-6 md:p-8 rounded-[2rem] text-white indent-6 text-base md:text-lg leading-relaxed w-full max-w-4xl cursor-pointer">
            {aboutLines.map((line, i) => (
              <div
                key={i}
                className="about-line reveal mb-4"
                style={{ animationDelay: `${i * 140}ms` }}
              >
                {line}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="relative">
        <div
          className="absolute inset-0 bg-white opacity-10 animate-blob"
          style={{ animationDelay: "1s" }}
        />
        <div className="relative text-black p-12 clip-blob">
          <h3 className="text-5xl font-black mb-12 text-center">
            <Sparkles className="inline mr-4 animate-spin-slow" size={40} />
            MY SKILLS
            <Sparkles className="inline ml-4 animate-spin-slow" size={40} />
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-3xl font-black mb-8 border-b-8 border-black pb-4">
                TECHNICAL
              </h4>
              <div className="flex flex-wrap gap-4">
                {skills.technical.map((skill, i) => (
                  <span
                    key={skill}
                    className="bg-black text-white px-6 py-3 font-black border-4 border-black hover:bg-white hover:text-black transition-all cursor-pointer transform hover:scale-110 hover:rotate-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]"
                    style={{
                      borderRadius: i % 2 === 0 ? "20px 5px" : "5px 20px",
                      animationDelay: `${i * 0.05}s`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-3xl font-black mb-8 border-b-8 border-black pb-4">
                INTERPERSONAL
              </h4>
              <div className="flex flex-wrap gap-4">
                {skills.interpersonal.map((skill, i) => (
                  <span
                    key={skill}
                    className="bg-white text-black px-6 py-3 font-black border-4 border-black hover:bg-black hover:text-white transition-all cursor-pointer transform hover:scale-110 hover:-rotate-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]"
                    style={{
                      borderRadius: i % 2 === 0 ? "5px 20px" : "20px 5px",
                      animationDelay: `${i * 0.05}s`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid place-items-center w-full mb-20 px-4 sm:px-6 lg:px-8 overscroll-x-none">
        {/* Education */}
        <div className="relative group w-full max-w-4xl">
          <div className="absolute inset-0 bg-white opacity-20 animate-blob" />
          <div className="relative bg-white text-black p-6 sm:p-8 md:p-10 lg:p-12 clip-wave transform hover:scale-105 transition-all duration-500 hover:rotate-1">
            <div
              className="absolute -top-5 -right-5 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-black flex items-center justify-center animate-spin"
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
            >
              <GraduationCap
                size={28}
                className="text-white "
                strokeWidth={3}
              />
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-8 underline decoration-4 sm:decoration-6 md:decoration-8 decoration-wavy text-center">
              EDUCATION
            </h3>

            <div className="space-y-4 text-sm sm:text-base md:text-lg font-bold">
              <div className="border-l-8 border-black pl-4 sm:pl-6 py-2 hover:pl-8 transition-all">
                <p className="text-lg sm:text-xl md:text-2xl font-black">
                  Mansoura University
                </p>
                <p className="text-sm sm:text-base">Agricultural Engineering</p>
                <p className="text-xs sm:text-sm md:text-sm">2019 - 2023</p>
              </div>

              <div className="bg-black text-white p-4 sm:p-6 md:p-8 transform rotate-1 hover:-rotate-1 transition-transform mt-6 clip-diagonal">
                <p className="text-lg sm:text-xl md:text-2xl font-black mb-2">
                  🌟 Graduation Project
                </p>
                <p className="mb-2 text-sm sm:text-base">
                  Smart Irrigation System
                </p>
                <div className="inline-block bg-white text-black px-3 py-1 sm:px-4 sm:py-2 font-black text-lg sm:text-2xl transform -rotate-2">
                  A+
                </div>
              </div>

              <div className="transform -rotate-1 border-8 border-black p-4 sm:p-6 md:p-8 mt-9 hover:bg-black hover:text-white transition-all group hover:rotate-2">
                <p className="text-lg sm:text-xl md:text-2xl font-black">
                  ITI Code Camp
                </p>
                <p className="font-bold text-sm sm:text-base">
                  Full Stack Python
                </p>
                <p className="text-xs sm:text-sm md:text-sm">
                  Nov 2024 - May 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
