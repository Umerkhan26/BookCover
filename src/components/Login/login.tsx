import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../../apis/apis"; // Import login API function
import { Button, Container, Form, Input, RegisterText, StyledLink, Title } from "./login.styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginAPI(email, password);
      console.log("Login successful:", data);

      // Store token in localStorage (optional)
      localStorage.setItem("token", data.token);

      // Redirect based on user role
      if (data.user.role === "admin") {
        navigate("/");
      } else {
        navigate("/dashboard");
      }
    } catch (err:any) {
      setError(err);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Title>Login</Title>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Login</Button>
        <RegisterText>
          Don't have an account? <StyledLink to="/register">Register</StyledLink>
        </RegisterText>
      </Form>
    </Container>
  );
};

export default Login;
