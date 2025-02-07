import { features } from "../../services/LogoBrandingFeatures";
import { FeatureContainer, FeatureItem, FeatureIcon, FeatureText } from "./LogoBrandingFeatures.styles";



const LogoBrandingFeatures = () => {
  return (
    <FeatureContainer>
      {features.map((feature, index) => (
        <FeatureItem key={index}>
          <FeatureIcon src={feature.icon} alt={feature.text} />
          <FeatureText>{feature.text}</FeatureText>
        </FeatureItem>
      ))}
    </FeatureContainer>
  );
};

export default LogoBrandingFeatures;
