import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { deleteUser, fetchUsers, updateUserStatus } from "../../apis/apis"; // Import the updateUserStatus function

import {
  Container,
  HeaderSection,
  Title,
  UserCount,
  SearchInput,
  AddUserButton,
  Table,
  TableHeader,
  TableRow,
  TableData,
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
          <UserCount>({users.length})</UserCount>{" "}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <SearchInput type="text" placeholder="Search users..." />
          <AddUserButton>Add User</AddUserButton>
        </div>
      </HeaderSection>

      <Table>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Role</TableHeader>
            <TableHeader>Action</TableHeader>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <TableRow key={user.id}>
              <TableData>{index + 1}</TableData>
              <TableData>{`${user.firstName} ${user.lastName}`}</TableData>
              <TableData>{user.email}</TableData>
              <TableData>{user.role}</TableData>
              <TableData>
                {editingStatusUserId === user.userId ? (
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}
                  >
                    <button
                      onClick={() =>
                        handleStatusOptionChange(user.userId, "Active")
                      }
                      style={{
                        backgroundColor:
                          user.status === "active" ? "green" : "green",
                        color: "white",
                        padding: "7px 15px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Active
                    </button>
                    <button
                      onClick={() =>
                        handleStatusOptionChange(user.userId, "Blocked")
                      }
                      style={{
                        backgroundColor:
                          user.status === "inactive" ? "#dc3545" : "green",
                        color: "white",
                        padding: "7px 10px",
                        border: "none",
                        cursor: "pointer",
                        borderRadius: "5px",
                      }}
                    >
                      Block
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className="btn btn-danger ms-2"
                      style={{
                        padding: "7px 9px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                ) : (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <button
                      onClick={() => toggleStatusButtons(user.userId)}
                      style={{
                        backgroundColor:
                          user.status === "active" ? "green" : "#dc3545",
                        color: "white",
                        padding: "7px 9px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      {user.status === "active" ? "Active" : "Blocked"}
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className="btn btn-danger ms-2"
                      style={{
                        padding: "7px 10px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
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
