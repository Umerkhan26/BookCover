import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 15px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
    flex-direction: column;
  }
`;

export const CheckoutLeft = styled.div`
  flex: 7;
  overflow-y: auto;
  max-height: calc(100vh - 40px);
  padding-right: 20px;

  @media (max-width: 768px) {
    flex: 1;
    padding-right: 10px;
  }
`;

export const CheckoutRight = styled.aside`
  flex: 4;
  background-color: green;
  position: sticky;
  top: 20px;
  box-sizing: border-box;
  margin-right: -48px;
  padding: 0;

  @media (max-width: 768px) {
    flex: 1;
    margin-right: 0;
    padding: 10px;
  }
`;

export const Navbar = styled.div`
  padding: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding: 8px;
    margin-bottom: 15px;
  }
`;

export const NavbarBrand = styled.a`
  font-size: 24px;
  font-weight: bold;
  color: #6dc7d1;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 20px;
            display: flex;
        justify-content: center;
  }
`;

export const Intro = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  color: #666;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
  color:#666;
`;

export const ItemCard = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

export const ItemCards = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  word-wrap: break-word;
  border-radius: 0.25rem;
  flex: 0 0 calc((100% - 40px) / 3);

  @media (max-width: 1024px) {
    flex: 0 0 calc((100% - 30px) / 2);
  }

  @media (max-width: 768px) {
    flex: 0 0 100%;
    margin-bottom: 10px;
  }
`;

export const ItemTitle = styled.div`
  font-size: 14.5px;
  font-weight: 500;
  padding-bottom: 0.5rem;
  color: #00254d;

   
`;

export const ItemPrice = styled.div`
  font-size: 14px;
  color: #666;
`;

export const Title = styled.div`
  font-size: 14.5px;
  font-weight: 600;
  color: #fff;
`;

export const Price = styled.div`
  font-size: 14px;
  color: white;
`;

export const ItemQuantity = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  color: black;
`;

export const OrderButton = styled.button`
  background-color: #6dc7d1;
  color: white;
  width: 100%;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: rgb(82, 157, 165);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 15px;
  }
`;

export const InvoiceItems = styled.div`
  padding: 20px;
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const SummaryTitle = styled.h2`
  font-size: 1.35rem;
  padding: 0.7rem 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.7rem 1.5rem;
  }
`;

export const CartContents = styled.div`
  padding: 2rem;
  margin-bottom: 2rem;
  position: relative;
  border-radius: 0.25rem;
  font-size: 0.81rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
    font-size: 0.9rem;
  }
`;

export const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const TotalText = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const TotalAmount = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
  margin-left: 3px;

  @media (max-width: 768px) {
    font-size: 12px;
            margin-left: 4px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  color: grey;
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #007bff;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px;
  }
`;

export const EmailHelpText = styled.div`
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

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;
