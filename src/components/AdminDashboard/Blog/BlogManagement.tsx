import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";
import {
  getBlogPosts,
  deleteBlogPost,
  publishBlogPost,
} from "../../../apis/apis";
import { TableSkeleton } from "../../DashboardLoading/DashboardLoading";
import ConfirmModal from "../../ConfirmModal/ConfirmModal";

const Container = styled.div`
  padding: 20px;
  font-family: "Manrope", sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #000;
`;

const Button = styled.button<{ variant?: "primary" | "secondary" | "danger" }>`
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${(props) => {
    if (props.variant === "danger") return "#e74c3c";
    if (props.variant === "secondary") return "#95a5a6";
    return "#6dc7d1";
  }};
  color: #fff;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.thead`
  background: #6dc7d1;
  color: #fff;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background: #f8f9fa;
  }

  &:hover {
    background: #e9ecef;
  }
`;

const TableHeaderCell = styled.th`
  padding: 16px;
  text-align: left;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
`;

const TableCell = styled.td`
  padding: 16px;
  font-size: 14px;
  color: #333;
`;

const StatusBadge = styled.span<{ status: string }>`
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  background: ${(props) => {
    if (props.status === "published") return "#27ae60";
    if (props.status === "draft") return "#f39c12";
    return "#95a5a6";
  }};
  color: #fff;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const ActionButton = styled.button<{ variant?: "edit" | "delete" | "publish" }>`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${(props) => {
    if (props.variant === "delete") return "#e74c3c";
    if (props.variant === "publish") return "#27ae60";
    return "#3498db";
  }};
  color: #fff;

  &:hover {
    opacity: 0.9;
  }
`;


const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #666;
`;

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  status: "draft" | "published" | "archived";
  author: {
    firstName: string;
    lastName: string;
  };
  createdAt: string;
  publishedAt?: string;
}

const BlogManagement: React.FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteModal, setDeleteModal] = useState<{ postId: string } | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await getBlogPosts({
        page: 1,
        limit: 100,
        sortBy: "createdAt",
        sortOrder: "desc",
      });
      setPosts(response.posts || []);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateNew = () => {
    navigate("/admin/blog/new");
  };

  const handleEdit = (postId: string) => {
    navigate(`/admin/blog/edit/${postId}`);
  };

  const handleDeleteClick = (postId: string) => {
    setDeleteModal({ postId });
  };

  const handleDeleteConfirm = async () => {
    if (!deleteModal) return;
    try {
      await deleteBlogPost(deleteModal.postId);
      setDeleteModal(null);
      fetchPosts();
      toast.success("Post deleted successfully");
    } catch (error) {
      console.error("Error deleting post:", error);
      toast.error("Failed to delete post");
    }
  };

  const handlePublish = async (postId: string, currentStatus: string) => {
    try {
      const newStatus =
        currentStatus === "published" ? "draft" : "published";
      await publishBlogPost(postId, newStatus);
      fetchPosts();
      toast.success(
        newStatus === "published" ? "Post published" : "Post unpublished",
      );
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update post status");
    }
  };


  if (loading) {
    return (
      <Container>
        <Header>
          <TitleSkeleton />
          <div style={{ width: 160 }} />
        </Header>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Title</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Author</TableHeaderCell>
              <TableHeaderCell>Created</TableHeaderCell>
              <TableHeaderCell>Actions</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <tbody>
            <tr>
              <td colSpan={5} style={{ padding: 0, border: 0 }}>
                <TableSkeleton rows={8} />
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }

  return (
    <Container>
      <ConfirmModal
        open={!!deleteModal}
        title="Delete post"
        message="Are you sure you want to delete this post? This cannot be undone."
        confirmLabel="Delete"
        cancelLabel="Cancel"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteModal(null)}
      />
      <Header>
        <Title>Blog Management</Title>
        <Button onClick={handleCreateNew}>+ Create New Post</Button>
      </Header>

      {posts.length === 0 ? (
        <EmptyState>
          <p>No blog posts yet. Create your first post!</p>
        </EmptyState>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Title</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Author</TableHeaderCell>
              <TableHeaderCell>Created</TableHeaderCell>
              <TableHeaderCell>Actions</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <tbody>
            {posts.map((post) => (
              <TableRow key={post._id}>
                <TableCell>{post.title}</TableCell>
                <TableCell>
                  <StatusBadge status={post.status}>{post.status}</StatusBadge>
                </TableCell>
                <TableCell>
                  {post.author?.firstName} {post.author?.lastName}
                </TableCell>
                <TableCell>
                  {new Date(post.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <ActionButtons>
                    <ActionButton
                      variant="edit"
                      onClick={() => handleEdit(post._id)}
                    >
                      Edit
                    </ActionButton>
                    <ActionButton
                      variant="publish"
                      onClick={() => handlePublish(post._id, post.status)}
                    >
                      {post.status === "published" ? "Unpublish" : "Publish"}
                    </ActionButton>
                    <ActionButton
                      variant="delete"
                      onClick={() => handleDeleteClick(post._id)}
                    >
                      Delete
                    </ActionButton>
                  </ActionButtons>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
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

export default BlogManagement;
