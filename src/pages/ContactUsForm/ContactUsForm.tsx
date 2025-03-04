import React, { useState } from "react";
import { Button, CheckboxWrapper, ContactFormWrapper, Form, Input, Label, Textarea, Title } from "./ContactUsForm.styles";
import { submitContactFormAPI } from "../../apis/apis";  // Import the API function

const ContactUsForm: React.FC = () => {
  // State to handle form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [referral, setReferral] = useState("");
  const [message, setMessage] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "firstName") setFirstName(value);
    if (name === "lastName") setLastName(value);
    if (name === "email") setEmail(value);
    if (name === "referral") setReferral(value);
    if (name === "message") setMessage(value);
  };

  // Handle checkbox change for agreement
  const handleCheckboxChange = () => {
    setIsAgreed(!isAgreed);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !message || !isAgreed) {
      setError("Please fill in all required fields and agree to the terms.");
      return;
    }

    const contactData = {
      firstName,
      lastName,
      email,
      referral,
      message,
    };

    try {
      const response = await submitContactFormAPI(contactData);
      console.log(response)
      setSuccess("Your message has been sent successfully.");
      setError(null);  // Clear any previous errors
      // Reset form after successful submission
      setFirstName("");
      setLastName("");
      setEmail("");
      setReferral("");
      setMessage("");
      setIsAgreed(false);
    } catch (err) {
      setError("Failed to send message. Please try again later.");
      setSuccess(null);  // Clear any previous success messages
    }
  };

  return (
    <div className="relative">
      <Title>Contact Us</Title>
      <ContactFormWrapper>
        <Form onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <div className="w-1/2">
              <Label>First Name *</Label>
              <Input
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-1/2">
              <Label>Last Name *</Label>
              <Input
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <Label>Email *</Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
          />
          <Label>How did you find us or who were you referred by?</Label>
          <Input
            type="text"
            name="referral"
            value={referral}
            onChange={handleInputChange}
          />
          <Label>Message</Label>
          <Textarea
            name="message"
            value={message}
            onChange={handleInputChange}
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
              Agree with personal data processing. For more info please consult{" "}
              <a href="#" className="text-[#6dc7d1]">
                our privacy policy
              </a>
              .
            </span>
          </CheckboxWrapper>
          <Button type="submit">Send message</Button>
        </Form>
        {/* Display Error Message */}
        {error && <div style={{ color: "red" }}>{error}</div>}
        {/* Display Success Message */}
        {success && <div style={{ color: "green" }}>{success}</div>}
      </ContactFormWrapper>
    </div>
  );
};

export default ContactUsForm;
