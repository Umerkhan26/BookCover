import { useState } from "react";
import {
  Container,
  ImageContainer,
  SmallImage,
  LargeImageWrapper,
  LargeImage,
  StepsContainer,
  Step,
} from "./illustratedDesignProcess.styles";
import image1 from "../../../assets/pacakge1.jpeg"; // Replace with actual images
import image2 from "../../../assets/package2.png";
// import Packages from "../../ourPackages/packages";
import Reviews from "../../reviews/reviews";
import { myPackagesData } from "../../ourPackages/packagesData";
import IllustratedPackages from "../../ourPackages/illustratedpackage";

const DesignProcess = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <Container>
        <ImageContainer>
          <SmallImage src={image1} alt="Sketch Image" />
          <LargeImageWrapper
            onClick={() => setExpanded(!expanded)}
            expanded={expanded}
          >
            <LargeImage src={image2} alt="Final Design" />
          </LargeImageWrapper>
        </ImageContainer>

        <StepsContainer>
          <h2>
            Our Illustrated Book Cover{" "}
            <span className="text-[#6dc7d1] !important">Design Process</span>
          </h2>
          <Step>
            <h3>
              01 <span className="text-[#6dc7d1]">STEP</span>
            </h3>
            <h4>Place an order</h4>
            <p>
              After paying a deposit, fill in a creative brief and provide
              information about your book.
            </p>
          </Step>
          <Step>
            <h3>
              02 <span>STEP</span>
            </h3>
            <h4>Choose a style</h4>
            <p>
              Depending on your package, we will send you different illustration
              styles to choose from.{" "}
              <strong>The final price depends on the complexity.</strong>of the
              style you decide on. The price will be agreed before cooperation
              begins.
            </p>
          </Step>
          <Step>
            <h3>
              03 <span>STEP</span>
            </h3>
            <h4>Get your first sketch</h4>
            <p>
              You'll receive the <strong>first black-and-white sketch</strong>.
              Unlimited revisions are available at this stage.
            </p>
          </Step>
          <Step>
            <h3>
              04 <span>STEP</span>
            </h3>
            <h4>Final concept & typography</h4>
            <p>
              After approving the final concept, our illustrators{" "}
              <strong>add details, colors, and typography.</strong>
            </p>
          </Step>
        </StepsContainer>
      </Container>

      <IllustratedPackages packagesData={myPackagesData} />
      <div className="mb-32">
        <Reviews />
      </div>
    </div>
  );
};

export default DesignProcess;
