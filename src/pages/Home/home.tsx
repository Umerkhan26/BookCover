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

      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quos,
        eos quidem vero est odit? Minus quibusdam sed, dolorem eaque, provident
        assumenda quae obcaecati ipsum illum officiis veritatis quidem amet.
      </div>
    </div>
  );
};

export default Home;
