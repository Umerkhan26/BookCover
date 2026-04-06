import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getBlogPosts } from "../../apis/apis";
import { Helmet } from "react-helmet-async";
import { theme } from "../../theme";
import blogCover from "../../assets/blogs/blogCover.webp";

const BlogBanner = styled.section`
  position: relative;
  width: 100%;
  max-height: 480px;
  overflow: hidden;
  margin-top: 85px;

  @media (max-width: 768px) {
    margin-top: 75px;
    max-height: 300px;
  }

  @media (max-width: 480px) {
    margin-top: 70px;
    max-height: 200px;
  }
`;

const BannerImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.1) 100%
    );
    z-index: 1;
  }
`;

const BannerContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  max-width: 1200px;
  padding: 20px 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 2;
  pointer-events: none;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding: 15px 10px;
  }

  @media (max-width: 480px) {
    padding: 10px 5px;
    text-align: center;
    align-items: center;
    width: 95%;
  }
`;

const BannerTitle = styled.h1`
  font-weight: 800;
  color: #ffffff;
  text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4), 0px 2px 4px rgba(0, 0, 0, 0.3);
  font-size: 64px;
  line-height: 70px;
  text-transform: uppercase;
  margin-bottom: 16px;
  white-space: pre-line;
  letter-spacing: 2px;
  font-family: "Manrope", sans-serif;

  span {
    color: #00bcd4;
    text-shadow: 0px 4px 8px rgba(0, 188, 212, 0.5), 0px 2px 4px rgba(0, 0, 0, 0.3);
    font-weight: 900;
    letter-spacing: 3px;
  }

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    line-height: 2.8rem;
    letter-spacing: 1.5px;
  }

  @media (max-width: 820px) {
    font-size: 2.2rem;
    line-height: 2.4rem;
    letter-spacing: 1px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 2.2rem;
    letter-spacing: 1px;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    line-height: 1.8rem;
    white-space: nowrap;
    letter-spacing: 0.5px;
  }
`;

const BannerSubtitle = styled.p`
  color: #fff;
  font-size: 17.5px;
  font-weight: 400;
  margin-bottom: 0;

  span {
    font-weight: 800;
    font-family: "Manrope", sans-serif;
    color: #fff;
  }

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 4px;
    line-height: 1.2;
  }
`;

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px 80px;
  font-family: ${theme.fonts.main};
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 40px 20px 60px;
  }
`;

const SearchContainer = styled.div`
  margin-bottom: 40px;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: block;
  padding: 14px 50px 14px 20px;
  font-size: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;
  font-family: ${theme.fonts.main};
  color: #333;

  &:focus {
    border-color: ${theme.colors.secondary};
    box-shadow: 0 0 0 3px rgba(26, 135, 151, 0.1);
  }

  &::placeholder {
    color: #999;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 12px 45px 12px 18px;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  right: calc(50% - 280px);
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-size: 20px;
  pointer-events: none;

  @media (max-width: 768px) {
    right: calc(50% - 150px);
    font-size: 18px;
  }

  @media (max-width: 600px) {
    right: 20px;
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: calc(50% - 280px);
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #999;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.primary};
  }

  @media (max-width: 768px) {
    right: calc(50% - 150px);
    font-size: 18px;
  }

  @media (max-width: 600px) {
    right: 20px;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const BlogCard = styled(Link)`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  border: 1px solid #f0f0f0;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${theme.colors.gradient2};
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(12, 49, 63, 0.15);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const BlogCardImage = styled.div<{ imageUrl?: string }>`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, ${theme.colors.secondary} 0%, ${theme.colors.primary} 100%);
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.1) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
    pointer-events: none;
  }

  ${BlogCard}:hover &::after {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
`;

const BlogCardContent = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const BlogCardTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.colors.primary};
  margin-bottom: 10px;
  line-height: 1.4;
  transition: color 0.3s ease;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${BlogCard}:hover & {
    color: ${theme.colors.secondary};
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const BlogCardExcerpt = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 16px;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const BlogCardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #999;
  padding-top: 16px;
  border-top: 1px solid #f0f0f0;
  margin-top: auto;
`;

const BlogCardDate = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: "📅";
    font-size: 12px;
  }
`;

const BlogCardAuthor = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${theme.colors.secondary};
  font-weight: 500;

  &::before {
    content: "✍️";
    font-size: 12px;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 100px 20px;
`;

const EmptyStateText = styled.p`
  font-size: 20px;
  color: #666;
  margin-bottom: 20px;
`;

const LoadingState = styled.div`
  text-align: center;
  padding: 100px 20px;
  font-size: 18px;
  color: #666;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 60px;
  flex-wrap: wrap;
`;

