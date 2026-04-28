import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../../apis/apis";
import { useAuth } from "../../context/authContext";
import {
  getDefaultRouteForRole,
  isAdminPanelRole,
  normalizeRole,
} from "../../utils/role.util";
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
import { Helmet } from "react-helmet-async";
interface LoginProps {
  onLoginSuccess?: (token: string, user: any) => void;
  disableRedirect?: boolean;
}

const Login: React.FC<LoginProps> = ({
  onLoginSuccess,
  disableRedirect = false,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  // Handle role-based navigation
  const navigateUser = (role: string) => {
    const normalizedRole = normalizeRole(role);
    const redirectPath = localStorage.getItem("redirectAfterLogin");
    localStorage.removeItem("redirectAfterLogin");

    // Admin panel roles should always land on their own section.
    if (redirectPath && !isAdminPanelRole(normalizedRole)) {
      toast.success("Redirecting...");
      setTimeout(() => navigate(redirectPath), 1000);
      return;
    }

    const destination = getDefaultRouteForRole(normalizedRole);
    if (normalizedRole === "seo") toast.success("Redirecting to Blog...");
    else if (normalizedRole === "marketing")
      toast.success("Redirecting to Marketing...");
    else if (normalizedRole === "superadmin" || normalizedRole === "admin")
      toast.success("Redirecting to Admin Dashboard...");
    else if (normalizedRole === "client")
      toast.success("Redirecting to Portal...");
    else toast.success("Redirecting to Home...");

    navigate(destination, { replace: true });
  };

  // Handle login
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

      toast.success("Logged in successfully!");

      if (onLoginSuccess) {
        onLoginSuccess(data.token, data.user);
      }

      if (!disableRedirect) navigateUser(data.user.role);
    } catch (err: any) {
      const message = err?.message || "An error occurred during login.";
      setError(message);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Helmet>
        <title>Login</title>
      </Helmet>
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
