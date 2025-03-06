import React, { useState } from "react";
import styled from "styled-components";
import BannerSection from "../Banner/getcoverbaner";
import HowItWorksSection from "../../components/HowItsWork/howitwork";
import { createBookRequest } from "../../apis/apis"; // Adjust the path to your API function

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
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
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
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
      color: #007bff;
      text-decoration: underline;
    }
  }
`;

const BookCoverForm: React.FC = () => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
  
    if (type === "checkbox") {
      setFormData({ 
        ...formData, 
        [name]: (e.target as HTMLInputElement).checked 
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

    // Prepare the data for API call
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
      const response = await createBookRequest(bookRequestData);
      console.log("submitted successfully",response)
    alert("Book request created successfully!");
      // Reset the form or show success message here
    } catch (error) {
      console.error("Error creating book request:", error);
    }
  };

  return (
    <>
      <BannerSection />
      <HowItWorksSection />

      <FormContainer>
        <FormTitle>Get a Book Cover Design Idea</FormTitle>
        <Disclaimer>
          * This is not an order form. If you want to order a cover design,
          choose your package{" "}
          <a
            href="https://miblart.com/services/"
            target="_blank"
            rel="noopener noreferrer"
          >
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
            placeholder="Your name"
          />
          <StyledInput
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title of your book"
          />
          <StyledSelect
            name="genre"
            value={formData.genre}
            onChange={handleChange}
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
          >
            <option value="no">Will the book continue as a series? optional</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </StyledSelect>
          <StyledTextArea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Tell us briefly about your book's plot or description (optional)"
          />
          <StyledSelect
            name="coverPreference"
            value={formData.coverPreference}
            onChange={(e) => {
              const { options } = e.target as HTMLSelectElement;
              const selectedOptions = Array.from(options)
                .filter((option) => option.selected)
                .map((option) => option.value);
              setFormData({ ...formData, coverPreference: selectedOptions });
            }}
          >
            <option value="">Please select what covers you prefer (optional)</option>
            <option value="detailed-characters">With detailed characters</option>
            <option value="silhouettes">Only with silhouettes</option>
            <option value="object-based">Object-based covers</option>
            <option value="dont-know">I don't know</option>
          </StyledSelect>
          <StyledTextArea
            name="mainCharacters"
            value={formData.mainCharacters}
            onChange={handleChange}
            placeholder="Please describe the main character(s) or key objects/themes (optional)"
          />
          <StyledInput
            type="text"
            name="setting"
            value={formData.setting}
            onChange={handleChange}
            placeholder="What is the setting of your book? (optional)"
          />
          <StyledInput
            type="file"
            name="comparableCovers"
            accept="image/*"
            multiple
            onChange={handleFileChange}
          />
          <StyledInput
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <CheckboxContainer>
            <input
              type="checkbox"
              name="privacyPolicy"
              checked={formData.privacyPolicy}
              onChange={handleChange}
              required
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
          <StyledButton type="submit">Send message</StyledButton>
        </StyledForm>
      </FormContainer>
    </>
  );
};

export default BookCoverForm;
