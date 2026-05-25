import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "" });

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1️⃣ Send message to YOU
      await emailjs.sendForm(
        "service_52bci1i",
        "template_h782zep", // ✅ FIXED (no typo)
        formRef.current,
        "wf-LFU-AUtdjaxjCe"
      );

      // 2️⃣ Auto reply to USER
      await emailjs.sendForm(
        "service_52bci1i",
        "template_g58sv42",
        formRef.current,
        "wf-LFU-AUtdjaxjCe"
      );

      setToast({
        message: "Message sent successfully 🚀",
        type: "success",
      });

      formRef.current.reset();
    } catch (err) {
      console.error("🔥 EmailJS ERROR:", err);

      setToast({
        message: err?.text || "Failed to send message ❌",
        type: "error",
      });
    }

    setLoading(false);

    setTimeout(() => {
      setToast({ message: "", type: "" });
    }, 3000);
  };

  const socials = [
    { href: "https://instagram.com/", icon: faInstagram, color: "#ff2a7f" },
    { href: "https://linkedin.com/", icon: faLinkedin, color: "#0a66c2" },
    { href: "https://facebook.com/", icon: faFacebook, color: "#1877f2" },
    { href: "https://github.com/", icon: faGithub, color: "#ffffff" },
  ];

  return (
    <div className="min-h-screen bg-[#070707] text-white flex flex-col items-center justify-center px-4 py-10">

      {/* POPUP TOAST */}
      <AnimatePresence>
        {toast.message && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.35 }}
            className="
              fixed z-50
              top-24 sm:top-10
              left-1/2 sm:left-6
              -translate-x-1/2 sm:translate-x-0
              w-[90%] sm:w-auto
              max-w-sm
            "
          >
            <div
              className={`relative px-5 py-4 rounded-2xl backdrop-blur-xl border shadow-2xl text-white
              ${
                toast.type === "success"
                  ? "bg-green-500/20 border-green-400/30"
                  : "bg-red-500/20 border-red-400/30"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-3 h-3 rounded-full ${
                    toast.type === "success"
                      ? "bg-green-400"
                      : "bg-red-400"
                  } animate-pulse`}
                />

                <p className="text-sm font-medium break-words">
                  {toast.message}
                </p>
              </div>

              <div
                className={`absolute inset-0 rounded-2xl blur-2xl opacity-30 -z-10 ${
                  toast.type === "success"
                    ? "bg-green-400"
                    : "bg-red-400"
                }`}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-[#FFD700] mb-10">
        CONTACT
      </h1>

      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-[0_0_60px_rgba(255,215,0,0.08)]"
        >
          <h2 className="text-2xl font-semibold mb-6 text-[#FFD700]">
            Send a Message
          </h2>

          <input
            name="name"
            placeholder="Your Name"
            className="w-full mb-4 p-3 bg-black/40 border border-white/10 rounded-lg outline-none focus:border-[#FFD700]"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-3 bg-black/40 border border-white/10 rounded-lg outline-none focus:border-[#FFD700]"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full mb-4 p-3 bg-black/40 border border-white/10 rounded-lg outline-none focus:border-[#FFD700]"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#FFD700] text-black font-bold rounded-lg hover:scale-105 transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* SOCIAL */}
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl font-semibold text-[#FFD700] mb-8">
            Connect With Me
          </h2>

          <div className="flex gap-6 flex-wrap justify-center">
            {socials.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group relative w-16 h-16 flex items-center justify-center rounded-full"
                style={{
                  border: `2px solid ${item.color}`,
                  boxShadow: `0 0 15px ${item.color}`,
                }}
              >
                <span
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition"
                  style={{ background: item.color }}
                />

                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-2xl relative z-10 group-hover:rotate-[360deg] transition-transform duration-700"
                  style={{ color: item.color }}
                />
              </a>
            ))}
          </div>

          <div className="mt-10">
            <p className="text-white/60">Direct Email</p>
            <p className="text-[#FFD700] font-semibold">
              sahoswapnajit@gmail.com
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;