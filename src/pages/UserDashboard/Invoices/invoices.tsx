import React, { useState } from "react";
import styled from "styled-components";
import invoices from "../../../services/invoices";
import InvoicePreview from "./preview";
import { Helmet } from "react-helmet-async";

type Invoice = {
  invoice: string;
  date: string;
  total: string;
  status: string;
};

// Styled components (unchanged)
const Container = styled.div`
  font-family: "Manrope", sans-serif;
  margin-bottom: 1.75rem;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 1rem;
  line-height: 1.25;
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
  padding: 8px 10px 8px 14px;
  border-bottom: 1px solid #ebecf0;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #6b778c;
`;

const Td = styled.td`
  padding: 10px 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  color: #495057;
  font-size: 13px;
`;

const StatusBadge = styled.span`
  background-color: #28a745;
  color: #fff;
  padding: 3px 8px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
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
    font-size: 12px;
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
      <Helmet>
        <title>Invoice Management</title>
        <meta
          name="description"
          content="View your invoices and track payment status here."
        />
      </Helmet>
      <Title className="text-black font-bold text-xl pb-4 pt-2">
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
