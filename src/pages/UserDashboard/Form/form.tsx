import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { createOrderAPI } from "../../../apis/apis";
import { submitToGoogleSheet } from "../../../services/googleSheets";
import styled from "styled-components"; // Ensure correct import for your API function
import { toast, ToastContainer } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

const FormOrder: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Use to get passed data from previous component

  // Retrieve the passed order data from the location state
  const orderData = location.state;

  const { userId, packageId, addOnIds } = orderData ?? {};

  // const [preferences, setPreferences] = useState("");
  // const [payment, setPayment] = useState("one");
  const [narratorName, setNarratorName] = useState("");
  const [name, setName] = useState("");
  const [bookTitle, setTitle] = useState("");
  const [bookSubtitle, setSubTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [seriesContinuation, setSeries] = useState("");
  const [summary, setSummary] = useState("");
  const [shareOnPortfolio, setShareOnPortfolio] = useState("");
  const [loading, setLoading] = useState(false);
  const [likeToSeeOnCover, setLikeToSeeOnCover] = useState("");
  const [prefferedCoverStyle, setPrefferedCoverStyle] = useState("");
  const [order, setOrder] = useState("");
  const [userContacts, setUserContacts] = useState("");

  const genres = [
    "Fantasy",
    "Romance",
    "Urban Fantasy",
    "Young Adult",
    "Cozy Mystery",
    "Paranormal",
    "Mystery, Thriller & Suspense",
    "Horror",
    "Sci-fi",
    "Non-fiction",
    "Fiction",
  ];

  const validateForm = (): string | null => {
    if (!userId || !packageId) {
      return "Missing package selection. Please go back and choose a package again.";
    }
    if (!name.trim()) {
      return "Please enter your name.";
    }
    if (!bookTitle.trim()) {
      return "Please enter the book title.";
    }
    if (!genre.trim()) {
      return "Please select a genre.";
    }
    if (!seriesContinuation) {
      return "Please select whether this book continues as a series.";
    }
    if (!prefferedCoverStyle.trim()) {
      return "Please select a preferred cover style.";
    }
    if (!shareOnPortfolio) {
      return "Please tell us if we may share your cover on social media and website.";
    }
    if (!order) {
      return "Please answer whether this is your first order with Lumeart Studio.";
    }
    return null;
  };

  const handleReview = async () => {
    const validationMsg = validateForm();
    if (validationMsg) {
      toast.error(validationMsg);
      return;
    }

    setLoading(true);
    const formData = {
      userId: String(userId),
      packageId: String(packageId),
      addOnIds: Array.isArray(addOnIds) ? addOnIds : [],
      name: name.trim(),
      bookTitle: bookTitle.trim(),
      bookSubtitle: bookSubtitle.trim(),
      narratorName: narratorName.trim(),
      genre: genre.trim(),
      seriesContinuation,
      summary: summary.trim(),
      prefferedCoverStyle,
      likeToSeeOnCover: likeToSeeOnCover.trim(),
      status: "Submitted",
      userContacts: userContacts
        ? userContacts.split(",").map((s) => s.trim()).filter(Boolean)
        : [],
      firstOrder: order === "yes",
      shareOnPortfolio,
    };

    try {
      const response = await createOrderAPI(formData);
      submitToGoogleSheet({
        formType: "portalOrder",
        userId: formData.userId,
        packageId: formData.packageId,
        addOnIds: formData.addOnIds,
        name: formData.name,
        bookTitle: formData.bookTitle,
        bookSubtitle: formData.bookSubtitle,
        narratorName: formData.narratorName,
        genre: formData.genre,
        seriesContinuation: formData.seriesContinuation,
        summary: formData.summary,
        prefferedCoverStyle: formData.prefferedCoverStyle,
        likeToSeeOnCover: formData.likeToSeeOnCover,
        status: formData.status,
        userContacts: formData.userContacts || [],
        firstOrder: formData.firstOrder,
        shareOnPortfolio:
          formData.shareOnPortfolio === "yes" ||
          formData.shareOnPortfolio === "unknown",
      });
      toast.success("Order created successfully!");

      // Delay navigation until after toast
      setTimeout(() => {
        navigate("/portal/orders", { state: response });
      }, 1500); // Delay navigation by 1500ms (1.5 seconds)
    } catch (error: unknown) {
      console.error("Error creating order:", error);
      const msg =
        typeof error === "string"
          ? error
          : error instanceof Error
            ? error.message
            : "Error creating order. Please try again.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && (
        <LoaderOverlay>
          <ClipLoader color="#6dc7d1" size={40} />
        </LoaderOverlay>
      )}
      <div
        style={{
          opacity: loading ? 0.5 : 1,
          pointerEvents: loading ? "none" : "auto",
        }}
      >
        <ToastContainer />
      </div>
      <HeaderContainer>
        <HeaderContent>
          <HeaderTitle>Your order information</HeaderTitle>
          <HeaderSubtitle></HeaderSubtitle>
        </HeaderContent>
        {/* <HeaderActions>
          <HeaderButton onClick={() => console.log("Save draft clicked")}>
            Save draft
          </HeaderButton>
          <HeaderButton onClick={() => console.log("Copy clicked")}>
            Copy
          </HeaderButton>
        </HeaderActions> */}
      </HeaderContainer>

      {/* Form Section */}
      <FormContainer>
        <FormGroup>
          <Label>Your name</Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Book Title</Label>
          <Input
            type="text"
            value={bookTitle}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Book Subtitle</Label>
          <Input
            type="text"
            value={bookSubtitle}
            onChange={(e) => setSubTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Narrator's name</Label>
          <Input
            type="text"
            value={narratorName}
            onChange={(e) => setNarratorName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            To make future communication easier, would you be willing to share
            your preferred contact information, such as an email address or
            LinkedIn profile?
          </Label>
          <TextArea
            value={userContacts}
            onChange={(e) => setUserContacts(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="genreSelect">What Genre do you write in?</Label>
          <select
            id="genreSelect"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "14px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            <option value="">Select a Genre</option>
            {genres.map((g, index) => (
              <option key={index} value={g}>
                {g}
              </option>
            ))}
          </select>
        </FormGroup>

        <FormGroup>
          <Label>Will this book continue as a series?</Label>
          <Select
            value={seriesContinuation}
            onChange={(e) => setSeries(e.target.value)}
          >
            <option value="">Please select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="unknown">I don’t know</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>
            Brief summary of your book, including major characters, important
            objects, setting, key elements or themes (optional)
          </Label>
          <TextArea
            placeholder="Provide your preferences..."
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>What is the preferred cover style?</Label>
          <Select
            value={prefferedCoverStyle}
            onChange={(e) => setPrefferedCoverStyle(e.target.value)}
          >
            <option value="">Please select...</option>
            <option value="detailed">With detailed characters</option>
            <option value="silhouettes">Only with silhouettes</option>
            <option value="object">Object-based covers</option>
            <option value="typographic">Typographic covers</option>
            <option value="unknown">I don’t know</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>
            What would you like to see on the cover? If you have any references
            or comparable covers, attach them below{" "}
          </Label>
          <TextArea
            placeholder="Provide your cover preferences..."
            value={likeToSeeOnCover}
            onChange={(e) => setLikeToSeeOnCover(e.target.value)}
          />
        </FormGroup>

        {/* <FormGroup>
          <Label>Upload your Files (optional)</Label>
          <FileInputContainer>
            <FileInput type="file" />
            <FileInputLabel>Upload a file or drag and drop</FileInputLabel>
            <FileInputHint>Max file size: 300 MB</FileInputHint>
          </FileInputContainer>
        </FormGroup> */}

        {/* <FormGroup>
          <Label>
            Let us know if you have copyrights for the files you have attached
            and want to use them for this design{" "}
          </Label>
          <TextArea
            placeholder="Provide your preferences..."
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
          />
        </FormGroup> */}

        <FormGroup>
          <Label>
            Please let us know if we can share your book cover on our social
            media and website?
          </Label>
          <Select
            value={shareOnPortfolio}
            onChange={(e) => setShareOnPortfolio(e.target.value)}
          >
            <option value="">Please select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="unknown">Yes, but only after the book</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>Is this your first order with Lumeart Studio? </Label>
          <Select value={order} onChange={(e) => setOrder(e.target.value)}>
            <option value="">Please select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Select>
        </FormGroup>

        {/* <FormGroup>
          <Label>
            When the design is completed, how would you like to pay?
          </Label>
          <RadioContainer>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="payment"
                value="one"
                checked={payment === "one"}
                onChange={() => setPayment("one")}
              />{" "}
              Pay in one payment
            </RadioLabel>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="payment"
                value="two"
                checked={payment === "two"}
                onChange={() => setPayment("two")}
              />{" "}
              Split into two equal monthly installments
            </RadioLabel>
          </RadioContainer>
        </FormGroup> */}
        <SubmitButton onClick={handleReview}>Complete Order</SubmitButton>
      </FormContainer>
      <ToastContainer />
    </div>
  );
};

export default FormOrder;
// Styled Components
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-left: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0;
  }
`;

const HeaderContent = styled.div`
  flex: 1;
`;

const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #00254d;
  margin-bottom: -29px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-left: 62px;

    display: flex;
    justify-content: center;
  }
`;

const HeaderSubtitle = styled.div`
  font-size: 14px;
  color: #6c757d;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormContainer = styled.div`
  padding: 20px;
  margin: 0 auto;
  color: black;
  padding: 3rem;
  border-radius: 8px;
  margin-left: 40px;
  margin-right: 40px;

  @media (max-width: 768px) {
    padding: 2rem;
    margin-left: 55px;
    margin-right: 20px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #00254d;
  margin-bottom: 9px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 18px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

// const FileInputContainer = styled.div`
//   border: 2px dashed #ccc;
//   padding: 20px;
//   text-align: center;
//   border-radius: 4px;
// `;

// const FileInput = styled.input`
//   display: none;
// `;

// const FileInputLabel = styled.div`
//   font-size: 14px;
//   color: #666;
//   margin-bottom: 10px;
// `;

// const FileInputHint = styled.div`
//   font-size: 12px;
//   color: #999;
// `;

// const RadioContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const RadioLabel = styled.label`
//   font-size: 14px;
//   color: #333;
//   margin-bottom: 5px;
// `;

// const RadioInput = styled.input`
//   margin-right: 10px;
// `;

const SubmitButton = styled.button`
  padding: 0.375rem 2.5rem;
  float: right;
  font-size: 16px;
  color: #fff;
  background-color: #6dc7d1;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: rgb(36, 137, 148);
  }

  @media (max-width: 768px) {
    float: none;
    width: 100%;
    padding: 0.375rem;
  }
`;
