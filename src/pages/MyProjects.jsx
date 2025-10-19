import React from "react";
import { Code, Star } from "lucide-react";

export function MyProjects() {
  const projects = [
    {
      title: "Company Profile",
      tools: "React, CSS, Bootstrap, EmailJS",
      description: "Professional company profile with contact",
      icon: "🏢",
      color: "black",
      demo: "https://clear-stone-five.vercel.app",
    },
    {
      title: "Maintenance Center",
      tools: "React, Django, PostgreSQL",
      description: "Full-stack graduation project",
      icon: "🔧",
      color: "black",
      demo: "#",
    },
    {
      title: "Furniture E-commerce",
      tools: "HTML, CSS, JavaScript, jQuery",
      description: "Online furniture store",
      icon: "🛋️",
      color: "black",
      demo: "https://team2-project.vercel.app/view/template/index.html",
    },
    {
      title: "Clothes Store",
      tools: "React, CSS",
      description: `Modern e-commerce platform `,
      icon: "👕",
      color: "black",
      demo: "#",
    },
    {
      title: "Movie Website",
      tools: "React, Tailwind CSS",
      description: "Movie listings, details and streaming UI",
      icon: "🎬",
      color: "black",
      demo: "https://moviezlaand.netlify.app/",
    },
  ];

  return (
    <div>
      {/* Section Divider Strip 2 */}
      <div className="relative h-24 ">
        <div className="absolute inset-0 flex items-center justify-center gap-8 ">
          <div
            className="w-16 h-16 bg-black animate-spin"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          />
          <Code className="animate-bounce" size={40} strokeWidth={4} />
          <div className="w-16 h-16 border-8 border-black rounded-full animate-[bounce_10s_ease-in-out_infinite]" />
        </div>
      </div>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen py-32 px-4 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <div className="inline-block relative">
              <h2 className="text-6xl md:text-8xl font-black bg-black text-white px-12 py-8 transform -rotate-2 hover:rotate-2 transition-all border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,0.3)]">
                MY PROJECTS
              </h2>
              <div
                className="absolute -top-8 -right-8 w-20 h-20 bg-white border-4 border-black animate-spin"
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
              >
                <Star
                  size={32}
                  className="mt-6 ml-4"
                  fill="black"
                  strokeWidth={0}
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="relative group cursor-pointer">
                {/* Shadow layer */}
                <div
                  className="absolute inset-0 bg-black transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-300"
                  style={{
                    clipPath:
                      index % 3 === 0
                        ? "polygon(0% 0%, 100% 0%, 100% 90%, 50% 100%, 0% 90%)"
                        : index % 3 === 1
                        ? "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)"
                        : "polygon(0% 10%, 100% 0%, 100% 100%, 0% 90%)",
                  }}
                />

                {/* Card front */}
                <div className="relative bg-white border-8 border-black p-8">
                  <div className="text-4xl">{project.icon}</div>
                  <h3 className="mt-4 text-2xl font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{project.tools}</p>
                  <p className="mt-4">{project.description}</p>

                  {/* Demo button */}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-block bg-black text-white px-4 py-2 border-2 border-black hover:bg-white hover:text-black transition"
                    >
                      View Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
