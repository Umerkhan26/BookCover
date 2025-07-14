import FictionCover from "../FictionCover/FictionCover";
import BookCoverRedesaign from "../../assets/PageBanners/redesignLUMEARTWEBPAGEFICTIONCOVER-03.jpg";
import Packages from "../ourPackages/packages";
// import { myPackagesData } from "../ourPackages/packagesData";
import SpecialEditionAddOns from "../SpecialEditionAddOns/SpecialEditionAddOns";
import RedesignExamples from "./RedesignExamples";
import RedesignForm from "./RedesignForm";
import { examples } from "./RedesignExampleData";
import { Helmet } from "react-helmet-async"; // Correct import for async version

const BookCoverRedesign = () => {
  return (
    <div className="text-black">
      <Helmet>
        <title>Book Cover Redesign</title>
        <meta
          name="description"
          content="Professional book cover redesign services to give your book a fresh, eye-catching look."
        />
        <meta
          name="keywords"
          content="book cover redesign, book cover design, custom book covers, graphic design, professional book covers"
        />
      </Helmet>
      <FictionCover
        title="Book Cover Redesign"
        subtitle=""
        image={BookCoverRedesaign} // Can be dynamic as well
        bookCoversText=""
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
