// import { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { getPackagesByPageAPI } from "../../apis/apis";
// import {
//   PackageCard,
//   PackageContainer,
//   PackageTitle,
//   Price,
//   AddOns,
//   OrderButton,
// } from "./packages.styles";

// interface Package {
//   id?: string;
//   _id?: string;
//   name: string;
//   price: number;
//   features: string[];
//   freeFeatures: string[];
//   conceptPricing: { conceptCount: number; additionalPrice: number }[];
//   page: string;
// }

// const Packages: React.FC = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [packagesData, setPackagesData] = useState<Package[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedConcepts, setSelectedConcepts] = useState<{ [key: string]: number[] }>({}); // Track selected concepts (packageId -> concept indexes)
//   const [totalPrice, setTotalPrice] = useState<number>(0); // Total price with package + selected concepts

//   // Extract the page name from the URL path (e.g., "/fictionCover" -> "fictionCover")
//   const pageName = location.pathname.split("/").pop() || "";

//   useEffect(() => {
//     const fetchPackages = async () => {
//       if (!pageName) {
//         setError("Page name is missing from the URL");
//         setLoading(false);
//         return;
//       }

//       try {
//         console.log("Fetching packages for page:", pageName);
//         const response = await getPackagesByPageAPI(pageName);

//         if (!response || !Array.isArray(response)) {
//           throw new Error("Invalid API response: Expected an array");
//         }

//         console.log("Fetched packages:", response);

//         const mappedPackages = response
//           .filter(pkg => pkg.page === pageName) // Filter based on page name
//           .map((pkg, index) => {
//             const packageId = pkg.id || pkg._id;
//             if (!packageId) {
//               console.warn(`Warning: Package at index ${index} is missing an ID`, pkg);
//             }
//             return { ...pkg, id: packageId };
//           });

//         setPackagesData(mappedPackages);
//       } catch (error) {
//         console.error("Error fetching packages:", error);
//         setError("Failed to load packages. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPackages();
//   }, [pageName]);

//   // Handle concept selection and update the total price
//   const handleConceptChange = (packageId: string, conceptIdx: number, additionalPrice: number) => {
//     const updatedConcepts = { ...selectedConcepts };

//     // Initialize array for packageId if it doesn't exist
//     if (!updatedConcepts[packageId]) {
//       updatedConcepts[packageId] = [];
//     }

//     // Handle selecting and deselecting concepts
//     if (updatedConcepts[packageId].includes(conceptIdx)) {
//       updatedConcepts[packageId] = updatedConcepts[packageId].filter(idx => idx !== conceptIdx); // Remove the concept
//     } else {
//       updatedConcepts[packageId].push(conceptIdx); // Add the selected concept
//     }

//     // Calculate the total price based on selected concepts
//     const selectedPackage = packagesData.find(pkg => pkg.id === packageId);
//     let newTotalPrice = selectedPackage?.price || 0;

//     // Loop through selected concepts for this package
//     updatedConcepts[packageId].forEach(conceptIdx => {
//       if (selectedPackage && selectedPackage.conceptPricing[conceptIdx]) {
//         const selectedConcept = selectedPackage.conceptPricing[conceptIdx];
//         if (selectedConcept.additionalPrice > 0) {
//           newTotalPrice += selectedConcept.additionalPrice; // Add the concept price if it's not free
//         }
//       }
//     });

//     setSelectedConcepts(updatedConcepts);
//     setTotalPrice(newTotalPrice); // Update the total price
//   };

//   // Handle order now with updated price
// // Handle order now with updated price
// const handleOrderNow = (packageId: string | undefined) => {
//   const token = localStorage.getItem("token"); // Check if token exists

//   if (!token) {
//     console.warn("🚨 No token found! Redirecting to login...");
//     localStorage.setItem("redirectAfterLogin", `/order/${packageId}`); // Store intended URL
//     navigate("/login");
//     return;
//   }

