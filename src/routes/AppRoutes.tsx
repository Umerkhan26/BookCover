import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home/home";
import FictionCover from "../pages/FictionCover/FictionCover";
import Illustrated from "../pages/Services/coverpages/illustrated";
import fictonCoverImg from "../assets/fictionCover.png";
import BenefitsSection from "../pages/Benefits/benefits";
import { benefitsData } from "../services/benefits";
import Reviews from "../pages/reviews/reviews";
import DesignProcess from "../pages/DesignProcess/designProcess";
import Packages from "../pages/ourPackages/packages";
import SpecialEditionAddOns from "../pages/SpecialEditionAddOns/SpecialEditionAddOns";
import { myPackagesData } from "../pages/ourPackages/packagesData";
import BookCoverRedesign from "../pages/BookCoverRedesign/BookCoverRedesign";
import LogoBranding from "../pages/logo&branding/logo&branding";
import NonFictonalCover from "../pages/NonFictionalCovers/NonFictonalCover";
import AudioBookCover from "../pages/AudioBookCover/AudioBookCover";
import CoverPortfolio from "../pages/Portfolio/portfolio";
import ContactUs from "../components/ContactUs/ContactUs";
import AboutUs from "../components/AboutUs/AboutUs";
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        {/* Wrap FictionCover inside Route and pass its props */}
        <Route
          path="/fictionCover"
          element={
            <FictionCover
              title="Book Cover Design For Indie Authors"
              subtitle="PAY ONLY WHEN YOU'RE SATISFIED WITH THE FINAL RESULT"
              image={fictonCoverImg}
              bookCoversText=""
              benefitsComponent={
                <BenefitsSection
                  title={
                    <>
                      Self-Publishing Authors Love Working <span>with Us</span>
                    </>
                  }
                  benefits={benefitsData}
                />
              }
              designProcessComponent={<DesignProcess />}
              // Pass the 'myPackagesData' as a prop to 'Packages' component
              packagesComponent={<Packages packagesData={myPackagesData} />}
              reviewsComponent={<Reviews />}
              specialEditionAddOnsComponent={<SpecialEditionAddOns />}
            />
          }
        />

        {/* Other Routes */}
        <Route path="/illustrated" element={<Illustrated />} />
        <Route path="/bookCoverRedesign" element={<BookCoverRedesign />} />
        <Route path="/logoBrand" element={<LogoBranding />} />
        <Route path="/nonFiction" element={<NonFictonalCover />} />
        <Route path="/audioBookCover" element={<AudioBookCover />} />
        <Route path="/contactUs" element={<ContactUs />} />


        <Route path="/portfolio" element={<CoverPortfolio />} />
        <Route path="/aboutUs" element={<AboutUs />} />

      </Route>
    </Routes>
  );
};

export default AppRoutes;
