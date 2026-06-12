import React, { useState } from "react";
import { toast } from "react-toastify";
import { submitContactFormAPI } from "../../apis/apis";
import { submitToGoogleSheet } from "../../services/googleSheets";
import {
  Form,
  FormCard,
  FormSubtitle,
  FormTitle,
  Input,
  NameRow,
  SubmitButton,
  Textarea,
} from "./ServiceBannerForm.styles";

interface ServiceBannerFormProps {
  serviceName?: string;
}

const ServiceBannerForm: React.FC<ServiceBannerFormProps> = ({
  serviceName,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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

    const { firstName, lastName, email, phone, message } = formData;

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      toast.error("Please fill in all required fields.");
      setIsLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
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
      );

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
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
    <FormCard>
      <FormTitle>Get a Free Quote</FormTitle>
      <FormSubtitle>We&apos;ll get back to you within 24 hours.</FormSubtitle>
      <Form onSubmit={handleSubmit}>
        <NameRow>
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name *"
            required
          />
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name *"
            required
          />
        </NameRow>

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
  );
};

export default ServiceBannerForm;
