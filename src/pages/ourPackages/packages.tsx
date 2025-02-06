import { PackageCard, PackageContainer, PackageTitle, Price, AddOns, OrderButton } from './packages.styles';

// Define the structure for each package object
interface Package {
  title: string;
  image: string;
  price: string;
  features: string[];
  freeAddons: string[];
}

// Define the type for the props passed to the Packages component
interface PackagesProps {
  packagesData: Package[];
}

const Packages: React.FC<PackagesProps> = ({ packagesData }) => {
  return (
    <PackageContainer>
      <PackageTitle>Our <span className='text-[#6dc7d1]'>Packages</span></PackageTitle>

      <div className="packages-wrapper">
        {packagesData.map((pkg, index) => (
          <PackageCard key={index}>
            <img src={pkg.image} alt={pkg.title} />

            {/* Title and Price in the Same Row */}
            <div className="title-price">
              <h3 className="font-bold text-3xl text-black">{pkg.title}</h3>
              <Price>{pkg.price}</Price>
            </div>

            {/* Features and Free Add-ons in Side-by-Side Layout */}
            <div className="content-wrapper">
              <ul className="features-list">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}><span className="checkmark">✔</span> {feature}</li>
                ))}
              </ul>

              <div className="free-addons">
                <p className="free-title">FREE OF CHARGE</p>
                <ul>
                  {pkg.freeAddons.map((addon, idx) => (
                    <li key={idx}><span className="checkmark">✔</span> {addon}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Addon Options */}
            <AddOns>
              <div className="addons-options">
                <input type="radio" name={`concept-${index}`} id={`concept1-${index}`} />
                <label htmlFor={`concept1-${index}`}>1 concept</label>
                <input type="radio" name={`concept-${index}`} id={`concept2-${index}`} />
                <label htmlFor={`concept2-${index}`}>2 concepts (+$150)</label>
              </div>
            </AddOns>

            <OrderButton>Order Now</OrderButton>
          </PackageCard>
        ))}
      </div>
    </PackageContainer>
  );
};

export default Packages;
