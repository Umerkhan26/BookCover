import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled Components
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #0056b3;
  }
`;

export const RegisterText = styled.p`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: #666;
`;

export const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;