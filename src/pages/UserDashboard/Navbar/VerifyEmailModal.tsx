// import React, { useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { verifyEmailAPI } from "../../../apis/apis";

// const VerifyEmailPage: React.FC = () => {
//   const { token } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const verifyEmail = async () => {
//       try {
//         if (token) {
//           await verifyEmailAPI(token);
//           toast.success("Email verified successfully!", {
//             position: "top-center",
//             autoClose: 3000,
//           });
//           setTimeout(() => {
//             window.dispatchEvent(new Event("showLoginModal"));
//           }, 3000);
//         }
//       } catch (error: any) {
//         toast.success("Email verified successfully!", {
//           position: "top-center",
//           autoClose: 4000,
//         });
//         setTimeout(() => {
//           window.dispatchEvent(new Event("showLoginModal"));
//         }, 3000);
//       }
//     };

//     verifyEmail();
//   }, [token, navigate]);

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         paddingTop: "100px",
//         color: "black",
//       }}
//     >
//       <ToastContainer />
//     </div>
//   );
// };

// export default VerifyEmailPage;

import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { verifyEmailWithOTP } from "../../../apis/apis";

interface Props {
  show: boolean;
  email: string;
  onClose: () => void;
  onVerified?: () => void;
}

const VerifyEmailModal: React.FC<Props> = ({
  show,
  email,
  onClose,
  onVerified,
}) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await verifyEmailWithOTP(email, otp);
      toast.success("✅ Email verified successfully!");
      onVerified?.();
      onClose();
    } catch (error: any) {
      toast.error(error.message || "Verification failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalOverlay show={show}>
      <ModalContent>
        <Title>Verify Your Email</Title>
        <Form onSubmit={handleVerify}>
          <Input
            type="text"
            placeholder="Enter 6-digit code"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6}
            required
          />
          <SubmitButton type="submit" disabled={loading}>
            {loading ? "Verifying..." : "Verify"}
          </SubmitButton>
        </Form>
        <CloseButton onClick={onClose}>X</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default VerifyEmailModal;

// Styled components
const ModalOverlay = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
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
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: black;
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
  color: black;
  border-radius: 4px;
  width: 100%;
`;
const SubmitButton = styled.button`
  padding: 12px;
  background: #6dc7d1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    background: #6dc7d1;
    cursor: not-allowed;
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  color: #6dc7d1;
  cursor: pointer;
`;
