import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  color: black;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
`;

const CloseButton = styled.button`
  background-color: green;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
`;

type Invoice = {
  invoice: string;
  date: string;
  total: string;
  status: string;
};

type InvoicePreviewProps = {
  invoice: Invoice;
  onClose: () => void;
};

const InvoicePreview: React.FC<InvoicePreviewProps> = ({
  invoice,
  onClose,
}) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Invoice #{invoice.invoice}</h2>
        <p>
          <strong>Invoiced to:</strong> Umar Falz, United States
        </p>
        <hr />
        <h3>Invoice</h3>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Item Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cover formatting for an audiobook $30</td>
              <td>x 1</td>
              <td>$0.00</td>
            </tr>
            <tr>
              <td>Social media banner or cover $35</td>
              <td>x 1</td>
              <td>$0.00</td>
            </tr>
            <tr>
              <td>Bookmark $40</td>
              <td>x 1</td>
              <td>$0.00</td>
            </tr>
            <tr>
              <td>Website banner or ad $40</td>
              <td>x 1</td>
              <td>$0.00</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Subtotal:</strong> $0.00
        </p>
        <p>
          <strong>Total:</strong> USD $0.00
        </p>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default InvoicePreview;
