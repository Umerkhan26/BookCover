import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import {
  FaParagraph,
  FaHeading,
  FaList,
  FaQuoteLeft,
  FaCode,
  FaTable,
  FaImage,
  FaImages,
  FaSave,
  FaEye,
  FaTimes,
  FaBars,
  FaListOl,
} from "react-icons/fa";
import { uploadBlogImage } from "../../../apis/apis";
import { BLOG_PREVIEW_STORAGE_KEY } from "../../../constants/blogPreviewStorage";
import { buildPublicPostUrl } from "../../../utils/blogPermalink";
import PermalinkModal from "./PermalinkModal";

// Main Container - Three Panel Layout
const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f0f0f1;
  font-family: "Manrope", sans-serif;
`;

// Top Toolbar
const TopToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: #1e1e1e;
  color: #fff;
  height: 56px;
  z-index: 100;
`;

const ToolbarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ToolbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ToolbarButton = styled.button<{ primary?: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border: none;
  background: ${(props) => (props.primary ? "#2271b1" : "transparent")};
  color: #fff;
  border-radius: 2px;
  cursor: pointer;
  font-size: 13px;
  transition: background 0.2s;

  &:hover {
    background: ${(props) =>
      props.primary ? "#135e96" : "rgba(255,255,255,0.1)"};
  }
`;

const SaveStatus = styled.span`
  color: #00a32a;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

// Main Content Area
const MainContent = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

// Left Sidebar - Block Library
const LeftSidebar = styled.div<{ isOpen: boolean }>`
  width: ${(props) => (props.isOpen ? "280px" : "0")};
  background: #fff;
  border-right: 1px solid #ddd;
  transition: width 0.3s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const SidebarHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid #ddd;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 2px;
  font-size: 13px;

  &:focus {
    outline: none;
    border-color: #2271b1;
  }
`;

const SidebarTabs = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
`;

const Tab = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 12px;
  border: none;
  background: ${(props) => (props.active ? "#fff" : "#f6f7f7")};
  border-bottom: ${(props) =>
    props.active ? "2px solid #2271b1" : "2px solid transparent"};
  cursor: pointer;
  font-size: 13px;
  font-weight: ${(props) => (props.active ? "600" : "400")};
  color: ${(props) => (props.active ? "#1e1e1e" : "#50575e")};
`;

const BlockCategories = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;
`;

const CategorySection = styled.div`
  margin-bottom: 24px;
`;

const CategoryTitle = styled.div`
  padding: 8px 16px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  color: #50575e;
  letter-spacing: 0.5px;
`;

const BlockList = styled.div`
  padding: 4px 8px;
`;

const BlockItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 2px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #f0f0f1;
  }
`;

const BlockIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #50575e;
`;

const BlockName = styled.span`
  font-size: 13px;
  color: #1e1e1e;
`;

// Center Canvas
const CenterCanvas = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #fff;
  overflow-y: auto;
`;

const CanvasContent = styled.div`
  max-width: 840px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 56px;
`;

const TitleInput = styled.input`
  width: 100%;
  border: none;
  font-size: 32px;
  font-weight: 600;
  padding: 8px 0;
  margin-bottom: 20px;
  color: #1e1e1e;
  background: transparent;
  font-family: "Manrope", sans-serif;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #757575;
  }
`;

const BlockPlaceholder = styled.div`
  padding: 40px 0;
  text-align: center;
  color: #757575;
  font-size: 14px;
`;

const ContentBlock = styled.div<{ isSelected: boolean; isDragging: boolean }>`
  position: relative;
  margin: 4px 0;
  padding: 8px;
  border: ${(props) =>
    props.isSelected ? "2px solid #2271b1" : "2px solid transparent"};
  border-radius: 2px;
  background: ${(props) => (props.isDragging ? "#f0f0f1" : "transparent")};
  transition: all 0.2s;

  &:hover {
    border-color: ${(props) => (props.isSelected ? "#2271b1" : "#ddd")};
  }
`;

const LevelBadge = styled.div`
  position: absolute;
  top: -10px;
  right: 8px;
  background: #2271b1;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 10px;
`;

const BlockToolbar = styled.div<{ hidden?: boolean }>`
  position: absolute;
  top: -32px;
  left: 0;
  display: flex;
  gap: 4px;
  background: #1e1e1e;
  padding: 4px;
  border-radius: 2px;
  opacity: ${(props) => (props.hidden ? 0 : 1)};
  transition: opacity 0.2s;
  pointer-events: ${(props) => (props.hidden ? "none" : "auto")};
`;

const BlockToolbarButton = styled.button`
  padding: 4px 8px;
  border: none;
  background: transparent;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  border-radius: 2px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const BlockContent = styled.div`
  min-height: 40px;
  color: #1e1e1e;
`;

const EditableHeading = styled.div<{ level: number }>`
  width: 100%;
  border: none;
  background: transparent;
  direction: ltr;
  unicode-bidi: plaintext;
  font-size: ${(props) => {
    const sizes = {
      1: "2em",
      2: "1.5em",
      3: "1.17em",
      4: "1em",
      5: "0.83em",
      6: "0.67em",
    };
    return sizes[props.level as keyof typeof sizes] || "1.5em";
  }};
  font-weight: 600;
  color: #1e1e1e;
  padding: 4px 0;
  margin: 0;
  outline: none;
  min-height: 1.2em;

  &:empty:before {
    content: attr(data-placeholder);
    color: #757575;
  }
`;

const EditableParagraph = styled.textarea`
  width: 100%;
  border: none;
  background: transparent;
  font-size: 16px;
  line-height: 1.6;
  color: #1e1e1e;
  padding: 4px 0;
  margin: 0;
  resize: none;
  min-height: 24px;
  font-family: "Manrope", sans-serif;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #757575;
  }
`;

const EditableQuote = styled.textarea`
  width: 100%;
  border: none;
  background: transparent;
  font-size: 16px;
  line-height: 1.6;
  color: #1e1e1e;
  padding: 4px 0;
  margin: 0;
  resize: none;
  min-height: 60px;
  font-style: italic;
  border-left: 4px solid #2271b1;
  padding-left: 16px;
  font-family: "Manrope", sans-serif;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #757575;
  }
`;

const EditableCode = styled.textarea`
  width: 100%;
  border: none;
  background: #f0f0f1;
  font-size: 14px;
  line-height: 1.6;
  color: #1e1e1e;
  padding: 12px;
  margin: 0;
  resize: vertical;
  min-height: 100px;
  font-family: "Courier New", monospace;
  border-radius: 2px;

  &:focus {
    outline: 2px solid #2271b1;
  }

  &::placeholder {
    color: #757575;
  }
`;

const EditableList = styled.div`
  color: #1e1e1e;
`;

const ListItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 8px;
`;

const ListBullet = styled.span`
  color: #1e1e1e;
  margin-top: 4px;
`;

const EditableListItem = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 16px;
  color: #1e1e1e;
  padding: 0;
  font-family: "Manrope", sans-serif;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #757575;
  }
