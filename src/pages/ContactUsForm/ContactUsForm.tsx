import React, { useState } from "react";
import {
  Button,
  CheckboxWrapper,
  ContactFormWrapper,
  Form,
  Input,
  Textarea,
  InfoWrapper,
  MainContainer,
  InfoSectionTitle,
  ContactDetail,
  SocialIconsWrapper,
  NameInputsWrapper, 
} from "./ContactUsForm.styles";

import { submitContactFormAPI } from "../../apis/apis"; 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 


import { FaPhone, FaEnvelope, FaGlobe, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaThreads } from "react-icons/fa6";

const ContactUsForm: React.FC = () => {
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    referral: "", // "How did you find us or who were you referred by?"
    message: "",
  });
  const [isAgreed, setIsAgreed] = useState(false); // State for the privacy policy checkbox
  const [isLoading, setIsLoading] = useState(false); // State to manage loading during API calls

  // Generic handler for all text-based inputs (text, email, textarea)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for the privacy policy checkbox
  const handleCheckboxChange = () => {
    setIsAgreed((prevAgreed) => !prevAgreed);
  };

  // Basic email validation function
  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email); // Simple regex for email format
  };

  // Handles the form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)
    setIsLoading(true); // Set loading state to true while submitting

    const { firstName, lastName, email, message } = formData;

    // Client-side validation checks
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !message.trim() || !isAgreed) {
      toast.error("Please fill in all required fields and agree to the terms.");
      setIsLoading(false); // Stop loading if validation fails
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      setIsLoading(false); // Stop loading if email is invalid
      return;
    }

    try {
      // Call your API to submit contact form data
      const response = await submitContactFormAPI(formData);
      console.log("API Response:", response); // Log the successful response
      toast.success("Your message has been sent successfully!"); // Show success notification

      // Reset form fields after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        referral: "",
        message: "",
      });
      setIsAgreed(false); // Uncheck the agreement checkbox
    } catch (err) {
      console.error("Contact form submission error:", err); // Log the error for debugging
      toast.error("Failed to send message. Please try again later."); // Show error notification
    } finally {
      setIsLoading(false); // Always set loading state to false after the API call finishes (success or failure)
    }
  };

  return (
    <div className="relative">
      <MainContainer>
        <InfoWrapper>
          <InfoSectionTitle>Get in Touch</InfoSectionTitle>
          <p className="description">
            Have a question or a project in mind? We'd love to hear from you. Reach out through the form or use the direct contact details below.
          </p>

          <ContactDetail>
            <FaGlobe className="icon" />
            <a href="https://www.lumeart.com" target="_blank" rel="noopener noreferrer">
              www.lumeart.com
            </a>
          </ContactDetail>
          {/* <ContactDetail>
            <FaPhone className="icon" />
            <a href="tel:+1234567890">
              +1 234 567 890 (Dummy)
            </a>
          </ContactDetail> */}
          <ContactDetail>
            <FaEnvelope className="icon" />
            <a href="mailto:contact@lumeart.com">
             studioslumeart@gmail.com
            </a>
          </ContactDetail>

          <SocialIconsWrapper>
            <a href="https://www.facebook.com/share/1EreeG179x/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="social-icon" />
            </a>
            <a href="https://www.instagram.com/lumeart_studio?igsh=MXFsd29mdmo4YWxtMg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/company/lumeart-studio/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn className="social-icon" />
            </a>
            <a href="https://www.threads.com/@lumeart_studio?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaThreads className="social-icon" />
            </a>
          </SocialIconsWrapper>

        </InfoWrapper>

        <ContactFormWrapper>
          <Form onSubmit={handleSubmit}>
            
            <NameInputsWrapper>
              <div> {/* Wrap each Input in a div to allow NameInputsWrapper to apply flex properties */}
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name *"
                  required
                />
              </div>
              <div> {/* Wrap each Input in a div */}
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name *"
                  required
                />
              </div>
            </NameInputsWrapper>

            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email *"
              required
            />

            <Input
              type="text"
              name="referral"
              value={formData.referral}
              onChange={handleChange}
              placeholder="How did you find us or who were you referred by?"
            />

            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message *"
              required
            />

            <CheckboxWrapper>
              <input
                type="checkbox"
                checked={isAgreed}
                onChange={handleCheckboxChange}
                required
              />
              <span className="ml-2"> {/* ml-2 for margin-left (if using Tailwind) */}
                Agree with personal data processing. For more info, please
                consult{" "}
                <a href="/privacy-policy" className="text-[#6fa8a8]"> {/* Adjusted text color for link to match new primary */}
                  our privacy policy
                </a>
                .
              </span>
            </CheckboxWrapper>

            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"} {/* Dynamic button text */}
            </Button>
          </Form>
        </ContactFormWrapper>
      </MainContainer>

      {/* ToastContainer should ideally be placed once at the root of your application */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ContactUsForm;