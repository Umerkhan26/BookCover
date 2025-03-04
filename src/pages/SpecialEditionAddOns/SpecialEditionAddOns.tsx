import {
  AddOnsContainer,
  Title,
  AddOnsGrid,
  AddOnCard,
  OrderButton,
} from "./SpecialEditionAddOns.styles";
import specialadd1 from "../../assets/specialadd1.png";
import specialadd2 from "../../assets/specialadd2.png";
import specialadd3 from "../../assets/specialadd3.png";
import specialadd4 from "../../assets/specialadd4.png";
import { useNavigate } from "react-router-dom";

const addOns = [
  {
    title: "Sprayed edges design",
    image: specialadd1, // Placeholder image
    packageId: "sprayed-edges", // Unique ID

  },
  {
    title: "Decorative pages design",
    image: specialadd2,
    packageId: "sprayed-edges", // Unique ID

  },
  {
    title: "Foiled cover design",
    image: specialadd3,
    packageId: "sprayed-edges", // Unique ID

  },
  {
    title: "Chapter header & breaker design",
    image: specialadd4,
    packageId: "sprayed-edges", // Unique ID

  },
];

const SpecialEditionAddOns = () => {
  const navigate = useNavigate();

  const handleOrderNow = (packageId: string | undefined) => {
    if (!packageId) {
      console.error("🚨 Package ID is undefined! Cannot navigate.");
      return;
    }

    console.log(`✅ Navigating to /order/${packageId}`);
    navigate(`/order/${packageId}`);
  };

  return (
    <AddOnsContainer>
      <Title>
        Special Edition Add-Ons <br />
        <span>From $40</span>
      </Title>
      <AddOnsGrid>
        {addOns.map((item, index) => (
          <AddOnCard key={index}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <OrderButton onClick={() => handleOrderNow(item.packageId)}>
              Order Now
            </OrderButton>
          </AddOnCard>
        ))}
      </AddOnsGrid>
    </AddOnsContainer>
  );
};

export default SpecialEditionAddOns;
