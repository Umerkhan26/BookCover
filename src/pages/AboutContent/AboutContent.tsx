import React, { useEffect, useState } from "react";
import { ShimmerText } from "../../components/Shimmer/Shimmer";

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
  shared their values – Lumeart. Our team believes that book cover design can look professional without costing you a fortune. 
  There are so many stories in this world worth telling. Let us make sure yours gets the attention it deserves.`,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);
  if (!isLoaded) {
    return (
      <div className="text-center max-w-[90%] md:max-w-2xl mx-auto md:px-0 mt-8">
        <ShimmerText lines={2} width="70%" style={{ marginBottom: "20px" }} />
        <ShimmerText lines={4} width="80%" />
      </div>
    );
  }
  return (
    <div className="text-center max-w-[90%] md:max-w-2xl mx-auto  md:px-0 mt-8">
      <h2 className="text-[clamp(24px, 6vw, 32px)] font-semibold text-black leading-snug pb-8 mt-4">
        {title} <span className="text-[#6dc7d1]">{highlightedText}</span>
      </h2>

      <p className="text-gray-500  text-[clamp(14px,2vw,18px)] leading-relaxed break-words">
        {description}
      </p>
    </div>
  );
};

export default AboutContent;
