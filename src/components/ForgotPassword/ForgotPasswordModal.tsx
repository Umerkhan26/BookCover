import React, { useState } from "react";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import { forgotPasswordAPI } from "../../apis/apis";
import OtpVerificationModal from "../Verify Otp/OtpVerificationModal";

interface ForgotPasswordModalProps {
  show: boolean;
  onClose: () => void;
  onBackToLogin: () => void;
}

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({
  show,
  onClose,
  onBackToLogin,
}) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await forgotPasswordAPI(email);
      toast.success(res.message);
      setShowOtpModal(true);
    } catch (err: any) {
      toast.error(err.message || "Error sending OTP");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ModalOverlay show={show}>
      <ToastContainer position="top-right" style={{ marginTop: "60px" }} />
      <ModalContent>
        <Title>Forgot Password</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? "Sending OTP..." : "Send OTP"}
          </SubmitButton>
        </Form>
        <Footer>
          <BackLink href="#" onClick={onBackToLogin}>
            ← Back to Login
          </BackLink>
        </Footer>
        <CloseButton onClick={onClose}>×</CloseButton>
      </ModalContent>
      {showOtpModal && (
        <OtpVerificationModal
          show={showOtpModal}
          email={email}
          onClose={() => setShowOtpModal(false)}
          onOtpVerified={() => {
            setShowOtpModal(false);
            toast.success("OTP verified! You can now reset your password.");
            setShowOtpModal(false);
            onClose();
          }}
        />
      )}
    </ModalOverlay>
  );
};

// 🧱 Styled Components (reuse same style pattern as LoginModal)
const ModalOverlay = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  text-align: center;
  position: relative;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #333;
  width: 100%;
`;

const SubmitButton = styled.button`
  padding: 12px;
  background-color: #6dc7d1;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgb(24, 92, 99);
  }
`;

const Footer = styled.div`
  margin-top: 15px;
`;

const BackLink = styled.a`
  color: #6dc7d1;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #6dc7d1;
  transition: color 0.3s;
  &:hover {
    color: rgb(24, 92, 99);
  }
`;

export default ForgotPasswordModal;
