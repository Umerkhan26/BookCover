import { Subtitle } from "../logo&branding/LogoAuthorBranding.styles";
import { Title, Container, Section } from "./PartnerCover.styles";

interface BookCoversTextProps {
  text: string;
}

const BookCoversText = ({ text }: BookCoversTextProps) => {
  return <h2>{text}</h2>;
};

interface PartnerCoverProps {
  title: React.ReactNode;
  subtitle?: string;
  bookCoversText: string;
  image?: string; // Made optional

  benefitsComponent?: JSX.Element;
  designProcessComponent?: JSX.Element;
  packagesComponent?: JSX.Element;
  reviewsComponent?: JSX.Element;
  specialEditionAddOnsComponent?: JSX.Element;
}

const PartnerCover = ({
  title,
  subtitle,
  bookCoversText,
  designProcessComponent,
  packagesComponent,
  reviewsComponent,
  specialEditionAddOnsComponent,
}: PartnerCoverProps) => {
  return (
    <div>
      <Container>
        <Section>
          <Title
            style={{
              fontSize: "48px",
              lineHeight: "1.2",
            }}
          >
            {title}
          </Title>

          <Subtitle>{subtitle}</Subtitle>

          <BookCoversText text={bookCoversText} />
        </Section>
      </Container>

      {reviewsComponent}
      {designProcessComponent}
      {packagesComponent}
      {specialEditionAddOnsComponent}
    </div>
  );
};

export default PartnerCover;
