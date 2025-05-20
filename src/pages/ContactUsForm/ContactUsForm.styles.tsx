import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 2px solid red; */
  gap: 10px;
  


  @media (max-width: 768px) {
   flex-direction: column;
  }

  @media (max-width: 480px) {
    
  }
`

export const InfoWrapper = styled.div`
  flex: 1;
  /* height: 100%; */
   /* background-color: #ffe9ef; */
  color: #333;
  /* padding: 60px 40px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-bottom: 3rem; */
  margin-top: 1rem;
  padding: 30px;
  border-radius: 8px;
  /* border: 2px solid red; */

 

.content {
  max-width: 400px;
  color: #5e3b47;
}

h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #a64160;
}

p {
  font-size: 1.05rem;
  line-height: 1.6;
}

  
`

export const ContactFormWrapper = styled.div`
flex: 1;
/* background-color: #6dc7d1; */
/* border: 2px solid red; */
  max-width: 90%;
  margin: 0 auto;
  padding: 30px;
  margin-bottom: 3rem;
  margin-top: 1rem;
  background: #6dc7d1;
  border-radius: 8px;
  box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;

  @media (min-width: 1024px) {
    max-width: 800px;
    // padding: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: #f5f5f5;
  text-transform: uppercase;
  position: absolute;
  top: 5%;
  left: 5%;
  z-index: -1;

  @media (max-width: 768px) {
    font-size: 40px;
    top: 3%;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* border: 2px solid red; */

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  @media (min-width: 768px) {
    .form-group {
      flex-direction: row;
    }

    .form-group div {
      flex: 1;
    }
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  @media (max-width: 768px) {
    font-size: 13px;
    font-weight: 550;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 16px;
  color: black;
   background-color: #ffffff;
  border: 1px solid #e5aebf;
  @media (max-width: 480px) {
    padding: 10px;
    &::placeholder{
      font-size: 11px;
    }
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  color: black;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 16px;
  resize: none;
  height: 120px;
  background-color: #ffffff;
  border: 1px solid #e5aebf;
  
&::placeholder {
 
 
}


  @media (max-width: 480px) {
     &::placeholder{
      font-size: 11px;
    }
    padding: 10px;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
  gap: 8px;
`;

export const Button = styled.button`
  background: #6dc7d1;
  color: white;
  font-size: 16px;
  padding: 12px 69px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-align: center;
  max-width: 214px;
  margin: 0 auto;
  font-weight: 900;

  &:hover {
    background: #5ab7c1;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px 18px;
  }
`;
