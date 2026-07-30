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
import { submitToGoogleSheet } from "../../services/googleSheets";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  // FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

const ContactUsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    referral: "",
    message: "",
  });
  const [isAgreed, setIsAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = () => {
    setIsAgreed((prevAgreed) => !prevAgreed);
  };
  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { firstName, lastName, email, message } = formData;

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !message.trim() ||
      !isAgreed
    ) {
      toast.error("Please fill in all required fields and agree to the terms.");
      setIsLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await submitContactFormAPI(formData);
      submitToGoogleSheet({
        formType: "contact",
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        referral: formData.referral || "",
        message: formData.message,
      });
      toast.success(
        typeof response?.message === "string" && response.message.trim()
          ? response.message
          : "Your message has been sent successfully!",
      );

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        referral: "",
        message: "",
      });
      setIsAgreed(false);
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again later.";
      toast.error(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      <MainContainer>
        <InfoWrapper>
          <InfoSectionTitle>Get in Touch</InfoSectionTitle>
          <p className="description">
            Have a question or a project in mind? We'd love to hear from you.
            Reach out through the form or use the direct contact details below.
          </p>

          {/* <ContactDetail>
            <FaGlobe className="icon" />
            <a href="https://www.lumeart.com" target="_blank" rel="noopener noreferrer">
              www.lumeart.com
            </a>
          </ContactDetail> */}
          {/* <ContactDetail>
            <FaEnvelope className="icon" />
            <a href="mailto:wasimakram@lumeartstudio.com">
              wasimakram@lumeartstudio.com
            </a>
          </ContactDetail> */}
          {/* <ContactDetail>
            <FaEnvelope className="icon" />
            <a href="mailto:lefty.akram@gmail.com">lefty.akram@gmail.com</a>
          </ContactDetail> */}

          {/* <ContactDetail>
            <FaPhone className="icon" />
            <a href="tel:+923357771817">+92 (335)777-1817</a>
          </ContactDetail> */}

          <ContactDetail>
            <FaPhone className="icon" />
            <a href="tel:+13153332077">+1 (315) 333-2077</a>
          </ContactDetail>
          <ContactDetail>
            <FaEnvelope className="icon" />
            <a href="mailto:studioslumeart@gmail.com">
              studioslumeart@gmail.com
            </a>
          </ContactDetail>
          {/* <ContactDetail>
            <FaMapMarkerAlt className="icon" />
            <span>
              Address: H 1090, St 38, Ali Block, Phase 8, Bahria Town,
              Islamabad, 44000 Pakistan
            </span>
          </ContactDetail> */}

          <SocialIconsWrapper>
            <a
              href="https://www.facebook.com/share/1EreeG179x/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com/lumeart_studios/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/lumeart-studio/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="social-icon" />
            </a>
            <a
              href="https://www.threads.com/@lumeart_studio?igshid=NTc4MTIwNjQ2YQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaThreads className="social-icon" />
            </a>
          </SocialIconsWrapper>
        </InfoWrapper>

        <ContactFormWrapper>
          <Form onSubmit={handleSubmit}>
            <NameInputsWrapper>
              <div>
                {" "}
                {/* Wrap each Input in a div to allow NameInputsWrapper to apply flex properties */}
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name *"
                  required
                />
              </div>
              <div>
                {" "}
                {/* Wrap each Input in a div */}
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
              <span className="ml-2">
                {" "}
                {/* ml-2 for margin-left (if using Tailwind) */}
                Agree with personal data processing. For more info, please
                consult{" "}
                <a href="/privacy-policy" className="text-[#6fa8a8]">
                  {" "}
                  {/* Adjusted text color for link to match new primary */}
                  our privacy policy
                </a>
                .
              </span>
            </CheckboxWrapper>

            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}{" "}
              {/* Dynamic button text */}
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
