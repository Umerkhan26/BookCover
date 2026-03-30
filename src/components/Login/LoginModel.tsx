import React, { useState } from "react";
import { loginAPI } from "../../apis/apis";
import styled from "styled-components";
import { useAuth } from "../../context/authContext";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ForgotPasswordModal from "../ForgotPassword/ForgotPasswordModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface LoginModalProps {
  show: boolean;
  onClose: () => void;
  onLoginSuccess: (token: string) => void;
  onRegisterClick?: () => void;
  disableRedirect?: boolean;
}

const LoginModal: React.FC<LoginModalProps> = ({
  show,
  onClose,
  onLoginSuccess,
  onRegisterClick,
  disableRedirect = false, // NEW
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);

  const navigateUser = (role: string) => {
    const redirectPath = localStorage.getItem("redirectAfterLogin");
    localStorage.removeItem("redirectAfterLogin");

    // If a guarded action set a destination before login, honor it first
    // for non-admin routes so users can continue where they intended.
    if (redirectPath && role !== "admin" && role !== "seo") {
      toast.success("Redirecting...");
      navigate(redirectPath, { replace: true });
      return;
    }

    switch (role) {
      case "admin":
        toast.success("Redirecting to Admin Dashboard...");
        navigate("/admin/users", { replace: true });
        break;
      case "seo":
        toast.success("Redirecting to Blog...");
        navigate("/admin/blog", { replace: true });
        break;
      case "client":
        toast.success("Logged in successfully.");
        onClose();
        break;
      case "designer":
        toast.success("You are logged in as a User.");
        onClose();
        break;
      default:
        toast.success("Redirecting to Home...");
        navigate("/", { replace: true });
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const data = await loginAPI(email, password);

      if (!data.user || !data.user.role) {
        throw new Error("Invalid user data received.");
      }

      login(data.token, data.user);
      onLoginSuccess(data.token);
      toast.success("Logged in successfully!");

      if (!disableRedirect) navigateUser(data.user.role);
      else onClose();
    } catch (err: any) {
      setError(err.message || "An error occurred during login.");
      toast.error(err.message || "An error occurred during login.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    onRegisterClick?.();
  };

  return (
    <ModalOverlay show={show}>
      <ToastContainer position="top-right" style={{ marginTop: "60px" }} />
      <ModalContent>
        <Title>Login</Title>
        <Form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <PasswordWrapper>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <TogglePasswordButton
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </TogglePasswordButton>
          </PasswordWrapper>

          {error && <ErrorText>{error}</ErrorText>}
          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </SubmitButton>
        </Form>
        <Footer>
          <ForgotPasswordLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowForgotModal(true);
            }}
          >
            Forgot password?
          </ForgotPasswordLink>

          <br />
          <span className="color-black">Don't have an account?</span>
          <RegisterLink href="#" onClick={handleRegisterClick}>
            Register
          </RegisterLink>
        </Footer>
        <CloseButton onClick={onClose}>×</CloseButton>
      </ModalContent>

      {showForgotModal && (
        <ForgotPasswordModal
          show={showForgotModal}
          onClose={() => setShowForgotModal(false)}
          onBackToLogin={() => {
            setShowForgotModal(false);
            setTimeout(() => {
              toast.info("You can now log in with your new password.");
            }, 500);
          }}
        />
      )}
    </ModalOverlay>
  );
};

// Styled components...

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
  font-weight: 600;
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
  transition: border-color 0.3s;

  &:focus {
    border-color: #6dc7d1;
    outline: none;
  }
`;

const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const TogglePasswordButton = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  color: #000;

  &:hover {
    color: #111;
  }
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

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Footer = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: #555;
`;

const ForgotPasswordLink = styled.a`
  color: #6dc7d1;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: rgb(24, 92, 99);
    text-decoration: underline;
  }
`;

const RegisterLink = styled.a`
  color: #000;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  margin-left: 5px;
  transition: color 0.3s;

  &:hover {
    color: #6dc7d1;
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

export default LoginModal;
