import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface OrderDetailsProps {
  orderId: string;
  email: string;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ orderId, email }) => {
  const navigate = useNavigate();

  const handleContinueClick = () => {
    navigate("/portal/orders/form");
  };

  return (
    <Container>
      <Logo>Mibi</Logo>
      <OrderNumber>Order#{orderId}</OrderNumber>
      <ThankYouMessage>Thank you, Umar!</ThankYouMessage>
      <ConfirmationMessage>
        Your payment was successful and we've sent a confirmation email to{" "}
        <strong>{email}</strong>.
      </ConfirmationMessage>
      <DetailsTitle>Here are your order details:</DetailsTitle>
      <Detail>Billing address</Detail>
      <Detail>IP address</Detail>
      <Detail>Umar Fair</Detail>
      <Detail>154.192.19.58</Detail>
      <Detail>United States</Detail>
      <Detail>Order date: Feb 18, 2025</Detail>
      <Detail>Payment method: Account Balance</Detail>
      <HelpMessage>Need help? Contact us</HelpMessage>
      <ContinueButton onClick={handleContinueClick}>
        Continue to client portal
      </ContinueButton>
    </Container>
  );
};

export default OrderDetails;

const Container = styled.div`
  padding: 40px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Manrope", sans-serif;
`;

const Logo = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #00254d;
`;

const OrderNumber = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
  color: #00254d;
`;

const ThankYouMessage = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
  color: #00254d;
`;

const ConfirmationMessage = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 15px;
  color: #333;

  strong {
    font-weight: bold;
  }
`;

const DetailsTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
  color: #00254d;
`;

const Detail = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
  color: #666;
`;

const HelpMessage = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 20px;
  color: #666;
`;

const ContinueButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  background-color: #6dc7d1;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgb(38, 114, 123);
  }
`;
