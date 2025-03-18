// import styled from "styled-components";

// export const ContactFormWrapper = styled.div`
//   max-width: 600px;
//   margin: 0 auto;
//   padding: 40px 20px;
//   background: #fff;
//   border-radius: 8px;
//   margin-right:230px;
//   margin-top: -180px;
//   margin-bottom: 60px;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
// `;

// export const Title = styled.h1`
//   font-size: 80px;
//   font-weight: bold;
//   color: #f5f5f5;
//   text-transform: uppercase;
//   position: absolute;
//   top: 10%;
//   left: 5%;
//   z-index: -1;
// `;

// export const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 15px;
// `;

// export const Label = styled.label`
//   font-size: 14px;
//   font-weight: 600;
//   color: #333;
// `;

// export const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-size: 16px;
//   color:black;
// `;

// export const Textarea = styled.textarea`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-size: 16px;
//   resize: none;
//   height: 120px;
//   color:black;
// `;

// export const CheckboxWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   color:black;
//   font-size: 14px;
// `;

// export const Button = styled.button`
//   background: #6dc7d1;
//   color: white;
//   font-size: 16px;
//   padding: 10px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   &:hover {
//     background: #6dc7d1;
//   }
// `;

import styled from "styled-components";

export const ContactFormWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background: #fff;
  border-radius: 8px;
  margin-right: 230px;
  margin-top: -380px;
  margin-bottom: 60px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
  margin-top: -120px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    padding: 20px;
    margin-top: -80px;
  }
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

  @media (max-width: 768px) {
    font-size: 60px;
    top: 5%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  color: #333;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: none;
  height: 120px;
  color: #333;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #333;
  font-size: 14px;
`;

export const Button = styled.button`
  background: #6dc7d1;
  color: white;
  font-size: 16px;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: #5ab7c1;
  }
`;

export const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
`;

export const SuccessMessage = styled.div`
  color: #00cc00;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
`;
