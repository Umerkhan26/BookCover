import { useState } from "react";
import {
  FAQContainer,
  Question,
  Answer,
  Icon,
  QuestionWrapper,
} from "./FAQs.styles";
import FAQTitle from "./Title Section/title";
import { Helmet } from "react-helmet-async";

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
    question:
      "What is the difference between illustrated and photo manipulated book covers?",
    answer:
      "An illustration is created entirely from scratch using the digital painting technique. Photo manipulated book covers are covers combined from stock photos and manipulated with special effects in graphic design software.",
  },

  {
    question: "How long does it take to create a photo manipulated book cover?",
    answer:
      "It takes around 7-10 business days to create a book cover concept, which is the quickest timeline in the industry. Please, note, that further revisions require extra time.",
  },
  {
    question: "Who are your designers?",
    answer:
      "We have 5 in-house senior designers who work on your covers and specialize in different genres and techniques: Sharmoz, Ali, Shehryar, shahid, and umar. Our main office is located in Pakistan.",
  },
  {
    question: "What genres do you specialize in?",
    answer:
      "We design a book cover for all genres. If you need more examples of book covers in your genre, feel free to contact us!",
  },
  {
    question: "What stock images do you use?",
    answer:
      "We use only licensed, royalty-free stock photos from such websites as Depositphotos, Shutterstock, Twenty20, Envato Elements, Neostock, etc. Also, you don’t have to pay extra for stock images, the price you pay for your book cover includes all stock images used.",
  },
  {
    question: "What if I don't know what I want to see on the cover?",
    answer:
      "Actually, you don’t have to. It’s our job to analyze your book idea, target audience, and genre and come up with the cover design that will attract the right audience and catch attention from first sight.",
  },
  {
    question: "Can I order 2 or more concepts of the book cover design?",
    answer:
      "Yes, sure. You can order 2 concepts. The additional concept costs $100.",
  },
  {
    question: "Do I communicate directly with my designer?",
    answer:
      "Our designers spend 100% of their time creating a cover design for you and we don’t want to distract them. That’s why all communication, invoicing, and paperwork is handled by our in-house project managers.",
  },
  {
    question: "Can I use my own image for the cover?",
    answer:
      "We can use your image, but it should be licensed with a resolution of 300 DPI. Yet, we customize photos from stock photography sites and create illustrations for the ebook and print book cover designs",
  },
  {
    question: "Do you have any discount on book series?",
    answer:
      "Yes, when ordering book series, we give you 10% OFF each book cover, starting from the second one.",
  },
  {
    question: "Do you provide source files?",
    answer:
      "Lumeart studio provides a flattened source file with editable text in PSD format.",
  },
  {
    question: "How many revisions can I get?",
    answer:
      "We provide an unlimited number of revisions for book cover design. No hidden fees.",
  },
  {
    question: "Do you generate a barcode?",
    answer:
      "We can generate the barcode for your print book if you provide the ISBN. ISBNs for Amazon and IngramSpark are different. You should only purchase one for IngramSpark, and Amazon gives its free ISBN and generates a barcode.",
  },
  {
    question: "What if i am not satisfied with the results?",
    answer:
      "Don’t worry, we provide unlimited revisions to provide you with the cover of your dreams.",
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
    <div className="flex flex-col items-center justify-center w-full bg-white-50 ">
      <Helmet>
        <title>FAQs - Frequently Asked Questions</title>
      </Helmet>
      <div className="w-full">
        <FAQTitle />
      </div>

      {/* FAQ section */}
      <div className="">
        <FAQContainer>
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
      </div>
    </div>
  );
};

export default FAQ;
