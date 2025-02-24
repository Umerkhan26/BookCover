// import { Container, LeftSection, ImageSlider, RightSection, Heading, Price, FeatureList, FeatureItem, Button } from "./AudioBookCoverAnimationSection.styles";
// import package1 from '../../assets/pacakge1.jpeg'
// import package2 from '../../assets/package2.png'

// const images = [
//   package1,
//   package2,
// ];

// const AudioBookCoverAnimationSection = () => {
//   return (
//     <Container>
//       {/* Left Section */}
//       <LeftSection>
//         <ImageSlider>
//           {images.map((img, index) => (
//             <img key={index} src={img} alt={`Slider ${index}`} />
//           ))}
//         </ImageSlider>
//       </LeftSection>

//       {/* Right Section */}
//       <RightSection>
//         <Heading>Audiobook cover design</Heading>
//         <Price>$200</Price>
//         <FeatureList>
//           <FeatureItem> Custom ACX cover</FeatureItem>
//           <FeatureItem> Ready-to-upload JPG file</FeatureItem>
//           <FeatureItem> Unlimited free revisions</FeatureItem>
//           <FeatureItem>Flattened source file</FeatureItem>
//         </FeatureList>
//         <Button>Order Now</Button>
//       </RightSection>
//     </Container>
//   );
// };

// export default AudioBookCoverAnimationSection;

import {
  Container,
  LeftSection,
  ImageSlider,
  RightSection,
  Price,
  FeatureList,
  FeatureItem,
  Button,
  BorderWrapper,
  TitleSection,
  Title,
} from "./AudioBookCoverAnimationSection.styles";
import package1 from "../../assets/pacakge1.jpeg";
import package2 from "../../assets/package2.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const images = [package1, package2];

const RedesignUI = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const navigate = useNavigate();

  const handleOrderNow = () => {
    // Navigate to the form section
    navigate("/order");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 1000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      {/* Left Section */}
      <LeftSection>
        <ImageSlider>
          <img src={images[currentImage]} alt={`Slider ${currentImage}`} />
        </ImageSlider>
      </LeftSection>

      {/* Right Section */}
      <RightSection>
        <BorderWrapper>
          <TitleSection>
            <Title>Audiobook cover design</Title>
            <Price>$200</Price>
          </TitleSection>
          <FeatureList>
            <FeatureItem>Custom ACX cover</FeatureItem>
            <FeatureItem>Ready-to-upload JPG file</FeatureItem>
            <FeatureItem>Unlimited free revisions</FeatureItem>
            <FeatureItem>Flattened source file</FeatureItem>
          </FeatureList>
          <Button onClick={handleOrderNow}>Order Now</Button>
        </BorderWrapper>
      </RightSection>
    </Container>
  );
};

export default RedesignUI;
