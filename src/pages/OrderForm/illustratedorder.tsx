import React, { useState } from "react";
import styled from "styled-components";
import OrderProcessing from "../../components/OrderProcessing/order";
import OrderDetails from "../../components/OrderProcessing/orderdetails";
import { useNavigate } from "react-router-dom";
import BillingForm from "./billingform";

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 15px;
  box-sizing: border-box;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const CheckoutLeft = styled.div`
  flex: 7;
  overflow-y: auto;
  max-height: calc(100vh - 40px);
  padding-right: 20px;
`;

const CheckoutRight = styled.aside`
  flex: 4;
  background-color: green;
  position: sticky;
  top: 20px;
  box-sizing: border-box;
  margin-right: -48px;
  padding: 0;
`;

const Navbar = styled.div`
  padding: 10px;
  margin-bottom: 20px;
`;

const NavbarBrand = styled.a`
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
  text-decoration: none;
`;

const Intro = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  color: #666;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const ItemCard = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const ItemCards = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  word-wrap: break-word;
  border-radius: 0.25rem;
  flex: 0 0 calc((100% - 40px) / 3);
`;

const ItemTitle = styled.div`
  font-size: 14.5px;
  font-weight: 500;
  padding-bottom: 0.5rem;
  color: #00254d;
`;

const ItemPrice = styled.div`
  font-size: 14px;
  color: #666;
`;

const Title = styled.div`
  font-size: 14.5px;
  font-weight: 600;
  color: #fff;
`;

const Price = styled.div`
  font-size: 14px;
  color: #fffff;
`;

const ItemQuantity = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  color: black;
`;

const OrderButton = styled.button`
  background-color: #6dc7d1;
  color: white;
  width: 100%;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: rgb(82, 157, 165);
  }
`;

const InvoiceItems = styled.div`
  padding: 20px;
  border-radius: 8px;
`;

const SummaryTitle = styled.h2`
  font-size: 1.35rem;
  padding: 0.7rem 2rem;
`;

const CartContents = styled.div`
  padding: 2rem;
  margin-bottom: 2rem;
  position: relative;
  border-radius: 0.25rem;
  font-size: 0.81rem;
`;

