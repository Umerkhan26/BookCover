import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { registerUser, verifyEmailAPI } from "../../apis/apis"; // Import API functions
import {
  Container,
  Form,
  Title,
  Input,
  Select,
  Button,
  LoginText,
  StyledLink,
  Label,
} from "./register.styles";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [verificationMessage, setVerificationMessage] = useState("");

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  // Handle Email Verification on Page Load if Token Exists
  useEffect(() => {
    if (token) {
      handleEmailVerification(token);
    }
  }, [token]);

  // Handle Input Changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle User Registration
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      console.log("Form data being sent:", formData); // Log form data
      await registerUser(formData);
      setMessage(
        "✅ Registration successful! Please check your email for verification."
      );
    } catch (error) {
      console.error("Registration error:", error); // Log the error
      if (error instanceof Error) {
        setMessage(
          `❌ ${error.message || "Registration failed. Please try again."}`
        );
      } else {
        setMessage("❌ Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle Email Verification
  const handleEmailVerification = async (token: string) => {
    try {
      await verifyEmailAPI(token);
      setVerificationMessage(
        "✅ Email verified successfully! Redirecting to login..."
      );

      // Redirect to login after 3 seconds
      setTimeout(() => navigate("/login"), 3000);
    } catch (error) {
      setVerificationMessage(`❌ Verification failed: ${error}`);
    }
  };

  return (
    <Container>
      {verificationMessage ? (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <h2>{verificationMessage}</h2>
        </div>
      ) : (
        <Form onSubmit={handleRegister}>
          <Title>Register</Title>

          <Label>First Name</Label>
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <Label>Last Name</Label>
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <Label>Role</Label>
          <Select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="designer">Designer</option>
            <option value="client">User</option>
            <option value="admin">Admin</option>
          </Select>

          <Button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </Button>

          {message && <p>{message}</p>}

          <LoginText>
            Already have an account? <StyledLink to="/login">Login</StyledLink>
          </LoginText>
        </Form>
      )}
    </Container>
  );
};

export default Register;
