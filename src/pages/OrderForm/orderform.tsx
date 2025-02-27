// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// import { fetchAddOnsByPackageId } from "../../apis/apis"; // Ensure correct import
// import { useNavigate } from "react-router-dom";

// import {
//   Container,
//   Row,
//   CheckoutLeft,
//   CheckoutRight,
//   Navbar,
//   NavbarBrand,
//   Intro,
//   FormGroup,
//   ItemCards,
//   ItemTitle,
//   ItemPrice,
//   Title,
//   Price,
//   ItemQuantity,
//   OrderButton,
//   InvoiceItems,
//   SummaryTitle,
//   CartContents,
//   TotalSection,
//   TotalText,
//   TotalAmount,
//   // Label,
//   // Input,
//   // EmailHelpText,
// } from "./orderform.styles";

// const OrderForm: React.FC = () => {
//   const { packageId } = useParams<{ packageId: string }>(); // Extract packageId from URL
//   const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
//   const [selectedServices, setSelectedServices] = useState<{ id: string; name: string; price: number; qty: number }[]>([]);
//   const [availableServices, setAvailableServices] = useState<{ _id: string; name: string; price: number; qty: number }[]>([]);
//   // const [orderStatus, setOrderStatus] = useState<"form" | "processing" | "completed">("form");
//   // const [orderId, setOrderId] = useState<string>("");
// const navigate = useNavigate()
//   useEffect(() => {
//     if (!packageId) {
//       console.log("No ID found");
//       return;
//     }

//     const fetchAddOns = async () => {
//       try {
//         const addOns = await fetchAddOnsByPackageId(packageId);
//         setAvailableServices(addOns);
//         console.log("Fetched Add-Ons:", addOns);
//       } catch (error) {
//         console.error("Failed to fetch add-ons:", error);
//       }
//     };

//     fetchAddOns();
//   }, [packageId]);

//   const handleOrderNow = () => {
//     // setOrderStatus("processing");
//     // setTimeout(() => {
//     //   setOrderId("B4344D22");
//     //   setOrderStatus("completed");
//     // }, 3000); // Simulate processing

//     navigate("/portal/orders/form");

//   };

//   const toggleItem = (id: string, name: string, price: number) => {
//     setSelectedServices((prev) => {
//       const existingItem = prev.find((item) => item.id === id);
//       if (existingItem) {
//         return prev.filter((item) => item.id !== id);
//       } else {
//         return [...prev, { id, name, price, qty: 1 }];
//       }
//     });

//     setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   const handleQuantityChange = (id: string, newQty: number) => {
//     setSelectedServices((prev) =>
//       prev.map((item) => (item.id === id ? { ...item, qty: newQty } : item))
//     );
//   };

//   const calculateTotal = () => {
//     return selectedServices.reduce((total, item) => total + item.price * item.qty, 0).toFixed(2);
//   };

//   // if (orderStatus === "processing") return <OrderProcessing />;
//   // if (orderStatus === "completed") return <OrderDetails orderId={orderId} email="umerkhattax@gmail.com" />;

//   return (
//     <Container>
//       <form id="payment-form">
//         <Row>
//           {/* Left Checkout Section */}
//           <CheckoutLeft>
//             <Navbar>
//               <NavbarBrand href="https://client.miblart.com">Mibl</NavbarBrand>
//             </Navbar>

//             <Intro>
//               Seeing $0 at checkout indicates that no prepayment is needed. You only pay once you are satisfied with the design concept.
//             </Intro>

//             {/* Add-Ons Selection */}
//             <FormGroup>
//               <label style={{ color: "#00254d", fontWeight: "500" }}>
//                 Add extra services to your order
//                 <span className="multiple ml-8">multiple</span>
//               </label>
//               <Row>
//                 {availableServices.map((item) => (
//                   <ItemCards
//                     key={item._id}
//                     onClick={() => toggleItem(item._id, item.name, item.price)}
//                     style={{ position: "relative", padding: "15px", borderRadius: "8px", cursor: "pointer", paddingTop: "10px" }}
//                   >
//                     {expandedItems[item._id] && (
//                       <span
//                         style={{
//                           position: "absolute",
//                           top: "8px",
//                           right: "4px",
//                           width: "18px",
//                           height: "18px",
//                           backgroundColor: "green",
//                           color: "white",
//                           fontSize: "14px",
//                           fontWeight: "bold",
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           borderRadius: "50%",
//                         }}
//                       >
//                         ✔
//                       </span>
//                     )}

//                     <ItemTitle style={{ marginBottom: "10px" }}>{item.name}</ItemTitle>

//                     {expandedItems[item._id] ? (
//                       <>
//                         <ItemQuantity>
//                           <input
//                             type="number"
//                             style={{ border: "2px solid black", borderRadius: "5px", width: "60px", textAlign: "center" }}
//                             value={selectedServices.find((s) => s.id === item._id)?.qty || 1}
//                             min="1"
//                             max="10"
//                             onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value, 10))}
//                           />
//                         </ItemQuantity>
//                         <ItemPrice>${item.price * (selectedServices.find((s) => s.id === item._id)?.qty || 1)}</ItemPrice>
//                       </>
//                     ) : (
//                       <ItemPrice>${item.price}</ItemPrice>
//                     )}
//                   </ItemCards>
//                 ))}
//               </Row>
//             </FormGroup>

