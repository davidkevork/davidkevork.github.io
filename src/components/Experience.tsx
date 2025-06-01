import React from "react";
import SectionContainer from "./SectionContainer";
import { experiences } from "../data/experience";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  return (
    <SectionContainer id="experience">
      <h2 className="text-4xl font-bold text-white mb-8">Work Experience</h2>
      <div className="relative border-l-2 border-azure ml-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            className="mb-12 ml-6 pl-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="absolute -left-6 mt-1 w-3 h-3 bg-azure rounded-full"></div>
            <h3 className="text-2xl font-semibold text-white">
              {exp.role} @ {exp.company}
            </h3>
            <span className="text-cool-gray italic text-sm">
              {exp.duration}
            </span>
            <ul className="list-disc list-inside text-cool-gray mt-4">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
            {/* Render Skills line exactly as provided */}
            <p className="text-cool-gray mt-3">
              <strong className="text-white">Skills:</strong>{" "}
              {exp.skills.join(", ")}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Experience;
