import React, { useState, useEffect } from "react";
import {
  Container,
  Table,
  TableData,
  TableHeader,
  TableRow,
} from "../user.styles";

// Define the IOrder interface
interface IOrder {
  _id: string;
  user: string; // Mock user ID
  package: string; // Mock package ID
  addOns: string[]; // Mock add-ons IDs
  totalPrice: number;
  status: "Pending" | "Completed" | "Cancelled";
  paymentStatus: "Unpaid" | "Paid";
}

// Mock data for orders
const mockOrders: IOrder[] = [
  {
    _id: "1",
    user: "64f8a4f47e7b9c1a2b3c4d5e", // Mock user ID
    package: "64f8a4f47e7b9c1a2b3c4d5f", // Mock package ID
    addOns: ["64f8a4f47e7b9c1a2b3c4d60"], // Mock add-ons IDs
    totalPrice: 100,
    status: "Pending",
    paymentStatus: "Unpaid",
  },
  {
    _id: "2",
    user: "64f8a4f47e7b9c1a2b3c4d5e", // Mock user ID
    package: "64f8a4f47e7b9c1a2b3c4d5f", // Mock package ID
    addOns: ["64f8a4f47e7b9c1a2b3c4d60", "64f8a4f47e7b9c1a2b3c4d61"], // Mock add-ons IDs
    totalPrice: 150,
    status: "Completed",
    paymentStatus: "Paid",
  },
];

// Simulate fetching all orders
const fetchOrders = async (): Promise<IOrder[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockOrders), 1000); // Simulate a 1-second delay
  });
};

// Simulate updating an order
const updateOrder = async (
  id: string,
  updates: Partial<IOrder>
): Promise<IOrder | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const orderIndex = mockOrders.findIndex((o) => o._id === id);
      if (orderIndex !== -1) {
        mockOrders[orderIndex] = { ...mockOrders[orderIndex], ...updates };
        resolve(mockOrders[orderIndex]);
      } else {
        resolve(undefined);
      }
    }, 1000); // Simulate a 1-second delay
  });
};

// Simulate deleting an order
const deleteOrder = async (id: string): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const orderIndex = mockOrders.findIndex((o) => o._id === id);
      if (orderIndex !== -1) {
        mockOrders.splice(orderIndex, 1);
      }
      resolve();
    }, 1000); // Simulate a 1-second delay
  });
};

const Order: React.FC = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch orders on component mount
  useEffect(() => {
    const loadOrders = async () => {
      try {
        const fetchedOrders = await fetchOrders();
        setOrders(fetchedOrders);
      } catch (err) {
        setError("Failed to load orders");
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, []);

  // Handle order deletion
  const handleDeleteOrder = async (id: string) => {
    try {
      await deleteOrder(id);
      setOrders((prevOrders) => prevOrders.filter((order) => order._id !== id));
    } catch (err) {
      setError("Failed to delete order");
    }
  };

  // Handle order status update
  const handleUpdateStatus = async (id: string, status: IOrder["status"]) => {
    try {
      const updatedOrder = await updateOrder(id, { status });
      if (updatedOrder) {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === id ? { ...order, status: updatedOrder.status } : order
          )
        );
      }
    } catch (err) {
      setError("Failed to update order status");
    }
  };

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
            <TableHeader>Payment Status</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <TableRow key={order._id}>
              <TableData>{order._id}</TableData>
              <TableData>{order.user}</TableData>
              <TableData>{order.package}</TableData>
              <TableData>${order.totalPrice}</TableData>
              <TableData>
                <select
                  value={order.status}
                  onChange={(e) =>
                    handleUpdateStatus(
                      order._id,
                      e.target.value as IOrder["status"]
                    )
                  }
                >
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </TableData>
              <TableData>{order.paymentStatus}</TableData>
              <TableData>
                <button onClick={() => handleDeleteOrder(order._id)}>
                  Delete
                </button>
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Order;
