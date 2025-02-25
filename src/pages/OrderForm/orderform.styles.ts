import styled from "styled-components";
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 15px;
  box-sizing: border-box;
`;

export  const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CheckoutLeft = styled.div`
  flex: 7;
  overflow-y: auto;
  max-height: calc(100vh - 40px);
  padding-right: 20px;
`;

export const CheckoutRight = styled.aside`
  flex: 4;
  background-color: green;
  position: sticky;
  top: 20px;
  box-sizing: border-box;
  margin-right: -48px;
  padding: 0;
`;

export const Navbar = styled.div`
  padding: 10px;
  margin-bottom: 20px;
`;

export const NavbarBrand = styled.a`
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
  text-decoration: none;
`;

export const Intro = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  color: #666;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const ItemCard = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
`;

export const ItemCards = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  word-wrap: break-word;
  border-radius: 0.25rem;
  flex: 0 0 calc((100% - 40px) / 3);
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
  color: #fffff;
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
`;

export const InvoiceItems = styled.div`
  padding: 20px;
  border-radius: 8px;
`;

export const SummaryTitle = styled.h2`
  font-size: 1.35rem;
  padding: 0.7rem 2rem;
`;

export const CartContents = styled.div`
  padding: 2rem;
  margin-bottom: 2rem;
  position: relative;
  border-radius: 0.25rem;
  font-size: 0.81rem;
`;

export const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 2rem;
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
`;