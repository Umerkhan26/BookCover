import React, { useState } from "react";
import { registerUser } from "../../apis/apis";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";

import { TogglePasswordButton, PasswordWrapper } from "./register.styles";
import VerifyEmailModal from "../../pages/UserDashboard/Navbar/VerifyEmailModal";

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
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState("");
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

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
      const response = await registerUser(formData);
      setRegisteredEmail(response.data.email);
      toast.success(
        "Registration successful! Please check your email for OTP."
      );
      setShowVerifyModal(true);
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

  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    onLoginClick?.();
  };

  return (
    <>
      <ModalOverlay show={show}>
        <ToastContainer position="top-right" style={{ marginTop: "60px" }} />
        <ModalContent>
          <Title>Register</Title>

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
            <PasswordWrapper>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <TogglePasswordButton
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? "🙈" : "👁️"}
              </TogglePasswordButton>
            </PasswordWrapper>

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

          <Footer>
            <span className="color-black">Already have an account?</span>
            <LoginLink onClick={handleLoginClick}> Login</LoginLink>
          </Footer>
          <CloseButton onClick={onClose}>X</CloseButton>
        </ModalContent>
      </ModalOverlay>

      {showVerifyModal && (
        <VerifyEmailModal
          show={showVerifyModal}
          email={registeredEmail}
          onClose={() => setShowVerifyModal(false)}
          onVerified={() => {
            // Optional: auto-open login modal after verification
            window.dispatchEvent(new Event("showLoginModal"));
          }}
        />
      )}
    </>
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
