import { Helmet } from "react-helmet-async";
import {
  // SectionFiction,
  // FictionCoverImage,
  // Title,
  // Subtitle,
  // Wrapper,
  Container,
  BenifitsComponent,
} from "./FictionCover.styles";
import { ShimmerImage } from "../../components/Shimmer/Shimmer";

// interface BookCoversTextProps {
//   text: string;
// }

// const BookCoversText = ({ text }: BookCoversTextProps) => {
//   return <h2>{text}</h2>;
// };

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
  // title,
  // subtitle,
  // image,
  // bookCoversText,
  image,
  benefitsComponent,
  designProcessComponent,
  packagesComponent,
  reviewsComponent,
  specialEditionAddOnsComponent,
}: FictionCoverProps) => {
  return (
    <div>
      <Helmet>
        <title>Fiction Book Cover Design | Genre-Specific Art</title>
        <meta
          name="description"
          content="Capture readers with professional fiction covers. Specialized design for Fantasy, Sci-Fi, Mystery, and Romance novels to boost Amazon sales."
        />

        <link rel="canonical" href="https://lumeartstudio.com/fiction-cover" />
      </Helmet>
      <Container>
        {/* <SectionFiction>
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
        </SectionFiction> */}
        {image && (
          <ShimmerImage
            src={image}
            alt="Book Cover Banner"
            width={1200}
            height={500}
            loading="eager"
            style={{ width: "100%", height: "auto" }}
          />
        )}
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
