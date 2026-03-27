import React, { useState } from "react";
import styled from "styled-components";
import BannerSection from "../Banner/getcoverbaner";
import HowItWorksSection from "../../components/HowItsWork/howitwork";
import { createBookRequest } from "../../apis/apis"; // Adjust the path to your API function
import { submitToGoogleSheet } from "../../services/googleSheets";
import { toast, ToastContainer } from "react-toastify"; // Import react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for Toast
import { Helmet } from "react-helmet-async";

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  position: relative;
`;

const FormTitle = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Disclaimer = styled.div`
  padding: 1rem 4.2rem;
  border-radius: 0.7rem;
  border: 0.1rem dashed #fbc02d;
  max-width: 800px;
  background: #fffbf2;
  color: black;
  margin-bottom: 40px;
  max-width: max-content;
  text-align: center;
  margin: 0 auto 40px;
  font: 600 14px / normal "Proxima Nova Bold";

  a {
    color: #0ab70a;
    font-weight: bold;
    text-decoration: underline;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: black;
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const StyledSelect = styled.select`
  padding: 10px;
  color: black;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const StyledTextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #6dc7d1;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  min-height: 42px;

  &:hover:not(:disabled) {
    background-color: #6dc7d1;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const LoadingSpinner = styled.span`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(109, 199, 209, 0.25);
  border-top-color: #6dc7d1;
  border-radius: 50%;
  animation: spin 0.9s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const FormLoadingOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(1px);
  border-radius: 8px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding-top: 70px;
`;

const LoadingText = styled.p`
  margin: 0;
  color: #334155;
  font-size: 14px;
  font-weight: 600;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1.5rem;

  input[type="checkbox"] {
    margin: 0;
  }

  label {
    font-size: 14px;
    color: #666;

    a {
      color: #6dc7d1;
      text-decoration: underline;
    }
  }
`;

const BookCoverForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    genre: "",
    isSeries: false,
    description: "",
    coverPreference: [] as string[], // Explicitly define as an array of strings
    mainCharacters: "",
    keyObjects: "",
    setting: "",
    comparableCovers: [] as File[], // To hold selected images
    email: "",
    privacyPolicy: false,
  });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  //   const { name, value, type, checked } = e.target;
  //   if (type === "checkbox") {
  //     setFormData({ ...formData, [name]: checked });
  //   } else {
  //     setFormData({ ...formData, [name]: value });
  //   }
  // };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFormData({ ...formData, comparableCovers: Array.from(files) });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const bookRequestData = {
      name: formData.name,
      title: formData.title,
      genre: formData.genre,
      isSeries: formData.isSeries,
      description: formData.description,
      coverPreference: formData.coverPreference,
      mainCharacters: formData.mainCharacters,
      keyObjects: formData.keyObjects,
      setting: formData.setting,
      comparableCovers: formData.comparableCovers,
      email: formData.email,
    };

    try {
      setIsSubmitting(true);
      const response = await createBookRequest(bookRequestData);
      console.log("submitted successfully", response);

      await submitToGoogleSheet({
        formType: "getACover",
        name: formData.name,
        title: formData.title,
        genre: formData.genre || "",
        isSeries: formData.isSeries,
        description: formData.description,
        coverPreference: formData.coverPreference,
        mainCharacters: formData.mainCharacters || "",
        keyObjects: formData.keyObjects || "",
        setting: formData.setting || "",
        email: formData.email,
        comparableCoversCount: formData.comparableCovers?.length ?? 0,
      });

      toast.success("Book cover request submitted successfully!");

      // Reset the form to empty values
      setFormData({
        name: "",
        title: "",
        genre: "",
        isSeries: false,
        description: "",
        coverPreference: [],
        mainCharacters: "",
        keyObjects: "",
        setting: "",
        comparableCovers: [],
        email: "",
        privacyPolicy: false,
      });

      // Optional: Reset file input
      const fileInput = document.querySelector(
        'input[type="file"]',
      ) as HTMLInputElement;
      if (fileInput) {
        fileInput.value = "";
      }
    } catch (err) {
      toast.error(
        "Failed to submit the book cover request. Please try again later.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Book Form</title>
      </Helmet>
      <BannerSection />
      <HowItWorksSection />

      <FormContainer>
        {isSubmitting && (
          <FormLoadingOverlay>
            <LoadingSpinner />
            <LoadingText>Submitting your request...</LoadingText>
          </FormLoadingOverlay>
        )}
        <FormTitle>Get a Book Cover Design Idea</FormTitle>
        <Disclaimer>
          * This is not an order form. If you want to order a cover design,
          choose your package{" "}
          <a href="/book-cover-form" target="_blank" rel="noopener noreferrer">
            here
          </a>
          .
        </Disclaimer>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            placeholder="Your name"
          />
          <StyledInput
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            disabled={isSubmitting}
            placeholder="Title of your book"
          />
          <StyledSelect
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            disabled={isSubmitting}
          >
            <option value="">Genre: optional</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="fantasy">Fantasy</option>
            <option value="sci-fi">Science Fiction</option>
          </StyledSelect>
          <StyledSelect
            name="isSeries"
            value={formData.isSeries ? "yes" : "no"}
            onChange={handleChange}
            disabled={isSubmitting}
          >
            <option value="no">
              Will the book continue as a series? optional
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </StyledSelect>
          <StyledTextArea
            name="description"
            value={formData.description}
            onChange={handleChange}
            disabled={isSubmitting}
            placeholder="Tell us briefly about your book's plot or description (optional)"
          />
          <StyledSelect
            name="coverPreference"
            value={formData.coverPreference}
            disabled={isSubmitting}
            onChange={(e) => {
              const { options } = e.target as HTMLSelectElement;
              const selectedOptions = Array.from(options)
                .filter((option) => option.selected)
                .map((option) => option.value);
              setFormData({ ...formData, coverPreference: selectedOptions });
            }}
          >
            <option value="">
              Please select what covers you prefer (optional)
            </option>
            <option value="detailed-characters">
              With detailed characters
            </option>
            <option value="silhouettes">Only with silhouettes</option>
            <option value="object-based">Object-based covers</option>
            <option value="dont-know">I don't know</option>
          </StyledSelect>
          <StyledTextArea
            name="mainCharacters"
            value={formData.mainCharacters}
            onChange={handleChange}
            disabled={isSubmitting}
            placeholder="Please describe the main character(s) or key objects/themes (optional)"
          />
          <StyledInput
            type="text"
            name="setting"
            value={formData.setting}
            onChange={handleChange}
            disabled={isSubmitting}
            placeholder="What is the setting of your book? (optional)"
          />
          <StyledInput
            type="file"
            name="comparableCovers"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            disabled={isSubmitting}
          />
          <StyledInput
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            disabled={isSubmitting}
          />
          <CheckboxContainer>
            <input
              type="checkbox"
              name="privacyPolicy"
              checked={formData.privacyPolicy}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            <label htmlFor="privacy-policy">
              Agree with personal data processing. For more info, please consult{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                our privacy policy
              </a>
              .
            </label>
          </CheckboxContainer>
          <div
            className="g-recaptcha"
            data-sitekey="6LdePgsaAAAAAKe7WUNTkvXyiCH7kX69eG2kQTSj"
          ></div>
          <StyledButton type="submit" disabled={isSubmitting}>
            Submit
          </StyledButton>
        </StyledForm>
      </FormContainer>
      <ToastContainer />
    </>
  );
};

export default BookCoverForm;
