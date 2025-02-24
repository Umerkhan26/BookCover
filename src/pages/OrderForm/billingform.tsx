import React from "react";
import styled from "styled-components";

const BillingForm: React.FC = () => {
  const selectedServices = [
    {
      id: "default_1",
      title: "Cover formatting for an audiobook $30",
      price: "$0.00",
      quantity: 1,
    },
  ];

  const calculateTotal = () => {
    return selectedServices
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace("$", ""));
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <BillingContainer>
      {/* Previous Section */}
      <Section>
        <SectionTitle>Previous</SectionTitle>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" value="" readOnly />
          <HelpText>
            To change your email, go to{" "}
            <a href="https://client.miblart.com/portal/profile">your profile</a>
            .
          </HelpText>
        </FormGroup>

        <FormGroup>
          <Label>Billing Address</Label>
          <Input type="text" placeholder="Address" />
          <Input type="text" placeholder="City" />
          <Input type="text" placeholder="State / Province / Region" />
          <Input type="text" placeholder="Postal / Zip Code" />
        </FormGroup>

        <FormGroup>
          <CheckboxLabel>
            <input type="checkbox" /> I'm established, have a permanent address,
            or usually reside within the United States.
          </CheckboxLabel>
          <CheckboxLabel>
            <input type="checkbox" /> I'm purchasing for a company.
          </CheckboxLabel>
        </FormGroup>

        <FormGroup>
          <Label>Payment Method</Label>
          <RadioLabel>
            <input type="radio" name="payment" /> PayPal
          </RadioLabel>
          <RadioLabel>
            <input type="radio" name="payment" /> Credit Card
          </RadioLabel>

          <PayButton>Pay with PayPal</PayButton>
        </FormGroup>
      </Section>

      {/* Checkout Right Section */}
      <CheckoutRight>
        <InvoiceItems>
          <SummaryTitle>Summary</SummaryTitle>
          <CartContents>
            {selectedServices.length > 0 ? (
              selectedServices.map((item) => (
                <div key={item.id} style={{ marginBottom: "10px" }}>
                  <Title>{item.title}</Title>
                  <Price>{item.price}</Price>
                </div>
              ))
            ) : (
              <div>
                <Title>Cover formatting for an audiobook $30</Title>
                <Price>$0.00</Price>
              </div>
            )}
          </CartContents>

          <TotalSection>
            <TotalText>Total</TotalText>
            <TotalAmount>USD ${calculateTotal()}</TotalAmount>
          </TotalSection>

          {/* Pay with PayPal Button */}
        </InvoiceItems>
      </CheckoutRight>
    </BillingContainer>
  );
};

export default BillingForm;

// Styled Components
const BillingContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
  display: flex;
  gap: 20px;
  color: black;
`;

const Section = styled.div`
  flex: 7;
  overflow-y: auto;
  max-height: calc(100vh - 40px);
  padding-right: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  color: #00254d;
  margin-bottom: 10px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const HelpText = styled.div`
  font-size: 12px;
  color: #666;
  margin-top: 5px;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const CheckboxLabel = styled.label`
  display: block;
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
`;

const RadioLabel = styled.label`
  display: block;
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
`;

const CheckoutRight = styled.aside`
  flex: 4;
  background-color: green;
  position: sticky;
  top: 20px;
  box-sizing: border-box;
  margin-right: -66px;
  padding: 0;
`;

const InvoiceItems = styled.div`
  padding: 20px;
  border-radius: 8px;
`;

const SummaryTitle = styled.h2`
  font-size: 1.35rem;
  padding: 0.7rem 2rem;
  color: #fff;
`;

const CartContents = styled.div`
  padding: 2rem;
  margin-bottom: 2rem;
  position: relative;
  border-radius: 0.25rem;
  font-size: 0.81rem;
  color: #fff;
`;

const Title = styled.div`
  font-size: 14.5px;
  font-weight: 600;
  color: #fff;
`;

const Price = styled.div`
  font-size: 14px;
  color: #fff;
`;

const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 2rem;
`;

const TotalText = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

const TotalAmount = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

const PayButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
