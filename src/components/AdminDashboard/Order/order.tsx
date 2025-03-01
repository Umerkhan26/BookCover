import React, { useState, useEffect } from "react";
import { fetchAllOrders } from "../../../apis/apis";  // Ensure you have the correct path to fetchAllOrders function
import {
  Container,
  Table,
  TableData,
  TableHeader,
  TableRow,
} from "../user.styles";  // Adjust your imports accordingly

// Define the IOrder interface
interface IOrder {
  _id: string;
  user: any; // Full user object from API
  package: any; // Full package object from API
  addOns: string[];
  totalPrice: number;
  status: "Pending" | "Completed" | "Cancelled";
  paymentStatus: "Unpaid" | "Paid";
}

const Order: React.FC = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Modal state
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<any | null>(null);

  // Fetch orders on component mount
  useEffect(() => {
    const loadOrders = async () => {
      try {
        const fetchedOrders = await fetchAllOrders(); // Using the existing fetchAllOrders function
        setOrders(fetchedOrders || []); // Ensure we always set an array
      } catch (err) {
        setError("Failed to load orders");
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, []);

  // Handle opening modals for user and package
  const handleUserClick = (user: any) => {
    setSelectedUser(user);
  };

  const handlePackageClick = (pkg: any) => {
    setSelectedPackage(pkg);
  };

  // Close modals
  const closeUserModal = () => setSelectedUser(null);
  const closePackageModal = () => setSelectedPackage(null);

  if (loading) return <div>Loading orders...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container>
      <h1 className="text-black mb-4">Orders</h1>
      <Table>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>User</TableHeader>
            <TableHeader>Package</TableHeader>
            <TableHeader>Total Price</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {/* Render orders */}
          {orders && orders.length > 0 ? (
            orders.map((order) => (
              <TableRow key={order._id}>
                <TableData>{order._id}</TableData>
                <TableData
                  style={{ cursor: "pointer", color: "blue" }}
                
                  onClick={() => handleUserClick(order.user)} // Pass full user object
                >
                  {order.user ? order.user : "No User"} {/* Display user's first name */}
                </TableData>
                <TableData
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => handlePackageClick(order.package)} // Pass full package object
                >
                  {order.package ? order.package.name : "No Package"} {/* Display package name */}
                </TableData>
                <TableData>${order.totalPrice}</TableData>
                <TableData>{order.status}</TableData>
                <TableData>
                  <button>Delete</button>
                </TableData>
              </TableRow>
            ))
          ) : (
            <tr>
              <TableData colSpan={6}>No orders found</TableData>
            </tr>
          )}
        </tbody>
      </Table>

      {/* User Modal */}
      {selectedUser && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={closeUserModal}>
              ×
            </button>
            <h2>User Details</h2>
            <p>User ID: {selectedUser.userId}</p>
            <p>Name: {selectedUser.firstName} {selectedUser.lastName}</p>
            <p>Email: {selectedUser.email}</p>
            <p>Role: {selectedUser.role}</p>
            <p>Status: {selectedUser.status}</p>
          </div>
        </div>
      )}

      {/* Package Modal */}
      {selectedPackage && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={closePackageModal}>
              ×
            </button>
            <h2>Package Details</h2>
            <p>Package Name: {selectedPackage.name}</p>
            <p>Price: ${selectedPackage.price}</p>
            <p>Features:</p>
            <ul>
              {selectedPackage.features?.map((feature: string, idx: number) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Inline CSS for Modal */}
      <style>
        {`
          /* Modal styles */
          .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            color:black;
            z-index: 9999;
          }

          .modal-content {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            width: 400px;
            z-index: 10000;
          }

          .close {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 20px;
            cursor: pointer;
          }
        `}
      </style>
    </Container>
  );
};

export default Order;
