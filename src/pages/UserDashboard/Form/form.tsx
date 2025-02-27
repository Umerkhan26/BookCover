import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FormOrder: React.FC = () => {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState("");
  const [payment, setPayment] = useState("one");
  const [narratorName, setNarratorName] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [series, setSeries] = useState("");
  const [summary, setSummary] = useState("");
  const [see, setSee] = useState("");
  const [cover, setCover] = useState("");
  const [order, setOrder] = useState("");

  console.log("Form component rendered");

  const handleReview = () => {
    const formData = {
      name,
      title,
      subtitle,
      narratorName,
      genre,
      series,
      summary,
      see,
      order,
      cover,
      preferences,
      payment,
    };
    navigate("/portal/orders/preview", { state: formData });
  };

  return (
    <div>
      {/* Header Section */}
      <HeaderContainer>
        <HeaderContent>
          <HeaderTitle>Your project information</HeaderTitle>
          <HeaderSubtitle>Website banner or ad $40</HeaderSubtitle>
        </HeaderContent>
        <HeaderActions>
          <HeaderButton onClick={() => console.log("Save draft clicked")}>
            Save draft
          </HeaderButton>
          <HeaderButton onClick={() => console.log("Copy clicked")}>
            Copy
          </HeaderButton>
        </HeaderActions>
      </HeaderContainer>

      {/* Form Section */}
      <FormContainer>
        <FormGroup>
          <Label>Your name</Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Book Title</Label>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Book Subtitle</Label>
          <Input
            type="text"
            value={subtitle}
            onChange={(e) => setSubTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Narrator's name</Label>
          <Input
            type="text"
            value={narratorName}
            onChange={(e) => setNarratorName(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Genre</Label>
          <Input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Will this book continue as a series?</Label>
          <Select value={series} onChange={(e) => setSeries(e.target.value)}>
            <option value="">Please select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="unknown">I don’t know</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>
            Brief summary of your book, including major characters, important
            objects, setting, key elements or themes (optional)
          </Label>
          <TextArea
            placeholder="Provide your preferences..."
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>What is the preferred cover style?</Label>
          <Select value={series} onChange={(e) => setSeries(e.target.value)}>
            <option value="">Please select...</option>
            <option value="yes">With detailed characters</option>
            <option value="no">Only with sellhouettes</option>
            <option value="no">Object-base covers</option>
            <option value="no">Typographic covers</option>
            <option value="unknown">I don’t know</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>
            What would you like to see on the cover? If you have any references
            or comparable covers, attach them below{" "}
          </Label>
          <TextArea
            placeholder="Provide your cover..."
            value={see}
            onChange={(e) => setSee(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Upload your Files (optional)</Label>
          <FileInputContainer>
            <FileInput type="file" />
            <FileInputLabel>Upload a file or drag and drop</FileInputLabel>
            <FileInputHint>Max file size: 300 MB</FileInputHint>
          </FileInputContainer>
        </FormGroup>

        <FormGroup>
          <Label>
            Let us know if you have copyrights for the files you have attached
            and want to use them for this design{" "}
          </Label>
          <TextArea
            placeholder="Provide your preferences..."
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>
            Please let us know if we can share your book cover on our social
            media and website?
          </Label>
          <Select value={cover} onChange={(e) => setCover(e.target.value)}>
            <option value="">Please select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="unknown">Yes , but only after the book</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>Is this your first order with Miblart? </Label>
          <Select value={order} onChange={(e) => setOrder(e.target.value)}>
            <option value="">Please select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>
            Please provide the file sizes you would like to receive (optional)
          </Label>
          <Input type="text" placeholder="File sizes..." />
        </FormGroup>

        <FormGroup>
          <Label>
            Please let us know if the final design can be displayed in our
            portfolio after the order is complete (optional)
          </Label>
          <CheckboxContainer>
            <Checkbox type="checkbox" />
            <CheckboxLabel>Allow display in portfolio</CheckboxLabel>
          </CheckboxContainer>
        </FormGroup>
        <FormGroup>
          <Label>
            How did you hear about Miblart? If by referral, who referred you?
          </Label>
          <Input type="text" placeholder="Referral details..." />
        </FormGroup>
        <FormGroup>
          <Label>
            When the design is completed, how would you like to pay?
          </Label>
          <RadioContainer>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="payment"
                value="one"
                checked={payment === "one"}
                onChange={() => setPayment("one")}
              />{" "}
              Pay in one payment
            </RadioLabel>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="payment"
                value="two"
                checked={payment === "two"}
                onChange={() => setPayment("two")}
              />{" "}
              Split into two equal monthly installments
            </RadioLabel>
          </RadioContainer>
        </FormGroup>
        <SubmitButton onClick={handleReview}>Review</SubmitButton>
      </FormContainer>
    </div>
  );
};

export default FormOrder;

// Styled Components
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const HeaderContent = styled.div`
  flex: 1;
`;

const HeaderTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 8px;
  font-weight: bold;
  color: #00254d;
`;

const HeaderSubtitle = styled.div`
  font-size: 14px;
  color: #6c757d;
`;

const HeaderActions = styled.div`
  display: flex;
  gap: 10px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const HeaderButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  color: #00254d;
  background-color: transparent;
  border: 1px solid #00254d;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: rgb(194, 189, 189);
    color: #fff;
  }
`;

const FormContainer = styled.div`
  padding: 20px;
  margin: 0 auto;
  color: black;
  padding: 3rem;
  border-radius: 8px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #00254d;
  margin-bottom: 9px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const FileInputContainer = styled.div`
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
  border-radius: 4px;
`;

const FileInput = styled.input`
  display: none;
`;

const FileInputLabel = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
`;

const FileInputHint = styled.div`
  font-size: 12px;
  color: #999;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #333;
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioLabel = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
`;

const RadioInput = styled.input`
  margin-right: 10px;
`;

const SubmitButton = styled.button`
  padding: 0.375rem 2.5rem;
  float: right;
  font-size: 16px;
  color: #fff;
  background-color: green;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: rgb(11, 142, 43);
  }
`;
