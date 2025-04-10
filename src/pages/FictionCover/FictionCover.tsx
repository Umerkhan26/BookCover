import {
  SectionFiction,
  FictionCoverImage,
  Title,
  Subtitle,
  Wrapper,
  Container,
  BenifitsComponent,
} from "./FictionCover.styles";

interface BookCoversTextProps {
  text: string;
}

const BookCoversText = ({ text }: BookCoversTextProps) => {
  return <h2>{text}</h2>;
};

interface FictionCoverProps {
  title: string;
  subtitle: string;
  bookCoversText: string;
  image?: string; // Made optional

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
          {image && (
            <FictionCoverImage>
              <img src={image} alt="Fiction Cover" />
            </FictionCoverImage>
          )}
          <BookCoversText text={bookCoversText} />
        </SectionFiction>
      </Container>

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
