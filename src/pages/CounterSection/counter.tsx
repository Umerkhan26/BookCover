import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import CountUp from "react-countup"; // Import CountUp

// Styled Components
const CounterSectionWrapper = styled.section`
  background: linear-gradient(90deg, #e4e7f9, #efe6ef);
  padding: 24px 0 48px;
  font-family: "Manrope", sans-serif;

  @media (max-width: 1024px) {
    padding: 20px 0 40px;
  }

  @media (max-width: 768px) {
    padding: 14px 0 36px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 80px;

  @media (max-width: 768px) {
    padding: 0 40px;
  }

  @media (max-width: 480px) {
    padding: 0 20px;
  }
`;

const WrapCounter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const ColCount = styled.div`
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 0.75rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 0.5rem;
  }
`;

const Num = styled.div`
  font-weight: 800;
  font-size: 110px;
  line-height: 122px;
  color: #6dc7d1;

  @media (max-width: 768px) {
    font-size: 80px;
    line-height: 90px;
  }

  @media (max-width: 480px) {
    font-size: 60px;
    line-height: 70px;
  }
`;

const PlusIcon = styled.img`
  width: 20px;
  height: 20px;

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 480px) {
    width: 14px;
    height: 14px;
  }
`;

const Label = styled.span`
  font-weight: 600;
  font-size: 24px;
  color: #455a64;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

interface CounterSectionProps {
  data: {
    num: number;
    label: string;
    showPlus?: boolean;
  }[];
}

const CounterSection: React.FC<CounterSectionProps> = ({ data }) => {
  const counterRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.5,
      },
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <CounterSectionWrapper ref={counterRef}>
      <Container>
        <WrapCounter>
          {data.map((item, index) => (
            <ColCount key={index}>
              <Top>
                <Num>
                  {isInView ? (
                    <CountUp
                      start={0}
                      end={item.num}
                      duration={2.5}
                      separator=","
                      delay={0}
                    />
                  ) : (
                    item.num
                  )}
                </Num>
                {item.showPlus && (
                  <PlusIcon
                    src="https://miblart.com/wp-content/uploads/2023/02/plus.svg"
                    alt="Plus"
                  />
                )}
              </Top>
              <Label>{item.label}</Label>
            </ColCount>
          ))}
        </WrapCounter>
      </Container>
    </CounterSectionWrapper>
  );
};

export default CounterSection;
