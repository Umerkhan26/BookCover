import {SectionFiction, FictionCoverImage, Title, Subtitle,  Wrapper,Container,BookCoversText } from './FictionCover.styles'
import fictionCover from "../../assets/fictionCover.png";



const FictionCover = () => {
  return (
    <Container>
    <SectionFiction>
      <Wrapper>
        <Title>Book Cover Design For Indie Authors</Title>
        <Subtitle>
          
          PAY ONLY WHEN <span className='font-bold'> YOU'RE SATISFIED </span>
          WITH THE FINAL RESULT
        </Subtitle>
      </Wrapper>
      <FictionCoverImage>
        <img src={fictionCover} alt="FictionCover" />
      </FictionCoverImage>
      <BookCoversText>BOOK COVERS</BookCoversText>

    </SectionFiction>
    </Container>
  );
};


export default FictionCover