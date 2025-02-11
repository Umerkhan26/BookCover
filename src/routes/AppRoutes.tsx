import { Navigate, Route, Routes } from "react-router-dom";
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
import ContactUs from "../components/ContactUs/ContactUs";
// import PortFolio from "../pages/Portfolio/Portfolio";
import PremiumCovers from "../components/PremiumCover/premiumcovers";
import CustomBookCovers from "../components/CustomBookCovers/custombookcover";
import PortfolioWrapperWithTabs from "../pages/Portfolio/Portfolio";
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

        <Route path="/portfolio/*" element={<PortfolioWrapperWithTabs />}>
          {/* Redirect /portfolio to /portfolio/custom-book-covers */}
          <Route index element={<Navigate to="custom-book-covers" replace />} />

          {/* CustomBookCovers and its subcategories */}
          <Route path="custom-book-covers" element={<CustomBookCovers />}>
            {/* <Route index element={<Fantasy />} /> Default subcategory */}
            {/* <Route path="fantasy" element={<Fantasy />} /> */}
            {/* <Route path="romance" element={<Romance />} /> */}
            {/* <Route path="urban-fantasy" element={<UrbanFantasy />} /> */}
            {/* <Route path="young-adult" element={<YoungAdult />} /> */}
            {/* <Route path="cozy-mystery" element={<CozyMystery />} /> */}
            {/* <Route path="paranormal" element={<Paranormal />} /> */}
            {/* <Route path="mystery-thriller-suspense" element={<MysteryThrillerSuspense />} /> */}
            {/* <Route path="horror" element={<Horror />} /> */}
            {/* <Route path="sci-fi" element={<SciFi />} /> */}
            {/* <Route path="non-fiction" element={<NonFiction />} /> */}
            {/* <Route path="fiction" element={<Fiction />} /> */}
          </Route>

          {/* Other main category routes */}
          <Route path="premium-covers" element={<PremiumCovers />} />
          {/* <Route path="kindle-vella-covers" element={<KindleVellaCovers />} /> */}
          {/* <Route path="illustrated-covers" element={<IllustratedCovers />} /> */}
          {/* <Route path="formatting-layout" element={<FormattingLayout />} /> */}
          {/* <Route path="logo-design" element={<LogoDesign />} /> */}
          {/* <Route path="marketing-materials" element={<MarketingMaterials />} /> */}
        </Route>
        <Route path="/aboutUs" element={<AboutUs />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