`;

const ListItemRemoveBtn = styled.button`
  flex-shrink: 0;
  align-self: center;
  border: none;
  background: transparent;
  color: #b32d2e;
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
  padding: 2px 8px;
  border-radius: 4px;
  font-family: "Manrope", sans-serif;

  &:hover {
    background: #fce8e8;
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;

const ImageDropZone = styled.div<{ isDraggingOver?: boolean }>`
  border: 2px dashed ${(props) => (props.isDraggingOver ? "#2271b1" : "#ddd")};
  background: ${(props) => (props.isDraggingOver ? "#e8f4ff" : "#f6f7f7")};
  border-radius: 2px;
  padding: 18px;
  text-align: center;
  color: #1e1e1e;
  cursor: pointer;
  transition: all 0.2s;
`;

const SmallHelp = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: #50575e;
`;

const InlineSpinner = styled.div`
  font-size: 12px;
  color: #2271b1;
  margin-top: 8px;
`;

const TOCContainer = styled.div`
  padding: 20px;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  color: #1e1e1e;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: #c0c0c0;
  }
`;

const EditableTOCTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #1e1e1e;
  outline: none;
  min-height: 1.2em;
  cursor: text;
  direction: ltr;
  unicode-bidi: plaintext;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid #e0e0e0;

  &:empty:before {
    content: attr(data-placeholder);
    color: #999;
    font-weight: 400;
  }

  &:focus {
    outline: 2px dashed #2271b1;
    outline-offset: 4px;
    border-radius: 4px;
  }
`;

const TOCList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;

    &:hover {
      background: #555;
    }
  }
`;

const TOCItem = styled.li<{ level: number }>`
  margin: 8px 0;
  padding: 8px 12px;
  font-size: ${(props) => {
    const sizes: { [key: number]: string } = {
      1: "16px",
      2: "15px",
      3: "14px",
      4: "13px",
      5: "12px",
      6: "12px",
    };
    return sizes[props.level] || "14px";
  }};
  font-weight: ${(props) =>
    props.level <= 2 ? "600" : props.level <= 4 ? "500" : "400"};
  color: #1e1e1e;
  background: ${(props) =>
    props.level <= 2 ? "rgba(34, 113, 177, 0.05)" : "transparent"};
  border-left: ${(props) => {
    const colors: { [key: number]: string } = {
      1: "4px solid #2271b1",
      2: "3px solid #4a90e2",
      3: "2px solid #6ba3e8",
      4: "2px solid #8bb5ed",
      5: "1px solid #aac7f2",
      6: "1px solid #c0d4f7",
    };
    return colors[props.level] || "2px solid #e0e0e0";
  }};
  border-radius: 4px;
  transition: all 0.2s ease;
  padding-left: ${(props) => {
    const padding: { [key: number]: string } = {
      1: "16px",
      2: "20px",
      3: "24px",
      4: "28px",
      5: "32px",
      6: "36px",
    };
    return padding[props.level] || "20px";
  }};

  &:hover {
    background: rgba(34, 113, 177, 0.1);
    transform: translateX(4px);
  }
`;

const EditableTOCHeading = styled.span<{ level: number }>`
  color: #1e1e1e;
  text-decoration: none;
  cursor: text;
  display: inline-block;
  width: 100%;
  outline: none;
  direction: ltr;
  unicode-bidi: plaintext;
  min-width: 50px;
  padding: 2px 4px;
  border-radius: 3px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(34, 113, 177, 0.1);
  }

  &:focus {
    background-color: rgba(34, 113, 177, 0.15);
    outline: 2px dashed #2271b1;
    outline-offset: 2px;
  }

  &:empty:before {
    content: "Click to edit";
    color: #999;
    font-style: italic;
  }
`;

const TOCNumber = styled.span`
  color: #2271b1;
  font-weight: 600;
  margin-right: 8px;
`;

const AddHeadingButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 12px;
  background: #2271b1;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #135e96;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(34, 113, 177, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const TOCHeadingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  padding: 8px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  width: 100%;
`;

const TOCLevelSelect = styled.select`
  min-width: 80px;
  padding: 6px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 13px;
  background: #fff;
  color: #1e1e1e;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #2271b1;
  }

  option {
    color: #1e1e1e !important;
    background: #fff !important;
  }
`;

const TOCRemoveButton = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 12px;
  cursor: pointer;
  margin-left: 8px;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

// Right Sidebar - Settings
const RightSidebar = styled.div<{ isOpen: boolean }>`
  width: ${(props) => (props.isOpen ? "280px" : "0")};
  background: #fff;
  border-left: 1px solid #ddd;
  transition: width 0.3s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const SettingsTabs = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
`;

const SettingsContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
`;

const SettingsSection = styled.div`
  margin-bottom: 24px;
`;

const SettingsTitle = styled.h3`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  color: #50575e;
  margin-bottom: 12px;
  letter-spacing: 0.5px;
`;

const SettingField = styled.div`
  margin-bottom: 16px;
`;

const SettingLabel = styled.label`
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #1e1e1e;
  margin-bottom: 6px;
`;

const SettingInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 2px;
  color: black;
  font-size: 13px;

  &:focus {
    outline: none;
    border-color: #2271b1;
  }
`;

const SettingTextarea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 2px;
  color: black;
  font-size: 13px;
  min-height: 80px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #2271b1;
  }
`;

const SettingSelect = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 2px;
  font-size: 13px;
  background: #fff;
  color: #1e1e1e;

  &:focus {
    outline: none;
    border-color: #2271b1;
  }

  option {
    color: #1e1e1e !important;
    background: #fff !important;
    padding: 4px;
  }
`;

// Block Types Configuration
const blockTypes = [
  { type: "heading", label: "Heading", icon: FaHeading, category: "TEXT" },
  {
    type: "paragraph",
    label: "Paragraph",
    icon: FaParagraph,
    category: "TEXT",
  },
  { type: "list", label: "List", icon: FaList, category: "TEXT" },
  { type: "quote", label: "Quote", icon: FaQuoteLeft, category: "TEXT" },
  { type: "code", label: "Code", icon: FaCode, category: "TEXT" },
  { type: "table", label: "Table", icon: FaTable, category: "TEXT" },
  {
    type: "tableOfContents",
    label: "Table of Contents",
    icon: FaListOl,
    category: "TEXT",
  },
  { type: "image", label: "Image", icon: FaImage, category: "MEDIA" },
  { type: "gallery", label: "Gallery", icon: FaImages, category: "MEDIA" },
  { type: "html", label: "HTML", icon: FaCode, category: "TEXT" },
];

interface ContentBlock {
  id: string;
  type: string;
  order: number;
  data: any;
  styles?: any;
}

