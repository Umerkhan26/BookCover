import React, { useState } from "react";
import {
  Section,
  Title,
  HighlightedText,
  FAQItem,
  QuestionRow,
  IconCircle,
  ToggleIcon,
  Answer,
} from "./LogoBrandingQA.styles";

const faqs = [
  {
    question: "How long does it take to get my author logo ready?",
    answer: "You will get a result in just 5 business days.",
  },
  {
    question: "How many logo design revisions do I get?",
    answer:
      "We offer an unlimited number of revisions, so you may request as many changes as you need.",
  },
  {
    question: "Who owns the copyright to my author logo?",
    answer:
      "All the copyright belongs to you, but MiblArt retains the right to publish author logo designs in the portfolio on our website and social media.",
  },
  {
    question: "Why do I need branding guidelines?",
    answer:
      "Branding guidelines will help you keep the consistent design on all the platforms and become recognizable among your audience.",
  },
  {
    question: "What final files will I receive?",
    answer: "You will get all the source files in EPS, PNG, and JPG format.",
  },
];

const LogoBrandingQA: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section>
      {/* Title */}
      <Title>
        Logo Design <HighlightedText>Q&A</HighlightedText>
      </Title>

      {/* FAQ List */}
      {faqs.map((faq, index) => (
        <FAQItem key={index} onClick={() => toggleFAQ(index)}>
          {/* Question Row */}
          <QuestionRow>
            <div style={{ display: "flex", alignItems: "center" }}>
              <IconCircle>?</IconCircle>
              {faq.question}
            </div>
            <ToggleIcon isOpen={openIndex === index}>▼</ToggleIcon>
          </QuestionRow>

          {/* Answer */}
          {openIndex === index && <Answer isOpen>{faq.answer}</Answer>}
        </FAQItem>
      ))}
    </Section>
  );
};

export default LogoBrandingQA;
