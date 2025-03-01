import styled from "styled-components";

export const Container = styled.div`
  background-color: #e0e0e0;
  padding: 50px 20px;
  margin-top: 70px;

  @media (max-width: 1024px) {
    padding: 40px 15px;
    margin-top: 60px;
  }

  @media (max-width: 768px) {
    padding: 30px 10px;
    margin-top: 50px;
  }
`;

export const SectionFiction = styled.section`
  position: relative;
  overflow: hidden;
  padding: 30px 0;
  font-size: 1rem;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  font-family: "Manrope", sans-serif;
  font-style: normal;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 310px;
  padding-bottom: 40px;
  background: unset !important;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-bottom: 30px;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const TextForFiction = styled.div`
  width: 30%;
  height: auto;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  margin-right: 200px;
  margin-top: 20px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 1200px) {
    width: 40%;
    margin-right: 100px;
  }

  @media (max-width: 1024px) {
    width: 50%;
    margin-right: 0;
    justify-content: center;
  }

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
  }
`;

export const FictionCoverImage = styled.div`
  width: 30%;
  height: auto;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  margin-right: 200px;
  margin-top: 20px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 1200px) {
    width: 40%;
    margin-right: 100px;
  }

  @media (max-width: 1024px) {
    width: 50%;
    margin-right: 0;
    justify-content: center;
  }

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
  }
`;

export const Wrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 160px;

  @media (max-width: 1200px) {
    width: 50%;
    padding-left: 80px;
  }

  @media (max-width: 1024px) {
    width: 70%;
    padding-left: 40px;
    text-align: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding-left: 20px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #212529;
  text-align: left;

  @media (max-width: 1200px) {
    font-size: 2.7rem;
  }

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #555;
  margin-top: 10px;
  margin-right: 5px;
  text-align: left;

  @media (max-width: 1024px) {
    font-size: 0.95rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-right: 0;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const BookCoversText = styled.div`
  font-family: "Manrope", sans-serif;
  font-weight: 200;
  font-size: 57px;
  line-height: 1.2;
  color: #25293f;
  opacity: 0.1;
  text-align: right;
  margin-left: 320px;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1200px) {
    font-size: 50px;
    margin-left: 250px;
  }

  @media (max-width: 1024px) {
    font-size: 45px;
    margin-left: 150px;
  }

  @media (max-width: 768px) {
    font-size: 35px;
    margin-left: 50px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-left: 20px;
  }
`;

export const BenifitsComponent = styled.div`
  font-family: "Manrope", sans-serif;
  font-weight: 200;
  font-size: 57px;
  width: 100%;
  margin-top: 70px;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 50px;
    margin-left: 20px;
  }

  @media (max-width: 1024px) {
    font-size: 45px;
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    font-size: 35px;
    margin-left: 0;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;
