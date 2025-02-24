import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Navbar from "../Navbar/navabar";

const OrderSubmittedPage: React.FC = () => {
  const location = useLocation();
  const formData = location.state;

  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    console.log("Message sent:", message);
  };

  const handleAddCC = () => {
    console.log("Add CC clicked");
  };

  return (
    <>
      <Navbar />

      <SubmittedContainer>
        <Header>
          <OrderTitle>Cover formatting for an audiobook $30</OrderTitle>
          <StatusBadge>Submitted</StatusBadge>
        </Header>

        {/* Flex Container for DataTable and DetailsTable */}
        <FlexContainer>
          {/* Project Data Section */}
          <SectionContainer>
            <SectionTitle>Project data</SectionTitle>
            <DataTable>
              <DataRow>
                <DataLabel>Your name</DataLabel>
                <DataText>{formData?.name || "umar"}</DataText>
              </DataRow>
              <DataRow>
                <DataLabel>Narrator's name</DataLabel>
                <DataText>{formData?.narratorName || "umar"}</DataText>
              </DataRow>
              <DataRow>
                <DataLabel>Let us know your preferences</DataLabel>
                <DataText>{formData?.preferences || "ddd"}</DataText>
              </DataRow>
              <DataRow>
                <DataLabel>
                  When the design is completed, how would you like to pay?
                </DataLabel>
                <DataText>
                  {formData?.payment === "two"
                    ? "Split into two equal monthly installments"
                    : "Pay in one payment"}
                </DataText>
              </DataRow>
            </DataTable>
          </SectionContainer>

          {/* Order Details Section */}
          <SectionContainer>
            <SectionTitle style={{ color: "#6b778c" }}>EFC6B9DA</SectionTitle>
            <DetailsTable>
              <DetailsRow>
                <DetailsLabel>Service</DetailsLabel>
                <DetailsText>Cover formatting for an audiobook $30</DetailsText>
              </DetailsRow>
              <DetailsRow>
                <DetailsLabel>Created</DetailsLabel>
                <DetailsText>Feb 20</DetailsText>
              </DetailsRow>
              <DetailsRow>
                <DetailsLabel>Started</DetailsLabel>
                <DetailsText>Feb 20</DetailsText>
              </DetailsRow>
              <DetailsRow>
                <DetailsLabel>Completed</DetailsLabel>
                <DetailsText>--</DetailsText>
              </DetailsRow>
            </DetailsTable>
          </SectionContainer>
        </FlexContainer>

        {/* Status Badge */}

        {/* Message Section */}
        <MessageContainer>
          <MessageLabel>
            Send a message or drop a file here to attach it...
          </MessageLabel>

          {/* Rich Text Editor */}
          <ReactQuill
            value={message}
            onChange={setMessage}
            placeholder="Type your message..."
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, false] }],
                ["bold", "italic", "underline", "strike"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image"],
                ["clean"],
              ],
            }}
            formats={[
              "header",
              "bold",
              "italic",
              "underline",
              "strike",
              "list",
              "bullet",
              "link",
              "image",
            ]}
          />

          {/* Message Actions */}
          <MessageActions>
            <Message onClick={handleAddCC}>CC: Add</Message>
            <MessageButton onClick={handleSendMessage}>
              Send message
            </MessageButton>
          </MessageActions>
        </MessageContainer>
      </SubmittedContainer>
    </>
  );
};

export default OrderSubmittedPage;

// Styled Components
const SubmittedContainer = styled.div`
  padding: 20px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 30px;
`;

const OrderTitle = styled.h1`
  font-size: 24px;
  color: #00254d;
  margin: 0;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 30px; // Adds space between the two sections
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column; // Stack sections vertically on smaller screens
  }
`;

const SectionContainer = styled.div`
  flex: 1; // Each section takes equal width
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  color: #00254d;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const DataTable = styled.div`
  display: table;
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
`;

const DataRow = styled.div`
  display: table-row;
  &:not(:last-child) {
    border-bottom: 1px solid #e0e0e0;
  }
`;

const DataLabel = styled.div`
  display: table-cell;
  padding: 12px 0;
  font-size: 14px;
  color: #00254d;
  font-weight: bold;
  width: 30%;
`;

const DataText = styled.div`
  display: table-cell;
  padding: 12px 0;
  font-size: 14px;
  color: #00254d;
`;

const DetailsTable = styled.div`
  display: table;
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
`;

const DetailsRow = styled.div`
  display: table-row;
  &:not(:last-child) {
    border-bottom: 1px solid #e0e0e0;
  }
`;

const DetailsLabel = styled.div`
  display: table-cell;
  padding: 12px 0;
  font-size: 14px;
  color: #00254d;
  font-weight: bold;
  width: 30%;
`;

const DetailsText = styled.div`
  display: table-cell;
  padding: 12px 0;
  font-size: 14px;
  color: #00254d;
`;

const StatusBadge = styled.div`
  display: inline-block;
  padding: 5px 10px;
  background-color: #fff4cc;
  color: #6c757d;
  border-radius: 12px;
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`;

const MessageContainer = styled.div`
  margin-top: 20px;
  color: black;
`;

const MessageLabel = styled.div`
  font-size: 14px;
  color: #6c757d;
  margin-bottom: 10px;
`;

const MessageActions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  margin-top: 10px;
`;

const Message = styled.button<{ isBlue?: boolean }>`
  padding: 8px 0px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  color: ${({ isBlue }) => (isBlue ? "blue" : "black")};
`;

const MessageButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #004080;
  }
`;
