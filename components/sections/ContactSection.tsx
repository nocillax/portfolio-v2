"use client";

import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiFacebook,
  FiMail,
  FiDownload,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { personalInfo } from "@/data/personalInfo";
import { SectionBackground, FloatingShapes } from "../background";

/**
 * ContactSection Component
 *
 * A minimalist contact section for the portfolio with:
 * - Direct contact information (email, LinkedIn, WhatsApp)
 * - "Download Resume" button
 * - Social media links in a clean layout
 * - Location information
 *
 * Features a clean two-column layout on desktop and stacked on mobile
 */
export default function ContactSection() {
  return (
    <SectionBackground variant="white" showPattern={true} patternOpacity={15}>
      <section id="contact" className="py-12 md:py-24 relative">
        <FloatingShapes variant="standard" density="low" colorOpacity={10} />
        <div className="container mx-auto px-6 md:px-10">
          {/* Section header with minimalist style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <span className="block text-sm uppercase tracking-widest text-accent dark:text-accent-dark font-sans mb-2">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-dark dark:text-primary mb-6">
              Let's discuss your next project
            </h2>
            <div className="w-12 h-px bg-accent/30 dark:bg-accent-dark/30 my-6"></div>
            <p className="text-stone dark:text-stone-dark font-sans mb-10">
              Let’s build something meaningful together. I’m open to freelance
              projects and full-time roles - drop me a message anytime.
            </p>

            {/* Action button */}
            <div className="flex flex-col sm:flex-row items-start gap-6 mt-8">
              {/* Download Resume Button */}
              <a
                href={personalInfo.resumeLink}
                download
                className="group flex items-center gap-2 px-8 py-3 bg-white dark:bg-dark text-dark dark:text-primary font-sans text-base font-medium border border-accent/20 dark:border-accent-dark/30 hover:border-accent dark:hover:border-accent-dark hover:bg-accent/5 dark:hover:bg-accent-dark/5 transition-colors duration-300 min-w-[180px]"
              >
                <FiDownload className="group-hover:scale-110 transition-transform duration-300" />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Contact information in two columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
              {/* Left column: Contact information */}
              <div className="space-y-8 md:col-span-6">
                {/* Email contact */}
                <div className="flex items-start space-x-4 group hover:bg-accent/5 dark:hover:bg-accent-dark/5 p-3 -ml-3 rounded-md transition-colors">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 dark:bg-accent-dark/10 group-hover:bg-accent/20 dark:group-hover:bg-accent-dark/20 transition-colors">
                    <FiMail
                      size={20}
                      className="text-accent dark:text-accent-dark"
                    />
                  </div>
                  <div>
                    <h4 className="font-sans font-medium text-dark dark:text-primary mb-1">
                      Email
                    </h4>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-stone dark:text-stone-dark hover:text-accent dark:hover:text-accent-dark transition-colors font-sans"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* LinkedIn contact */}
                <div className="flex items-start space-x-4 group hover:bg-accent/5 dark:hover:bg-accent-dark/5 p-3 -ml-3 rounded-md transition-colors">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 dark:bg-accent-dark/10 group-hover:bg-accent/20 dark:group-hover:bg-accent-dark/20 transition-colors">
                    <FiLinkedin
                      size={20}
                      className="text-accent dark:text-accent-dark"
                    />
                  </div>
                  <div>
                    <h4 className="font-sans font-medium text-dark dark:text-primary mb-1">
                      LinkedIn
                    </h4>
                    <a
                      href={personalInfo.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone dark:text-stone-dark hover:text-accent dark:hover:text-accent-dark transition-colors font-sans"
                    >
                      {personalInfo.socials.linkedin.replace("https://", "")}
                    </a>
                  </div>
                </div>

                {/* WhatsApp contact */}
                <div className="flex items-start space-x-4 group hover:bg-accent/5 dark:hover:bg-accent-dark/5 p-3 -ml-3 rounded-md transition-colors">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 dark:bg-accent-dark/10 group-hover:bg-accent/20 dark:group-hover:bg-accent-dark/20 transition-colors">
                    <FaWhatsapp
                      size={20}
                      className="text-accent dark:text-accent-dark"
                    />
                  </div>
                  <div>
                    <h4 className="font-sans font-medium text-dark dark:text-primary mb-1">
                      WhatsApp
                    </h4>
                    <a
                      href={personalInfo.socials.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone dark:text-stone-dark hover:text-accent dark:hover:text-accent-dark transition-colors font-sans"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Right column: Social links and location */}
              <div className="space-y-10 md:col-span-6 md:border-l md:border-accent/20 md:dark:border-accent-dark/20 md:pl-8 text-right">
                {/* Social links */}
                <div className="pb-8 border-b border-accent/20 dark:border-accent-dark/20">
                  <h3 className="font-serif text-xl text-dark dark:text-primary mb-6">
                    Connect
                  </h3>
                  <div className="flex space-x-5 justify-end">
                    <a
                      href={personalInfo.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone dark:text-stone-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
                      aria-label="GitHub"
                    >
                      <FiGithub size={22} />
                    </a>
                    <a
                      href={personalInfo.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone dark:text-stone-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
                      aria-label="LinkedIn"
                    >
                      <FiLinkedin size={22} />
                    </a>
                    <a
                      href={personalInfo.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone dark:text-stone-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
                      aria-label="Facebook"
                    >
                      <FiFacebook size={22} />
                    </a>
                    <a
                      href={personalInfo.socials.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone dark:text-stone-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
                      aria-label="WhatsApp"
                    >
                      <FaWhatsapp size={22} />
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <h3 className="font-serif text-xl text-dark dark:text-primary mb-4">
                    Location
                  </h3>
                  <p className="text-stone dark:text-stone-dark font-sans text-base text-right">
                    Based in {personalInfo.location}
                    <br />
                    <span className="text-sm opacity-80 mt-2 block">
                      Available for remote work worldwide
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </SectionBackground>
  );
}
