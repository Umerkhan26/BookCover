import { useState } from "react";
import { FAQContainer, FAQTitle, Question, Answer, Icon, QuestionWrapper } from "./FAQs.styles";

// Define a type for FAQ items
interface FAQItem {
  question: string;
  answer: string;
}

// Explicitly type the `faqs` array
const faqs: FAQItem[] = [
  {
    question: "What is your process of book cover design?",
    answer:
      "First, you need to make the order and fill in the creative brief, so we can learn more about your book and target audience. Note, that we take no prepayment for photo-manipulated book cover design and start working on your cover. We research typography, layouts, and color themes common to your genre to make sure that your book cover design will fit the market You get the first draft in 7-10 business days. The first draft is not a finished version of your book cover design that will be improved and polished throughout the process. If you need any changes, we are happy to implement them, as we have no limitations in the number of revisions.  After everything is approved, we send you the invoice. After the payment is confirmed, you get the final files.",
  },
  {
    question: "What is the difference between illustrated and photo manipulated book covers?",
    answer:
      "An illustration is created entirely from scratch using the digital painting technique. Photo manipulated book covers are covers combined from stock photos and manipulated with special effects in graphic design software.",
  },
  {
    question: "What information do I need to send you?",
    answer:
      "You need to provide your book title, author name, genre, and any specific ideas or references you have for the cover.",
  },
  {
    question: "How long does it take to create a photo manipulated book cover?",
    answer:
      "You need to provide your book title, author name, genre, and any specific ideas or references you have for the cover.",
  },
  {
    question: "Who are your designers?",
    answer:
      "You need to provide your book title, author name, genre, and any specific ideas or references you have for the cover.",
  },  {
    question: "What genres do you specialize in?",
    answer:
      "You need to provide your book title, author name, genre, and any specific ideas or references you have for the cover.",
  },  {
    question: "What stock images do you use?",
    answer:
      "You need to provide your book title, author name, genre, and any specific ideas or references you have for the cover.",
  },
  {
    question: "What if I don't know what I want to see on the cover?",
    answer:
      "You need to provide your book title, author name, genre, and any specific ideas or references you have for the cover.",
  },{
    question: "Can I order 2 or more concepts of the book cover design?",
    answer:
      "You need to provide your book title, author name, genre, and any specific ideas or references you have for the cover.",
  },{
    question: "Do I communicate directly with my designer?",
    answer:
      "You need to provide your book title, author name, genre, and any specific ideas or references you have for the cover.",
  },{
    question: "Can I use my own image for the cover?",
    answer:
      "You need to provide your book title, author name, genre, and any specific ideas or references you have for the cover.",
  },
  {
    question: "What final files will I receive?",
    answer:
      "You need to provide your book title, author name, genre, and any specific ideas or references you have for the cover.",
  },
  {
    question: "Do you provide source files?",
    answer:
      "You need to provide your book title, author name, genre, and any specific ideas or references you have for the cover.",
  },
  {
    question: "How many revisions can I get?",
    answer:
      "You need to provide your book title, author name, genre, and any specific ideas or references you have for the cover.",
  },
  {
    question: "Can I use my own image for the cover?",
    answer:
      "You need to provide your book title, author name, genre, and any specific ideas or references you have for the cover.",
  },
  {
    question: "Can I use my own image for the cover?",
    answer:
      "You need to provide your book title, author name, genre, and any specific ideas or references you have for the cover.",
  },
];

const FAQ: React.FC = () => {
  // Define state with proper type
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Properly type `index` parameter
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <FAQTitle>Frequently Asked Questions</FAQTitle>
      {faqs.map((faq, index) => (
        <QuestionWrapper key={index}>
          <Question onClick={() => toggleFAQ(index)}>
            <span>{faq.question}</span>
            <Icon>{openIndex === index ? "▲" : "▼"}</Icon>
          </Question>
          {openIndex === index && <Answer>{faq.answer}</Answer>}
        </QuestionWrapper>
      ))}
    </FAQContainer>
  );
};

export default FAQ;

