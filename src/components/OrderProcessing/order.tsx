import React from "react";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader"; // Import ClipLoader

const OrderProcessing: React.FC = () => {
  return (
    <Container>
      <Logo>Mibi</Logo>
      <Message>
        Thank you for choosing <strong>Mibi</strong>
      </Message>
      <ProcessingMessage>
        Your payment was successful, we are currently processing your order.
      </ProcessingMessage>
      <ClipLoader color="#00254d" size={50} /> {/* Add ClipLoader */}
      <Instruction>
        If you stay on this page, you'll be logged in as soon as the order is
        done processing. You will also receive an email with your login details.
      </Instruction>
    </Container>
  );
};

export default OrderProcessing;

// Styled Components
const Container = styled.div`
  padding: 40px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Manrope", sans-serif;
  height: 100vh; /* Make container take full viewport height */
`;

const Logo = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #00254d;
`;

const Message = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
  color: #00254d;

  strong {
    font-weight: bold;
  }
`;

const ProcessingMessage = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px; /* Increased margin for spacing */
  color: #333;
`;

const Instruction = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #666;
  max-width: 500px;
  line-height: 1.5;
  margin-top: 20px; /* Added margin for spacing */
`;
