import BookCoverRedesaign from "../../assets/PageBanner/7.webp";
import Packages from "../ourPackages/packages";
import SpecialEditionAddOns from "../SpecialEditionAddOns/SpecialEditionAddOns";
import RedesignExamples from "./RedesignExamples";
import RedesignForm from "./RedesignForm";
import { examples } from "./RedesignExampleData";
import { Helmet } from "react-helmet-async";
import FictionsCover from "../FictionCover/FictionCoverPage";

const BookCoverRedesign = () => {
  return (
    <div className="text-black">
      <Helmet>
        <title>Book Cover Redesign Services | Refresh Your Brand</title>
        <meta
          name="description"
          content="Revitalize your backlist with a professional cover redesign. Modernize your book's aesthetic to meet current market trends and improve CTR."
        />
        <meta
          name="keywords"
          content="book cover redesign, book cover design, custom book covers, graphic design, professional book covers"
        />
        <link
          rel="canonical"
          href="https://lumeartstudio.com/book-cover-redesign"
        />
      </Helmet>
      <FictionsCover
        title="Book Cover Redesign"
        subtitle=""
        image={BookCoverRedesaign}
        bookCoversText=""
        showCircles={false}
      />
      <Packages />
      <SpecialEditionAddOns />
      <RedesignExamples
        heading="Our Book Cover Redesign Examples"
        examples={examples}
      />
      <RedesignForm />
    </div>
  );
};

export default BookCoverRedesign;
