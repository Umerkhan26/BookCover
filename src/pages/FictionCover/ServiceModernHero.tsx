import React from "react";
import ServiceBannerForm from "../../components/ServiceBannerForm/ServiceBannerForm";
import {
  serviceModernHeroContent,
  ServiceModernHeroKey,
} from "../../config/serviceModernHeroContent";
import {
  ConsultationFormSection,
  HeroBadge,
  ModernCtaRow,
  ModernHeroContent,
  ModernHeroDescription,
  ModernHeroGrid,
  ModernHeroInner,
  ModernHeroSection,
  ModernHeroTitle,
  ModernHeroVisual,
  ModernHeroVisualImage,
  SecondaryCta,
  VisualPlaceholderLabel,
} from "./ServiceModernHero.styles";

interface ServiceModernHeroProps {
  heroKey: ServiceModernHeroKey;
  serviceName: string;
}

const ServiceModernHero: React.FC<ServiceModernHeroProps> = ({
  heroKey,
  serviceName,
}) => {
  const content = serviceModernHeroContent[heroKey];
  const visualImage = content.visualImage;

  return (
    <ModernHeroSection>
      <ModernHeroInner>
        <ModernHeroGrid>
          <ModernHeroContent>
            <HeroBadge>{content.badge}</HeroBadge>
            <ModernHeroTitle>
              {content.titlePrefix}
              <span>{content.titleHighlight}</span>
              {content.titleSuffix}
            </ModernHeroTitle>
            <ModernHeroDescription>{content.description}</ModernHeroDescription>
            <ModernCtaRow>
              <SecondaryCta to="/portfolio">View Portfolio</SecondaryCta>
            </ModernCtaRow>
          </ModernHeroContent>

          {visualImage ? (
            <ModernHeroVisualImage
              src={visualImage}
              alt={content.visualPlaceholder}
            />
          ) : (
            <ModernHeroVisual>
              <VisualPlaceholderLabel>
                {content.visualPlaceholder}
              </VisualPlaceholderLabel>
            </ModernHeroVisual>
          )}
        </ModernHeroGrid>

        <ConsultationFormSection>
          <ServiceBannerForm
            serviceName={serviceName}
            variant="consultation"
          />
        </ConsultationFormSection>
      </ModernHeroInner>
    </ModernHeroSection>
  );
};

export default ServiceModernHero;
