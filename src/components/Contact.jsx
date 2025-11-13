import { useState, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { darkMode } = useTheme();
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorDetails, setErrorDetails] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorDetails("");

    const templateParams = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      subject: formData.subject || `Message from ${formData.user_name}`,
      message: formData.message,
      time: new Date().toLocaleString(),
      reply_to: formData.user_email,
    };

    emailjs
      .send("service_chx8xct", "template_4tbpz39", templateParams, {
        publicKey: "LRGdJCs-rXJbFfUie",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setSubmitStatus("success");
          setFormData({
            user_name: "",
            user_email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          setSubmitStatus("error");

          if (error.text) {
            if (error.text.includes("Invalid")) {
              setErrorDetails(
                "Invalid EmailJS configuration. Please check your Service ID, Template ID, and Public Key."
              );
            } else if (error.text.includes("template")) {
              setErrorDetails(
                "Template not found. Please check your Template ID in EmailJS."
              );
            } else {
              setErrorDetails(`Error: ${error.text}`);
            }
          } else {
            setErrorDetails("Network error. Please check your connection.");
          }
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-[#0a0a0a]" : "bg-[#fafafa]"}`}
    >
      <div className="max-w-[900px] mx-auto pt-40 pb-10 px-8 lg:px-16 xl:px-24">
        <div
          className={`rounded-sm p-8 border ${
            darkMode
              ? "border-[#1a1a1a] bg-[#0f0f0f]"
              : "border-[#e8e8e8] bg-white"
          }`}
        >
          <div className="text-center mb-8">
            <h2
              className={`text-4xl font-extralight mb-4 ${
                darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
              } tracking-tight`}
            >
              Get In Touch
            </h2>
            <p
              className={`text-lg ${darkMode ? "text-[#888]" : "text-[#666]"}`}
            >
              Have a question or want to work together? Send me a message.
            </p>
          </div>

          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
            <div>
              <label
                className={`block mb-2 font-medium ${
                  darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                }`}
              >
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-sm border ${
                  darkMode
                    ? "border-[#2a2a2a] bg-[#0f0f0f] text-[#f5f5f5] placeholder-[#888]"
                    : "border-[#e0e0e0] bg-white text-[#1a1a1a] placeholder-[#666]"
                }`}
                required
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                className={`block mb-2 font-medium ${
                  darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                }`}
              >
                Email Address
              </label>
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-sm border ${
                  darkMode
                    ? "border-[#2a2a2a] bg-[#0f0f0f] text-[#f5f5f5] placeholder-[#888]"
                    : "border-[#e0e0e0] bg-white text-[#1a1a1a] placeholder-[#666]"
                }`}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                className={`block mb-2 font-medium ${
                  darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                }`}
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-sm border ${
                  darkMode
                    ? "border-[#2a2a2a] bg-[#0f0f0f] text-[#f5f5f5] placeholder-[#888]"
                    : "border-[#e0e0e0] bg-white text-[#1a1a1a] placeholder-[#666]"
                }`}
                placeholder="What is this regarding?"
              />
            </div>

            <div>
              <label
                className={`block mb-2 font-medium ${
                  darkMode ? "text-[#f5f5f5]" : "text-[#1a1a1a]"
                }`}
              >
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-sm border resize-none ${
                  darkMode
                    ? "border-[#2a2a2a] bg-[#0f0f0f] text-[#f5f5f5] placeholder-[#888]"
                    : "border-[#e0e0e0] bg-white text-[#1a1a1a] placeholder-[#666]"
                }`}
                rows="5"
                required
                placeholder="Type your message here..."
              />
            </div>

            {submitStatus === "success" && (
              <div
                className={`p-4 rounded-sm border ${
                  darkMode
                    ? "border-[#1a1a1a] bg-[#0f0f0f] text-[#81c995]"
                    : "border-[#e0e0e0] bg-[#f5f5f5] text-[#34a853]"
                }`}
              >
                Thank you for your message! I'll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div
                className={`p-4 rounded-sm border ${
                  darkMode
                    ? "border-[#1a1a1a] bg-[#0f0f0f] text-[#f28b82]"
                    : "border-[#e0e0e0] bg-[#f5f5f5] text-[#ea4335]"
                }`}
              >
                Sorry, there was an error sending your message.
                {errorDetails && (
                  <div className="mt-2 text-sm opacity-80">{errorDetails}</div>
                )}
                <div className="mt-2 text-sm">
                  Please ensure you've set up the correct email template in
                  EmailJS.
                </div>
              </div>
            )}

            <button
              type="submit"
              className={`w-full py-3 px-6 rounded-sm font-semibold text-white ${
                darkMode ? "bg-[#8ab4f8]" : "bg-[#4285f4]"
              } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
