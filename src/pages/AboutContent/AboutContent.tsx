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
      <div style={{ width: '100%', paddingTop: '30px', paddingBottom: '48px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: '16px', paddingRight: '16px' }}>
          <div style={{ textAlign: 'center', maxWidth: '768px', margin: '0 auto' }}>
            <ShimmerText lines={2} width="70%" style={{ marginBottom: "20px", margin: "0 auto 20px" }} />
            <ShimmerText lines={4} width="80%" style={{ margin: "0 auto" }} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ 
      width: '100%', 
      paddingTop: '30px', 
      paddingBottom: '30px',
      paddingLeft: '16px',
      paddingRight: '16px'
    }}>
      <div style={{ 
        maxWidth: '1280px', 
        margin: '0 auto',
        paddingLeft: 'clamp(16px, 4vw, 64px)',
        paddingRight: 'clamp(16px, 4vw, 64px)'
      }}>
        <div style={{ 
          maxWidth: '768px', 
          margin: '0 auto', 
          textAlign: 'center' as const
        }}>
          <h2 style={{ 
            fontSize: 'clamp(24px, 5vw, 36px)', 
            fontWeight: 600, 
            color: '#000', 
            lineHeight: '1.25', 
            marginBottom: '24px',
            textAlign: 'center' as const
          }}>
            {title} <span style={{ color: '#6dc7d1' }}>{highlightedText}</span>
          </h2>

          <p style={{ 
            color: '#4b5563', 
            fontSize: 'clamp(14px, 2vw, 18px)', 
            lineHeight: '1.75', 
            textAlign: 'center' as const,
            whiteSpace: 'pre-line',
            margin: '0 auto'
          }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
