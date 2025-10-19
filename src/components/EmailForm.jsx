import { Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function EmailForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          title: "Contact Form",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus(""), 3000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus(""), 3000);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div>
          <div className="relative group order-2 md:order-1">
            <div
              className="absolute inset-0 bg-white opacity-20 animate-blob"
              style={{ animationDelay: "1s" }}
            />
            <div className="relative bg-white text-black p-4 sm:p-6 md:p-12 clip-wave transform hover:scale-105 hover:rotate-1 transition-all duration-500">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 md:mb-8">
                SEND MESSAGE
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-black text-base sm:text-lg mb-2"
                  >
                    NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 sm:p-4 border-2 sm:border-4 border-black font-bold text-base sm:text-lg focus:outline-none focus:border-black focus:ring-4 focus:ring-black/20 transition-all" // تقليل الـ padding من p-4 إلى p-3 sm:p-4 وتخفيف البوردر من border-4 إلى border-2 sm:border-4
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-black text-base sm:text-lg mb-2"
                  >
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 sm:p-4 border-2 sm:border-4 border-black font-bold text-base sm:text-lg focus:outline-none focus:border-black focus:ring-4 focus:ring-black/20 transition-all" // نفس التغييرات
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-black text-base sm:text-lg mb-2"
                  >
                    PHONE
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border-2 sm:border-4 border-black font-bold text-base sm:text-lg focus:outline-none focus:border-black focus:ring-4 focus:ring-black/20 transition-all" // نفس التغييرات
                    placeholder="+20 123 456 7890"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block font-black text-base sm:text-lg mb-2"
                  >
                    MESSAGE *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full p-3 sm:p-4 border-2 sm:border-4 border-black font-bold text-base sm:text-lg focus:outline-none focus:border-black focus:ring-4 focus:ring-black/20 transition-all resize-none" // نفس التغييرات
                    placeholder="Your message here..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="relative group/btn w-full"
                >
                  <div className="absolute inset-0 bg-black transform translate-x-2 translate-y-2 group-hover/btn:translate-x-3 group-hover/btn:translate-y-3 transition-transform" />
                  <div className="relative flex items-center justify-center gap-2 sm:gap-3 p-4 sm:p-5 border-2 sm:border-4 border-black bg-white hover:bg-black hover:text-white transition-all font-black text-lg sm:text-xl">
                    <Send size={20} className="sm:w-6 sm:h-6" strokeWidth={3} />
                    <span>
                      {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
                    </span>
                  </div>
                </button>
                {status === "success" && (
                  <div className="p-3 sm:p-4 bg-green-500 text-white font-black text-center border-2 sm:border-4 border-black text-sm sm:text-base">
                    MESSAGE SENT SUCCESSFULLY!
                  </div>
                )}
                {status === "error" && (
                  <div className="p-3 sm:p-4 bg-red-500 text-white font-black text-center border-2 sm:border-4 border-black text-sm sm:text-base">
                    FAILED TO SEND. TRY AGAIN!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailForm;
