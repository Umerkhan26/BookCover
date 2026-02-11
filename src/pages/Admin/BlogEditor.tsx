import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import GutenbergEditor from "../../components/AdminDashboard/Blog/GutenbergEditor";
import {
  getBlogPostById,
  createBlogPost,
  updateBlogPost,
  getCategories,
} from "../../apis/apis";

const EditorContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f0f0f1;
  font-family: "Manrope", sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
`;

const EditorContent = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const BlogEditor: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
    if (id && id !== "new") {
      fetchPost();
    } else {
      setLoading(false);
    }
  }, [id]);

  const fetchPost = async () => {
    try {
      setLoading(true);
      const response = await getBlogPostById(id!);
      if (response.post) {
        setPost(response.post);
      }
    } catch (error) {
      console.error("Error fetching post:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(response.categories || []);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleSave = async (postData: any) => {
    try {
      if (id && id !== "new") {
        await updateBlogPost(id, postData);
      } else {
        await createBlogPost(postData);
      }
      navigate("/admin/blog");
    } catch (error: any) {
      console.error("Error saving post:", error);
      alert(error.message || "Failed to save post");
    }
  };

  const handleCancel = () => {
    navigate("/admin/blog");
  };

  if (loading) {
    return (
      <EditorContainer>
        <EditorContent
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <div>Loading...</div>
        </EditorContent>
      </EditorContainer>
    );
  }

  return (
    <EditorContainer>
      <EditorContent>
        <GutenbergEditor
          post={post}
          categories={categories}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </EditorContent>
    </EditorContainer>
  );
};

export default BlogEditor;