//   if (!packageId) {
//     console.error("🚨 Package ID is undefined! Cannot navigate.");
//     return;
//   }

//   const selectedPackage = packagesData.find(pkg => pkg.id === packageId);

//   if (!selectedPackage) {
//     console.error("Package not found.");
//     return;
//   }

//   let finalPrice = selectedPackage.price; // Start with the base package price

//   // Loop through selected concepts for this package and add additional prices
//   const selectedConceptsForPackage = selectedConcepts[packageId] || [];
//   selectedConceptsForPackage.forEach(conceptIdx => {
//     const selectedConcept = selectedPackage.conceptPricing[conceptIdx];
//     if (selectedConcept && selectedConcept.additionalPrice > 0) {
//       finalPrice += selectedConcept.additionalPrice; // Add concept price if it's not free
//     }
//   });

//   console.log(`✅ Navigating to /order/${packageId} with total price: $${finalPrice}`);

//   // Pass total price along with the package ID to the order page
//   navigate(`/order/${packageId}`, { state: { totalPrice: finalPrice } });
// };

//   return (
//     <PackageContainer>
//       <PackageTitle>
//         Our <span className="text-[#6dc7d1]">Packages</span>
//       </PackageTitle>

//       {loading ? (
//         <p>Loading packages...</p>
//       ) : error ? (
//         <p className="text-red-500">{error}</p>
//       ) : packagesData.length > 0 ? (
//         <div className="packages-wrapper">
//           {packagesData.map((pkg, index) => (
//             <PackageCard key={pkg.id || index}>
//               {/* Title and Price in the same row */}
//               <div className="title-price">
//                 <h3 style={{ fontSize: "15px" }} className="text-black">{pkg.name}</h3>
//                 <Price style={{ fontSize: "18px" }}>${pkg.price}</Price>
//               </div>

//               <div className="content-wrapper" style={{ display: "flex", justifyContent: "flex-start" }}>
//                 <ul className="features-list" style={{ marginRight: "20px" }}>
//                   {pkg.features.length > 0 ? (
//                     pkg.features.map((feature, idx) => (
//                       <li key={idx}>
//                         <span className="checkmark">✔</span> {feature}
//                       </li>
//                     ))
//                   ) : (
//                     <li>No features available.</li>
//                   )}
//                 </ul>

//                 <div className="free-addons " style={{
//                   borderRadius: "8px",
//                   padding: "15px",
//                   marginTop: "0",
//                   marginLeft: "-19px",
//                 }}>
//                   <p className="free-title" style={{ fontWeight: "bold", marginBottom: "8px" }}>FREE OF CHARGE</p>
//                   <ul>
//                     {pkg.freeFeatures.length > 0 ? (
//                       pkg.freeFeatures.map((addon, idx) => (
//                         <li key={idx}>
//                           <span className="checkmark">✔</span> {addon}
//                         </li>
//                       ))
//                     ) : (
//                       <li>No free features available.</li>
//                     )}
//                   </ul>
//                 </div>
//               </div>

//               <AddOns>
//                 <div className="addons-options">
//                   {pkg.conceptPricing.length > 0 ? (
//                     pkg.conceptPricing.map((concept, conceptIdx) => (
//                       <div key={conceptIdx}>
//                         <input
//                           type="checkbox"
//                           checked={selectedConcepts[pkg.id || ""]?.includes(conceptIdx) || false}
//                           onChange={() => handleConceptChange(pkg.id || "", conceptIdx, concept.additionalPrice)}
//                           id={`concept${conceptIdx}-${index}`}
//                         />
//                         <label className="ml-2" htmlFor={`concept${conceptIdx}-${index}`}>
//                           {concept.conceptCount} concept{concept.conceptCount > 1 ? 's' : ''}
//                           {concept.additionalPrice > 0 && ` (+$${concept.additionalPrice})`}
//                         </label>
//                       </div>
//                     ))
//                   ) : (
//                     <p>No concept pricing available.</p>
//                   )}
//                 </div>
//               </AddOns>

