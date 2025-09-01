"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiFacebook,
  FiMail,
  FiArrowRight,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

/**
 * ContactSection Component
 *
 * The contact section of the portfolio with:
 * - Contact form
 * - Social media links
 * - Contact information
 * - Location details
 *
 * Features form handling and animations for a smooth UX
 */
export default function ContactSection() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  /**
   * Handles changes to form inputs
   * @param e - Input change event
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Handles form submission
   * Demo only - simulates a form submission
   * @param e - Form submission event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission with a delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage(
        "Thank you for your message! This is a demo form, so no actual message was sent."
      );
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-paper">
      <div className="container mx-auto px-6 md:px-10">
        {/* Section header with minimalist style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-md mb-16"
        >
          <span className="block text-sm uppercase tracking-widest text-accent font-sans mb-2">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-dark mb-6">
            Let's discuss your next project
          </h2>
          <div className="w-12 h-px bg-accent/30 my-6"></div>
          <p className="text-stone font-sans">
            I'm currently available for freelance projects or full-time
            positions. Feel free to reach out if you're looking for a developer
            focused on creating elegant, efficient, and user-friendly
            applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact Form - Takes more space */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-dark mb-2 font-sans"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white text-dark py-3 px-4 border border-accent/20 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 font-sans"
                />
              </div>

              {/* Email field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-dark mb-2 font-sans"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white text-dark py-3 px-4 border border-accent/20 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 font-sans"
                />
              </div>

              {/* Message field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-dark mb-2 font-sans"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white text-dark py-3 px-4 border border-accent/20 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 font-sans"
                ></textarea>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center gap-2 px-8 py-3 bg-dark text-white font-sans text-base font-medium border border-dark hover:bg-white hover:text-dark transition-colors duration-300 disabled:opacity-70 disabled:pointer-events-none"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              {/* Form submission feedback message */}
              {submitMessage && (
                <div className="mt-4 p-4 bg-accent/5 text-dark border border-accent/20 font-sans">
                  {submitMessage}
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Info - Smaller column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 lg:border-l lg:border-accent/20 lg:pl-10"
          >
            <div className="space-y-8">
              {/* Contact information */}
              <div>
                <h3 className="font-serif text-xl text-dark mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {/* Email contact */}
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <FiMail size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-sans font-medium text-dark mb-1">
                        Email
                      </h4>
                      <a
                        href="mailto:contact@example.com"
                        className="text-stone hover:text-accent transition-colors font-sans"
                      >
                        contact@example.com
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn contact */}
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <FiLinkedin size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-sans font-medium text-dark mb-1">
                        LinkedIn
                      </h4>
                      <a
                        href="https://linkedin.com/in/example"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone hover:text-accent transition-colors font-sans"
                      >
                        linkedin.com/in/example
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp contact */}
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <FaWhatsapp size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-sans font-medium text-dark mb-1">
                        WhatsApp
                      </h4>
                      <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone hover:text-accent transition-colors font-sans"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-8 border-t border-accent/20">
                <h3 className="font-serif text-lg text-dark mb-4">Connect</h3>
                <div className="flex space-x-5">
                  <a
                    href="https://github.com/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone hover:text-accent transition-colors"
                    aria-label="GitHub"
                  >
                    <FiGithub size={22} />
                  </a>
                  <a
                    href="https://linkedin.com/in/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone hover:text-accent transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin size={22} />
                  </a>
                  <a
                    href="https://facebook.com/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone hover:text-accent transition-colors"
                    aria-label="Facebook"
                  >
                    <FiFacebook size={22} />
                  </a>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone hover:text-accent transition-colors"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp size={22} />
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="pt-8 border-t border-accent/20">
                <p className="text-stone font-sans text-sm italic">
                  Based in Tokyo, Japan.
                  <br />
                  Available for remote work worldwide.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
