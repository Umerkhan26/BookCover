import React from "react";
import TopBanner from "../Banner/banner";
import BenefitsSection from "../Benefits/benefits";
import { benefitsData } from "../../services/benefits";

const Home: React.FC = () => {
  return (
    <div>
      <TopBanner />
      <BenefitsSection
        title={
          <>
            Self-Publishing Authors Love Working <span>with Us</span>
          </>
        }
        benefits={benefitsData}
      />

      
    </div>
  );
};

export default Home;
