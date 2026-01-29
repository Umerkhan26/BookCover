// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { fetchOrdersByUserId } from "../../apis/apis"; // Assuming you have the function

// const OrdersTable: React.FC = () => {
//   // State to store orders
//   const [orders, setOrders] = useState<any[]>([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   // Fetch orders using useEffect
//   useEffect(() => {
//     const getOrders = async () => {
//       try {
//         const fetchedOrders = await fetchOrdersByUserId();
//         setOrders(fetchedOrders);
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//       }
//     };

//     getOrders();
//   }, []);

//   // Filter orders based on search query
//   const filteredOrders = orders.filter((order) =>
//     order.package.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <Container>
//       <HeaderContainer>
//         <h1 className="text-black font-bold text-3xl pb-8 pt-6">Orders</h1>
//       </HeaderContainer>
//       <Table>
//         <thead>
//           <TableHeaderRow>
//             <TableHeader className="id-column">ID</TableHeader>
//             <TableHeader>Title</TableHeader>
//             <TableHeader className="created-column">Created</TableHeader>
//             <TableHeader className="status-header ml-52">Status</TableHeader>
//           </TableHeaderRow>
//         </thead>
//         <tbody>
//           {filteredOrders.length > 0 ? (
//             filteredOrders.map((order) => (
//               <TableRow key={order._id}>
//                 <TableLink className="id-column">{order._id}</TableLink>
//                 <TableCell>{order.package.name}</TableCell>
//                 <TableCell className="created-column">
//                   {new Date(order.createdAt).toLocaleDateString()}
//                 </TableCell>
//                 <TableCell className="status-column">{order.status} </TableCell>
//               </TableRow>
//             ))
//           ) : (
//             <TableRow>
//               <TableCell colSpan={4}>No orders found</TableCell>
//             </TableRow>
//           )}
//         </tbody>
//       </Table>
//     </Container>
//   );
// };

// export default OrdersTable;

// // Container with responsive padding and margin
// const Container = styled.div`
//   width: 100%;
//   max-width: 1200px;
//   margin: 0 62px;
//   overflow-x: auto;

//   @media (max-width: 768px) {
//     margin: 0 56px;
//     padding: 10px;
//   }
// `;

// // Header container with responsive adjustments
// const HeaderContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 20px;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: flex-start;
//   }
// `;

// // Table style with responsive scrolling on smaller screens
// const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   text-align: left;

//   @media (max-width: 768px) {
//     min-width: 100%;
//     display: block;
//     overflow-x: auto;
//     -webkit-overflow-scrolling: touch;
//   }
// `;

// // Table header row style
// const TableHeaderRow = styled.tr`
//   background-color: #f8f9fa;
// `;
// // Table cell style for mobile and large screens
// const TableCell = styled.td`
//   padding: 12px;
//   font-size: 14px;
//   color: #333;
//   border-bottom: 1px solid #dee2e6;

//   @media (max-width: 768px) {
//     font-size: 12px;
//     padding: 8px;
//     // display: block; /* Block display to stack vertically */
//     margin-bottom: 5px; /* Add space between data */
//     border-bottom: none; /* Remove bottom border for mobile */
//   }

//   &.id-column,
//   &.created-column {
//     @media (max-width: 768px) {
//       display: none; /* Hide these columns on mobile */
//     }
//   }

//   @media (max-width: 768px) {
//     /* Ensure status column is aligned and doesn't overflow */
//     &.status-column {
//       margin-left: 0px; /* Align with the content */
//     }
//   }
// `;

// // TableRow style to ensure responsive layout
// const TableRow = styled.tr`
//   @media (max-width: 768px) {
//     display: block;
//     margin-bottom: 10px; /* Spacing between rows */
//     padding: 10px;
//     border-bottom: 1px solid #dee2e6; /* Optional: Border for separation */
//   }
// `;

// // Table header style for responsiveness
// const TableHeader = styled.th`
//   padding: 12px;
//   font-size: 14px;
//   font-weight: 500;
//   color: #00254d;
//   border-bottom: 1px solid #dee2e6;
//   text-align: left;

//   @media (max-width: 768px) {
//     font-size: 12px;
//     padding: 6px; /* Reduce padding */
//     text-align: left; /* Align text to left */
//     max-width: 120px; /* Limit width to reduce space */
//     overflow: hidden; /* Hide overflow content */
//     text-overflow: ellipsis; /* Add ellipsis if text overflows */
//   }

//   &.id-column,
//   &.created-column {
//     display: table-cell;
//   }

//   @media (max-width: 768px) {
//     &.id-column,
//     &.created-column {
//       display: none; /* Hide these columns on mobile */
//     }
//   }
// `;

// // Table link style (for clickable links)
// const TableLink = styled.td`
//   padding: 12px;
//   font-size: 14px;
//   color: #007bff;
//   border-bottom: 1px solid #dee2e6;
//   cursor: pointer;
//   text-decoration: none;

//   &:hover {
//     text-decoration: underline;
//   }
//       @media (max-width: 768px) {
//     &.id-column,
//     &.created-column {
//       display: none; /* Hide these columns on mobile */
//     }

//   @media (max-width: 768px) {
//     font-size: 12px;
//     padding: 8px;
//   }
// `;

