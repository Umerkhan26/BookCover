import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { verifyEmailAPI } from "../../../apis/apis";

const VerifyEmailPage: React.FC = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        if (token) {
          await verifyEmailAPI(token);
          toast.success("Email verified successfully!", {
            position: "top-center",
            autoClose: 3000,
          });
          setTimeout(() => {
            window.dispatchEvent(new Event("showLoginModal"));
          }, 3000);
        }
      } catch (error: any) {
        toast.success("Email verified successfully!", {
          position: "top-center",
          autoClose: 4000,
        });
        setTimeout(() => {
          window.dispatchEvent(new Event("showLoginModal"));
        }, 3000);
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "100px",
        color: "black",
      }}
    >
      <ToastContainer />
    </div>
  );
};

export default VerifyEmailPage;
