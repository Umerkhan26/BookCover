import styled from "styled-components";

const colors = {
  primary: "#6cd1c7", // Original bright primary
  secondary: "#0ebccb", // Matches your button background, slightly darker for contrast
  text: "#333", // General dark text
  lightText: "#5e3b47", // Original info wrapper text color
  background: "#fdfdfd", // A very light, almost white for the overall page background
  formBackground: "#ffffff", // Pure white for the contact form itself
  infoBackground: "#eef7f7", // A very light, subtle teal for the info panel
  inputBorder: "#6dc7d1", // Original input border color
  inputFocusBorder: "#0ebccb", // Matches secondary for focus
  buttonHover: "#5ab7c1", // Original button hover
  errorRed: "#e74c3c",
  successGreen: "#27ae60",
  socialIcon: "#7f7f7f", // Muted gray for default social icons
  behindFormShade: "#f5f5f5", // Subtle shade specifically behind the form
};

export const MainContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 20px;
  margin: 0px auto 40px auto;
  max-width: 1200px;
  padding: 0 25px;
 

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 25px;
    margin-top: 10px;
    padding: 0 15px;
    align-items: center;
  }
`;

export const InfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 40px;
  border-radius: 8px;
  background-color: ${colors.infoBackground};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  .description {
    font-size: 1.05rem;
    line-height: 1.6;
    color: ${colors.lightText};
    margin-bottom: 30px;
  }

  @media (max-width: 992px) {
    width: 100%;
    padding: 30px;
  }
`;

export const InfoSectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${colors.primary};
  margin-bottom: 20px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 1.1rem;
  color: ${colors.lightText};

  .icon {
    color: ${colors.primary};
    margin-right: 15px;
    font-size: 1.5em;
    min-width: 24px;
  }

  a {
    color: ${colors.lightText};
    text-decoration: none;
    transition: color 0.3s ease;
    &:hover {
      color: ${colors.primary};
    }
  }
`;

export const SocialIconsWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 20px;

  .social-icon {
    font-size: 1.8em;
    color: ${colors.socialIcon};
    transition: color 0.3s ease, transform 0.2s ease;

    &:hover {
      color: ${colors.primary};
      transform: translateY(-3px);
    }
  }
`;

export const ContactFormWrapper = styled.div`
  flex: 1.5;
  max-width: 600px;
  width: 100%;
  margin: 0;
  padding: 40px;
  background: ${colors.formBackground}; /* Pure white for the form itself */
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 992px) {
    padding: 30px;
    margin: 0 auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const NameInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 640px) {
    flex-direction: row;
    gap: 16px;

    & > div {
      flex: 1;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid ${colors.inputBorder};
  border-radius: 6px;
  font-size: 1em;
  color: ${colors.text};
  background-color: #ffffff;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${colors.inputFocusBorder};
    box-shadow: 0 0 0 3px rgba(14, 188, 203, 0.2);
  }

  &::placeholder {
    color: #999;
    opacity: 0.9;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 0.9em;
    &::placeholder {
      font-size: 0.9em;
    }
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  color: ${colors.text};
  border: 1px solid ${colors.inputBorder};
  border-radius: 6px;
  font-size: 1em;
  resize: vertical;
  min-height: 120px;
  background-color: #ffffff;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${colors.inputFocusBorder};
    box-shadow: 0 0 0 3px rgba(14, 188, 203, 0.2);
  }

  &::placeholder {
    color: #999;
    opacity: 0.9;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 0.9em;
    &::placeholder {
      font-size: 0.9em;
    }
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.95em;
  color: ${colors.text};
  gap: 10px;
  margin-top: 5px;

  input[type="checkbox"] {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid ${colors.primary};
    border-radius: 4px;
    display: grid;
    place-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    flex-shrink: 0;

    &::before {
      content: "";
      width: 10px;
      height: 10px;
      transform: scale(0);
      transition: transform 0.2s ease-in-out;
      box-shadow: inset 1em 1em ${colors.primary};
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 60%);
      background-color: transparent;
    }

    &:checked {
      background-color: ${colors.primary};
      border-color: ${colors.primary};
      &::before {
        transform: scale(1);
      }
    }

    &:focus {
      outline: 2px solid ${colors.inputFocusBorder};
      outline-offset: 2px;
    }
  }

  a {
    color: ${colors.primary};
    text-decoration: underline;
    &:hover {
      color: ${colors.secondary};
    }
  }
`;

export const Button = styled.button`
  background: ${colors.secondary};
  color: white;
  font-size: 1.1em;
  padding: 14px 30px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  text-align: center;
  max-width: 250px;
  margin: 20px auto 0 auto;
  font-weight: 700;

  &:hover {
    background: ${colors.buttonHover};
    transform: translateY(-2px);
  }

  &:disabled {
    background: #a9d9dd;
    cursor: not-allowed;
    transform: none;
    opacity: 0.8;
  }

  @media (max-width: 480px) {
    font-size: 1em;
    padding: 12px 25px;
    max-width: 100%;
  }
`;