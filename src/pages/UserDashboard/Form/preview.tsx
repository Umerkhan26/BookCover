import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/navabar";

const PreviewPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state;

  const handleStartOrder = () => {
    navigate("/portal/orders/submitted", { state: formData });
  };

  return (
    <>
      {" "}
      <Navbar />
      <PreviewContainer>
        <PreviewTitle>Almost done, review your information</PreviewTitle>

        <PreviewTable>
          <PreviewRow>
            <PreviewLabel>Your name</PreviewLabel>
            <PreviewText>{formData?.name || "John"}</PreviewText>
          </PreviewRow>

          <PreviewRow>
            <PreviewLabel>Narrator's name</PreviewLabel>
            <PreviewText>{formData?.narratorName || "Danial"}</PreviewText>
          </PreviewRow>

          <PreviewRow>
            <PreviewLabel>Let us know your preferences</PreviewLabel>
            <PreviewText>{formData?.preferences || "...."}</PreviewText>
          </PreviewRow>

          <PreviewRow>
            <PreviewLabel>
              When the design is completed, how would you like to pay?
            </PreviewLabel>
            <PreviewText>
              {formData?.payment === "two"
                ? "Split into two equal monthly installments"
                : "Pay in one payment"}
            </PreviewText>
          </PreviewRow>
        </PreviewTable>

        <PreviewFooter>
          <ReturnButton onClick={() => navigate("/portal/orders/form")}>
            ← Return
          </ReturnButton>
          <StartOrderButton onClick={handleStartOrder}>
            Start order
          </StartOrderButton>
        </PreviewFooter>
      </PreviewContainer>
    </>
  );
};

export default PreviewPage;

// Styled Components
const PreviewContainer = styled.div`
  padding: 40px;
  margin: 0 auto;
  max-width: 800px;
`;

const PreviewTitle = styled.h1`
  font-size: 24px;
  color: #00254d;
  margin-bottom: 40px;
`;

const PreviewTable = styled.div`
  display: table;
  width: 100%;
`;

const PreviewRow = styled.div`
  display: table-row;

  &:not(:last-child) {
    border-bottom: 1px solid #e0e0e0;
  }
`;

const PreviewLabel = styled.div`
  display: table-cell;
  padding: 12px 0;
  font-size: 14px;
  color: #00254d;
  font-weight: bold;
`;

const PreviewText = styled.div`
  display: table-cell;
  padding: 12px 0;
  font-size: 14px;
  color: #00254d;
`;

const PreviewFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

const ReturnButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  background-color: #fff;
  color: #00254d;
  border: 1px solid #00254d;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const StartOrderButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  background-color: #008000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #006400;
  }
`;
