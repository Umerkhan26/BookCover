import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  color: black;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  color: black;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: black;
`;

export const Label = styled.label`
  font-size: 14px;
  color: black;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const Select = styled.select`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: white;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #218838;
  }
`;

export const LoginText = styled.p`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: #666;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;
