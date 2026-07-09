import {
  AddOnsContainer,
  Title,
  AddOnsGrid,
  AddOnCard,
  ImageFrame,
  CardBody,
  CardTitle,
  OrderButton,
} from "./SpecialEditionAddOns.styles";
import specialadd1 from "../../assets/specialadd1.webp";
import specialadd2 from "../../assets/specialadd2.webp";
import specialadd3 from "../../assets/specialadd3.webp";
import specialadd4 from "../../assets/specialadd4.webp";
import { useNavigate } from "react-router-dom";
import LoginModal from "../../components/Login/LoginModel";
import RegisterModal from "../../components/register/RegisterModal";
import { useState, useEffect } from "react";
import { ensureAos } from "../../utils/aos";
const addOns = [
  {
    title: "Sprayed edges design",
    image: specialadd1, // Placeholder image
    packageId: "sprayed-edges", // Unique ID
  },
  {
    title: "Decorative pages design",
    image: specialadd2,
    packageId: "Decorative-pages", // Unique ID
  },
  {
    title: "Foiled cover design",
    image: specialadd3,
    packageId: "Foiled-cover-design", // Unique ID
  },
  {
    title: "Chapter header & breaker design",
    image: specialadd4,
    packageId: "Chapter-header-breaker-design",
  },
];

const SpecialEditionAddOns = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  useEffect(() => {
    ensureAos(true);
  }, []);

  const handleLoginSuccess = (token: string) => {
    localStorage.setItem("token", token);
    setShowLoginModal(false);
    const redirectTo = localStorage.getItem("redirectAfterLogin");
    if (redirectTo) {
      navigate(redirectTo);
      localStorage.removeItem("redirectAfterLogin");
    }
  };

  const handleOrderNow = (packageId: string | undefined) => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.warn("🚨 No token found! Redirecting to login...");
      localStorage.setItem("redirectAfterLogin", `/order/${packageId}`);
      setShowLoginModal(true);
      return;
    }

    if (!packageId) {
      console.error("🚨 Package ID is undefined! Cannot navigate.");
      return;
    }

    console.log(`✅ Navigating to /order/${packageId}`);
    navigate(`/order/${packageId}`);
  };

  return (
    <AddOnsContainer>
      <Title>
        Special Edition Add-Ons <br />
        <span>From $40</span>
      </Title>
      <AddOnsGrid>
        {addOns.map((item, index) => (
          <AddOnCard
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            data-aos-duration="1000"
            data-aos-once="false"
          >
            <ImageFrame>
              <img src={item.image} alt={item.title} />
            </ImageFrame>
            <CardBody>
              <CardTitle>{item.title}</CardTitle>
              <OrderButton onClick={() => handleOrderNow(item.packageId)}>
                Order Now
              </OrderButton>
            </CardBody>
          </AddOnCard>
        ))}
      </AddOnsGrid>

      {/* Show login modal if necessary */}
      <LoginModal
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={handleLoginSuccess}
        onRegisterClick={() => {
          setShowLoginModal(false);
          setShowRegisterModal(true);
        }}
      />

      {/* Show register modal if necessary */}
      {showRegisterModal && (
        <RegisterModal
          show={showRegisterModal}
          onClose={() => setShowRegisterModal(false)}
          onLoginClick={() => {
            setShowRegisterModal(false);
            setShowLoginModal(true);
          }}
        />
      )}
    </AddOnsContainer>
  );
};

export default SpecialEditionAddOns;
