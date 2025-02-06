import {
  SectionFiction,
  FictionCoverImage,
  Title,
  Subtitle,
  Wrapper,
  Container,
  BenifitsComponent,
} from './FictionCover.styles';
// import BenefitsSection from '../Benefits/benefits';
// import { benefitsData } from '../../services/benefits';

// Reusable BookCoversText component
interface BookCoversTextProps {
  text: string;
}

const BookCoversText = ({ text }: BookCoversTextProps) => {
  return <h2>{text}</h2>; // You can apply styles here if needed
};

interface FictionCoverProps {
  title: string;
  subtitle: string;
  image: string;
  bookCoversText: string; // Add a prop for dynamic text

  // Optional props for additional components
  benefitsComponent?: JSX.Element;
  designProcessComponent?: JSX.Element;
  packagesComponent?: JSX.Element;
  reviewsComponent?: JSX.Element;
  specialEditionAddOnsComponent?: JSX.Element;
}

const FictionCover = ({
  title,
  subtitle,
  image,
  bookCoversText,
  benefitsComponent,
  designProcessComponent,
  packagesComponent,
  reviewsComponent,
  specialEditionAddOnsComponent,
}: FictionCoverProps) => {
  return (
    <div>
      <Container>
        <SectionFiction>
          <Wrapper>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </Wrapper>
          <FictionCoverImage>
            <img src={image} alt="FictionCover" />
          </FictionCoverImage>
          <BookCoversText text={bookCoversText} />
        </SectionFiction>
      </Container>

      {/* Conditionally render the components passed as props */}
      {benefitsComponent && (
        <BenifitsComponent>{benefitsComponent}</BenifitsComponent>
      )}
      {reviewsComponent}
      {designProcessComponent}
      {packagesComponent}
      {specialEditionAddOnsComponent}
    </div>
  );
};

export default FictionCover;
