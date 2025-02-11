import React from "react";
import { Button, CheckboxWrapper, ContactFormWrapper, Form, Input, Label, Textarea, Title } from "./ContactUsForm.styles";


const ContactUsForm: React.FC = () => {
  return (
    <div className="relative">
      <Title>Contact Us</Title>
      <ContactFormWrapper>
        <Form>
          <div className="flex gap-4">
            <div className="w-1/2">
              <Label>First Name *</Label>
              <Input type="text" required />
            </div>
            <div className="w-1/2">
              <Label>Last Name *</Label>
              <Input type="text" required />
            </div>
          </div>
          <Label>Email *</Label>
          <Input type="email" required />
          <Label>How did you find us or who were you referred by?</Label>
          <Input type="text" />
          <Label>Message</Label>
          <Textarea></Textarea>
          <CheckboxWrapper>
            <input type="checkbox" />
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
      </ContactFormWrapper>
    </div>
  );
};

export default ContactUsForm;
