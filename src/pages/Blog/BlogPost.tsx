import React, { useState, useEffect, useRef } from "react";
import { useParams, Link, useLocation, Navigate } from "react-router-dom";
import styled from "styled-components";
import { getBlogPostBySlug, getBlogPosts } from "../../apis/apis";
import { BLOG_PREVIEW_STORAGE_KEY } from "../../constants/blogPreviewStorage";
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
  text-shadow:
    0px 4px 8px rgba(0, 0, 0, 0.4),
    0px 2px 4px rgba(0, 0, 0, 0.3);
  font-size: 64px;
  line-height: 70px;
  text-transform: uppercase;
  margin-bottom: 16px;
  white-space: pre-line;
  word-wrap: break-word;
  max-width: 100%;
  letter-spacing: 2px;
  font-family: "Manrope", sans-serif;

  span {
    color: #00bcd4;
    text-shadow:
      0px 4px 8px rgba(0, 188, 212, 0.5),
      0px 2px 4px rgba(0, 0, 0, 0.3);
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
    letter-spacing: 0.5px;
  }
`;

const PreviewBanner = styled.div`
  background: #1e1e1e;
  color: #fff;
  text-align: center;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 600;
  font-family: "Manrope", ${theme.fonts.main};
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
`;

const PostContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  font-family: ${theme.fonts.main};
  min-height: 100vh;
`;

const SECTION_GAP = "28px";

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  margin-top: ${SECTION_GAP};
  padding: 0 20px ${SECTION_GAP};

  @media (max-width: 768px) {
    padding: 0 15px ${SECTION_GAP};
  }
`;

const PostHeader = styled.div`
  margin-bottom: ${SECTION_GAP};
  padding: 0 20px;
`;

const PostTitle = styled.h1<{ alignment?: string }>`
  font-size: 32px;
  font-weight: 800;
  color: ${theme.colors.primary};
  margin-bottom: 0;
  line-height: 1.2;
  scroll-margin-top: 120px;
  text-align: ${(props) => props.alignment || "left"};

  @media (max-width: 768px) {
    font-size: 24px;
    scroll-margin-top: 100px;
  }
`;

const PostFooter = styled.div`
  margin-top: ${SECTION_GAP};
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 13px;
  color: #888;

  @media (max-width: 768px) {
    margin-top: ${SECTION_GAP};
    padding-top: 16px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const PostFooterDate = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "📅";
    font-size: 14px;
  }
`;

const FeaturedImageWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: ${SECTION_GAP};
`;

