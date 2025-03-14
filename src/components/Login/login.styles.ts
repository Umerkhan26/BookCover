import styled from "styled-components";
import { Link } from "react-router-dom";

// CSS Variables for reusable values
const colors = {
  primary: "#28a745",
  primaryHover: "#0056b3",
  error: "#dc3545",
  text: "#333",
  background: "#f5f5f5",
  white: "#fff",
};

const spacing = {
  small: "10px",
  medium: "20px",
  large: "30px",
};

// Styled Components
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${colors.background};
  padding: ${spacing.medium};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: ${colors.white};
  padding: ${spacing.large};
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: ${spacing.medium};
  color: ${colors.text};
`;

export const Input = styled.input`
  padding: ${spacing.small};
  margin-bottom: ${spacing.medium};
  color: black;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;

  &:focus {
    border-color: ${colors.primary};
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const Button = styled.button`
  padding: ${spacing.small};
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.primaryHover};
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const RegisterText = styled.p`
  text-align: center;
  margin-top: ${spacing.medium};
  font-size: 14px;
  color: ${colors.text};
`;

export const StyledLink = styled(Link)`
  color: ${colors.primary};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorText = styled.p`
  color: ${colors.error};
  text-align: center;
  margin-bottom: ${spacing.medium};
`;

export const ForgotPasswordLink = styled(Link)`
  text-align: center;
  margin-top: ${spacing.small};
  color: ${colors.primary};
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export const LoadingSpinner = styled.div`
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid ${colors.white};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
