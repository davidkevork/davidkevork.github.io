import React from "react";

interface SectionContainerProps {
  id?: string;
  children: React.ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  children,
}) => {
  return (
    <section id={id} className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      {children}
    </section>
  );
};

export default SectionContainer;
