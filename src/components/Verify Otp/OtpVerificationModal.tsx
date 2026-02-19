import React, { useState } from "react";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import { verifyOtpAPI } from "../../apis/apis";
import ResetPasswordModal from "../Reset Password/ResetPasswordModal";

interface OtpVerificationModalProps {
  show: boolean;
  email: string;
  onClose: () => void;
  onOtpVerified: () => void;
}

const OtpVerificationModal: React.FC<OtpVerificationModalProps> = ({
  show,
  email,
  onClose,
}) => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);

  const handleChange = (index: number, value: string) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value) {
        if (index < 5) {
          const nextInput = document.getElementById(`otp-input-${index + 1}`);
          nextInput?.focus();
        }
      } else {
        if (index > 0) {
          const prevInput = document.getElementById(`otp-input-${index - 1}`);
          prevInput?.focus();
        }
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpCode = otp.join("");

    if (otpCode.length !== 6) {
      toast.error("Please enter all 6 digits of the OTP.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await verifyOtpAPI(email, otpCode);
      toast.success(res.message);

      setTimeout(() => {
        setShowResetPasswordModal(true);
      }, 1000);
    } catch (err: any) {
      toast.error(err.message || "Invalid OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ModalOverlay show={show && !showResetPasswordModal}>
        <ToastContainer position="top-right" style={{ marginTop: "60px" }} />
        <ModalContent>
          <Title>Enter OTP</Title>
          <Subtitle>
            We’ve sent a 6-digit code to <strong>{email}</strong>
          </Subtitle>
          <Form onSubmit={handleSubmit}>
            <OtpContainer>
              {otp.map((digit, index) => (
                <OtpInput
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  autoFocus={index === 0}
                />
              ))}
            </OtpContainer>

            <SubmitButton type="submit" disabled={isLoading}>
              {isLoading ? "Verifying..." : "Verify OTP"}
            </SubmitButton>
          </Form>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalContent>
      </ModalOverlay>

      <ResetPasswordModal
        show={showResetPasswordModal}
        email={email}
        onClose={() => {
          setShowResetPasswordModal(false);
          onClose();
        }}
        onPasswordReset={() => {
          toast.success("Password reset successfully!");
          setShowResetPasswordModal(false);
          onClose();
        }}
        onBackToLogin={() => {
          setShowResetPasswordModal(false);
          onClose();
        }}
      />
    </>
  );
};

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
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const OtpContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const OtpInput = styled.input`
  width: 40px;
  height: 50px;
  text-align: center;
  font-size: 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  transition: 0.2s;
  color: black;
  &:focus {
    border-color: #6dc7d1;
    box-shadow: 0 0 5px rgba(109, 199, 209, 0.5);
  }
`;

const SubmitButton = styled.button`
  padding: 12px 20px;
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

export default OtpVerificationModal;
