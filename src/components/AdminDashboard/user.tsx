import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { deleteUser, fetchUsers, updateUserStatus } from "../../apis/apis"; // Import the updateUserStatus function

import {
  Container,
  HeaderSection,
  Title,
  UserCount,
  Table,
  TableHeader,
  TableRow,
  TableData,
  Button,
} from "./user.styles";

interface User {
  _id: string;
  userId: string;
  isBlocked: boolean;
  isActive: boolean;
  id: number;
  firstName: string;
  lastName: string;
  status: "active" | "inactive";
  email: string;
  role: string;
  action: string;
}

const User: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | Error>(null);
  const [editingStatusUserId, setEditingStatusUserId] = useState<string | null>(
    null
  );

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const fetchedUsers = await fetchUsers();
        console.log("userrrrrs", fetchedUsers);
        setUsers(fetchedUsers);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading users: {error.message}</div>;

  const toggleStatusButtons = (userId: string) => {
    setEditingStatusUserId(userId);
  };

  const handleStatusOptionChange = async (userId: string, status: string) => {
    try {
      console.log("Updating user status:", { userId, status });

      // Map "Active" and "Blocked" to "active" and "inactive"
      const backendStatus = status === "Active" ? "active" : "inactive";

      // Call the updateUserStatus API with userId
      await updateUserStatus(userId, backendStatus);

      // Update the user's status in the state
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.userId === userId ? { ...user, status: backendStatus } : user
        )
      );

      setEditingStatusUserId(null);
    } catch (error: any) {
      console.error(
        "Failed to update user status:",
        error.response?.data || error.message
      );
    }
  };

  const handleDeleteUser = async (user: User) => {
    try {
      console.log(`Deleting user: ${user.firstName} ${user.lastName}`);

      // Call the deleteUser API
      await deleteUser(user.userId);

      // Remove the user from the state
      setUsers((prevUsers) =>
        prevUsers.filter((existingUser) => existingUser.userId !== user.userId)
      );

      console.log("User deleted successfully", user);
    } catch (error: any) {
      console.error(
        "Failed to delete user:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <Container>
      <HeaderSection>
        <div>
          <Title>All Users</Title>
          <UserCount>({users.length})</UserCount>
        </div>
      </HeaderSection>

      <Table>
        <thead>
          <tr>
            <TableHeader className="id-column">ID</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader className="email-column">Email</TableHeader>
            <TableHeader className="role-column">Role</TableHeader>
            <TableHeader className="action-column">Action</TableHeader>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <TableRow key={user.id}>
              <TableData className="id-column">{index + 1}</TableData>
              <TableData>{`${user.firstName} ${user.lastName}`}</TableData>
              <TableData className="email-column">{user.email}</TableData>
              <TableData>{user.role}</TableData>
              <TableData className="action-column">
                {editingStatusUserId === user.userId ? (
                  <div className="flex gap-2 items-center">
                    <Button
                      onClick={() =>
                        handleStatusOptionChange(user.userId, "Active")
                      }
                      bgColor={user.status === "active" ? "#6dc7d1" : "#6dc7d1"}
                      className="px-4 py-2"
                    >
                      Active
                    </Button>
                    <Button
                      onClick={() =>
                        handleStatusOptionChange(user.userId, "Blocked")
                      }
                      bgColor={
                        user.status === "inactive" ? "#dc3545" : "#6dc7d1"
                      }
                      className="px-4 py-2"
                    >
                      Block
                    </Button>
                    <Button
                      onClick={() => handleDeleteUser(user)}
                      bgColor="#dc3545"
                      className="px-4 py-2"
                    >
                      Delete
                    </Button>
                  </div>
                ) : (
                  <div className="flex gap-2 items-center">
                    <Button
                      onClick={() => toggleStatusButtons(user.userId)}
                      bgColor={user.status === "active" ? "#6dc7d1" : "#dc3545"}
                      className="px-4 py-2"
                    >
                      {user.status === "active" ? "Active" : "Blocked"}
                    </Button>
                    <Button
                      className="px-4 py-2"
                      onClick={() => handleDeleteUser(user)}
                      bgColor="#dc3545"
                    >
                      Delete
                    </Button>
                  </div>
                )}
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default User;
