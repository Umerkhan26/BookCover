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

import React, { useRef, useState } from "react";
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
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleOtpChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, "").slice(-1);
    const otpArray = otp.padEnd(4, " ").split("");
    otpArray[index] = digit || "";
    const newOtp = otpArray.join("").replace(/\s/g, "");
    setOtp(newOtp);

    if (digit && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        const otpArray = otp.padEnd(4, " ").split("");
        otpArray[index] = "";
        setOtp(otpArray.join("").replace(/\s/g, ""));
        return;
      }

      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 4) {
      toast.error("Please enter a 4-digit code.");
      return;
    }
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
          <OtpWrapper>
            {[0, 1, 2, 3].map((index) => (
              <OtpInput
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                value={otp[index] || ""}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleOtpKeyDown(index, e)}
                required
              />
            ))}
          </OtpWrapper>
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
const OtpWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
const OtpInput = styled.input`
  width: 52px;
  height: 52px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 22px;
  text-align: center;
  color: #111;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: #6dc7d1;
    box-shadow: 0 0 0 3px rgba(109, 199, 209, 0.25);
  }
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
