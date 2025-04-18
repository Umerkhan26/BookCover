import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { verifyEmailAPI } from '../../../apis/apis'; // adjust the path as needed

const VerifyEmailPage: React.FC = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        if (token) {
          await verifyEmailAPI(token);
          toast.success('Email verified successfully!', {
            position: 'top-center',
            autoClose: 3000,
          });
          setTimeout(() => navigate('/login'), 3500);
        }
      } catch (error:any) {
        toast.success('Email verified successfully!', {
            position: 'top-center',
          autoClose: 4000,
        });
        setTimeout(() => navigate('/login'), 4500);
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px', color:"black" }}>
      <p>Verifying your email, please wait...</p>
      <ToastContainer />
    </div>
  );
};

export default VerifyEmailPage;
