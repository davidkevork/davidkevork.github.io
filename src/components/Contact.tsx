import React from "react";
import SectionContainer from "./SectionContainer";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <SectionContainer id="contact">
      <h2 className="text-4xl font-bold text-white mb-8">Get in Touch</h2>
      <div className="flex flex-col items-center space-y-6">
        <div className="flex space-x-6">
          <a
            href="mailto:davidkevork@gmail.com"
            className="text-azure hover:animate-glow-pulse"
          >
            <Mail size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/david-kevork-b629a74a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-azure hover:animate-glow-pulse"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="https://github.com/davidkevork"
            target="_blank"
            rel="noopener noreferrer"
            className="text-azure hover:animate-glow-pulse"
          >
            <Github size={32} />
          </a>
        </div>
      </div>
      <p className="text-cool-gray mt-12 text-center">
        © {new Date().getFullYear()} David Kevork. All rights reserved.
      </p>
    </SectionContainer>
  );
};

export default Contact;
