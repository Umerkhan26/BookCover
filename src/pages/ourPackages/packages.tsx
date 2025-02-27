import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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

  // Extract the page name from the URL path (e.g., "/fictionCover" -> "fictionCover")
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
          .filter(pkg => pkg.page === pageName) // Filter based on page name
          .map((pkg, index) => {
            const packageId = pkg.id || pkg._id;
            if (!packageId) {
              console.warn(`Warning: Package at index ${index} is missing an ID`, pkg);
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

  const handleOrderNow = (packageId: string | undefined) => {
    if (!packageId) {
      console.error("🚨 Package ID is undefined! Cannot navigate.");
      return;
    }

    console.log(`✅ Navigating to /order/${packageId}`);
    navigate(`/order/${packageId}`);
  };

  // Debugging the data before rendering it
  useEffect(() => {
    if (packagesData.length > 0) {
      console.log("Mapped Packages Data:", packagesData);
    }
  }, [packagesData]);

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
                {/* Debug: Check Features Data */}
                <ul className="features-list">
                  {pkg.features.length > 0 ? (
                    pkg.features.map((feature, idx) => (
                      <li key={idx}>
                        <span className="checkmark">✔</span> {feature}
                      </li>
                    ))
                  ) : (
                    <li>No features available.</li>
                  )}
                </ul>

                {/* Debug: Check Free Features Data */}
                <div className="free-addons">
                  <p className="free-title">FREE OF CHARGE</p>
                  <ul>
                    {pkg.freeFeatures.length > 0 ? (
                      pkg.freeFeatures.map((addon, idx) => (
                        <li key={idx}>
                          <span className="checkmark">✔</span> {addon}
                        </li>
                      ))
                    ) : (
                      <li>No free features available.</li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Debug: Check Concept Pricing Data */}
              <AddOns>
                <div className="addons-options">
                  {pkg.conceptPricing.length > 0 ? (
                    pkg.conceptPricing.map((concept, conceptIdx) => (
                      <div key={conceptIdx}>
                        <input 
                          type="radio" 
                          name={`concept-${index}`} 
                          id={`concept${conceptIdx}-${index}`} 
                        />
                        <label htmlFor={`concept${conceptIdx}-${index}`}>
                          {concept.conceptCount} concept{concept.conceptCount > 1 ? 's' : ''}
                          {concept.additionalPrice > 0 && ` (+$${concept.additionalPrice})`}
                        </label>
                      </div>
                    ))
                  ) : (
                    <p>No concept pricing available.</p>
                  )}
                </div>
              </AddOns>

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
