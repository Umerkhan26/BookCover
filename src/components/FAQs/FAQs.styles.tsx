import styled from "styled-components";

export const FAQContainer = styled.div`
  width: 80%;
  margin: auto;
  padding: 160px 180px;
`;

export const FAQTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
  color: black;
  &::after {
    content: "";
    display: block;
    width: 50%;
    height: 4px;
    background-color:#6dc7d1;
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
  }
`;

export const QuestionWrapper = styled.div`
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
`;

export const Question = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
  &:hover {
    color:black;
  }
`;

export const Answer = styled.div`
  font-size: 1rem;
  color: #555;
  padding: 15px;
//   background:#6dc7d1;
`;

export const Icon = styled.span`
  font-size: 1.2rem;
  color: #6dc7d1;
`;
