import React, { useState, useEffect } from "react";
import { registerUser, verifyEmailAPI } from "../../apis/apis";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import { useSearchParams } from "react-router-dom";

const RegisterModal = ({
  show,
  onClose,
  onLoginClick,
}: {
  show: boolean;
  onClose: () => void;
  onLoginClick?: () => void;
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  });
  const [loading, setLoading] = useState(false);
  //   const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [verificationMessage, setVerificationMessage] = useState("");

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log("Form data being sent:", formData);
      await registerUser(formData);
      toast.success(
        "Registration successful! Please check your email for verification."
      );
    } catch (error) {
      console.error("Registration error:", error);
      if (error instanceof Error) {
        toast.error(error.message || "Registration failed. Please try again.");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      handleEmailVerification(token);
    }
  }, [token]);

  const handleEmailVerification = async (token: string) => {
    try {
      await verifyEmailAPI(token);
      setVerificationMessage(
        "✅ Email verified successfully! Redirecting to login modal..."
      );
      toast.success(
        "Email verified successfully! Redirecting to login modal..."
      );

      // Show login modal instead of navigating to page
      setTimeout(() => {
        window.dispatchEvent(new Event("showLoginModal"));
        onClose();
      }, 3000);
    } catch (error) {
      setVerificationMessage(`❌ Verification failed: ${error}`);
      toast.error(`Verification failed: ${error}`);
    }
  };

  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    onLoginClick?.(); // Trigger Login modal opening
  };

  return (
    <ModalOverlay show={show}>
      <ToastContainer position="top-right" style={{ marginTop: "60px" }} />
      <ModalContent>
        <Title>Register</Title>
        {verificationMessage ? (
          <div style={{ padding: "20px", textAlign: "center" }}>
            <h2>{verificationMessage}</h2>
          </div>
        ) : (
          <Form onSubmit={handleRegister}>
            <Input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <Select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select Role</option>
              <option value="designer">Designer</option>
              <option value="client">User</option>
              {/* <option value="admin">Admin</option> */}
            </Select>
            {error && <ErrorText>{error}</ErrorText>}
            <SubmitButton type="submit" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </SubmitButton>
          </Form>
        )}
        <Footer>
          <span className="color-black">Already have an account?</span>
          <LoginLink onClick={handleLoginClick}> Login</LoginLink>
        </Footer>
        <CloseButton onClick={onClose}>X</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

// Styled components
const Select = styled.select`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  color: black;
  width: 100%;
`;

const LoginLink = styled.a`
  color: #000;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  margin-left: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

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
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 350px;
  text-align: center;
  position: relative;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  color: black;
  width: 100%;
`;

const SubmitButton = styled.button`
  padding: 12px;
  background-color: #6dc7d1;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: rgb(24, 92, 99);
  }

  &:disabled {
    background-color: #6dc7d1;
    cursor: not-allowed;
  }
`;

const Footer = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #555;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #6dc7d1;
  &:hover {
    color: rgb(58, 135, 144);
  }
`;

export default RegisterModal;