//             Coupon Input
//             {/* <FormGroup>
//               <Label htmlFor="coupon">Coupon</Label>
//               <Input type="text" id="coupon" name="coupon" placeholder="Enter coupon code" />
//             </FormGroup> */}

//             {/* Email Field */}
//             {/* <FormGroup>
//               <Label htmlFor="email">Email</Label>
//               <Input type="email" id="email" name="email" value=""  />
//               <EmailHelpText>
//                 To change your email, go to{" "}
//                 <a href="https://client.miblart.com/portal/profile">your profile</a>.
//               </EmailHelpText>
//             </FormGroup> */}

//             {/* Order Button */}
//             <OrderButton type="submit" onClick={handleOrderNow}>
//               Complete Purchase
//             </OrderButton>
//           </CheckoutLeft>

//           {/* Right Summary Section */}
//           <CheckoutRight>
//             <InvoiceItems>
//               <SummaryTitle>Summary</SummaryTitle>
//               <CartContents>
//                 {selectedServices.length > 0 ? (
//                   selectedServices.map((item) => (
//                     <div key={item.id} style={{ marginBottom: "10px" }}>
//                       <Title>{item.name}</Title>
//                       <Price>${item.price * item.qty}</Price>
//                     </div>
//                   ))
//                 ) : (
//                   <div>
//                     <Title>No add-ons selected</Title>
//                   </div>
//                 )}
//               </CartContents>

//               <TotalSection>
//                 <TotalText>Total</TotalText>
//                 <TotalAmount>USD ${calculateTotal()}</TotalAmount>
//               </TotalSection>
//             </InvoiceItems>
//           </CheckoutRight>
//         </Row>
//       </form>
//     </Container>
//   );
// };

// export default OrderForm;


import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Already imported
import { fetchAddOnsByPackageId } from "../../apis/apis"; // Ensure correct import
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
} from "./orderform.styles";

const OrderForm: React.FC = () => {
  const { packageId } = useParams<{ packageId: string }>(); // Extract packageId from URL
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const [selectedServices, setSelectedServices] = useState<{ id: string; name: string; price: number; qty: number }[]>([]);
  const [availableServices, setAvailableServices] = useState<{ _id: string; name: string; price: number; qty: number }[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!packageId) {
      console.log("No ID found");
      return;
    }

    const fetchAddOns = async () => {
      try {
        const addOns = await fetchAddOnsByPackageId(packageId);
        setAvailableServices(addOns);
        console.log("Fetched Add-Ons:", addOns);
      } catch (error) {
        console.error("Failed to fetch add-ons:", error);
      }
    };

    fetchAddOns();
  }, [packageId]);

  const handleOrderNow = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission

    // Retrieve the user data from localStorage
    const user = JSON.parse(localStorage.getItem("user") || "{}"); // If not found, fallback to an empty object
    const userId = user?.userId; // Safely retrieve userId

    // Check if userId is available
    if (!userId) {
      console.error("User ID not found in localStorage.");
      return;
    }

    // Prepare order data to pass to the next page
    const orderData = {
      userId, // Retrieve userId from localStorage
      packageId,
      addOnIds: selectedServices.map(service => service.id), // Collect selected add-ons IDs
    };

    // Navigate to the next page and pass the order data
    navigate("/portal/orders/form", { state: orderData }); // Pass only userId, packageId, addOnIds
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
      prev.map((item) => (item.id === id ? { ...item, qty: newQty } : item))
    );
  };

  const calculateTotal = () => {
    return selectedServices.reduce((total, item) => total + item.price * item.qty, 0).toFixed(2);
  };

  return (
    <Container>
      <form id="payment-form">
        <Row>
          {/* Left Checkout Section */}
          <CheckoutLeft>
            <Navbar>
              <NavbarBrand href="https://client.miblart.com">Mibl</NavbarBrand>
            </Navbar>

            <Intro>
              Seeing $0 at checkout indicates that no prepayment is needed. You only pay once you are satisfied with the design concept.
            </Intro>

            {/* Add-Ons Selection */}
            <FormGroup>
              <label style={{ color: "#00254d", fontWeight: "500" }}>
                Add extra services to your order
                <span className="multiple ml-8">multiple</span>
              </label>
              <Row>
                {availableServices.map((item) => (
                  <ItemCards
                    key={item._id}
                    onClick={() => toggleItem(item._id, item.name, item.price)}
                    style={{ position: "relative", padding: "15px", borderRadius: "8px", cursor: "pointer", paddingTop: "10px" }}
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

                    <ItemTitle style={{ marginBottom: "10px" }}>{item.name}</ItemTitle>

                    {expandedItems[item._id] ? (
                      <>
                        <ItemQuantity>
                          <input
                            type="number"
                            style={{ border: "2px solid black", borderRadius: "5px", width: "60px", textAlign: "center" }}
                            value={selectedServices.find((s) => s.id === item._id)?.qty || 1}
                            min="1"
                            max="10"
                            onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value, 10))}
                          />
                        </ItemQuantity>
                        <ItemPrice>${item.price * (selectedServices.find((s) => s.id === item._id)?.qty || 1)}</ItemPrice>
                      </>
                    ) : (
                      <ItemPrice>${item.price}</ItemPrice>
                    )}
                  </ItemCards>
                ))}
              </Row>
            </FormGroup>

            <OrderButton type="submit" onClick={handleOrderNow}>
              Complete Purchase
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

export default OrderForm;
