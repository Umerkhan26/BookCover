import {
  AddOnsContainer,
  Title,
  AddOnsGrid,
  AddOnCard,
  OrderButton,
} from "./SpecialEditionAddOns.styles";
import specialadd1 from "../../assets/specialadd1.png";
import specialadd2 from "../../assets/specialadd2.png";
import specialadd3 from "../../assets/specialadd3.png";
import specialadd4 from "../../assets/specialadd4.png";
import { useNavigate } from "react-router-dom";
import LoginModal from "../../components/Login/LoginModel"; // Import the modal
import { useState } from "react";
import AOS from "aos"
import "aos/dist/aos.css";
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
    packageId: "Chapter-header-breaker-design", // Unique ID
  },
];

const SpecialEditionAddOns = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false); // State for showing login modal

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
    const token = localStorage.getItem("token"); // Check if token exists

    if (!token) {
      console.warn("🚨 No token found! Redirecting to login...");
      localStorage.setItem("redirectAfterLogin", `/order/${packageId}`); // Store intended URL
      setShowLoginModal(true); // Show login modal
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
          <AddOnCard key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200} // Stagger the animations
            data-aos-duration="1000"
            data-aos-once="false">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <OrderButton onClick={() => handleOrderNow(item.packageId)}>
              Order Now
            </OrderButton>
          </AddOnCard>
        ))}
      </AddOnsGrid>

      {/* Show login modal if necessary */}
      <LoginModal
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </AddOnsContainer>
  );
};

export default SpecialEditionAddOns;
