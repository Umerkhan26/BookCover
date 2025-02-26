import React from "react";
import styled from "styled-components";
import BannerSection from "../Banner/getcoverbaner";
import HowItWorksSection from "../../components/HowItsWork/howitwork";

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
`;

const FormTitle = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Disclaimer = styled.div`
  padding: 1rem 4.2rem;
  border-radius: 0.7rem;
  border: 0.1rem dashed #fbc02d;
  max-width: 800px;
  background: #fffbf2;
  color: black;
  margin-bottom: 40px;
  max-width: max-content;
  text-align: center;
  margin: 0 auto 40px;
  font: 600 14px / normal "Proxima Nova Bold";

  a {
    color: #0ab70a;
    font-weight: bold;
    text-decoration: underline;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: black;
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const StyledSelect = styled.select`
  padding: 10px;
  color: black;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const StyledTextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1.5rem;

  input[type="checkbox"] {
    margin: 0;
  }

  label {
    font-size: 14px;
    color: #666;

    a {
      color: #007bff;
      text-decoration: underline;
    }
  }
`;

const BookCoverForm: React.FC = () => {
  return (
    <>
      <BannerSection />
      <HowItWorksSection />

      <FormContainer>
        <FormTitle>Get a Book Cover Design Idea</FormTitle>
        <Disclaimer>
          * This is not an order form. If you want to order a cover design,
          choose your package{" "}
          <a
            href="https://miblart.com/services/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </Disclaimer>
        <StyledForm>
          <StyledInput type="text" placeholder="Your name" />
          <StyledInput type="text" placeholder="Title of your book" />
          <StyledSelect>
            <option value="">Genre: optional</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="fantasy">Fantasy</option>
            <option value="sci-fi">Science Fiction</option>
            {/* Add more genres as needed */}
          </StyledSelect>
          <StyledSelect>
            <option value="">
              Will the book continue as a series? optional
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </StyledSelect>
          <StyledTextArea placeholder="Tell us briefly about your book's plot or description (optional)" />
          <StyledSelect>
            <option value="">
              Please select what covers you prefer (optional)
            </option>
            <option value="detailed-characters">
              With detailed characters
            </option>
            <option value="silhouettes">Only with silhouettes</option>
            <option value="object-based">Object-based covers</option>
            <option value="dont-know">I don't know</option>
          </StyledSelect>
          <StyledTextArea placeholder="Please describe the main character(s) or key objects/themes (optional)" />
          <StyledInput
            type="text"
            placeholder="What is the setting of your book? (optional)"
          />
          <StyledInput type="file" accept="image/*" multiple />
          <StyledInput type="email" placeholder="Email" required />
          <CheckboxContainer>
            <input type="checkbox" id="privacy-policy" required />
            <label htmlFor="privacy-policy">
              Agree with personal data processing. For more info, please consult{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                our privacy policy
              </a>
              .
            </label>
          </CheckboxContainer>
          <div
            className="g-recaptcha"
            data-sitekey="6LdePgsaAAAAAKe7WUNTkvXyiCH7kX69eG2kQTSj"
          ></div>
          <StyledButton type="submit">Send message</StyledButton>
        </StyledForm>
      </FormContainer>
    </>
  );
};

export default BookCoverForm;