/** Draft row commits on Enter/blur — avoids creating a new item on every keystroke */
const ListBlockCanvas: React.FC<{
  block: ContentBlock;
  updateBlock: (blockId: string, data: Record<string, unknown>) => void;
}> = ({ block, updateBlock }) => {
  const [newItemDraft, setNewItemDraft] = useState("");

  const commitNewItem = () => {
    const trimmed = newItemDraft.trim();
    if (!trimmed) {
      return;
    }
    updateBlock(block.id, {
      items: [...block.data.items, trimmed],
    });
    setNewItemDraft("");
  };

  return (
    <EditableList>
      {block.data.items.map((item: string, i: number) => (
        <ListItem key={i}>
          <ListBullet>{block.data.ordered ? `${i + 1}.` : "•"}</ListBullet>
          <EditableListItem
            type="text"
            value={item}
            onChange={(e) => {
              const newItems = [...block.data.items];
              newItems[i] = e.target.value;
              updateBlock(block.id, { items: newItems });
            }}
            placeholder="List item"
          />
          <ListItemRemoveBtn
            type="button"
            title="Remove this list item"
            aria-label="Remove this list item"
            onClick={(e) => {
              e.stopPropagation();
              const next = block.data.items.filter(
                (_: string, j: number) => j !== i,
              );
              updateBlock(block.id, {
                items: next.length > 0 ? next : [""],
              });
            }}
          >
            ×
          </ListItemRemoveBtn>
        </ListItem>
      ))}
      <ListItem>
        <ListBullet>
          {block.data.ordered ? `${block.data.items.length + 1}.` : "•"}
        </ListBullet>
        <EditableListItem
          type="text"
          value={newItemDraft}
          onChange={(e) => setNewItemDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              commitNewItem();
            }
          }}
          onBlur={commitNewItem}
          placeholder="Add list item — press Enter when done"
        />
      </ListItem>
    </EditableList>
  );
};

interface GutenbergEditorProps {
  post?: any;
  categories?: any[];
  onSave: (postData: any) => Promise<unknown>;
  onCancel: () => void;
  /** Called after save, when the permalink modal is dismissed (e.g. navigate to list). */
  onAfterSaveNavigate?: () => void;
}