const FeaturedImage = styled.div<{ imageUrl?: string }>`
  width: 100%;
  height: 500px;
  background: ${(props) =>
    props.imageUrl
      ? `url(${props.imageUrl}) center/cover`
      : `linear-gradient(135deg, ${theme.colors.secondary} 0%, ${theme.colors.primary} 100%)`};
  background-size: cover;
  background-position: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;

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
  }

  @media (max-width: 768px) {
    height: 350px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;

const PostContent = styled.div`
  font-size: 16px;
  line-height: 1.7;
  color: #333;
  margin-bottom: ${SECTION_GAP};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 24px;
    margin-bottom: 12px;
    font-weight: 700;
    color: ${theme.colors.primary};
    scroll-margin-top: 120px;
    position: relative;
    padding-bottom: 8px;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 2px;
      background: ${theme.colors.gradient2};
      border-radius: 2px;
    }

    &[data-alignment="center"]::after {
      left: 50%;
      transform: translateX(-50%);
    }

    &[data-alignment="right"]::after {
      left: auto;
      right: 0;
    }

    @media (max-width: 768px) {
      scroll-margin-top: 100px;
      margin-top: ${SECTION_GAP};
    }
  }

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 28px;
  }

  h3 {
    font-size: 24px;
  }

  h4 {
    font-size: 20px;
  }

  h5 {
    font-size: 18px;
  }

  h6 {
    font-size: 16px;
  }

  p {
    margin-bottom: ${SECTION_GAP};
    color: #444;
    line-height: 1.7;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: ${SECTION_GAP} 0;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    display: block;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: ${SECTION_GAP} 0;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    overflow: hidden;
  }

  table th,
  table td {
    padding: 12px;
    border: 1px solid #e0e0e0;
    text-align: left;
  }

  table th {
    background: ${theme.colors.gradient2};
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 0.5px;
  }

  table td {
    background: #fff;
  }

  table tr:nth-child(even) td {
    background: #f9f9f9;
  }

  ul,
  ol {
    margin: ${SECTION_GAP} 0;
    padding-left: 30px;
  }

  li {
    margin-bottom: 8px;
    line-height: 1.6;
    color: #444;
  }

  blockquote {
    border-left: 4px solid ${theme.colors.secondary};
    padding: 16px 20px;
    margin: ${SECTION_GAP} 0;
    font-style: italic;
    color: #555;
    background: rgba(26, 135, 151, 0.05);
    border-radius: 0 6px 6px 0;
    position: relative;

    &::before {
      content: """;
      position: absolute;
      top: 8px;
      left: 8px;
      font-size: 40px;
      color: ${theme.colors.secondary};
      opacity: 0.2;
      font-family: serif;
    }

    p {
      margin: 0;
      position: relative;
      z-index: 1;
    }
  }

  code {
    background: rgba(12, 49, 63, 0.08);
    padding: 2px 6px;
    border-radius: 4px;
    font-family: "Courier New", monospace;
    font-size: 14px;
    color: ${theme.colors.primary};
  }

  pre {
    background: ${theme.colors.primary};
    color: #fff;
    padding: 16px;
    border-radius: 8px;
    overflow-x: auto;
    margin: ${SECTION_GAP} 0;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

    code {
      background: none;
      padding: 0;
      color: #fff;
    }
  }

  hr {
    border: none;
    height: 2px;
    background: ${theme.colors.gradient2};
    margin: 24px 0;
    border-radius: 2px;
  }
`;

const LoadingState = styled.div`
  text-align: center;
  padding: 100px 20px;
  font-size: 18px;
  color: #666;
`;

const ImageWrapper = styled.div<{ alignment?: string }>`
  text-align: ${(props) => props.alignment || "center"};
  margin: 20px 0;
`;

const ImageCaption = styled.p<{ alignment?: string }>`
  font-style: italic;
  color: #666;
  margin-top: 8px;
  font-size: 13px;
  text-align: ${(props) => props.alignment || "center"};
`;

const TOCSection = styled.div`
  margin-top: ${SECTION_GAP};
  padding: 30px;
  background: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #e0e0e0;

  h3 {
    font-size: 24px;
    font-weight: 700;
    color: ${theme.colors.primary};
    margin-bottom: 20px;
    border-bottom: 2px solid ${theme.colors.secondary};
    padding-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 12px;
    padding-left: 20px;
    position: relative;

    &::before {
      content: "→";
      position: absolute;
      left: 0;
      color: ${theme.colors.secondary};
    }
  }

  a {
    color: ${theme.colors.secondary};
    text-decoration: none;
    font-size: 16px;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${theme.colors.primary};
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
    margin-top: ${SECTION_GAP};

    h3 {
      font-size: 20px;
    }

    a {
      font-size: 14px;
    }
  }
`;

const RecentPostsSection = styled.div`
  margin-top: ${SECTION_GAP};
  padding: 30px;
  background: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #e0e0e0;

  h3 {
    font-size: 24px;
    font-weight: 700;
    color: ${theme.colors.primary};
    margin-bottom: 20px;
    border-bottom: 2px solid ${theme.colors.secondary};
    padding-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 12px;
    padding-left: 20px;
    position: relative;

    &::before {
      content: "→";
      position: absolute;
      left: 0;
      color: ${theme.colors.secondary};
    }
  }

  a {
    color: ${theme.colors.secondary};
    text-decoration: none;
    font-size: 16px;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${theme.colors.primary};
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
    margin-top: ${SECTION_GAP};

    h3 {
      font-size: 20px;
    }

    a {
      font-size: 14px;
    }
  }
`;

const renderContentBlock = (block: any, index: number) => {
  switch (block.type) {
    case "heading":
      const HeadingTag = `h${block.data.level}` as keyof JSX.IntrinsicElements;
      const headingSlug = `heading-${block.id}-${block.data.text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")}`;
      const alignment = block.data.alignment || "left";
      return (
        <HeadingTag
          key={index}
          id={headingSlug}
          data-alignment={alignment}
          style={{
            textAlign: alignment,
            ...block.styles,
          }}
        >
          {block.data.text}
        </HeadingTag>
      );

    case "paragraph":
      return (
        <p
          key={index}
          style={{
            textAlign: block.data.alignment || "left",
            ...block.styles,
          }}
        >
          {block.data.text}
        </p>
      );

    case "image": {
      const alignment = block.data.alignment || "center";
      const size = block.data.size || "large";
      const customW = block.data.customWidth
        ? parseInt(block.data.customWidth, 10)
        : null;
      const widthValue =
        size === "custom" && customW && customW > 0
          ? `${customW}px`
          : size === "full"
            ? "100%"
            : size === "large"
              ? "75%"
              : size === "medium"
                ? "50%"
                : size === "thumbnail"
                  ? "25%"
                  : block.data.width
                    ? `${block.data.width}px`
                    : "100%";
      return (
        <ImageWrapper key={index} alignment={alignment}>
          <img
            src={block.data.url}
            alt={block.data.alt || ""}
            style={{
              maxWidth: widthValue,
              width: widthValue,
              height: block.data.height ? `${block.data.height}px` : "auto",
              display: "block",
              marginLeft:
                alignment === "right"
                  ? "auto"
                  : alignment === "center"
                    ? "auto"
                    : "0",
              marginRight:
                alignment === "left"
                  ? "auto"
                  : alignment === "center"
                    ? "auto"
                    : "0",
              ...block.styles,
            }}
          />
          {block.data.caption && (
            <ImageCaption alignment={alignment}>
              {block.data.caption}
            </ImageCaption>
          )}
        </ImageWrapper>
      );
    }

    case "table":
      return (
        <table key={index} style={block.styles}>
          {block.data.hasHeaderRow && (
            <thead>
              <tr>
                {block.data.headers.map((header: string, i: number) => (
                  <th key={i}>{header}</th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {block.data.rows.map((row: string[], i: number) => (
              <tr key={i}>
                {row.map((cell: string, j: number) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );

    case "html":
      return (
        <div
          key={index}
          dangerouslySetInnerHTML={{ __html: block.data.rawHtml }}
          style={block.styles}
        />
      );

    case "list":
      const ListTag = block.data.ordered ? "ol" : "ul";
      return (
        <ListTag key={index} style={block.styles}>
          {block.data.items.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ListTag>
      );

    case "quote":
      return (
        <blockquote key={index} style={block.styles}>
          <p>{block.data.text}</p>
          {block.data.author && (
            <cite
              style={{
                display: "block",
                marginTop: "12px",
                fontSize: "16px",
                color: theme.colors.secondary,
              }}
            >
              — {block.data.author}
            </cite>
          )}
        </blockquote>
      );

    case "code":
      return (
        <pre key={index} style={block.styles}>
          <code>{block.data.code}</code>
        </pre>
      );

    case "spacer":
      return (
        <div
          key={index}
          style={{ height: `${block.data.height}px`, ...block.styles }}
        />
      );

    case "divider":
      return (
        <hr
          key={index}
          style={{
            borderStyle: block.data.style || "solid",
            borderColor: "#ddd",
            ...block.styles,
          }}
        />
      );

    case "tableOfContents":
      // TOC block will be handled separately - don't render it in content
      return null;

    default:
      return null;
  }
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const isPreview = location.pathname === "/blog/preview";
  const [post, setPost] = useState<any>(null);
  const [recentPosts, setRecentPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPreview) {
      setLoading(true);
      setError(null);
      try {
        const raw = localStorage.getItem(BLOG_PREVIEW_STORAGE_KEY);
        if (!raw) {
          setError(
            "No preview data. Use Preview in the admin blog editor, then try again.",
          );
          setPost(null);
          setLoading(false);
          return;
        }
        const parsed = JSON.parse(raw);
        setPost(parsed);
        setRecentPosts([]);
      } catch {
        setError("Could not read preview data.");
        setPost(null);
      } finally {
        setLoading(false);
      }
      return;
    }
    if (slug) {
      fetchPost();
    }
  }, [slug, isPreview]);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await getBlogPosts({
          status: "published",
          limit: 6,
          sortBy: "createdAt",
          sortOrder: "desc",
        });
        const posts = response.posts || [];
        const filtered = posts.filter((p: any) => p.slug && p.slug !== slug);
        setRecentPosts(filtered.slice(0, 5));
      } catch {
        setRecentPosts([]);
      }
    };
    if (post?.slug && !isPreview) fetchRecentPosts();
  }, [post?.slug, slug, isPreview]);

  useEffect(() => {
    // Scroll to top when post loads
    if (post && containerRef.current) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [post]);

  const fetchPost = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getBlogPostBySlug(slug!);
      if (!response?.post) {
        setPost(null);
        setError("not_found");
        return;
      }
      setPost(response.post);
    } catch (err: any) {
      setError(err.message || "Failed to load blog post");
      setPost(null);
    } finally {
      setLoading(false);
    }
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
              <BannerTitle>Loading...</BannerTitle>
            </BannerContent>
          </BannerImage>
        </BlogBanner>
        <PostContainer>
          <LoadingState>Loading blog post...</LoadingState>
        </PostContainer>
      </>
    );
  }

  if (error || !post) {
    return <Navigate to="/" replace />;
  }

  // Sort content blocks by order
  const sortedContent = [...(post.content || [])].sort(
    (a, b) => a.order - b.order,
  );

  // Extract title alignment from postMetadata block (stored in content for persistence)
  const metadataBlock = sortedContent.find(
    (block: any) => block.type === "postMetadata",
  );
  const titleAlignment =
    metadataBlock?.data?.titleAlignment ||
    post.titleAlignment ||
    post.seoMeta?.titleAlignment ||
    "left";

  // Check if there's a TOC block
  const tocBlock = sortedContent.find(
    (block: any) => block.type === "tableOfContents",
  );
  const hasTOC = !!tocBlock;
  const tocHeadings =
    tocBlock?.data?.headings || tocBlock?.data?.selectedHeadings || [];

  // Filter out TOC and postMetadata blocks from content (TOC rendered in sidebar, postMetadata is hidden)
  const contentWithoutTOC = sortedContent.filter(
    (block: any) =>
      block.type !== "tableOfContents" && block.type !== "postMetadata",
  );

  // Find all actual heading blocks in the content
  const actualHeadings = contentWithoutTOC
    .filter(
      (block: any) =>
        block.type === "heading" && block.data.text && block.data.text.trim(),
    )
    .map((block: any) => {
      const headingSlug = `heading-${block.id}-${block.data.text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")}`;
      return {
        block,
        text: block.data.text.trim(),
        slug: headingSlug,
        level: block.data.level || 2,
      };
    });

  // Match TOC headings to actual headings in content by text
  const matchedTOCHeadings = tocHeadings.map((tocHeading: any) => {
    const tocText = (tocHeading.text || "").trim();
    // Try to find exact match first
    let matchedHeading = actualHeadings.find(
      (h) => h.text.toLowerCase() === tocText.toLowerCase(),
    );
    // If no exact match, try partial match
    if (!matchedHeading) {
      matchedHeading = actualHeadings.find(
        (h) =>
          h.text.toLowerCase().includes(tocText.toLowerCase()) ||
          tocText.toLowerCase().includes(h.text.toLowerCase()),
      );
    }
    return {
      ...tocHeading,
      matchedHeading,
      slug: matchedHeading ? matchedHeading.slug : null,
    };
  });

  // Format title for banner (uppercase, split into lines if needed)
  const formatBannerTitle = (title: string) => {
    const words = title.split(" ");
    if (words.length <= 4) {
      return title.toUpperCase();
    }
    // Split long titles into two lines
    const mid = Math.ceil(words.length / 2);
    return (
      words.slice(0, mid).join(" ").toUpperCase() +
      "\n" +
      words.slice(mid).join(" ").toUpperCase()
    );
  };

  return (
    <>
      {isPreview && (
        <PreviewBanner>
          Draft preview — this is how the post will look. It is not published
          until you save in the editor.
        </PreviewBanner>
      )}
      <Helmet>
        <title>
          {isPreview ? "Preview: " : ""}
          {post.seoMeta?.metaTitle || post.title || "Untitled Post"} | Lumeart
          Studio
        </title>
        <meta
          name="description"
          content={post.seoMeta?.metaDescription || post.excerpt || ""}
        />
        {post.seoMeta?.keywords && (
          <meta name="keywords" content={post.seoMeta.keywords.join(", ")} />
        )}
        {post.seoMeta?.canonicalUrl && (
          <link rel="canonical" href={post.seoMeta.canonicalUrl} />
        )}
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
              {formatBannerTitle(post.title || "Untitled Post")}
            </BannerTitle>
          </BannerContent>
        </BannerImage>
      </BlogBanner>

      <PostContainer ref={containerRef}>
        {/* Featured Image Always First */}
        {post.featuredImage && (
          <FeaturedImageWrapper>
            <FeaturedImage imageUrl={post.featuredImage} />
          </FeaturedImageWrapper>
        )}

        <ContentWrapper>
          {/* Post Header - Title Only */}
          <PostHeader>
            <PostTitle alignment={titleAlignment}>
              {post.title || "Untitled Post"}
            </PostTitle>
          </PostHeader>

          {/* Main Content */}
          <PostContent>
            {/* Render all content blocks (TOC block will be rendered at the end) */}
            {contentWithoutTOC.map((block: any, index: number) =>
              renderContentBlock(block, index),
            )}
          </PostContent>

          {/* Table of Contents at the End */}
          {hasTOC && matchedTOCHeadings.length > 0 && (
            <TOCSection>
              <h3>{tocBlock?.data?.title || "Table of Contents"}</h3>
              <ul>
                {matchedTOCHeadings.map((heading: any, idx: number) => {
                  const headingSlug = heading.slug;
                  return (
                    <li key={heading.id}>
                      <a
                        href={headingSlug ? `#${headingSlug}` : "#"}
                        onClick={(e: React.MouseEvent) => {
                          e.preventDefault();
                          if (headingSlug) {
                            const element =
                              document.getElementById(headingSlug);
                            if (element) {
                              element.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            }
                          }
                        }}
                        style={{
                          color: headingSlug ? theme.colors.secondary : "#999",
                          cursor: headingSlug ? "pointer" : "default",
                        }}
                      >
                        {tocBlock?.data?.showNumbers ? `${idx + 1}. ` : ""}
                        {heading.text || "Untitled Heading"}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </TOCSection>
          )}

          {/* Recent Posts */}
          {recentPosts.length > 0 && (
            <RecentPostsSection>
              <h3>Recent Posts</h3>
              <ul>
                {recentPosts.map((recentPost: any) => (
                  <li key={recentPost._id}>
                    <Link to={`/blog/${recentPost.slug}`}>
                      {recentPost.title || "Untitled Post"}
                    </Link>
                  </li>
                ))}
              </ul>
            </RecentPostsSection>
          )}

          {/* Post Footer with Date */}
          <PostFooter>
            <PostFooterDate>
              {formatDate(post.publishedAt || post.createdAt)}
            </PostFooterDate>
          </PostFooter>
        </ContentWrapper>
      </PostContainer>
    </>
  );
};

export default BlogPost;
