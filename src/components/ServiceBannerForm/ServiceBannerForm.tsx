import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { submitContactFormAPI } from "../../apis/apis";
import { submitToGoogleSheet } from "../../services/googleSheets";
import {
  Form,
  FormCard,
  FormSubtitle,
  FormTitle,
  Input,
  SubmitButton,
  Textarea,
} from "./ServiceBannerForm.styles";

interface ServiceBannerFormProps {
  serviceName?: string;
}

const SERVICE_FORM_TOAST_ID = "service-banner-form";

const ServiceBannerForm: React.FC<ServiceBannerFormProps> = ({
  serviceName,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { fullName, email, phone, message } = formData;

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all required fields.", {
        containerId: SERVICE_FORM_TOAST_ID,
      });
      setIsLoading(false);
      return;
    }

    const nameParts = fullName.trim().split(/\s+/);
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ") || firstName;

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.", {
        containerId: SERVICE_FORM_TOAST_ID,
      });
      setIsLoading(false);
      return;
    }

    const taggedMessage = serviceName
      ? `[${serviceName}] ${message.trim()}`
      : message.trim();

    try {
      const response = await submitContactFormAPI({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        referral: phone.trim() ? `Phone: ${phone.trim()}` : "",
        message: taggedMessage,
      });

      submitToGoogleSheet({
        formType: "contact",
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        referral: phone.trim() ? `Phone: ${phone.trim()}` : "",
        message: taggedMessage,
      });

      toast.success(
        typeof response?.message === "string" && response.message.trim()
          ? response.message
          : "Your message has been sent successfully!",
        { containerId: SERVICE_FORM_TOAST_ID },
      );

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again later.";
      toast.error(msg, { containerId: SERVICE_FORM_TOAST_ID });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <FormCard>
        <FormTitle>Get a Free Quote</FormTitle>
        <FormSubtitle>We&apos;ll get back to you within 24 hours.</FormSubtitle>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name *"
            required
          />

          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email *"
            required
          />

          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />

          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message *"
            required
          />

          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </SubmitButton>
        </Form>
      </FormCard>
      <ToastContainer
        containerId={SERVICE_FORM_TOAST_ID}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        style={{ zIndex: 10050 }}
      />
    </>
  );
};

export default ServiceBannerForm;
