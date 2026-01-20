import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { fetchAddOnsByPackageId } from "../../apis/apis";
import {
  Container,
  Row,
  CheckoutLeft,
  CheckoutRight,
  Navbar,
  NavbarBrand,
  Intro,
  FormGroup,
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
} from "./orderform.styles";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

const OrderForm: React.FC = () => {
  const { packageId } = useParams<{ packageId: string }>(); // Extract packageId from URL
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {},
  );
  const [selectedServices, setSelectedServices] = useState<
    { id: string; name: string; price: number; qty: number }[]
  >([]);
  const [availableServices, setAvailableServices] = useState<
    { _id: string; name: string; price: number; qty: number }[]
  >([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!packageId) {
      return;
    }

    const price = location.state?.totalPrice;
    if (price) {
      setTotalPrice(price); // Set the total price passed from Packages component
    }

    const fetchAddOns = async () => {
      try {
        const addOns = await fetchAddOnsByPackageId(packageId);
        setAvailableServices(addOns);
      } catch (error) {
        console.error("Failed to fetch add-ons:", error);
      }
    };

    fetchAddOns();
  }, [packageId, location.state?.totalPrice]);

  const handleOrderNow = (event: React.FormEvent) => {
    event.preventDefault();

    // Show loader while processing
    setIsLoading(true);

    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const userId = user?.userId;

    if (!userId) {
      console.error("User ID not found in localStorage.");
      setIsLoading(false); // Hide loader if user is not found
      return;
    }

    const orderData = {
      userId,
      packageId,
      addOnIds: selectedServices.map((service) => service.id),
    };

    // First toast: Data saved successfully
    toast.success("Extra Services: Data saved successfully!");

    // Show loader and delay the next steps
    setTimeout(() => {
      // Second toast: Continuing to the client portal
      toast.success("For Order Information: Continuing to client portal");

      // Now navigate to the next page (client portal)
      setTimeout(() => {
        navigate("/portal/orders/form", { state: orderData });
        setIsLoading(false); // Hide loader after navigation
      }, 2000);
    }, 2000);
  };

  const toggleItem = (id: string, name: string, price: number) => {
    setSelectedServices((prev) => {
      const existingItem = prev.find((item) => item.id === id);
      if (existingItem) {
        return prev.filter((item) => item.id !== id);
      } else {
        return [...prev, { id, name, price, qty: 1 }];
      }
    });

    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleQuantityChange = (id: string, newQty: number) => {
    setSelectedServices((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: newQty } : item)),
    );
  };

  const calculateTotal = () => {
    return selectedServices
      .reduce((total, item) => total + item.price * item.qty, totalPrice)
      .toFixed(2);
  };

  return (
    <Container>
      <ToastContainer
        position="top-right"
        style={{ marginTop: "20px", fontWeight: "bold" }}
      />

      <form id="payment-form">
        <Row>
          {/* Left Checkout Section */}
          <CheckoutLeft>
            <Navbar>
              <NavbarBrand href="">Lumeart Studio</NavbarBrand>
            </Navbar>

            <Intro>
              Seeing $0 at checkout indicates that no prepayment is needed. You
              only pay once you are satisfied with the design concept.
            </Intro>

            {/* Add-Ons Selection */}
            <FormGroup>
              <Label>
                Add extra services to your order
                {/* <span className="multiple ml-8">multiple</span> */}
              </Label>
              <Row>
                {availableServices.map((item) => (
                  <ItemCards
                    key={item._id}
                    onClick={() => toggleItem(item._id, item.name, item.price)}
                    style={{
                      position: "relative",
                      padding: "15px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      paddingTop: "10px",
                    }}
                  >
                    {expandedItems[item._id] && (
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
                      {item.name}
                    </ItemTitle>

                    {expandedItems[item._id] ? (
                      <>
                        <ItemQuantity>
                          <input
                            type="number"
                            style={{
                              border: "2px solid black",
                              borderRadius: "5px",
                              width: "60px",
                              textAlign: "center",
                            }}
                            value={
                              selectedServices.find((s) => s.id === item._id)
                                ?.qty || 1
                            }
                            min="1"
                            max="10"
                            onChange={(e) =>
                              handleQuantityChange(
                                item._id,
                                parseInt(e.target.value, 10),
                              )
                            }
                          />
                        </ItemQuantity>
                        <ItemPrice>
                          $
                          {item.price *
                            (selectedServices.find((s) => s.id === item._id)
                              ?.qty || 1)}
                        </ItemPrice>
                      </>
                    ) : (
                      <ItemPrice>${item.price}</ItemPrice>
                    )}
                  </ItemCards>
                ))}
              </Row>
            </FormGroup>

            <OrderButton type="submit" onClick={handleOrderNow}>
              {isLoading ? <LoadingSpinner /> : "Next"}
            </OrderButton>
          </CheckoutLeft>

          {/* Right Summary Section */}
          <CheckoutRight>
            <InvoiceItems>
              <SummaryTitle>Summary</SummaryTitle>
              <CartContents>
                {selectedServices.length > 0 ? (
                  selectedServices.map((item) => (
                    <div key={item.id} style={{ marginBottom: "10px" }}>
                      <Title>{item.name}</Title>
                      <Price>${item.price * item.qty}</Price>
                    </div>
                  ))
                ) : (
                  <div>
                    <Title>No add-ons selected</Title>
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

// Loader spinner inside button
const LoadingSpinner = styled.div`
  border: 3px solid #f3f3f3;
  border-top: 3px solid #45a049;
  border-radius: 50%;
  width: 30px;
  margin-left: 335px;
  height: 30px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default OrderForm;
