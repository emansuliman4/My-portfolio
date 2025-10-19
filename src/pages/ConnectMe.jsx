import { Github, Linkedin } from "lucide-react";
import EmailForm from "../components/EmailForm";
function ConnectMe() {
  return (
    <div>
      <section
        id="contact"
        className="min-h-screen py-32 px-4 text-white flex items-center relative overflow-hidden"
      >
        <div className="max-w-4xl md:max-w-3xl mx-auto w-full relative z-10">
          <div className="text-center mb-24">
            <div className="inline-block bg-black text-white px-16 py-10 transform rotate-2 hover:-rotate-2 transition-all border-8 border-white animate-blob">
              <h2 className="text-4xl md:text-6xl font-black ">
                LET'S CONNECT!
              </h2>
            </div>
          </div>
          <div className="pb-6">
            <EmailForm />
          </div>
          <div>
            <div className="relative group">
              <div
                className="absolute inset-0 bg-white opacity-20 animate-blob"
                style={{ animationDelay: "2s" }}
              />
              <div className="relative bg-white text-black p-12 clip-wave transform hover:scale-105 hover:-rotate-1 transition-all duration-500">
                <h3 className="text-4xl font-black mb-10">FIND ME ONLINE</h3>

                <div className="space-y-6">
                  <a
                    href="https://github.com/emansuliman4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group/btn block"
                  >
                    <div
                      className="absolute inset-0 bg-black transform translate-x-3 translate-y-3 group-hover/btn:translate-x-5 group-hover/btn:translate-y-5 transition-transform"
                      style={{
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)",
                      }}
                    />
                    <div
                      className="relative flex items-center gap-6 p-8 border-8 border-black bg-white hover:bg-black hover:text-white transition-all"
                      style={{
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)",
                      }}
                    >
                      <Github size={48} strokeWidth={3} />
                      <span className="font-black text-2xl">GitHub</span>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/eman-magdy-suliman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group/btn block"
                  >
                    <div
                      className="absolute inset-0 bg-black transform translate-x-3 translate-y-3 group-hover/btn:translate-x-5 group-hover/btn:translate-y-5 transition-transform"
                      style={{
                        clipPath:
                          "polygon(0% 15%, 100% 0%, 100% 100%, 0% 100%)",
                      }}
                    />
                    <div
                      className="relative flex items-center gap-6 p-8 border-8 border-black bg-white hover:bg-black hover:text-white transition-all"
                      style={{
                        clipPath:
                          "polygon(0% 15%, 100% 0%, 100% 100%, 0% 100%)",
                      }}
                    >
                      <Linkedin size={48} strokeWidth={3} />
                      <span className="font-black text-2xl">LinkedIn</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ConnectMe;
