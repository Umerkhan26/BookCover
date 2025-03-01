import React from "react";
import styled from "styled-components";

// Styled Components
const CounterSectionWrapper = styled.section`
  background: linear-gradient(90deg, #e4e7f9, #efe6ef);
  padding: 4rem 0;
  font-family: "Manrope", sans-serif;
`;

const Container = styled.div`
  max-width: 1200px;

  margin: 0 auto;
  padding: 10px 80px;
`;

const WrapCounter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
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
`;

const Num = styled.div`
  font-weight: 800;
  font-size: 110px;
  line-height: 122px;
  color: #6dc7d1;
`;

const PlusIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const Label = styled.span`
  font-weight: 600;
  font-size: 24px;
  color: #455a64;
`;

// Component Props
interface CounterSectionProps {
  data: {
    num: number;
    label: string;
    showPlus?: boolean;
  }[];
}

// Main Component
const CounterSection: React.FC<CounterSectionProps> = ({ data }) => {
  return (
    <CounterSectionWrapper>
      <Container>
        <WrapCounter>
          {data.map((item, index) => (
            <ColCount key={index}>
              <Top>
                <Num>{item.num}</Num>
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
