import styled from "styled-components";

export const ContactFormWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
  background: #fff;
  border-radius: 8px;
  margin-right:230px;
  margin-top: -390px;
  margin-bottom: 60px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 80px;
  font-weight: bold;
  color: #f5f5f5;
  text-transform: uppercase;
  position: absolute;
  top: 10%;
  left: 5%;
  z-index: -1;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  color:black;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: none;
  height: 120px;
  color:black;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  color:black;
  font-size: 14px;
`;

export const Button = styled.button`
  background: #6dc7d1;
  color: white;
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #6dc7d1;
  }
`;
