import styled from "styled-components";
import bannerImg from '../../../assets/PageBanners/FAQ LUME ART PORTFOLIO WEB COVERS-04.jpg'

export const Container = styled.div`
  /* background-color: #e0e0e0;
  padding: 25px 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center; */

  margin-top: 85px;


  @media (max-width: 768px) {
    /* padding: 30px 15px;
    margin-top: 50px; */
  }
`;

// export const Section = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   min-height: 310px;
//   padding: 40px 0;
//   padding-top: 93px;
//   padding-bottom: 52px;
//   position: relative;
// `;

// export const Title = styled.h1`
//   color: #212529;
//   font-weight: 700;
//   font-size: 52px;
//   line-height: 40px;
//   margin-bottom: 16px;

//   & span {
//     color: #6dc7d1;
//   }
//   @media (max-width: 1024px) {
//     font-size: 2.5rem;
//   }

//   @media (max-width: 768px) {
//     font-size: 1.8rem;
//     font-size: 34px;

//     text-transform: capitalize;
//   }

//   @media (max-width: 480px) {
//     font-size: 34px;
//     line-height: 40px;
//     margin-bottom: 8px;
//     text-transform: capitalize;
//   }
// `;

// export const Subtitle = styled.p`
//   font-size: 16px;
//   font-weight: 200;
//   color: #455a64;
//   margin: 0;
//   // margin-right: 35px;

//   @media (max-width: 768px) {
//     font-size: 16px;
//     text-align: center;
//   }
// `;

const FAQTitle = () => {
  return (
    <div>
      <Container>
        {/* <Section>
          <Title> Frequently Asked Questions</Title>

          <Subtitle>
            Find answers to the most commonly asked questions about our
            services.
          </Subtitle>
        </Section> */}
        <img src={bannerImg} loading="eager" decoding="async" alt="FaqImage" />
      </Container>
    </div>
  );
};

export default FAQTitle;
