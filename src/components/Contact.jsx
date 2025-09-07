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

          // Error handling remains the same
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
    <div className={`contact-form-container ${darkMode ? "dark" : ""}`}>
      <div className="contact-form-card">
        <div className="contact-form-header">
          <h2 className="contact-form-title">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="contact-form-subtitle">
            Have a question or want to work together? Send me a message.
          </p>
        </div>

        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="user_name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              className="form-input"
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="user_email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              className="form-input"
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="form-input"
              placeholder="What is this regarding?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              rows="5"
              required
              placeholder="Type your message here..."
            ></textarea>
          </div>

          {submitStatus === "success" && (
            <div className="success-message google-green">
              Thank you for your message! I'll get back to you soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="error-message google-red">
              Sorry, there was an error sending your message.
              {errorDetails && (
                <div className="error-details">{errorDetails}</div>
              )}
              <div style={{ marginTop: "10px", fontSize: "0.9rem" }}>
                Please ensure you've set up the correct email template in
                EmailJS.
              </div>
            </div>
          )}

          <button
            type="submit"
            className="submit-button google-blue-bg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <style jsx>{`
        .contact-form-container {
          max-width: 600px;
          margin: 2rem auto;
          padding: 0 1rem;
        }

        .contact-form-card {
          background: var(--card-bg);
          border-radius: 12px;
          padding: 2.5rem;
          box-shadow: var(--shadow);
          border: 1px solid var(--card-border);
          transition: all 0.3s ease;
        }

        .contact-form-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .contact-form-title {
          font-size: 2.2rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .contact-form-subtitle {
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin: 0;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid var(--card-border);
          border-radius: 8px;
          background: var(--primary-bg);
          color: var(--text-primary);
          font-family: inherit;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--accent-color);
          box-shadow: 0 0 0 2px
            ${darkMode ? "rgba(138, 180, 248, 0.2)" : "rgba(66, 133, 244, 0.2)"};
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: var(--text-secondary);
          opacity: 0.7;
        }

        .submit-button {
          width: 100%;
          padding: 0.875rem 1.5rem;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          color: white;
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .success-message,
        .error-message {
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .success-message {
          background: ${darkMode
            ? "rgba(129, 201, 149, 0.1)"
            : "rgba(52, 168, 83, 0.1)"};
          border: 1px solid
            ${darkMode ? "rgba(129, 201, 149, 0.3)" : "rgba(52, 168, 83, 0.3)"};
        }

        .error-message {
          background: ${darkMode
            ? "rgba(242, 139, 130, 0.1)"
            : "rgba(234, 67, 53, 0.1)"};
          border: 1px solid
            ${darkMode ? "rgba(242, 139, 130, 0.3)" : "rgba(234, 67, 53, 0.3)"};
        }

        .error-details {
          font-size: 0.9rem;
          margin-top: 0.5rem;
          opacity: 0.8;
        }

        .gradient-text {
          background: ${darkMode
            ? "linear-gradient(90deg, #8ab4f8, #81c995)"
            : "linear-gradient(90deg, #4285f4, #34a853)"};
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline;
        }

        @media (max-width: 768px) {
          .contact-form-card {
            padding: 1.5rem;
          }

          .contact-form-title {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
}
