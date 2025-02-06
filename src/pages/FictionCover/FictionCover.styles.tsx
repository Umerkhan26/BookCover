import styled from "styled-components";

export const Container = styled.div`
  background-color: #e0e0e0; /* A slightly darker gray */
  padding: 50px 20px;
  margin-top: 70px; /* Adds space at the top */

  @media (max-width: 768px) {
    padding: 30px 15px; /* Reduce padding for smaller screens */
    margin-top: 50px; /* Adjust space above */
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
  font-family: Museo Sans Cyrl;
  font-style: normal;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 310px;
  padding-bottom: 40px;
  background: unset !important;

  @media (max-width: 1024px) {
    flex-direction: column; /* Stack elements on smaller screens */
    align-items: center;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 20px 0; /* Reduce padding */
  }
`;

export const TextForFiction = styled.div`
  width: 33%;
  height: 450px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  margin-right: 220px;
  margin-top: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    width: 50%; /* Increase width for tablets */
    margin-right: 0; /* Center align */
  }

  @media (max-width: 768px) {
    width: 80%;
    height: 350px; /* Adjust height */
  }
`;

export const FictionCoverImage = styled.div`
  width: 33%;
  height: 450px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  margin-right: 220px;
  margin-top: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    width: 50%;
    margin-right: 0;
  }

  @media (max-width: 768px) {
    width: 80%;
    height: 350px;
  }
`;

export const Wrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 160px;

  @media (max-width: 1024px) {
    width: 60%; /* Adjust width for tablets */
    padding-left: 50px;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding-left: 20px;
    text-align: center; /* Center align text */
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #212529;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #555;
  margin-top: 10px;
  margin-right: 5px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-right: 0;
  }
`;

export const BookCoversText = styled.div`
  font-family: 'Busset-City';
  font-weight: 200;
  font-size: 57px;
  line-height: 118.9%;
  color: #25293F;
  opacity: 0.1;
  text-align: right;
  margin-left: 320px;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1024px) {
    font-size: 45px;
    margin-left: 200px;
  }

  @media (max-width: 768px) {
    font-size: 35px;
    margin-left: 100px;
  }
`;



export const BenifitsComponent = styled.div`
  font-family: 'Busset-City';
  font-weight: 200;
  font-size: 57px;
  width: 100%;
  margin-top:70px;

  @media (max-width: 1024px) {
    font-size: 45px;
    margin-left: 30px;
  }

  @media (max-width: 768px) {
    font-size: 35px;
    margin-left: 100px;
  }
`;