//               <OrderButton onClick={() => handleOrderNow(pkg.id)}>Order Now</OrderButton>
//             </PackageCard>
//           ))}
//         </div>
//       ) : (
//         <p>No packages found for this category.</p>
//       )}
//     </PackageContainer>
//   );
// };

// export default Packages;

import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getPackagesByPageAPI } from "../../apis/apis";
import LoginModal from "../../components/Login/LoginModel"; // Import the modal
import {
  PackageCard,
  PackageContainer,
  PackageTitle,
  Price,
  AddOns,
  OrderButton,
} from "./packages.styles";

interface Package {
  id?: string;
  _id?: string;
  name: string;
  price: number;
  features: string[];
  freeFeatures: string[];
  conceptPricing: { conceptCount: number; additionalPrice: number }[];
  page: string;
}

const Packages: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [packagesData, setPackagesData] = useState<Package[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedConcepts, setSelectedConcepts] = useState<{
    [key: string]: number[];
  }>({});
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const pageName = location.pathname.split("/").pop() || "";

  useEffect(() => {
    const fetchPackages = async () => {
      if (!pageName) {
        setError("Page name is missing from the URL");
        setLoading(false);
        return;
      }

      try {
        console.log("Fetching packages for page:", pageName);
        const response = await getPackagesByPageAPI(pageName);

        if (!response || !Array.isArray(response)) {
          throw new Error("Invalid API response: Expected an array");
        }

        console.log("Fetched packages:", response);

        const mappedPackages = response
          .filter((pkg) => pkg.page === pageName)
          .map((pkg, index) => {
            const packageId = pkg.id || pkg._id;
            if (!packageId) {
              console.warn(
                `Warning: Package at index ${index} is missing an ID`,
                pkg
              );
            }
            return { ...pkg, id: packageId };
          });

        setPackagesData(mappedPackages);
      } catch (error) {
        console.error("Error fetching packages:", error);
        setError("Failed to load packages. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, [pageName]);

  const handleLoginSuccess = (token: string) => {
    localStorage.setItem("token", token);
    setShowLoginModal(false);
    // navigateToOrderPage(selectedPackageId as string);
  };

  const handleConceptChange = (packageId: string, conceptIdx: number) => {
    const updatedConcepts = { ...selectedConcepts };

    if (!updatedConcepts[packageId]) {
      updatedConcepts[packageId] = [];
    }

    if (updatedConcepts[packageId].includes(conceptIdx)) {
      updatedConcepts[packageId] = updatedConcepts[packageId].filter(
        (idx) => idx !== conceptIdx
      );
    } else {
      updatedConcepts[packageId].push(conceptIdx);
    }

    const selectedPackage = packagesData.find((pkg) => pkg.id === packageId);
    let newTotalPrice = selectedPackage?.price || 0;

    updatedConcepts[packageId].forEach((conceptIdx) => {
      if (selectedPackage && selectedPackage.conceptPricing[conceptIdx]) {
        const selectedConcept = selectedPackage.conceptPricing[conceptIdx];
        if (selectedConcept.additionalPrice > 0) {
          newTotalPrice += selectedConcept.additionalPrice;
        }
      }
    });

    setSelectedConcepts(updatedConcepts);
    setTotalPrice(newTotalPrice);
  };

  const handleOrderNow = (packageId: string | undefined) => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.warn("🚨 No token found! Redirecting to login...");
      localStorage.setItem("redirectAfterLogin", `/order/${packageId}`);
      setShowLoginModal(true);
      return;
    }

    if (!packageId) {
      console.error("🚨 Package ID is undefined! Cannot navigate.");
      return;
    }

    const selectedPackage = packagesData.find((pkg) => pkg.id === packageId);

    if (!selectedPackage) {
      console.error("Package not found.");
      return;
    }

    let finalPrice = selectedPackage.price;
    const selectedConceptsForPackage = selectedConcepts[packageId] || [];
    selectedConceptsForPackage.forEach((conceptIdx) => {
      const selectedConcept = selectedPackage.conceptPricing[conceptIdx];
      if (selectedConcept && selectedConcept.additionalPrice > 0) {
        finalPrice += selectedConcept.additionalPrice;
      }
    });

    console.log(
      `✅ Navigating to /order/${packageId} with total price: $${finalPrice}`
    );

    navigate(`/order/${packageId}`, { state: { totalPrice: finalPrice } });
  };

  return (
    <PackageContainer>
      <PackageTitle>
        Our <span className="text-[#6dc7d1]">Packages</span>
      </PackageTitle>
      <span className="text-white"> ${totalPrice}</span>

      {loading ? (
        <p>Loading packages...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : packagesData.length > 0 ? (
        <div className="packages-wrapper">
          {packagesData.map((pkg, index) => (
            <PackageCard className="popular" key={pkg.id || index}>
              <div className="title-price">
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: "600",
                    color: "#00254D",
                    fontFamily: "Montserrat, sans-serif",
                    letterSpacing: "0.5px",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.05)",
                  }}
                  className="text-black"
                >
                  {pkg.name}
                </h3>

                <Price
                  style={{
                    fontSize: "26px",
                    fontWeight: "700",
                  }}
                >
                  ${pkg.price}
                </Price>
              </div>

              <div
                className="content-wrapper"
                style={{ display: "flex", justifyContent: "flex-start" }}
              >
                <ul className="features-list" style={{ marginRight: "20px" }}>
                  {pkg.features.length > 0 ? (
                    pkg.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))
                  ) : (
                    <li>No features available.</li>
                  )}
                </ul>

                <div
                  className="free-addons"
                  style={{
                    borderRadius: "8px",
                    padding: "15px",
                    marginTop: "0",
                    marginLeft: "-19px",
                  }}
                >
                  <p
                    className="free-title"
                    style={{ fontWeight: "bold", marginBottom: "8px" }}
                  >
                    FREE OF CHARGE
                  </p>
                  <ul>
                    {pkg.freeFeatures.length > 0 ? (
                      pkg.freeFeatures.map((addon, idx) => (
                        <li key={idx}>{addon}</li>
                      ))
                    ) : (
                      <li>No free features available.</li>
                    )}
                  </ul>
                </div>
              </div>

              <AddOns>
                <div className="addons-options">
                  {pkg.conceptPricing.length > 0 ? (
                    pkg.conceptPricing.map((concept, conceptIdx) => (
                      <div key={conceptIdx}>
                        <input
                          type="checkbox"
                          checked={
                            selectedConcepts[pkg.id || ""]?.includes(
                              conceptIdx
                            ) || false
                          }
                          onChange={() =>
                            handleConceptChange(pkg.id || "", conceptIdx)
                          }
                          id={`concept${conceptIdx}-${index}`}
                        />
                        <label
                          className="ml-2"
                          htmlFor={`concept${conceptIdx}-${index}`}
                        >
                          {concept.conceptCount} concept
                          {concept.conceptCount > 1 ? "s" : ""}
                          {concept.additionalPrice > 0 &&
                            ` (+$${concept.additionalPrice})`}
                        </label>
                      </div>
                    ))
                  ) : (
                    <p>No concept pricing available.</p>
                  )}
                </div>
              </AddOns>

              <OrderButton onClick={() => handleOrderNow(pkg.id)}>
                Order Now
              </OrderButton>
            </PackageCard>
          ))}
        </div>
      ) : (
        <p>No packages found for this category.</p>
      )}
      <LoginModal
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={handleLoginSuccess}
        disableRedirect={true}
      />
    </PackageContainer>
  );
};

export default Packages;
