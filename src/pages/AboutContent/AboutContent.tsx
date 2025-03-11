import React from "react";

interface AboutContentProps {
  title?: string;
  highlightedText?: string;
  description?: string;
}

const AboutContent: React.FC<AboutContentProps> = ({
  title = "There are so many stories",
  highlightedText = "in this world worth telling...",
  description = `Our is not an exception. It started with three young people sharing the same passion for creating a unique design. 
  Through hard work and an infinite amount of hours mastering their craft, the guys ended up founding a place for people who 
  shared their values – Miblart. Our team believes that book cover design can look professional without costing you a fortune. 
  There are so many stories in this world worth telling. Let us make sure yours gets the attention it deserves.`,
}) => {
  return (
    <div className="text-center max-w-2xl mx-auto mt-[-490px]">
      <h2 className="text-xl font-semibold text-black">
        {title} <span className="text-[#6dc7d1]">{highlightedText}</span>
      </h2>
      <p className="text-gray-600 mt-4">{description}</p>
    </div>
  );
};

export default AboutContent;
