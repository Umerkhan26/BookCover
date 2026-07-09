import styled from "styled-components";

const colors = {
  primary: "#6cd1c7",
  secondary: "#0ebccb",
  text: "#333",
  inputBorder: "rgba(52, 66, 67, 0.35)",
  inputFocusBorder: "#0ebccb",
  buttonHover: "#5ab7c1",
};

export const FormCard = styled.div`
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 12px;
  padding: 20px 22px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.6);
  font-family: "Manrope", sans-serif;
  width: 100%;

  @media (max-width: 480px) {
    padding: 16px;
    border-radius: 10px;
  }
`;

export const FormTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: #25293f;
  margin: 0 0 4px;
  line-height: 1.3;
`;

export const FormSubtitle = styled.p`
  font-size: 0.8rem;
  color: rgba(37, 41, 63, 0.65);
  margin: 0 0 14px;
  line-height: 1.4;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const NameRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 9px 12px;
  border: 1px solid ${colors.inputBorder};
  border-radius: 6px;
  font-size: 0.85rem;
  color: ${colors.text};
  background: #fff;
  font-family: inherit;
  box-sizing: border-box;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${colors.inputFocusBorder};
    box-shadow: 0 0 0 2px rgba(14, 188, 203, 0.15);
  }

  &::placeholder {
    color: #999;
    font-size: 0.82rem;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 9px 12px;
  border: 1px solid ${colors.inputBorder};
  border-radius: 6px;
  font-size: 0.85rem;
  color: ${colors.text};
  background: #fff;
  font-family: inherit;
  resize: vertical;
  min-height: 72px;
  max-height: 120px;
  box-sizing: border-box;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${colors.inputFocusBorder};
    box-shadow: 0 0 0 2px rgba(14, 188, 203, 0.15);
  }

  &::placeholder {
    color: #999;
    font-size: 0.82rem;
  }
`;

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.72rem;
  color: ${colors.text};
  line-height: 1.4;
  cursor: pointer;

  input[type="checkbox"] {
    appearance: none;
    width: 16px;
    height: 16px;
    min-width: 16px;
    margin-top: 1px;
    border: 2px solid ${colors.primary};
    border-radius: 3px;
    cursor: pointer;
    display: grid;
    place-content: center;

    &::before {
      content: "";
      width: 8px;
      height: 8px;
      transform: scale(0);
      transition: transform 0.15s ease;
      box-shadow: inset 1em 1em ${colors.primary};
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 60%);
    }

    &:checked {
      background: ${colors.primary};
      border-color: ${colors.primary};

      &::before {
        transform: scale(1);
      }
    }
  }

  a {
    color: ${colors.secondary};
    text-decoration: underline;

    &:hover {
      color: ${colors.buttonHover};
    }
  }
`;

export const SubmitButton = styled.button`
  background: ${colors.secondary};
  color: #fff;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 11px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  transition:
    background-color 0.2s ease,
    transform 0.15s ease;
  margin-top: 4px;

  &:hover:not(:disabled) {
    background: ${colors.buttonHover};
    transform: translateY(-1px);
  }

  &:disabled {
    background: #a9d9dd;
    cursor: not-allowed;
    opacity: 0.85;
  }
`;

export const ConsultationFormCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 28px 32px 32px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.06);
  font-family: "Manrope", sans-serif;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 22px 18px 24px;
  }

  @media (min-width: 1440px) {
    padding: 32px 40px 36px;
  }
`;

export const ConsultationFormTitle = styled.h2`
  font-size: clamp(1.25rem, 2.5vw, 1.65rem);
  font-weight: 800;
  color: #1a1a1a;
  text-align: center;
  margin: 0 0 24px;
  line-height: 1.3;
`;

export const ConsultationForm = styled.form`
  width: 100%;
`;

export const ConsultationFieldsRow = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1.1fr 1fr 1.4fr auto;
  gap: 12px;
  align-items: stretch;

  ${Input}, ${Textarea} {
    margin: 0;
  }

  ${Textarea} {
    min-height: 46px;
    max-height: 46px;
    resize: none;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  ${SubmitButton} {
    margin-top: 0;
    align-self: stretch;
    min-height: 46px;
    padding: 0 24px;
    white-space: nowrap;
    border-radius: 8px;
  }

  @media (min-width: 1440px) {
    gap: 14px;
    grid-template-columns: 1.15fr 1.15fr 1fr 1.5fr auto;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
    gap: 12px;

    ${Textarea} {
      grid-column: 1 / -1;
      min-height: 72px;
      max-height: 120px;
      resize: vertical;
    }

    ${SubmitButton} {
      grid-column: 1 / -1;
      width: 100%;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
