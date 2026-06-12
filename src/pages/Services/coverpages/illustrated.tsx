import illustratedCover from "../../../assets/PageBanner/LUME-ART-WEB-PAGE-FICTION-COVER-4.webp";
import IllusratedDesignProcess from "./illustratedDesignProcess";
import { Helmet } from "react-helmet-async";
import FictionsCover from "../../FictionCover/FictionCoverPage";
// import Reviews from '../../reviews/reviews'
// import Packages from '../../ourPackages/packages'
const Illustrated = () => {
  return (
    <div className="text-black ">
      <Helmet>
        <title>Custom Illustrated Book Covers | Bespoke Digital Art</title>
        <meta
          name="description"
          content="Stand out with unique, hand-drawn digital illustrations. 100% custom artwork tailored to your characters, world-building, and story arc."
        />
        <link rel="canonical" href="https://lumeartstudio.com/illustrated" />
      </Helmet>
      <FictionsCover
        title="Illustrated Book Cover Design From Scratch"
        subtitle=""
        // subtitle="Immerse readers into your world"
        image={illustratedCover} // Can be dynamic as well
        bookCoversText=""
        textAlignTop
        // packagesComponent={<Packages />}
        // reviewsComponent={<Reviews />}
      />
      <IllusratedDesignProcess />
    </div>
  );
};

export default Illustrated;
