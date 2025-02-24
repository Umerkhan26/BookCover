import React, { useState } from "react";
import styled from "styled-components";
import invoices from "../../../services/invoices";
import InvoicePreview from "./preview";

type Invoice = {
  invoice: string;
  date: string;
  total: string;
  status: string;
};

// Styled components (unchanged)
const Container = styled.div`
  font-family: Arial, sans-serif;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 20px;
  margin-bottom: 2rem;
  line-height: 1.2;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 12px 12px 12px 20px;
  border-bottom: 1px solid #ebecf0;
  font-size: 14.5px;
  font-weight: 500;
  color: #6b778c;
`;

const Td = styled.td`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  color: #495057;
  font-size: 14px;
`;

const StatusBadge = styled.span`
  background-color: #28a745;
  color: #fff;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 12px;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
`;

const MobileDate = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    color: #6c757d;
    font-size: 14px;
  }
`;

// Main component
const InvoiceTable: React.FC = () => {
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  const handleInvoiceClick = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
  };

  const handleClosePreview = () => {
    setSelectedInvoice(null);
  };

  return (
    <Container>
      <Title className="text-black font-bold text-3xl pb-8 pt-6">
        Invoices
      </Title>
      <Card>
        <Table>
          <thead>
            <tr>
              <Th>Invoice</Th>
              <Th className="d-none d-sm-table-cell">Date</Th>
              <Th>Total</Th>
              <Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {invoices.invoices.map((invoice) => (
              <tr key={invoice.invoice}>
                <Td>
                  <Link onClick={() => handleInvoiceClick(invoice)}>
                    {invoice.invoice}
                  </Link>
                  <MobileDate>{invoice.date}</MobileDate>
                </Td>
                <Td className="d-none d-sm-table-cell">{invoice.date}</Td>
                <Td>{invoice.total}</Td>
                <Td>
                  <StatusBadge>{invoice.status}</StatusBadge>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
      {selectedInvoice && (
        <InvoicePreview
          invoice={selectedInvoice}
          onClose={handleClosePreview}
        />
      )}
    </Container>
  );
};

export default InvoiceTable;
