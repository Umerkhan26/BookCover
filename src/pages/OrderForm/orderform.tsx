import React, { useState } from "react";
import OrderProcessing from "../../components/OrderProcessing/order";
import OrderDetails from "../../components/OrderProcessing/orderdetails";
import {
  Container,
  Row,
  CheckoutLeft,
  CheckoutRight,
  Navbar,
  NavbarBrand,
  Intro,
  FormGroup,
  ItemCard,
  ItemCards,
  ItemTitle,
  ItemPrice,
  Title,
  Price,
  ItemQuantity,
  OrderButton,
  InvoiceItems,
  SummaryTitle,
  CartContents,
  TotalSection,
  TotalText,
  TotalAmount,
  Label,
  Input,
  EmailHelpText
} from "./orderform.styles";

const OrderForm: React.FC = () => {
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

  const handleOrderNow = () => {
    setOrderStatus("processing");
    setTimeout(() => {
      setOrderId("B4344D22");
      setOrderStatus("completed");
    }, 3000); // Simulate processing time
  };

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
      title: "Social media banner or cover $35",
      price: "$0.00",
    },
    { id: "field_5_1", title: "Bookmark $40", price: "$0.00" },
    {
      id: "field_5_2",
      title: "Animated book cover design $50",
      price: "$0.00",
    },
    { id: "field_5_3", title: "Dust jacket design $40", price: "$0.00" },
    { id: "field_5_4", title: "Website banner or ad $40", price: "$0.00" },
    { id: "field_5_5", title: "Business card design $40", price: "$0.00" },
    { id: "field_5_6", title: "Marketing materials $100", price: "$0.00" },
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
      <form id="payment-form">
        <Row>
          <CheckoutLeft>
            <Navbar>
              <NavbarBrand href="https://client.miblart.com">Mibl</NavbarBrand>
            </Navbar>

            <Intro>
              Seeing $0 at checkout indicates that no prepayment is needed. You
              only pay once you are satisfied with the design concept.
            </Intro>

            <FormGroup>
              <ItemCard>
                <ItemTitle>Cover formatting for an audiobook $30</ItemTitle>
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
                <ItemPrice>$0.00</ItemPrice>
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
                    onClick={() => toggleItem(item.id, item.title, item.price)}
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
              Complete Purchase
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
    </Container>
  );
};

export default OrderForm;
