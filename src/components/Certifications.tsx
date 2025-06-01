import React from "react";
import SectionContainer from "./SectionContainer";
import { certifications } from "../data/certifications";
import type { Certification } from "../data/certifications";

const Certifications: React.FC = () => {
  return (
    <SectionContainer id="certifications">
      <h2 className="text-4xl font-bold text-white mb-8">
        Licenses &amp; Certifications
      </h2>
      <div className="space-y-6">
        {certifications.map((cert: Certification, idx: number) => (
          <a
            key={idx}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-oxford-blue-2 p-6 rounded-xl shadow-smoke hover:bg-oxford-blue-3 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <img
                src={cert.imageSrc}
                alt={cert.issuer + " logo"}
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-2xl font-semibold text-white mb-1">
                  {cert.title}
                </h3>
                <p className="text-cool-gray mb-1">{cert.issuer}</p>
                <p className="text-cool-gray text-sm">
                  Issued {cert.issued} &middot; Expires {cert.expires}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Certifications;
