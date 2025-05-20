// import { Subtitle } from "../logo&branding/LogoAuthorBranding.styles";
import {  Container  } from "./PartnerCover.styles";


// interface BookCoversTextProps {
//   text: string;
// }

// const BookCoversText = ({ text }: BookCoversTextProps) => {
//   return <h2>{text}</h2>;
// };

interface PartnerCoverProps {
  title: React.ReactNode;
  title2: React.ReactNode;
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
  // title,
  // title2,
  // subtitle,
  // bookCoversText,
  image,
  designProcessComponent,
  packagesComponent,
  reviewsComponent,
  specialEditionAddOnsComponent,
}: PartnerCoverProps) => {
  return (
    <div>
      <Container>
        {/* <Section>
          <Title
        
          >
            {title}
          </Title>

          <Title2
        
        >
          {title2}
        </Title2>
          <Subtitle>{subtitle}</Subtitle>

          <BookCoversText text={bookCoversText} />
        </Section> */}

        <img src={image} alt="Partner with Us" />
      </Container>

      {reviewsComponent}
      {designProcessComponent}
      {packagesComponent}
      {specialEditionAddOnsComponent}
    </div>
  );
};

export default PartnerCover;
