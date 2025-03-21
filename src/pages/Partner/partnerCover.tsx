import { Title, Container, Section } from "./PartnerCover.styles";

interface BookCoversTextProps {
  text: string;
}

const BookCoversText = ({ text }: BookCoversTextProps) => {
  return <h2>{text}</h2>;
};

interface PartnerCoverProps {
  title?: string;
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
          <Title className="title inner-title">
            We Help Authors Make Book Cover Design <br /> Their Best Marketing
            Tool{" "}
          </Title>

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
