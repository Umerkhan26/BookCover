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
  addOns: any[]; // Full addOns array from API
  totalPrice: number;
  status: "Pending" | "Completed" | "Cancelled";
  paymentStatus: "Unpaid" | "Paid";
  bookTitle: string;
  bookSubtitle?: string;
  authorName?: string;
  genre: string;
  seriesContinuation?: string;
  summary?: string;
  coverStyle?: string;
  coverMood?: string;
  colorPalette?: string;
  examples?: string;
  file?: string;
  firstOrder?: boolean;
  shareOnPortfolio?: boolean;
  paymentMethod: string;
}

const Order: React.FC = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Modal states
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<any | null>(null);
  const [selectedOtherInfo, setSelectedOtherInfo] = useState<any | null>(null);

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

  // Handle opening modals for user, package, and other info
  const handleUserClick = (user: any) => {
    setSelectedUser(user);
  };

  const handlePackageClick = (pkg: any, addOns: any[]) => {
    setSelectedPackage({ ...pkg, addOns }); // Pass both the package and addOns to the modal
  };

  const handleOtherInfoClick = (order: any) => {
    setSelectedOtherInfo(order); // Pass the order to display remaining details in the modal
  };

  // Close modals
  const closeUserModal = () => setSelectedUser(null);
  const closePackageModal = () => setSelectedPackage(null);
  const closeOtherInfoModal = () => setSelectedOtherInfo(null);

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
            <TableHeader>Form Data</TableHeader> {/* New column for OtherInfo */}
            {/* <TableHeader>Actions</TableHeader> */}
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
                  {order.user ? `${order.user.firstName} ${order.user.lastName}` : "No User"} {/* Display user's first and last name */}
                </TableData>
                <TableData
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => handlePackageClick(order.package, order.addOns)} // Pass both package and addOns to modal
                >
                  {order.package ? order.package.name : "No Package"} {/* Display package name */}
                </TableData>
                <TableData>${order.totalPrice}</TableData>
                <TableData>{order.status}</TableData>
                <TableData
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => handleOtherInfoClick(order)} // Pass order to show all other details
                >
                  Info {/* Display "Info" link for other details */}
                </TableData>
                {/* <TableData>
                  <button>Delete</button>
                </TableData> */}
              </TableRow>
            ))
          ) : (
            <tr>
              <TableData colSpan={7}>No orders found</TableData>
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
            <p>Free Features:</p>
            <ul>
              {selectedPackage.freeFeatures?.map((freeFeature: string, idx: number) => (
                <li key={idx}>{freeFeature}</li>
              ))}
            </ul>

            {/* AddOns */}
            <p>AddOns</p>
            {selectedPackage.addOns?.length > 0 ? (
              <ul>
                {selectedPackage.addOns.map((addon: any, idx: number) => (
                  <li key={idx}>{addon.name} </li> // Display addon name and price
                ))}
              </ul>
            ) : (
              <p>No AddOns</p>
            )}
          </div>
        </div>
      )}

      {/* OtherInfo Modal */}
      {selectedOtherInfo && (
  <div className="modal">
    <div className="modal-content">
      <button className="close" onClick={closeOtherInfoModal}>
        ×
      </button>
      <h2 className="modal-heading">Data From Form</h2>

      <div className="modal-body">
        <p><strong>Book Title:</strong></p>
        <p>{selectedOtherInfo.bookTitle}</p>

        <p><strong>Book Subtitle:</strong></p>
        <p>{selectedOtherInfo.bookSubtitle}</p>

        <p><strong>Narrator Name:</strong></p>
        <p>{selectedOtherInfo.narratorName}</p>

        <p><strong>Genre:</strong></p>
        <p>{selectedOtherInfo.genre}</p>

        <p><strong>Summary:</strong></p>
        <p>{selectedOtherInfo.summary}</p>

        <p><strong>Cover Style:</strong></p>
        <p>{selectedOtherInfo.prefferedCoverStyle}</p>

        <p><strong>Like to see on cover:</strong></p>
        <p>{selectedOtherInfo.likeToSeeOnCover}</p>

        <p><strong>First Order:</strong></p>
        <p>{selectedOtherInfo.firstOrder ? "Yes" : "No"}</p>

        <p><strong>Share on Portfolio:</strong></p>
        <p>{selectedOtherInfo.shareOnPortfolio ? "Yes" : "No"}</p>
      </div>
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
  color: black;
  z-index: 9999;
}

.modal-content {
  position: relative; /* Ensures close button is positioned correctly */
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px; /* Fixed width */
  max-height: 60vh; /* Limits height to 60% of viewport */
  overflow-y: auto; /* Enables scrolling if content is too long */
  z-index: 10000;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  background: none;
  border: none;
}
.modal-heading {
  text-align: center;
  font-weight: bold;
  margin-bottom: 15px;
}

.modal-body p {
  margin: 5px 0;
}

.modal-body p:first-child {
  font-weight: bold;
  margin-top: 10px;
}

        `}
      </style>
    </Container>
  );
};

export default Order;