const GutenbergEditor: React.FC<GutenbergEditorProps> = ({
  post,
  // categories = [],
  onSave,
  onCancel,
  onAfterSaveNavigate,
}) => {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);
  const [activeLeftTab, setActiveLeftTab] = useState("Blocks");
  const [activeRightTab, setActiveRightTab] = useState("Post");
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [title, setTitle] = useState(post?.title || "");
  const [titleAlignment, setTitleAlignment] = useState(
    post?.titleAlignment || post?.seoMeta?.titleAlignment || "left",
  );
  const [slug, setSlug] = useState(post?.slug || "");
  const [excerpt, setExcerpt] = useState(post?.excerpt || "");
  const [featuredImage, setFeaturedImage] = useState(post?.featuredImage || "");
  const [status, setStatus] = useState(post?.status || "draft");
  // const [selectedCategories, setSelectedCategories] = useState<string[]>(
  //   post?.categories?.map((c: any) => c._id || c) || [],
  // );
  const [tags, setTags] = useState(post?.tags?.join(", ") || "");
  const [seoMeta, setSeoMeta] = useState(
    post?.seoMeta || {
      metaTitle: "",
      metaDescription: "",
      keywords: [],
      ogImage: "",
      canonicalUrl: "",
    },
  );
  const getVisibleBlocks = (content: ContentBlock[] | undefined) =>
    (content || []).filter((b) => b.type !== "postMetadata");
  const getMetadataFromContent = (content: ContentBlock[] | undefined) =>
    (content || []).find((b) => b.type === "postMetadata");

  const [blocks, setBlocks] = useState<ContentBlock[]>(() =>
    getVisibleBlocks(post?.content),
  );

  const [uploadingBlockId, setUploadingBlockId] = useState<string | null>(null);
  const [uploadingFeatured, setUploadingFeatured] = useState(false);
  const [saveBusy, setSaveBusy] = useState(false);
  const [permalinkModalOpen, setPermalinkModalOpen] = useState(false);
  const [permalinkModalUrl, setPermalinkModalUrl] = useState("");
  const navigateAfterPermalinkClose = React.useRef(false);

  const slugifyTitle = (t: string) =>
    t
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const computeDerivedSlug = () => slug.trim() || slugifyTitle(title);

  /** What we show in the slug field: explicit slug, or live preview from title */
  const slugInputValue = slug.trim() !== "" ? slug : slugifyTitle(title);

  const openPermalinkModal = (url: string, navigateAfterClose: boolean) => {
    navigateAfterPermalinkClose.current = navigateAfterClose;
    setPermalinkModalUrl(url);
    setPermalinkModalOpen(true);
  };

  const closePermalinkModal = () => {
    setPermalinkModalOpen(false);
    setPermalinkModalUrl("");
    if (navigateAfterPermalinkClose.current) {
      navigateAfterPermalinkClose.current = false;
      onAfterSaveNavigate?.();
    }
  };

  useEffect(() => {
    if (!post) return;
    setTitle(post.title || "");
    setSlug(post.slug || "");
    setExcerpt(post.excerpt || "");
    setFeaturedImage(post.featuredImage || "");
    setStatus(post.status || "draft");
    setTags(post.tags?.join(", ") || "");
    setSeoMeta(
      post.seoMeta || {
        metaTitle: "",
        metaDescription: "",
        keywords: [],
        ogImage: "",
        canonicalUrl: "",
      },
    );
  }, [post?._id]);

  useEffect(() => {
    if (post?.content) {
      const meta = getMetadataFromContent(post.content);
      const alignment =
        meta?.data?.titleAlignment ||
        post.titleAlignment ||
        post.seoMeta?.titleAlignment ||
        "left";
      setTitleAlignment(alignment);
      setBlocks(getVisibleBlocks(post.content));
    }
  }, [post]);

  const handleImageUpload = async (blockId: string, file: File) => {
    try {
      setUploadingBlockId(blockId);
      const res = await uploadBlogImage(file);
      updateBlock(blockId, { url: res.url });
    } catch (e: any) {
      // eslint-disable-next-line no-alert
      alert(e?.message || "Failed to upload image");
    } finally {
      setUploadingBlockId(null);
    }
  };

  const handleFeaturedImageUpload = async (file: File) => {
    try {
      setUploadingFeatured(true);
      const res = await uploadBlogImage(file);
      setFeaturedImage(res.url);
    } catch (e: any) {
      // eslint-disable-next-line no-alert
      alert(e?.message || "Failed to upload featured image");
    } finally {
      setUploadingFeatured(false);
    }
  };

  const getDefaultBlockData = (type: string): any => {
    switch (type) {
      case "heading":
        return { level: 2, text: "", alignment: "left" };
      case "paragraph":
        return { text: "", alignment: "left" };
      case "image":
        return {
          url: "",
          alt: "",
          caption: "",
          alignment: "center",
          size: "large",
          customWidth: "",
        };
      case "table":
        return {
          headers: ["Header 1", "Header 2"],
          rows: [["", ""]],
          hasHeaderRow: true,
          style: "default",
        };
      case "html":
        return { rawHtml: "" };
      case "list":
        return { items: [""], ordered: false };
      case "quote":
        return { text: "", author: "" };
      case "code":
        return { code: "", language: "javascript" };
      case "gallery":
        return { images: [], columns: 3 };
      case "tableOfContents":
        return { title: "Table of Contents", headings: [], showNumbers: false };
      default:
        return {};
    }
  };

  const addBlock = (type: string) => {
    const newBlock: ContentBlock = {
      id: `block-${Date.now()}-${Math.random()}`,
      type,
      order: blocks.length,
      data: getDefaultBlockData(type),
      styles: {},
    };
    setBlocks([...blocks, newBlock]);
    setSelectedBlock(newBlock.id);
    setActiveRightTab("Block");
  };

  const removeBlock = (blockId: string) => {
    setBlocks(
      blocks
        .filter((block) => block.id !== blockId)
        .map((block, index) => ({
          ...block,
          order: index,
        })),
    );
    setSelectedBlock(null);
  };

  const updateBlock = (blockId: string, data: any) => {
    setBlocks(
      blocks.map((block) =>
        block.id === blockId
          ? { ...block, data: { ...block.data, ...data } }
          : block,
      ),
    );
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(blocks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    const reorderedBlocks = items.map((block, index) => ({
      ...block,
      order: index,
    }));

    setBlocks(reorderedBlocks);
  };

  const handleSave = async () => {
    // Do not send postMetadata block — backend content type enum doesn't include it.
    // titleAlignment is sent at top level and in seoMeta instead.
    const contentToSave = blocks.map((b, i) => ({ ...b, order: i }));
    const postData = {
      title,
      titleAlignment,
      slug: computeDerivedSlug(),
      excerpt,
      featuredImage,
      status,
      // categories: selectedCategories,
      tags: tags
        .split(",")
        .map((tag: string) => tag.trim())
        .filter((tag: string) => tag),
      seoMeta: { ...seoMeta, titleAlignment },
      content: contentToSave,
    };

    try {
      setSaveBusy(true);
      const res: any = await onSave(postData);
      const savedSlug = res?.post?.slug ?? postData.slug;
      const builtUrl = buildPublicPostUrl(String(savedSlug ?? ""));
      const url =
        builtUrl ||
        (typeof res?.post?.permalink === "string" ? res.post.permalink : "");
      openPermalinkModal(url, true);
    } catch (e: any) {
      // eslint-disable-next-line no-alert
      alert(
        typeof e === "string" ? e : e?.message || "Failed to save post",
      );
    } finally {
      setSaveBusy(false);
    }
  };

  const buildPostPayloadForPreview = () => {
    const contentToSave = blocks.map((b, i) => ({ ...b, order: i }));
    return {
      title,
      titleAlignment,
      slug: computeDerivedSlug() || "preview",
      excerpt,
      featuredImage,
      status,
      tags: tags
        .split(",")
        .map((tag: string) => tag.trim())
        .filter((tag: string) => tag),
      seoMeta: { ...seoMeta, titleAlignment },
      content: contentToSave,
      createdAt: new Date().toISOString(),
      publishedAt: null,
    };
  };

  const handlePreview = () => {
    try {
      const payload = buildPostPayloadForPreview();
      localStorage.setItem(BLOG_PREVIEW_STORAGE_KEY, JSON.stringify(payload));
      const url = `${window.location.origin}/blog/preview`;
      window.open(url, "_blank", "noopener,noreferrer");
    } catch (e) {
      console.error(e);
      window.alert(
        "Could not save preview data. Check that storage is allowed.",
      );
    }
  };

  const filteredBlocks = blockTypes.filter((block) =>
    block.label.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const textBlocks = filteredBlocks.filter((b) => b.category === "TEXT");
  const mediaBlocks = filteredBlocks.filter((b) => b.category === "MEDIA");

  const renderBlockContent = (block: ContentBlock) => {
    switch (block.type) {
      case "heading":
        return (
          <EditableHeading
            as={`h${Number(block.data.level) || 2}` as any}
            level={Number(block.data.level) || 2}
            contentEditable
            suppressContentEditableWarning
            dir="ltr"
            data-placeholder={`Heading (H${Number(block.data.level) || 2})`}
            onInput={(e: React.FormEvent<HTMLDivElement>) =>
              updateBlock(block.id, {
                text: (e.currentTarget.textContent || "").trimEnd(),
              })
            }
            style={{ textAlign: block.data.alignment || "left" }}
          >
            {block.data.text || ""}
          </EditableHeading>
        );
      case "paragraph":
        return (
          <EditableParagraph
            value={block.data.text}
            onChange={(e) => updateBlock(block.id, { text: e.target.value })}
            placeholder="Start writing..."
            style={{ textAlign: block.data.alignment || "left" }}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = "auto";
              target.style.height = target.scrollHeight + "px";
            }}
          />
        );
      case "image":
        return block.data.url ? (
          (() => {
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
                        : "100%";
            return (
              <div
                style={{
                  textAlign: alignment,
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
              >
                <img
                  src={block.data.url}
                  alt={block.data.alt}
                  style={{
                    maxWidth: widthValue,
                    width: widthValue,
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
                  }}
                />
                {block.data.caption && (
                  <p
                    style={{
                      marginTop: "8px",
                      fontSize: "14px",
                      color: "#50575e",
                      fontStyle: "italic",
                      textAlign: alignment,
                    }}
                  >
                    {block.data.caption}
                  </p>
                )}
              </div>
            );
          })()
        ) : (
          <ImageDropZone
            isDraggingOver={uploadingBlockId === block.id}
            onClick={() => {
              const input = document.getElementById(
                `img-input-${block.id}`,
              ) as HTMLInputElement | null;
              input?.click();
            }}
            onDragOver={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onDrop={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const file = e.dataTransfer.files?.[0];
              if (file) handleImageUpload(block.id, file);
            }}
          >
            <div style={{ fontWeight: 600 }}>Drop an image here</div>
            <SmallHelp>or click to upload</SmallHelp>
            {uploadingBlockId === block.id && (
              <InlineSpinner>Uploading…</InlineSpinner>
            )}
            <input
              id={`img-input-${block.id}`}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleImageUpload(block.id, file);
              }}
            />
          </ImageDropZone>
        );
      case "table":
        return (
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                color: "#1e1e1e",
              }}
            >
              {block.data.hasHeaderRow && (
                <thead>
                  <tr>
                    {block.data.headers.map((header: string, i: number) => (
                      <th
                        key={i}
                        style={{
                          border: "1px solid #ddd",
                          padding: "8px",
                          backgroundColor: "#f6f7f7",
                          fontWeight: 600,
                          color: "#1e1e1e",
                        }}
                      >
                        <input
                          type="text"
                          value={header}
                          onChange={(e) => {
                            const newHeaders = [...block.data.headers];
                            newHeaders[i] = e.target.value;
                            updateBlock(block.id, { headers: newHeaders });
                          }}
                          style={{
                            border: "none",
                            background: "transparent",
                            width: "100%",
                            color: "#1e1e1e",
                            fontWeight: 600,
                          }}
                          placeholder="Header"
                        />
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody>
                {block.data.rows.map((row: string[], i: number) => (
                  <tr key={i}>
                    {row.map((cell: string, j: number) => (
                      <td
                        key={j}
                        style={{
                          border: "1px solid #ddd",
                          padding: "8px",
                          color: "#1e1e1e",
                        }}
                      >
                        <input
                          type="text"
                          value={cell}
                          onChange={(e) => {
                            const newRows = [...block.data.rows];
                            newRows[i][j] = e.target.value;
                            updateBlock(block.id, { rows: newRows });
                          }}
                          style={{
                            border: "none",
                            background: "transparent",
                            width: "100%",
                            color: "#1e1e1e",
                          }}
                          placeholder="Cell"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "list":
        return <ListBlockCanvas block={block} updateBlock={updateBlock} />;
      case "quote":
        return (
          <div>
            <EditableQuote
              value={block.data.text}
              onChange={(e) => updateBlock(block.id, { text: e.target.value })}
              placeholder="Quote text"
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "auto";
                target.style.height = target.scrollHeight + "px";
              }}
            />
            {block.data.author && (
              <input
                type="text"
                value={block.data.author}
                onChange={(e) =>
                  updateBlock(block.id, { author: e.target.value })
                }
                placeholder="Author (optional)"
                style={{
                  marginTop: "8px",
                  border: "none",
                  background: "transparent",
                  fontSize: "14px",
                  color: "#757575",
                  fontStyle: "italic",
                  width: "100%",
                }}
              />
            )}
          </div>
        );
      case "code":
        return (
          <EditableCode
            value={block.data.code}
            onChange={(e) => updateBlock(block.id, { code: e.target.value })}
            placeholder="// Code here"
          />
        );
      case "html":
        return (
          <EditableCode
            value={block.data.rawHtml}
            onChange={(e) => updateBlock(block.id, { rawHtml: e.target.value })}
            placeholder="<!-- HTML here -->"
          />
        );
      case "tableOfContents": {
        const headings = block.data.headings || [];

        const addHeading = () => {
          const newHeading = {
            id: `toc-heading-${Date.now()}-${Math.random()}`,
            level: 2,
            text: "New Heading",
          };
          const currentData = block.data || {};
          updateBlock(block.id, {
            ...currentData,
            headings: [...headings, newHeading],
          });
        };

        const updateHeading = (
          headingId: string,
          updates: { level?: number; text?: string },
        ) => {
          const currentData = block.data || {};
          const updatedHeadings = headings.map((h: any) =>
            h.id === headingId ? { ...h, ...updates } : h,
          );
          updateBlock(block.id, {
            ...currentData,
            headings: updatedHeadings,
          });
        };

        const removeHeading = (headingId: string) => {
          const currentData = block.data || {};
          updateBlock(block.id, {
            ...currentData,
            headings: headings.filter((h: any) => h.id !== headingId),
          });
        };

        return (
          <TOCContainer>
            <EditableTOCTitle
              contentEditable
              suppressContentEditableWarning
              onInput={(e: React.FormEvent<HTMLDivElement>) =>
                updateBlock(block.id, {
                  title: (e.currentTarget.textContent || "").trim(),
                })
              }
              data-placeholder="Table of Contents"
              style={{ marginBottom: "16px" }}
            >
              {block.data.title || ""}
            </EditableTOCTitle>

            {headings.length > 0 && (
              <TOCList>
                {headings.map((heading: any, idx: number) => (
                  <TOCItem key={heading.id} level={heading.level}>
                    {block.data.showNumbers && (
                      <TOCNumber>{idx + 1}.</TOCNumber>
                    )}
                    <TOCHeadingRow>
                      <TOCLevelSelect
                        value={heading.level || 2}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                          updateHeading(heading.id, {
                            level: parseInt(e.target.value),
                          })
                        }
                      >
                        {[1, 2, 3, 4, 5, 6].map((level) => (
                          <option key={level} value={level}>
                            H{level}
                          </option>
                        ))}
                      </TOCLevelSelect>
                      <EditableTOCHeading
                        level={heading.level || 2}
                        contentEditable
                        suppressContentEditableWarning
                        dir="ltr"
                        onInput={(e: React.FormEvent<HTMLSpanElement>) => {
                          const newText = (
                            e.currentTarget.textContent || ""
                          ).trim();
                          updateHeading(heading.id, {
                            text: newText || "New Heading",
                          });
                        }}
                        onBlur={(e: React.FocusEvent<HTMLSpanElement>) => {
                          if (
                            !e.currentTarget.textContent ||
                            !e.currentTarget.textContent.trim()
                          ) {
                            e.currentTarget.textContent = "New Heading";
                            updateHeading(heading.id, { text: "New Heading" });
                          }
                        }}
                      >
                        {heading.text || "New Heading"}
                      </EditableTOCHeading>
                      <TOCRemoveButton
                        onClick={() => removeHeading(heading.id)}
                        title="Remove from TOC"
                      >
                        ×
                      </TOCRemoveButton>
                    </TOCHeadingRow>
                  </TOCItem>
                ))}
              </TOCList>
            )}

            <AddHeadingButton onClick={addHeading}>
              <span>+</span>
              <span>Add Heading</span>
            </AddHeadingButton>
          </TOCContainer>
        );
      }
      default:
        return <div style={{ color: "#1e1e1e" }}>Unknown block type</div>;
    }
  };

  const renderBlockEditor = (block: ContentBlock) => {
    switch (block.type) {
      case "heading":
        return (
          <SettingField>
            <SettingLabel
              style={{
                fontWeight: "600",
                color: "#1e1e1e",
                marginBottom: "8px",
              }}
            >
              Heading Level
            </SettingLabel>
            <SettingSelect
              value={block.data.level || 2}
              onChange={(e) =>
                updateBlock(block.id, { level: parseInt(e.target.value) })
              }
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#1e1e1e",
                backgroundColor: "#fff",
                border: "1px solid #8c8f94",
                borderRadius: "4px",
                padding: "6px 8px",
                cursor: "pointer",
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((level) => (
                <option key={level} value={level} style={{ color: "#1e1e1e" }}>
                  H{level} - Heading Level {level}
                </option>
              ))}
            </SettingSelect>
            <SettingLabel
              style={{
                fontWeight: "600",
                color: "#1e1e1e",
                marginTop: "16px",
                marginBottom: "8px",
              }}
            >
              Text
            </SettingLabel>
            <SettingInput
              value={block.data.text || ""}
              onChange={(e) => updateBlock(block.id, { text: e.target.value })}
              placeholder="Enter heading text"
              style={{ color: "#1e1e1e" }}
            />
            <SettingLabel
              style={{
                fontWeight: "600",
                color: "#1e1e1e",
                marginTop: "16px",
                marginBottom: "8px",
              }}
            >
              Alignment
            </SettingLabel>
            <SettingSelect
              value={block.data.alignment || "left"}
              onChange={(e) =>
                updateBlock(block.id, { alignment: e.target.value })
              }
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#1e1e1e",
                backgroundColor: "#fff",
                border: "1px solid #8c8f94",
                borderRadius: "4px",
                padding: "6px 8px",
                cursor: "pointer",
              }}
            >
              <option value="left" style={{ color: "#1e1e1e" }}>
                Left
              </option>
              <option value="center" style={{ color: "#1e1e1e" }}>
                Center
              </option>
              <option value="right" style={{ color: "#1e1e1e" }}>
                Right
              </option>
              <option value="justify" style={{ color: "#1e1e1e" }}>
                Justify
              </option>
            </SettingSelect>
          </SettingField>
        );
      case "paragraph":
        return (
          <SettingField>
            <SettingLabel>Text</SettingLabel>
            <SettingTextarea
              value={block.data.text}
              onChange={(e) => updateBlock(block.id, { text: e.target.value })}
              placeholder="Enter paragraph text"
            />
            <SettingLabel>Alignment</SettingLabel>
            <SettingSelect
              value={block.data.alignment || "left"}
              onChange={(e) =>
                updateBlock(block.id, { alignment: e.target.value })
              }
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
              <option value="justify">Justify</option>
            </SettingSelect>
          </SettingField>
        );
      case "image":
        return (
          <>
            <SettingField>
              <SettingLabel>Image URL</SettingLabel>
              <SettingInput
                value={block.data.url}
                onChange={(e) => updateBlock(block.id, { url: e.target.value })}
                placeholder="Enter image URL"
              />
            </SettingField>
            <SettingField>
              <SettingLabel>Upload Image</SettingLabel>
              <SettingInput
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = (e.target as HTMLInputElement).files?.[0];
                  if (file) handleImageUpload(block.id, file);
                }}
              />
              {uploadingBlockId === block.id && (
                <InlineSpinner>Uploading…</InlineSpinner>
              )}
            </SettingField>
            <SettingField>
              <SettingLabel>Alignment</SettingLabel>
              <SettingSelect
                value={block.data.alignment || "center"}
                onChange={(e) =>
                  updateBlock(block.id, { alignment: e.target.value })
                }
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </SettingSelect>
            </SettingField>
            <SettingField>
              <SettingLabel>Size</SettingLabel>
              <SettingSelect
                value={block.data.size || "large"}
                onChange={(e) =>
                  updateBlock(block.id, {
                    size: e.target.value,
                    customWidth: "",
                  })
                }
              >
                <option value="thumbnail">Thumbnail (25%)</option>
                <option value="medium">Medium (50%)</option>
                <option value="large">Large (75%)</option>
                <option value="full">Full Width (100%)</option>
                <option value="custom">Custom</option>
              </SettingSelect>
            </SettingField>
            {(block.data.size || "large") === "custom" && (
              <SettingField>
                <SettingLabel>Custom Width (px)</SettingLabel>
                <SettingInput
                  type="number"
                  min={50}
                  max={1200}
                  value={block.data.customWidth || ""}
                  onChange={(e) =>
                    updateBlock(block.id, { customWidth: e.target.value })
                  }
                  placeholder="e.g. 400"
                />
              </SettingField>
            )}
            <SettingField>
              <SettingLabel>Alt Text</SettingLabel>
              <SettingInput
                value={block.data.alt}
                onChange={(e) => updateBlock(block.id, { alt: e.target.value })}
                placeholder="Enter alt text"
              />
            </SettingField>
            <SettingField>
              <SettingLabel>Caption</SettingLabel>
              <SettingInput
                value={block.data.caption || ""}
                onChange={(e) =>
                  updateBlock(block.id, { caption: e.target.value })
                }
                placeholder="Optional caption"
              />
            </SettingField>
          </>
        );
      case "tableOfContents": {
        const headings = block.data.headings || [];

        return (
          <>
            <SettingField>
              <SettingLabel
                style={{
                  fontWeight: "600",
                  color: "#1e1e1e",
                  marginBottom: "8px",
                }}
              >
                Title
              </SettingLabel>
              <SettingInput
                value={block.data.title || ""}
                onChange={(e) =>
                  updateBlock(block.id, { title: e.target.value })
                }
                placeholder="Table of Contents"
                style={{ color: "#1e1e1e" }}
              />
            </SettingField>
            <SettingField>
              <SettingLabel
                style={{
                  fontWeight: "600",
                  color: "#1e1e1e",
                  marginBottom: "8px",
                }}
              >
                Headings ({headings.length})
              </SettingLabel>
              {headings.length > 0 ? (
                <div
                  style={{
                    maxHeight: "200px",
                    overflowY: "auto",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    padding: "8px",
                    background: "#f9f9f9",
                  }}
                >
                  {headings.map((h: any) => (
                    <div
                      key={h.id}
                      style={{
                        padding: "6px 8px",
                        marginBottom: "4px",
                        background: "#fff",
                        borderRadius: "4px",
                        fontSize: "13px",
                        color: "#1e1e1e",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span>
                        <strong>H{h.level || 2}</strong>:{" "}
                        {h.text && h.text.length > 30
                          ? h.text.substring(0, 30) + "..."
                          : h.text || "New Heading"}
                      </span>
                      <button
                        onClick={() => {
                          const currentData = block.data || {};
                          updateBlock(block.id, {
                            ...currentData,
                            headings: headings.filter(
                              (heading: any) => heading.id !== h.id,
                            ),
                          });
                        }}
                        style={{
                          background: "#dc3545",
                          color: "white",
                          border: "none",
                          borderRadius: "3px",
                          padding: "2px 6px",
                          cursor: "pointer",
                          fontSize: "11px",
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  style={{
                    padding: "12px",
                    background: "#f6f7f7",
                    borderRadius: "4px",
                    border: "1px dashed #ddd",
                    textAlign: "center",
                    color: "#666",
                    fontSize: "13px",
                  }}
                >
                  No headings added yet. Click the "+ Add Heading" button in the
                  TOC block to add headings.
                </div>
              )}
              <SmallHelp style={{ marginTop: "8px", color: "#666" }}>
                Use the "+ Add Heading" button in the TOC block to add new
                headings
              </SmallHelp>
            </SettingField>
            <SettingField>
              <SettingLabel
                style={{
                  fontWeight: "600",
                  color: "#1e1e1e",
                  marginBottom: "8px",
                }}
              >
                Display Options
              </SettingLabel>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  padding: "12px",
                  background: block.data.showNumbers
                    ? "rgba(34, 113, 177, 0.1)"
                    : "#f6f7f7",
                  borderRadius: "4px",
                  border: `2px solid ${block.data.showNumbers ? "#2271b1" : "#ddd"}`,
                  transition: "all 0.2s ease",
                }}
              >
                <input
                  type="checkbox"
                  checked={block.data.showNumbers || false}
                  onChange={(e) =>
                    updateBlock(block.id, { showNumbers: e.target.checked })
                  }
                  style={{
                    marginRight: "12px",
                    width: "18px",
                    height: "18px",
                    cursor: "pointer",
                    accentColor: "#2271b1",
                  }}
                />
                <span
                  style={{
                    fontSize: "14px",
                    color: "#1e1e1e",
                    fontWeight: "600",
                  }}
                >
                  Show Numbers
                </span>
              </label>
              <SmallHelp style={{ marginTop: "8px", color: "#666" }}>
                Enable to display numbered list (1., 2., 3., etc.) for each
                heading
              </SmallHelp>
            </SettingField>
          </>
        );
      }
      case "table": {
        const headers = block.data.headers || [];
        const rows = block.data.rows || [];
        const normalizeTableData = () => {
          let h = [...headers];
          let r = rows.map((row: string[]) => [...row]);
          const nc = Math.max(h.length, ...r.map((x: string[]) => x.length), 1);
          while (h.length < nc) {
            h.push(`Header ${h.length + 1}`);
          }
          h = h.slice(0, nc);
          r = r.map((row: string[]) => thePad(row, nc));
          if (r.length === 0) {
            r = [Array(nc).fill("")];
          }
          return { headers: h, rows: r };
        };
        const thePad = (row: string[], nc: number) => {
          const x = [...row];
          while (x.length < nc) {
            x.push("");
          }
          return x.slice(0, nc);
        };

        const tableActionBtn = {
          flex: 1,
          padding: "8px 10px",
          fontSize: "13px",
          fontWeight: 600,
          borderRadius: "4px",
          border: "1px solid #8c8f94",
          background: "#fff",
          color: "#1e1e1e",
          cursor: "pointer" as const,
        };

        const addRow = () => {
          const { headers: h, rows: r } = normalizeTableData();
          const nc = h.length;
          updateBlock(block.id, {
            headers: h,
            rows: [...r, Array(nc).fill("")],
          });
        };

        const removeLastRow = () => {
          const { headers: h, rows: r } = normalizeTableData();
          if (r.length <= 1) {
            return;
          }
          updateBlock(block.id, { headers: h, rows: r.slice(0, -1) });
        };

        const addColumn = () => {
          const { headers: h, rows: r } = normalizeTableData();
          const nh = [...h, `Header ${h.length + 1}`];
          const nr = r.map((row: string[]) => [...row, ""]);
          updateBlock(block.id, { headers: nh, rows: nr });
        };

        const removeLastColumn = () => {
          const { headers: h, rows: r } = normalizeTableData();
          if (h.length <= 1) {
            return;
          }
          const nh = h.slice(0, -1);
          const nr = r.map((row: string[]) => row.slice(0, -1));
          updateBlock(block.id, { headers: nh, rows: nr });
        };

        const { headers: nh, rows: nr } = normalizeTableData();

        return (
          <>
            <SettingField>
              <SettingLabel>Table structure</SettingLabel>
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  marginBottom: "10px",
                  flexWrap: "wrap",
                }}
              >
                <button type="button" style={tableActionBtn} onClick={addRow}>
                  + Add row
                </button>
                <button
                  type="button"
                  style={{
                    ...tableActionBtn,
                    opacity: nr.length <= 1 ? 0.5 : 1,
                    cursor: nr.length <= 1 ? "not-allowed" : "pointer",
                  }}
                  onClick={removeLastRow}
                  disabled={nr.length <= 1}
                >
                  − Remove row
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  marginBottom: "12px",
                  flexWrap: "wrap",
                }}
              >
                <button
                  type="button"
                  style={tableActionBtn}
                  onClick={addColumn}
                >
                  + Add column
                </button>
                <button
                  type="button"
                  style={{
                    ...tableActionBtn,
                    opacity: nh.length <= 1 ? 0.5 : 1,
                    cursor: nh.length <= 1 ? "not-allowed" : "pointer",
                  }}
                  onClick={removeLastColumn}
                  disabled={nh.length <= 1}
                >
                  − Remove column
                </button>
              </div>
              <SmallHelp style={{ color: "#666", marginBottom: "12px" }}>
                {nh.length} column{nh.length !== 1 ? "s" : ""}, {nr.length} data
                row{nr.length !== 1 ? "s" : ""}
                {block.data.hasHeaderRow ? " (+ header row)" : ""}
              </SmallHelp>
            </SettingField>
            <SettingField>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  gap: "10px",
                  fontSize: "14px",
                  color: "#1e1e1e",
                }}
              >
                <input
                  type="checkbox"
                  checked={!!block.data.hasHeaderRow}
                  onChange={(e) =>
                    updateBlock(block.id, {
                      hasHeaderRow: e.target.checked,
                    })
                  }
                />
                Show header row
              </label>
            </SettingField>
          </>
        );
      }
      default:
        return <div>Settings for {block.type}</div>;
    }
  };

  const selectedBlockData = blocks.find((b) => b.id === selectedBlock);

  return (
    <EditorWrapper>
      <TopToolbar>
        <ToolbarLeft>
          <ToolbarButton onClick={() => setLeftSidebarOpen(!leftSidebarOpen)}>
            <FaBars />
          </ToolbarButton>
          <ToolbarButton onClick={() => setRightSidebarOpen(!rightSidebarOpen)}>
            Settings
          </ToolbarButton>
          <SaveStatus>✔ Saved</SaveStatus>
        </ToolbarLeft>
        <ToolbarRight>
          <ToolbarButton type="button" onClick={handlePreview}>
            <FaEye /> Preview
          </ToolbarButton>
          <ToolbarButton
            primary
            type="button"
            onClick={() => void handleSave()}
            disabled={saveBusy}
          >
            <FaSave /> {saveBusy ? "Saving…" : "Publish"}
          </ToolbarButton>
          <ToolbarButton onClick={onCancel}>
            <FaTimes />
          </ToolbarButton>
        </ToolbarRight>
      </TopToolbar>

      <MainContent>
        <LeftSidebar isOpen={leftSidebarOpen}>
          <SidebarHeader>
            <SearchInput
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SidebarHeader>
          <SidebarTabs>
            <Tab
              active={activeLeftTab === "Blocks"}
              onClick={() => setActiveLeftTab("Blocks")}
            >
              Blocks
            </Tab>
            <Tab
              active={activeLeftTab === "Patterns"}
              onClick={() => setActiveLeftTab("Patterns")}
            >
              Patterns
            </Tab>
            <Tab
              active={activeLeftTab === "Media"}
              onClick={() => setActiveLeftTab("Media")}
            >
              Media
            </Tab>
          </SidebarTabs>
          <BlockCategories>
            {activeLeftTab === "Blocks" && (
              <>
                <CategorySection>
                  <CategoryTitle>Text</CategoryTitle>
                  <BlockList>
                    {textBlocks.map((blockType) => {
                      const Icon = blockType.icon;
                      return (
                        <BlockItem
                          key={blockType.type}
                          onClick={() => addBlock(blockType.type)}
                        >
                          <BlockIcon>
                            <Icon />
                          </BlockIcon>
                          <BlockName>{blockType.label}</BlockName>
                        </BlockItem>
                      );
                    })}
                  </BlockList>
                </CategorySection>
                <CategorySection>
                  <CategoryTitle>Media</CategoryTitle>
                  <BlockList>
                    {mediaBlocks.map((blockType) => {
                      const Icon = blockType.icon;
                      return (
                        <BlockItem
                          key={blockType.type}
                          onClick={() => addBlock(blockType.type)}
                        >
                          <BlockIcon>
                            <Icon />
                          </BlockIcon>
                          <BlockName>{blockType.label}</BlockName>
                        </BlockItem>
                      );
                    })}
                  </BlockList>
                </CategorySection>
              </>
            )}
          </BlockCategories>
        </LeftSidebar>

        <CenterCanvas>
          <CanvasContent>
            <TitleInput
              type="text"
              placeholder="Add title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ textAlign: titleAlignment }}
            />
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="blocks">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {blocks.length === 0 ? (
                      <BlockPlaceholder>
                        Type / to choose a block
                      </BlockPlaceholder>
                    ) : (
                      blocks.map((block, index) => (
                        <Draggable
                          key={block.id}
                          draggableId={block.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <ContentBlock
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              isSelected={selectedBlock === block.id}
                              isDragging={snapshot.isDragging}
                              onClick={() => {
                                setSelectedBlock(block.id);
                                setActiveRightTab("Block");
                              }}
                            >
                              {block.type === "heading" &&
                                selectedBlock === block.id && (
                                  <LevelBadge>{`H${Number(block.data.level) || 2}`}</LevelBadge>
                                )}
                              <BlockToolbar hidden={selectedBlock !== block.id}>
                                <BlockToolbarButton
                                  onClick={() => removeBlock(block.id)}
                                >
                                  Delete
                                </BlockToolbarButton>
                              </BlockToolbar>
                              <BlockContent {...provided.dragHandleProps}>
                                {renderBlockContent(block)}
                              </BlockContent>
                            </ContentBlock>
                          )}
                        </Draggable>
                      ))
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </CanvasContent>
        </CenterCanvas>

        <RightSidebar isOpen={rightSidebarOpen}>
          <SettingsTabs>
            <Tab
              active={activeRightTab === "Post"}
              onClick={() => setActiveRightTab("Post")}
            >
              Post
            </Tab>
            <Tab
              active={activeRightTab === "Block"}
              onClick={() => setActiveRightTab("Block")}
            >
              Block
            </Tab>
          </SettingsTabs>
          <SettingsContent>
            {activeRightTab === "Post" ? (
              <>
                <SettingsSection>
                  <SettingsTitle>Post Settings</SettingsTitle>
                  <SettingField>
                    <SettingLabel>Title Alignment</SettingLabel>
                    <SettingSelect
                      value={titleAlignment}
                      onChange={(e) => setTitleAlignment(e.target.value)}
                    >
                      <option value="left">Left</option>
                      <option value="center">Center</option>
                      <option value="right">Right</option>
                    </SettingSelect>
                  </SettingField>
                  <SettingField>
                    <SettingLabel>Slug</SettingLabel>
                    <SettingInput
                      value={slugInputValue}
                      onChange={(e) => setSlug(e.target.value)}
                      placeholder="Uses title if left empty (e.g. hello-son)"
                    />
                    <SmallHelp style={{ marginTop: 8 }}>
                      <button
                        type="button"
                        onClick={() => {
                          const s = computeDerivedSlug();
                          if (!s) {
                            // eslint-disable-next-line no-alert
                            alert("Add a title or slug first.");
                            return;
                          }
                          openPermalinkModal(buildPublicPostUrl(s), false);
                        }}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#2271b1",
                          cursor: "pointer",
                          fontSize: 13,
                          fontWeight: 600,
                          padding: 0,
                          textDecoration: "underline",
                          fontFamily: "inherit",
                        }}
                      >
                        View permalink
                      </button>
                    </SmallHelp>
                  </SettingField>
                  <SettingField>
                    <SettingLabel>Excerpt</SettingLabel>
                    <SettingTextarea
                      value={excerpt}
                      onChange={(e) => setExcerpt(e.target.value)}
                      placeholder="Short description"
                    />
                  </SettingField>
                  <SettingField>
                    <SettingLabel>Featured image</SettingLabel>
                    {featuredImage ? (
                      <div style={{ marginBottom: 10 }}>
                        <img
                          src={featuredImage}
                          alt=""
                          style={{
                            width: "100%",
                            maxHeight: 160,
                            objectFit: "cover",
                            borderRadius: 4,
                            display: "block",
                            border: "1px solid #ddd",
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => setFeaturedImage("")}
                          style={{
                            marginTop: 8,
                            fontSize: 12,
                            color: "#b32d2e",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            textDecoration: "underline",
                            padding: 0,
                            fontFamily: "inherit",
                          }}
                        >
                          Remove image
                        </button>
                      </div>
                    ) : null}
                    <ImageDropZone
                      isDraggingOver={uploadingFeatured}
                      onClick={() => {
                        document.getElementById("featured-image-file")?.click();
                      }}
                      onDragOver={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onDrop={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const file = e.dataTransfer.files?.[0];
                        if (file?.type.startsWith("image/")) {
                          void handleFeaturedImageUpload(file);
                        }
                      }}
                      style={{ opacity: uploadingFeatured ? 0.7 : 1 }}
                    >
                      <div style={{ fontWeight: 600 }}>
                        {featuredImage
                          ? "Replace featured image"
                          : "Drop featured image here"}
                      </div>
                      <SmallHelp>or click to upload (same as in-post images)</SmallHelp>
                      {uploadingFeatured && (
                        <InlineSpinner>Uploading…</InlineSpinner>
                      )}
                      <input
                        id="featured-image-file"
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) void handleFeaturedImageUpload(file);
                          e.target.value = "";
                        }}
                      />
                    </ImageDropZone>
                  </SettingField>
                  <SettingField>
                    <SettingLabel>Status</SettingLabel>
                    <SettingSelect
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                      <option value="archived">Archived</option>
                    </SettingSelect>
                  </SettingField>
                  {/* Categories section commented out — enable when backend provides categories
                  <SettingField>
                    <SettingLabel>Categories</SettingLabel>
                    <SettingSelect
                      multiple
                      value={selectedCategories}
                      onChange={(e) =>
                        setSelectedCategories(
                          Array.from(e.target.selectedOptions, (o) => o.value),
                        )
                      }
                      style={{ minHeight: "110px" }}
                    >
                      {categories.map((cat: any) => (
                        <option key={cat._id} value={cat._id}>
                          {cat.name}
                        </option>
                      ))}
                    </SettingSelect>
                  </SettingField>
                  */}
                  <SettingField>
                    <SettingLabel>Tags (comma-separated)</SettingLabel>
                    <SettingInput
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                      placeholder="tag1, tag2"
                    />
                  </SettingField>
                  <SettingsTitle>SEO</SettingsTitle>
                  <SettingField>
                    <SettingLabel>Meta Title</SettingLabel>
                    <SettingInput
                      value={seoMeta.metaTitle || ""}
                      onChange={(e) =>
                        setSeoMeta({ ...seoMeta, metaTitle: e.target.value })
                      }
                    />
                  </SettingField>
                  <SettingField>
                    <SettingLabel>Meta Description</SettingLabel>
                    <SettingTextarea
                      value={seoMeta.metaDescription || ""}
                      onChange={(e) =>
                        setSeoMeta({
                          ...seoMeta,
                          metaDescription: e.target.value,
                        })
                      }
                    />
                  </SettingField>
                </SettingsSection>
              </>
            ) : selectedBlockData ? (
              <>
                <SettingsSection>
                  <SettingsTitle>Block Settings</SettingsTitle>
                  {renderBlockEditor(selectedBlockData)}
                </SettingsSection>
              </>
            ) : (
              <div>Select a block to edit its settings</div>
            )}
          </SettingsContent>
        </RightSidebar>
      </MainContent>
      <PermalinkModal
        open={permalinkModalOpen}
        url={permalinkModalUrl}
        title="Post permalink"
        hint="Copy this link to share. Published posts open here on your site."
        onClose={closePermalinkModal}
      />
    </EditorWrapper>
  );
};

export default GutenbergEditor;
