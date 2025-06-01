import React from "react";
import SectionContainer from "./SectionContainer";
import profile from "../assets/profile.jpg";

const About: React.FC = () => {
  return (
    <SectionContainer id="about">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <img
            src={profile}
            alt="Profile"
            className="w-48 h-48 rounded-full border-4 border-azure shadow-azure"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-cool-gray mb-4">
            Results-driven Software Engineer with 7 years of experience in
            software development and a Bachelor's degree in Computer Software
            Engineering.
          </p>
          <p className="text-cool-gray mb-4">
            Proficient in AWS, Node.js, Golang, and CI/CD, with a proven track
            record of integrating systems, enhancing security, and implementing
            new technologies. Skilled in JavaScript, TypeScript, and AWS
            services, with a keen ability to streamline processes and improve
            code quality.
          </p>
          <p className="text-cool-gray mb-4">
            A collaborative team player dedicated to delivering projects on time
            and within budget. Eager to embrace new challenges and stay abreast
            of emerging technologies to drive continuous improvement and
            innovation.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
