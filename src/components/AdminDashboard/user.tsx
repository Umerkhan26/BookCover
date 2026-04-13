import React from "react";
import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  bulkDeleteUsers,
  deleteUser,
  fetchUsers,
  updateUserStatus,
} from "../../apis/apis";

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
import AdminListFilters, { AdminBulkBar } from "./AdminListFilters";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import styled from "styled-components";
import type { DatePreset } from "../../utils/adminDateRange";
import { presetToDateStrings } from "../../utils/adminDateRange";

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

const USERS_PAGE_SIZE = 50;

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
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [datePreset, setDatePreset] = useState<DatePreset>("all");
  const [customDateFrom, setCustomDateFrom] = useState("");
  const [customDateTo, setCustomDateTo] = useState("");
  const { dateFrom: apiDateFrom, dateTo: apiDateTo } = useMemo(
    () => presetToDateStrings(datePreset, customDateFrom, customDateTo),
    [datePreset, customDateFrom, customDateTo],
  );
  const [selectedIds, setSelectedIds] = useState<Set<string>>(() => new Set());
  const [bulkDeleteOpen, setBulkDeleteOpen] = useState(false);
  const filterInit = useRef(true);
  const selectAllRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = window.setTimeout(() => {
      setDebouncedSearch(searchInput.trim());
    }, 400);
    return () => window.clearTimeout(t);
  }, [searchInput]);

  useEffect(() => {
    if (filterInit.current) {
      filterInit.current = false;
      return;
    }
    setPage(1);
  }, [debouncedSearch, datePreset, customDateFrom, customDateTo]);

  useEffect(() => {
    setSelectedIds(new Set());
  }, [page, debouncedSearch, datePreset, customDateFrom, customDateTo]);

  const loadUsers = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetchUsers({
        page,
        limit: USERS_PAGE_SIZE,
        search: debouncedSearch || undefined,
        dateFrom: apiDateFrom || undefined,
        dateTo: apiDateTo || undefined,
      });
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
  }, [page, debouncedSearch, apiDateFrom, apiDateTo]);

  useEffect(() => {
    void loadUsers();
  }, [loadUsers]);

  const pageUserIds = users.map((u) => u.userId);
  const allOnPageSelected =
    pageUserIds.length > 0 &&
    pageUserIds.every((id) => selectedIds.has(id));
  const someOnPageSelected = pageUserIds.some((id) => selectedIds.has(id));

  useEffect(() => {
    const el = selectAllRef.current;
    if (el) {
      el.indeterminate = someOnPageSelected && !allOnPageSelected;
    }
  }, [someOnPageSelected, allOnPageSelected]);

  const toggleSelectOne = (userId: string, checked: boolean) => {
    setSelectedIds((prev) => {
      const n = new Set(prev);
      if (checked) n.add(userId);
      else n.delete(userId);
      return n;
    });
  };

  const toggleSelectAllOnPage = (checked: boolean) => {
    setSelectedIds((prev) => {
      const n = new Set(prev);
      if (checked) pageUserIds.forEach((id) => n.add(id));
      else pageUserIds.forEach((id) => n.delete(id));
      return n;
    });
  };

  const handleBulkDeleteConfirm = async () => {
    const ids = [...selectedIds];
    if (ids.length === 0) return;
    try {
      setActionLoading(true);
      await bulkDeleteUsers(ids);
      setBulkDeleteOpen(false);
      setSelectedIds(new Set());
      toast.success(`Deleted ${ids.length} user(s)`);
      await loadUsers();
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Bulk delete failed",
      );
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) {
    return (
      <Container>
        <HeaderSection>
          <TitleSkeleton />
        </HeaderSection>
        <Table>
          <thead>
            <tr>
              <TableHeader className="checkbox-column" aria-label="Select" />
              <TableHeader className="id-column">ID</TableHeader>
              <TableHeader>Name</TableHeader>
              <TableHeader className="email-column">Email</TableHeader>
              <TableHeader className="role-column">Role</TableHeader>
              <TableHeader className="action-column">Action</TableHeader>
            </tr>
          </thead>
          <tbody>
            <TableSkeleton rows={8} cols={6} />
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
      setSelectedIds((prev) => {
        const n = new Set(prev);
        n.delete(userToDelete.userId);
        return n;
      });
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
              <TableHeader className="checkbox-column" aria-label="Select" />
              <TableHeader className="id-column">ID</TableHeader>
              <TableHeader>Name</TableHeader>
              <TableHeader className="email-column">Email</TableHeader>
              <TableHeader className="role-column">Role</TableHeader>
              <TableHeader className="action-column">Action</TableHeader>
            </tr>
          </thead>
          <tbody>
            <TableSkeleton rows={8} cols={6} />
          </tbody>
        </Table>
      </Container>
    );
  }

  return (
    <Container>
      <ConfirmModal
        open={bulkDeleteOpen}
        title="Delete selected users"
        message={`Delete ${selectedIds.size} user(s)? This cannot be undone.`}
        confirmLabel="Delete"
        cancelLabel="Cancel"
        onConfirm={handleBulkDeleteConfirm}
        onCancel={() => {
          if (!actionLoading) setBulkDeleteOpen(false);
        }}
      />
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

      <AdminListFilters
        searchLabel="Search users"
        searchPlaceholder="Name, email, role, user ID…"
        searchValue={searchInput}
        onSearchChange={setSearchInput}
        datePreset={datePreset}
        onDatePresetChange={setDatePreset}
        customDateFrom={customDateFrom}
        customDateTo={customDateTo}
        onCustomDateFromChange={setCustomDateFrom}
        onCustomDateToChange={setCustomDateTo}
      />

      <AdminBulkBar
        selectedCount={selectedIds.size}
        itemLabel="selected"
        disabled={actionLoading}
        onDeleteClick={() => setBulkDeleteOpen(true)}
      />

      <Table>
        <thead>
          <tr>
            <TableHeader className="checkbox-column">
              <SelectAllInput
                ref={selectAllRef}
                type="checkbox"
                checked={allOnPageSelected}
                onChange={(e) => toggleSelectAllOnPage(e.target.checked)}
                aria-label="Select all on this page"
              />
            </TableHeader>
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
                colSpan={6}
                style={{ textAlign: "center", padding: "40px" }}
              >
                {error && <ErrorMessageText>Error: {error}</ErrorMessageText>}
              </TableData>
            </TableRow>
          ) : users.length > 0 ? (
            users.map((user, index) => (
              <TableRow key={user.userId}>
                <TableData className="checkbox-column">
                  <SelectAllInput
                    type="checkbox"
                    checked={selectedIds.has(user.userId)}
                    onChange={(e) =>
                      toggleSelectOne(user.userId, e.target.checked)
                    }
                    aria-label={`Select ${user.firstName} ${user.lastName}`}
                  />
                </TableData>
                <TableData className="id-column">
                  {(page - 1) * USERS_PAGE_SIZE + index + 1}
                </TableData>
                <TableData>
                  <NameCell>
                    <Avatar>
                      {`${user.firstName?.[0] || ""}${user.lastName?.[0] || ""}`
                        .trim()
                        .toUpperCase() || "U"}
                    </Avatar>
                    <div>
                      <UserName>{`${user.firstName} ${user.lastName}`}</UserName>
                      <MutedSub>#{user.userId}</MutedSub>
                    </div>
                  </NameCell>
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
                colSpan={6}
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

const NameCell = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #e0f7fa;
  color: #0e7490;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 12px;
`;

const MutedSub = styled.div`
  font-size: 10px;
  color: #64748b;
  margin-top: 2px;
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

const SelectAllInput = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: #0e7490;
`;

export default User;