import React, { useEffect, useState } from "react";
import { fetchOrdersByUserId } from "../../apis/apis";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { TableSkeleton } from "../../components/DashboardLoading/DashboardLoading";

const OrdersTable: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getOrders = async () => {
      try {
        setLoading(true);
        setError(null); // Clear any previous errors
        const fetchedOrders = await fetchOrdersByUserId();
        setOrders(fetchedOrders || []);
        setSearchQuery("");
      } catch (err: any) {
        setError(err.message || "Failed to fetch orders");
        setOrders([]); // Clear orders on error
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    };

    getOrders();
  }, []);

  const filteredOrders = orders.filter((order) =>
    order.package?.name?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (loading) {
    return (
      <OrdersContainer>
        <Helmet>
          <title>Order Management</title>
          <meta
            name="description"
            content="View and manage all your orders from this section."
          />
        </Helmet>
        <HeaderSection>
          <TitleSkeleton />
        </HeaderSection>
        <Table>
          <thead>
            <tr>
              <TableHeader className="hidden md:table-cell">ID</TableHeader>
              <TableHeader>Title</TableHeader>
              <TableHeader className="hidden md:table-cell">
                Created
              </TableHeader>
              <TableHeader>Status</TableHeader>
            </tr>
          </thead>
          <tbody>
            <TableSkeleton rows={6} cols={4} />
          </tbody>
        </Table>
      </OrdersContainer>
    );
  }

  return (
    <OrdersContainer>
      <Helmet>
        <title>Order Management</title>
        <meta
          name="description"
          content="View and manage all your orders from this section."
        />
      </Helmet>
      <HeaderSection>
        <Title>Orders</Title>
        {!error && <OrderCount>({filteredOrders.length} total)</OrderCount>}
      </HeaderSection>

      <Table>
        <thead>
          <tr>
            <TableHeader className="hidden md:table-cell">ID</TableHeader>
            <TableHeader>Title</TableHeader>
            <TableHeader className="hidden md:table-cell">Created</TableHeader>
            <TableHeader>Status</TableHeader>
          </tr>
        </thead>
        <tbody>
          {error ? (
            <TableRow>
              <TableCell
                colSpan={4}
                style={{ textAlign: "center", padding: "40px" }}
              >
                <ErrorMessageText>{error}</ErrorMessageText>
              </TableCell>
            </TableRow>
          ) : filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <TableRow key={order._id}>
                <TableCell className="hidden md:table-cell">
                  <OrderId>{order._id.slice(-8)}</OrderId>
                </TableCell>
                <TableCell>
                  <OrderTitle>{order.package?.name || "N/A"}</OrderTitle>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {new Date(order.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <StatusBadge status={order.status}>
                    {order.status}
                  </StatusBadge>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={4}
                style={{ textAlign: "center", padding: "40px" }}
              >
                <EmptyMessage>No orders found</EmptyMessage>
              </TableCell>
            </TableRow>
          )}
        </tbody>
      </Table>
    </OrdersContainer>
  );
};

export default OrdersTable;

const OrdersContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 30px;
  font-family: "Manrope", sans-serif;

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: clamp(24px, 4vw, 32px);
  color: #212121;
  margin: 0;
  font-weight: 700;
`;

const TitleSkeleton = styled.div`
  height: 32px;
  width: 150px;
  background: linear-gradient(90deg, #f0f0f0 0px, #e0e0e0 40px, #f0f0f0 80px);
  background-size: 1000px 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 6px;

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
`;

const OrderCount = styled.span`
  color: #6dc7d1;
  font-size: 18px;
  font-weight: 600;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

const TableHeader = styled.th`
  background-color: #f9f8fa;
  color: #212121;
  padding: 10px 16px;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:first-child {
    border-top-left-radius: 12px;
  }

  &:last-child {
    border-top-right-radius: 12px;
  }
`;

const TableRow = styled.tr`
  transition: background-color 0.2s ease;

  &:nth-child(even) {
    background-color: #f9fafb;
  }

  &:hover {
    background-color: #f3f4f6;
  }
`;

const TableCell = styled.td`
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
  color: #374151;
  font-size: 14px;
`;

const OrderId = styled.span`
  font-family: monospace;
  color: #6dc7d1;
  font-weight: 600;
  font-size: 13px;
`;

const OrderTitle = styled.span`
  font-weight: 600;
  color: #212121;
`;

const StatusBadge = styled.span<{ status: string }>`
  display: inline-block;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background-color: ${(props) => {
    switch (props.status?.toLowerCase()) {
      case "completed":
        return "#d1fae5";
      case "pending":
        return "#fef3c7";
      case "in progress":
        return "#dbeafe";
      default:
        return "#e5e7eb";
    }
  }};
  color: ${(props) => {
    switch (props.status?.toLowerCase()) {
      case "completed":
        return "#065f46";
      case "pending":
        return "#92400e";
      case "in progress":
        return "#1e40af";
      default:
        return "#374151";
    }
  }};
`;

const EmptyMessage = styled.div`
  color: #6b7280;
  font-size: 16px;
  font-weight: 500;
`;

const ErrorMessageText = styled.div`
  color: #dc2626;
  font-size: 16px;
  font-weight: 500;
`;
