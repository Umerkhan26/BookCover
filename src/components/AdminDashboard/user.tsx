import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { deleteUser, fetchUsers, updateUserStatus } from "../../apis/apis";

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
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import {
  TableSkeleton,
  ErrorMessage,
} from "../DashboardLoading/DashboardLoading";
import AdminListPagination from "./AdminListPagination";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import styled from "styled-components";

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

const USERS_PAGE_SIZE = 10;

const User: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSizeLabel, setPageSizeLabel] = useState(USERS_PAGE_SIZE);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingStatusUserId, setEditingStatusUserId] = useState<string | null>(
    null,
  );
  const [actionLoading, setActionLoading] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetchUsers({ page, limit: USERS_PAGE_SIZE });
        setUsers(res.users as User[]);
        setTotal(res.total);
        setTotalPages(res.totalPages);
        setPageSizeLabel(res.limit || USERS_PAGE_SIZE);
        if (res.users.length === 0 && page > 1) {
          setPage((p) => Math.max(1, p - 1));
        }
      } catch (err: any) {
        const msg =
          typeof err === "string" ? err : err?.message || "Failed to load users";
        setError(msg);
        toast.error(msg);
      } finally {
        setLoading(false);
      }
    };

    void loadUsers();
  }, [page]);

  if (loading) {
    return (
      <Container>
        <HeaderSection>
          <TitleSkeleton />
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
            <TableSkeleton rows={8} cols={5} />
          </tbody>
        </Table>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorMessage>Error loading users: {error}</ErrorMessage>
      </Container>
    );
  }

  const toggleStatusButtons = (userId: string) => {
    setEditingStatusUserId(userId);
  };

  const handleStatusOptionChange = async (userId: string, status: string) => {
    try {
      setActionLoading(true);
      const backendStatus = status === "Active" ? "active" : "inactive";

      await updateUserStatus(userId, backendStatus);

      // Update the user's status in the state
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.userId === userId ? { ...user, status: backendStatus } : user,
        ),
      );

      setEditingStatusUserId(null);
      toast.success(`User status updated to ${status}`);
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "Failed to update user status",
      );
      console.error(
        "Failed to update user status:",
        error.response?.data || error.message,
      );
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeleteUserClick = (user: User) => {
    setUserToDelete(user);
  };

  const handleDeleteUserConfirm = async () => {
    if (!userToDelete) return;
    try {
      setActionLoading(true);
      await deleteUser(userToDelete.userId);
      setUsers((prevUsers) =>
        prevUsers.filter(
          (existingUser) => existingUser.userId !== userToDelete.userId,
        ),
      );
      setUserToDelete(null);
      toast.success("User deleted successfully");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to delete user");
      console.error(
        "Failed to delete user:",
        error.response?.data || error.message,
      );
    } finally {
      setActionLoading(false);
    }
  };

  if (loading || actionLoading) {
    return (
      <Container>
        <Helmet>
          <title>Manage Users</title>
          <meta
            name="description"
            content="Admin panel for managing users and their roles."
          />
        </Helmet>
        <HeaderSection>
          <TitleSkeleton />
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
            <TableSkeleton rows={8} cols={5} />
          </tbody>
        </Table>
      </Container>
    );
  }

  return (
    <Container>
      <ConfirmModal
        open={!!userToDelete}
        title="Delete user"
        message={
          userToDelete
            ? `Are you sure you want to delete ${userToDelete.firstName} ${userToDelete.lastName}? This cannot be undone.`
            : ""
        }
        confirmLabel="Delete"
        cancelLabel="Cancel"
        onConfirm={handleDeleteUserConfirm}
        onCancel={() => setUserToDelete(null)}
      />
      <Helmet>
        <title>Manage Users</title>
        <meta
          name="description"
          content="Admin panel for managing users and their roles."
        />
      </Helmet>
      <HeaderSection>
        <div>
          <Title>All Users</Title>
          {!error && (
            <UserCount>
              ({total} total{totalPages > 1 ? ` · page ${page} of ${totalPages}` : ""})
            </UserCount>
          )}
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
          {error ? (
            <TableRow>
              <TableData
                colSpan={5}
                style={{ textAlign: "center", padding: "40px" }}
              >
                {error && <ErrorMessageText>Error: {error}</ErrorMessageText>}
              </TableData>
            </TableRow>
          ) : users.length > 0 ? (
            users.map((user, index) => (
              <TableRow key={user.userId}>
                <TableData className="id-column">
                  {(page - 1) * USERS_PAGE_SIZE + index + 1}
                </TableData>
                <TableData>
                  <UserName>{`${user.firstName} ${user.lastName}`}</UserName>
                </TableData>
                <TableData className="email-column">{user.email}</TableData>
                <TableData>
                  <RoleBadge role={user.role}>{user.role}</RoleBadge>
                </TableData>
                <TableData className="action-column">
                  {editingStatusUserId === user.userId ? (
                    <ActionButtons>
                      <Button
                        onClick={() =>
                          handleStatusOptionChange(user.userId, "Active")
                        }
                        bgColor="#6dc7d1"
                      >
                        Active
                      </Button>
                      <Button
                        onClick={() =>
                          handleStatusOptionChange(user.userId, "Blocked")
                        }
                        bgColor="#dc3545"
                      >
                        Block
                      </Button>
                      <Button
                        onClick={() => handleDeleteUserClick(user)}
                        bgColor="#dc3545"
                      >
                        Delete
                      </Button>
                    </ActionButtons>
                  ) : (
                    <ActionButtons>
                      <Button
                        onClick={() => toggleStatusButtons(user.userId)}
                        bgColor={
                          user.status === "active" ? "#6dc7d1" : "#dc3545"
                        }
                      >
                        {user.status === "active" ? "Active" : "Blocked"}
                      </Button>
                      <Button
                        onClick={() => handleDeleteUserClick(user)}
                        bgColor="#dc3545"
                      >
                        Delete
                      </Button>
                    </ActionButtons>
                  )}
                </TableData>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableData
                colSpan={5}
                style={{ textAlign: "center", padding: "40px" }}
              >
                <EmptyMessage>No users found</EmptyMessage>
              </TableData>
            </TableRow>
          )}
        </tbody>
      </Table>

      {!error && total > 0 && (
        <AdminListPagination
          page={page}
          totalPages={totalPages}
          disabled={actionLoading}
          pageSizeLabel={pageSizeLabel}
          onPrev={() => setPage((p) => Math.max(1, p - 1))}
          onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
        />
      )}
    </Container>
  );
};

const TitleSkeleton = styled.div`
  height: 32px;
  width: 200px;
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

const UserName = styled.span`
  font-weight: 600;
  color: #212121;
`;

const RoleBadge = styled.span<{ role: string }>`
  display: inline-block;
  padding: 3px 8px;
  border-radius: 6px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  background-color: ${(props) =>
    props.role === "admin" ? "#dbeafe" : "#e0e7ff"};
  color: ${(props) => (props.role === "admin" ? "#1e40af" : "#4338ca")};
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const EmptyMessage = styled.div`
  color: #64748b;
  font-size: 13px;
  font-weight: 500;
`;

const ErrorMessageText = styled.div`
  color: #dc2626;
  font-size: 13px;
  font-weight: 500;
`;

export default User;
