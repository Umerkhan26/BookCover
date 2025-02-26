import styled from "styled-components";

const DashboardContent = () => {
  return (
    <>
      <WelcomeMessage>Welcome, Umar!</WelcomeMessage>
      <StatsContainer>
        <StatBox>
          <div>Open Orders</div>
          <div>1</div>
        </StatBox>
        <StatBox>
          <div>Completed Orders</div>
          <div>0</div>
        </StatBox>
        <StatBox>
          <div>Active Subscriptions</div>
          <div>0</div>
        </StatBox>
      </StatsContainer>

      <h2 className="text-black">Open Tickets</h2>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Subject</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Status</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell colSpan={3}>No tickets...</TableCell>
          </TableRow>
        </tbody>
      </Table>

      <h2 className="text-black">Recent Orders</h2>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>Title</TableHeader>
            <TableHeader>Created</TableHeader>
            <TableHeader>Completed</TableHeader>
            <TableHeader>Status</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell colSpan={5}>No recent orders...</TableCell>
          </TableRow>
        </tbody>
      </Table>
    </>
  );
};

export default DashboardContent;

const WelcomeMessage = styled.h1`
  font-size: 24px;
  color: black;
  margin-bottom: 20px;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StatBox = styled.div`
  background-color: rgba(0, 148, 10, 0.93);
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  flex: 1;
  margin: 0 10px;
  color: white;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  background-color: rgba(0, 148, 10, 0.93);
  color: white;
  padding: 10px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  color: black;
`;
