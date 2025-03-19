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
import { fetchOrdersByUserId } from "../../apis/apis"; // Assuming you have the function

const OrdersTable: React.FC = () => {
  // State to store orders
  const [orders, setOrders] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch orders using useEffect
  useEffect(() => {
    const getOrders = async () => {
      try {
        const fetchedOrders = await fetchOrdersByUserId();
        setOrders(fetchedOrders);
        setSearchQuery("")
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    getOrders();
  }, []);

  // Filter orders based on search query
  const filteredOrders = orders.filter((order) =>
    order.package.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto overflow-x-auto px-8 py-4 pl-20">
      {/* Header */}
      <div className="flex justify-between items-center text-green-700 mb-6 md:flex-col">
        <h1 className="text-3xl font-bold  pb-8 pt-6">Orders</h1>
      </div>
      {/* Table */}
      <table className="min-w-full table-auto border-collapse text-left">
        <thead>
          <tr className="bg-gray-100">
            {/* ID column hidden on mobile */}
            <th className="px-4 py-2 text-sm font-medium text-gray-700 hidden md:table-cell">
              ID
            </th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Title
            </th>
            {/* Created column hidden on mobile */}
            <th className="px-4 py-2 text-sm font-medium text-gray-700 hidden md:table-cell">
              Created
            </th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <tr key={order._id} className="border-b">
                {/* ID column hidden on mobile */}
                <td className="px-4 py-2 text-sm text-blue-600 hidden md:table-cell text-blue-600 ">
                  {order._id}
                </td>
                <td className="px-4 py-2 text-sm  text-black">{order.package.name}</td>
                {/* Created column hidden on mobile */}
                <td className="px-4 py-2 text-sm hidden md:table-cell  text-black">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 text-sm  text-green-600">{order.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="px-4 py-2 text-sm text-center">
                No orders found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
