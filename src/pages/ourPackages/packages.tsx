// import { useNavigate } from "react-router-dom";
// import {
//   PackageCard,
//   PackageContainer,
//   PackageTitle,
//   Price,
//   AddOns,
//   OrderButton,
// } from "./packages.styles";

// // Define the structure for each package object
// interface Package {
//   title: string;
//   image: string;
//   price: string;
//   features: string[];
//   freeAddons: string[];
// }

// // Define the type for the props passed to the Packages component
// interface PackagesProps {
//   packagesData: Package[];
// }

// const Packages: React.FC<PackagesProps> = ({ packagesData }) => {
//   const navigate = useNavigate();
//   const handleOrderNow = () => {
//     // Navigate to the form section
//     navigate("/order");
//   };
//   return (
//     <PackageContainer>
//       <PackageTitle>
//         Our <span className="text-[#6dc7d1]">Packages</span>
//       </PackageTitle>

//       <div className="packages-wrapper">
//         {packagesData.map((pkg, index) => (
//           <PackageCard key={index}>
//             <img src={pkg.image} alt={pkg.title} />

//             {/* Title and Price in the Same Row */}
//             <div className="title-price">
//               <h3 className="font-bold text-3xl text-black">{pkg.title}</h3>
//               <Price>{pkg.price}</Price>
//             </div>

//             {/* Features and Free Add-ons in Side-by-Side Layout */}
//             <div className="content-wrapper">
//               <ul className="features-list">
//                 {pkg.features.map((feature, idx) => (
//                   <li key={idx}>
//                     <span className="checkmark">✔</span> {feature}
//                   </li>
//                 ))}
//               </ul>

//               <div className="free-addons">
//                 <p className="free-title">FREE OF CHARGE</p>
//                 <ul>
//                   {pkg.freeAddons.map((addon, idx) => (
//                     <li key={idx}>
//                       <span className="checkmark">✔</span> {addon}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* Addon Options */}
//             <AddOns>
//               <div className="addons-options">
//                 <input
//                   type="radio"
//                   name={`concept-${index}`}
//                   id={`concept1-${index}`}
//                 />
//                 <label htmlFor={`concept1-${index}`}>1 concept</label>
//                 <input
//                   type="radio"
//                   name={`concept-${index}`}
//                   id={`concept2-${index}`}
//                 />
//                 <label htmlFor={`concept2-${index}`}>2 concepts (+$150)</label>
//               </div>
//             </AddOns>

//             <OrderButton onClick={handleOrderNow}>Order Now</OrderButton>
//           </PackageCard>
//         ))}
//       </div>
//     </PackageContainer>
//   );
// };

// export default Packages;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPackagesByPageAPI } from "../../apis/apis";
import {
  PackageCard,
  PackageContainer,
  PackageTitle,
  Price,
  AddOns,
  OrderButton,
} from "./packages.styles";

interface Package {
  id?: string;  // Ensure ID is optional for debugging
  _id?: string; // Some APIs use `_id`
  name: string;
  price: number;
  features: string[];
  freeFeatures: string[];
}

const Packages: React.FC = () => {
  const navigate = useNavigate();
  const [packagesData, setPackagesData] = useState<Package[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        console.log("Fetching packages...");
        const response = await getPackagesByPageAPI();

        if (!response || !Array.isArray(response)) {
          throw new Error("Invalid API response: Expected an array");
        }

        // Log the response to verify its structure
        console.log("Fetched packages:", response);

        // Ensure all packages have an ID
        const mappedPackages = response.map((pkg, index) => {
          const packageId = pkg.id || pkg._id; // Use `_id` if `id` is missing
          if (!packageId) {
            console.warn(`Warning: Package at index ${index} is missing an ID`, pkg);
          }
          return { ...pkg, id: packageId }; // Normalize ID field
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
  }, []);

  const handleOrderNow = (packageId: string | undefined) => {
    if (!packageId) {
      console.error("🚨 Package ID is undefined! Cannot navigate.");
      return;
    }

    console.log(`✅ Navigating to /order/${packageId}`);
    navigate(`/order/${packageId}`);
  };

  return (
    <PackageContainer>
      <PackageTitle>
        Our <span className="text-[#6dc7d1]">Packages</span>
      </PackageTitle>

      {loading ? (
        <p>Loading packages...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : packagesData.length > 0 ? (
        <div className="packages-wrapper">
          {packagesData.map((pkg, index) => (
            <PackageCard key={pkg.id || index}> 
              <h3 className="font-bold text-3xl text-black">{pkg.name}</h3>
              <Price>${pkg.price}</Price>

              <div className="content-wrapper">
                <ul className="features-list">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="checkmark">✔</span> {feature}
                    </li>
                  ))}
                </ul>

                <div className="free-addons">
                  <p className="free-title">FREE OF CHARGE</p>
                  <ul>
                    {pkg.freeFeatures.map((addon, idx) => (
                      <li key={idx}>
                        <span className="checkmark">✔</span> {addon}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <AddOns>
                <div className="addons-options">
                  <input type="radio" name={`concept-${index}`} id={`concept1-${index}`} />
                  <label htmlFor={`concept1-${index}`}>1 concept</label>
                  <input type="radio" name={`concept-${index}`} id={`concept2-${index}`} />
                  <label htmlFor={`concept2-${index}`}>2 concepts (+$150)</label>
                </div>
              </AddOns>

              {/* Debugging Log for ID */}
              <p>Debug: Package ID: {pkg.id}</p>

              <OrderButton onClick={() => handleOrderNow(pkg.id)}>Order Now</OrderButton>
            </PackageCard>
          ))}
        </div>
      ) : (
        <p>No packages found for this category.</p>
      )}
    </PackageContainer>
  );
};

export default Packages;
