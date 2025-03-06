import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../../apis/apis";
import { useAuth } from "../../context/authContext";
import {
  Button,
  Container,
  Form,
  Input,
  RegisterText,
  StyledLink,
  Title,
  ErrorText,
  ForgotPasswordLink,
  LoadingSpinner,
} from "./login.styles";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  // Function to handle role-based navigation
  // Import the toast function

  const navigateUser = (role: string) => {
    const redirectPath = localStorage.getItem("redirectAfterLogin") || "/";
    localStorage.removeItem("redirectAfterLogin");

    // Show a toast message based on the role before navigating
    switch (role) {
      case "admin":
        toast.success("Redirecting to Admin Dashboard...");
        setTimeout(() => navigate("/Admin/users"));
        break;
      case "client":
      case "designer":
        toast.success("Redirecting to Portal...");
        setTimeout(() => navigate("/portal/orders")); // Delay navigation to show toast
        break;
      default:
        toast.success("Redirecting to Home...");
        setTimeout(() => navigate(redirectPath)); // Delay navigation to show toast
    }
  };

  // Handle user login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const data = await loginAPI(email, password);
      console.log("Login successful:", data);

      if (!data.user || !data.user.role) {
        throw new Error("Invalid user data received.");
      }

      // Store token & user info
      login(data.token, data.user);

      // Show "Logged in successfully" toast
      toast.success("Logged in successfully!");

      // Navigate based on role with a delay to allow the user to read the toast
      setTimeout(() => navigateUser(data.user.role), 1500); // Delay before navigating
    } catch (err: any) {
      setError(err.message || "An error occurred during login.");
      toast.error(err.message || "An error occurred during login.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <ToastContainer />
      <Form onSubmit={handleLogin}>
        <Title>Login</Title>
        {error && <ErrorText>{error}</ErrorText>}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email"
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          aria-label="Password"
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? <LoadingSpinner /> : "Login"}
        </Button>
        <ForgotPasswordLink to="/forgot-password">
          Forgot Password?
        </ForgotPasswordLink>
        <RegisterText>
          Don't have an account?{" "}
          <StyledLink to="/register">Register</StyledLink>
        </RegisterText>
      </Form>
    </Container>
  );
};

export default Login;
