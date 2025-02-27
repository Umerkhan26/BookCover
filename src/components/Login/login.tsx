import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../../apis/apis";
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const data = await loginAPI(email, password);
      console.log("Login successful:", data);

      localStorage.setItem("token", data.token);

      switch (data.user.role) {
        case "admin":
          navigate("/admin");
          break;
        case "client":
          navigate("/portal");
          break;
        case "designer":
          navigate("/portal");
          break;
        default:
          navigate("/");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred during login.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
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