const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 2rem;
`;

const TotalText = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const TotalAmount = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;
const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
`;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  color: grey;
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const EmailHelpText = styled.div`
  font-size: 12px;
  color: #666;
  margin-top: 5px;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// Form Component
const IllustrationOrderForm: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );
  const [selectedServices, setSelectedServices] = useState<
    { id: string; title: string; price: string; quantity: number }[]
  >([
    {
      id: "default_1",
      title: "Cover formatting for an audiobook $30",
      price: "$0.00",
      quantity: 1,
    },
  ]);

  const [orderStatus, setOrderStatus] = useState<
    "form" | "processing" | "completed"
  >("form");
  const [orderId, setOrderId] = useState<string>("");
  const [showBillingForm, setShowBillingForm] = useState(false);

  const handleOrderNow = () => {
    setShowBillingForm(true); // Show the BillingForm when "Next" is clicked
  };

  // const handleOrderNow = () => {
  //   setOrderStatus("processing");
  //   setTimeout(() => {
  //     setOrderId("B4344D22");
  //     setOrderStatus("completed");
  //   }, 3000); // Simulate processing time
  // };

  const toggleItem = (id: string, title: string, price: string) => {
    setSelectedServices((prev) => {
      const existingItem = prev.find((item) => item.id === id);
      if (existingItem) {
        return prev.filter((item) => item.id !== id);
      } else {
        return [...prev, { id, title, price, quantity: 1 }];
      }
    });

    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const services = [
    {
      id: "field_5_0",
      title: "Fantasy map design - from $300",
      price: "$150.00",
    },
    {
      id: "field_5_1",
      title:
        "Marketing materials (cover reveal graphic, social media cover, book release banner, ad image) $100",
      price: "$0.00",
    },
    {
      id: "field_5_2",
      title: "Book release banner $35",
      price: "$0.00",
    },
    { id: "field_5_3", title: "Cover reveal graphic $35", price: "$0.00" },
    {
      id: "field_5_4",
      title: "Paperback or hardback cover formatting for extra platform $30",
      price: "$0.00",
    },
    {
      id: "field_5_5",
      title: "Animated book cover design $50",
      price: "$0.00",
    },
    {
      id: "field_5_6",
      title: "Social media banner or cover $35",
      price: "$0.00",
    },
    {
      id: "field_5_7",
      title: "Bookmark $40",
      price: "$0.00",
    },

    {
      id: "field_5_8",
      title: "Box set (existing design) $40",
      price: "$0.00",
    },

    {
      id: "field_5_9",
      title: "Additional character",
      price: "$0.00",
    },
  ];

  const calculateTotal = () => {
    return selectedServices
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace("$", ""));
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  if (orderStatus === "processing") {
    return <OrderProcessing />;
  }

  if (orderStatus === "completed") {
    return <OrderDetails orderId={orderId} email="umerkhattax@gmail.com" />;
  }

  return (
    <Container>
      {showBillingForm ? ( // Conditionally render BillingForm
        <BillingForm />
      ) : (
        <form id="payment-form">
          <Row>
            <CheckoutLeft>
              <Navbar>
                <NavbarBrand href="https://client.miblart.com">
                  Mibl
                </NavbarBrand>
              </Navbar>

              <Intro>
                Illustrated book cover designed from scratch with up to 2
                characters and background. $195 prepayment is required. 100%
                money-back guarantee.
              </Intro>

              <FormGroup>
                <ItemCard>
                  <ItemTitle>
                    Illustrated book cover designed from scratch with up to 2
                    characters and background.
                    <br />
                    You'll be able to choose an illustration style in the order
                    form.
                    <br />A $195 prepayment is required.
                  </ItemTitle>
                  <ItemQuantity>
                    <input
                      type="number"
                      name="quantity_3"
                      style={{
                        border: "2px solid black",
                        borderRadius: "5px",
                        width: "60px",
                        textAlign: "center",
                      }}
                      defaultValue="1"
                      min="1"
                      max="10"
                    />
                  </ItemQuantity>
                  <ItemPrice>$195.00</ItemPrice>
                </ItemCard>
              </FormGroup>

              <FormGroup>
                <label style={{ color: "#00254d", fontWeight: "500" }}>
                  Add extra services to your order
                  <span className="multiple ml-8">multiple</span>
                </label>
                <Row>
                  {services.map((item) => (
                    <ItemCards
                      key={item.id}
                      onClick={() =>
                        toggleItem(item.id, item.title, item.price)
                      }
                      style={{
                        position: "relative",
                        padding: "15px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        paddingTop: "10px",
                      }}
                    >
                      {expandedItems[item.id] && (
                        <span
                          style={{
                            position: "absolute",
                            top: "8px",
                            right: "4px",
                            width: "18px",
                            height: "18px",
                            backgroundColor: "green",
                            color: "white",
                            fontSize: "14px",
                            fontWeight: "bold",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                          }}
                        >
                          ✔
                        </span>
                      )}

                      <ItemTitle style={{ marginBottom: "10px" }}>
                        {item.title}
                      </ItemTitle>

                      {expandedItems[item.id] ? (
                        <>
                          <ItemQuantity
                            style={{ marginBottom: "5px" }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <input
                              type="number"
                              name={`quantity_${item.id}`}
                              style={{
                                border: "2px solid black",
                                borderRadius: "5px",
                                width: "60px",
                                textAlign: "center",
                              }}
                              defaultValue="1"
                              min="1"
                              max="10"
                              onClick={(e) => e.stopPropagation()}
                              onChange={(e) => e.stopPropagation()}
                            />
                          </ItemQuantity>
                          <ItemPrice>{item.price}</ItemPrice>
                        </>
                      ) : (
                        <ItemPrice>{item.price}</ItemPrice>
                      )}
                    </ItemCards>
                  ))}
                </Row>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="coupon">Coupon</Label>
                <Input
                  type="text"
                  id="coupon"
                  name="coupon"
                  placeholder="Enter coupon code"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value="umerkhattax@gmail.com"
                  readOnly
                />
                <EmailHelpText>
                  To change your email, go to{" "}
                  <a href="https://client.miblart.com/portal/profile">
                    your profile
                  </a>
                  .
                </EmailHelpText>
              </FormGroup>

              <FormGroup>
                <div
                  className="g-recaptcha"
                  data-sitekey="6LdePgsaAAAAAKe7WUNTkvXyiCH7kX69eG2kQTSj"
                ></div>
              </FormGroup>

              <OrderButton type="submit" onClick={handleOrderNow}>
                Next
              </OrderButton>
            </CheckoutLeft>

            <CheckoutRight>
              <InvoiceItems>
                <SummaryTitle>Summary</SummaryTitle>
                <CartContents>
                  {selectedServices.length > 0 ? (
                    selectedServices.map((item) => (
                      <div key={item.id} style={{ marginBottom: "10px" }}>
                        <Title>{item.title}</Title>
                        <Price>{item.price}</Price>
                      </div>
                    ))
                  ) : (
                    <div>
                      <Title>Cover formatting for an audiobook $30</Title>
                      <Price>$0.00</Price>
                    </div>
                  )}
                </CartContents>

                <TotalSection>
                  <TotalText>Total</TotalText>
                  <TotalAmount>USD ${calculateTotal()}</TotalAmount>
                </TotalSection>
              </InvoiceItems>
            </CheckoutRight>
          </Row>
        </form>
      )}
    </Container>
  );
};

export default IllustrationOrderForm;