const PaginationButton = styled.button<{ active?: boolean }>`
  padding: 12px 20px;
  border: 2px solid ${(props) => (props.active ? theme.colors.secondary : "#e0e0e0")};
  background: ${(props) => (props.active ? theme.colors.secondary : "#fff")};
  color: ${(props) => (props.active ? "#fff" : theme.colors.primary)};
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.3s ease;
  font-family: ${theme.fonts.main};

  &:hover:not(:disabled) {
    background: ${theme.colors.secondary};
    color: #fff;
    border-color: ${theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(26, 135, 151, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  featuredImage?: string;
  featured_image?: string;
  thumbnail?: string;
  coverImage?: string;
  cover_image?: string;
  content?: any[];
  author: {
    firstName: string;
    lastName: string;
  };
  publishedAt?: string;
  createdAt: string;
}

// Helper function to get image URL from post
const getPostImage = (post: BlogPost): string | null => {
  // Prefer dedicated featured media fields first.
  const featuredCandidates = [
    post.featuredImage,
    post.featured_image,
    post.thumbnail,
    post.coverImage,
    post.cover_image,
  ];
  const featured = featuredCandidates.find(
    (img) => typeof img === "string" && img.trim() !== "",
  );
  if (featured) {
    return featured;
  }

  // If no featured image field is available, fallback to the first image block.
  if (post.content && Array.isArray(post.content)) {
    const sortedContent = [...post.content].sort((a, b) => a.order - b.order);
    const imageBlock = sortedContent.find((block) => block.type === "image");
    if (imageBlock && imageBlock.data && imageBlock.data.url) {
      return imageBlock.data.url;
    }
  }
  
  return null;
};

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
      setPage(1); // Reset to first page when searching
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    fetchPosts();
  }, [page, debouncedSearch]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await getBlogPosts({
        status: "published",
        search: debouncedSearch || undefined,
        page,
        limit: 9,
        sortBy: "createdAt",
        sortOrder: "desc",
      });
      const rawPosts = response.posts || [];
      const normalizedPosts = rawPosts.map((post: BlogPost) => ({
        ...post,
        featuredImage:
          post.featuredImage ||
          post.featured_image ||
          post.thumbnail ||
          post.coverImage ||
          post.cover_image ||
          "",
      }));
      setPosts(normalizedPosts);
      setTotalPages(response.totalPages || 1);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setDebouncedSearch("");
    setPage(1);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <>
        <BlogBanner>
          <BannerImage>
            <img
              src={blogCover}
              alt="Blog Cover"
              width={1263}
              height={651}
              loading="eager"
            />
            <BannerContent>
              <BannerTitle>
                OUR <span>BLOG</span>
              </BannerTitle>
              <BannerSubtitle>
                Discover insights, tips, and stories about book cover design and
                self-publishing
              </BannerSubtitle>
            </BannerContent>
          </BannerImage>
        </BlogBanner>
        <BlogContainer>
          <LoadingState>Loading blog posts...</LoadingState>
        </BlogContainer>
      </>
    );
  }

  const canonicalUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${window.location.pathname}`
      : "";

  return (
    <>
      <Helmet>
        <title>Blog | Lumeart Studio</title>
        <meta
          name="description"
          content="Read our latest blog posts about book cover design, self-publishing tips, and creative insights."
        />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>
      <BlogBanner>
        <BannerImage>
          <img
            src={blogCover}
            alt="Blog Cover"
            width={1263}
            height={651}
            loading="eager"
          />
          <BannerContent>
            <BannerTitle>
              OUR <span>BLOG</span>
            </BannerTitle>
            <BannerSubtitle>
              Discover insights, tips, and stories about book cover design and
              self-publishing
            </BannerSubtitle>
          </BannerContent>
        </BannerImage>
      </BlogBanner>

      <BlogContainer>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {searchQuery ? (
            <ClearButton onClick={handleClearSearch} title="Clear search">
              ×
            </ClearButton>
          ) : (
            <SearchIcon>🔍</SearchIcon>
          )}
        </SearchContainer>

        {loading ? (
          <LoadingState>Loading blog posts...</LoadingState>
        ) : posts.length === 0 ? (
          <EmptyState>
            <EmptyStateText>
              {debouncedSearch
                ? `No blog posts found for "${debouncedSearch}".`
                : "No blog posts available at the moment."}
            </EmptyStateText>
          </EmptyState>
        ) : (
          <>
            <BlogGrid>
              {posts.map((post) => {
                const imageUrl = getPostImage(post);
                return (
                  <BlogCard key={post._id} to={`/blog/${post.slug}`}>
                    <BlogCardImage imageUrl={imageUrl || undefined}>
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={post.title || "Blog Post"}
                          loading="lazy"
                          onError={(e) => {
                            // Fallback to gradient if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                          }}
                        />
                      ) : null}
                    </BlogCardImage>
                    <BlogCardContent>
                      <BlogCardTitle>{post.title || "Untitled Post"}</BlogCardTitle>
                      {post.excerpt && (
                        <BlogCardExcerpt>{post.excerpt}</BlogCardExcerpt>
                      )}
                      <BlogCardMeta>
                        <BlogCardDate>
                          {formatDate(post.publishedAt || post.createdAt)}
                        </BlogCardDate>
                        <BlogCardAuthor>
                          {post.author?.firstName} {post.author?.lastName}
                        </BlogCardAuthor>
                      </BlogCardMeta>
                    </BlogCardContent>
                  </BlogCard>
                );
              })}
            </BlogGrid>

            {totalPages > 1 && (
              <Pagination>
                <PaginationButton
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                >
                  Previous
                </PaginationButton>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (pageNum) => (
                    <PaginationButton
                      key={pageNum}
                      active={pageNum === page}
                      onClick={() => setPage(pageNum)}
                    >
                      {pageNum}
                    </PaginationButton>
                  )
                )}
                <PaginationButton
                  onClick={() => setPage(page + 1)}
                  disabled={page === totalPages}
                >
                  Next
                </PaginationButton>
              </Pagination>
            )}
          </>
        )}
      </BlogContainer>
    </>
  );
};

export default BlogList;
