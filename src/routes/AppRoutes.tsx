import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home/home";
import fictonCoverImg from "../assets/PageBanner/1 (1).webp";

import FictionCover from "../pages/FictionCover/FictionCover";
import Illustrated from "../pages/Services/coverpages/illustrated";
import BookCoverRedesign from "../pages/BookCoverRedesign/BookCoverRedesign";
import LogoBranding from "../pages/logo&branding/logo&branding";
import NonFictonalCover from "../pages/NonFictionalCovers/NonFictonalCover";
import AudioBookCover from "../pages/AudioBookCover/AudioBookCover";

import ContactUs from "../components/ContactUs/ContactUs";
import AboutUs from "../components/AboutUs/AboutUs";
import Partner from "../components/Partner/Partner";
import FAQ from "../components/FAQs/FAQs";
import GetACover from "../components/GetACover/GetACover";
import Services from "../components/ServicesComponent/Services";

import BenefitsSection from "../pages/Benefits/benefits";
import { benefitsData } from "../services/benefits";
import Reviews from "../pages/reviews/reviews";
import DesignProcess from "../pages/DesignProcess/designProcess";
import Packages from "../pages/ourPackages/packages";
import SpecialEditionAddOns from "../pages/SpecialEditionAddOns/SpecialEditionAddOns";

import PortfolioWrapperWithTabs from "../pages/Portfolio/portfolio";
import CustomCover from "../components/CustomBookCovers/custombookcover";
import Romance from "../components/CustomBookCovers/SubCatagories/romance";
import Fantasy from "../components/CustomBookCovers/SubCatagories/fantasy";
import UrbanFantasy from "../components/CustomBookCovers/SubCatagories/urbanfantasy";
import Fiction from "../components/CustomBookCovers/SubCatagories/fiction";
import Horror from "../components/CustomBookCovers/SubCatagories/horror";
import MysteryThrillerSuspense from "../components/CustomBookCovers/SubCatagories/mysterythrillersuspense";
import NonFiction from "../components/CustomBookCovers/SubCatagories/nonfiction";
import Paranormal from "../components/CustomBookCovers/SubCatagories/paranormal";
import SciFi from "../components/CustomBookCovers/SubCatagories/sciFi";
import YoungAdult from "../components/CustomBookCovers/SubCatagories/youngadult";
import CozyMystery from "../components/CustomBookCovers/SubCatagories/cozymystery";

import PremiumCover from "../components/PremiumCover/premiumcovers";
import KindleVellaCover from "../components/KindleVellaCover/kindleVellacover";
import IllustratedCover from "../components/IllustratedCovers/illustratedcover";
import LogoDesign from "../components/LogoDesign/logodesign";
import MarketingMaterial from "../components/Marketing Material/marketing";

import TermsAndConditions from "../components/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "../components/TermsAndConditions/PrivacyPolicy";

import ProtectedRoute from "./ProtectedRoute";
import UserDashboard from "../pages/UserDashboard/sidebar";
import DashboardContent from "../pages/UserDashboard/dashboard";
import OrdersTable from "../pages/UserDashboard/myorder";
import ProfilePage from "../pages/UserDashboard/Profile/profile";
import InvoiceTable from "../pages/UserDashboard/Invoices/invoices";
import FormOrder from "../pages/UserDashboard/Form/form";
import PreviewPage from "../pages/UserDashboard/Form/preview";
import OrderSubmittedPage from "../pages/UserDashboard/Form/ordersubmitted";

import BookCoverForm from "../pages/GetACover/cover";
import OrderForm from "../pages/OrderForm/orderform";

import Admin from "../pages/Admin/admin";
import User from "../components/AdminDashboard/user";
import Order from "../components/AdminDashboard/Order/order";
import AdminCoverIdea from "../pages/adminCoverIdeas/AdminCoverIdea";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route
          path="/fiction-cover"
          element={
            <FictionCover
              title="Book Cover Design For Indie Authors"
              subtitle="Pay Only When You are Satisfied With The final result"
              image={fictonCoverImg}
              bookCoversText=""
              benefitsComponent={
                <BenefitsSection
                  title={
                    <>
                      Here's What Benefits <span>You Get</span>
                    </>
                  }
                  benefits={benefitsData}
                />
              }
              designProcessComponent={<DesignProcess />}
              packagesComponent={<Packages />}
              reviewsComponent={<Reviews />}
              specialEditionAddOnsComponent={<SpecialEditionAddOns />}
            />
          }
        />

        <Route path="/illustrated" element={<Illustrated />} />
        <Route path="/book-cover-redesign" element={<BookCoverRedesign />} />
        <Route path="/logo-branding" element={<LogoBranding />} />
        <Route path="/non-fiction-cover" element={<NonFictonalCover />} />
        <Route path="/audio-book-cover" element={<AudioBookCover />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/get-a-cover" element={<GetACover />} />
        <Route path="/services" element={<Services />} />

        <Route path="/portfolio/*" element={<PortfolioWrapperWithTabs />}>
          <Route index element={<CustomCover />} />
          <Route path="fantasy" element={<Fantasy />} />
          <Route path="romance" element={<Romance />} />
          <Route path="urban-fantasy" element={<UrbanFantasy />} />
          <Route path="young-adult" element={<YoungAdult />} />
          <Route path="cozy-mystery" element={<CozyMystery />} />
          <Route path="paranormal" element={<Paranormal />} />
          <Route
            path="mystery-thriller-suspense"
            element={<MysteryThrillerSuspense />}
          />
          <Route path="horror" element={<Horror />} />
          <Route path="sci-fi" element={<SciFi />} />
          <Route path="non-fiction" element={<NonFiction />} />
          <Route path="fiction" element={<Fiction />} />
          <Route path="premium-covers" element={<PremiumCover />} />
          <Route path="kindle-vella-covers" element={<KindleVellaCover />} />
          <Route path="illustrated-covers" element={<IllustratedCover />} />
          <Route path="logo-design" element={<LogoDesign />} />
          <Route path="marketing-materials" element={<MarketingMaterial />} />
        </Route>

        <Route path="/about-us" element={<AboutUs />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/portal" element={<UserDashboard />}>
          <Route index element={<DashboardContent />} />
          <Route path="orders" element={<OrdersTable />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="invoices" element={<InvoiceTable />} />
          <Route path="orders/form" element={<FormOrder />} />
          <Route path="orders/preview" element={<PreviewPage />} />
          <Route path="orders/submitted" element={<OrderSubmittedPage />} />
        </Route>
      </Route>

      <Route path="/order/:packageId" element={<OrderForm />} />

      <Route path="/admin" element={<Admin />}>
        <Route path="users" element={<User />} />
        <Route path="orders" element={<Order />} />
        <Route path="coverIdeas" element={<AdminCoverIdea />} />
      </Route>

      <Route path="/book-cover-form" element={<BookCoverForm />} />
    </Routes>
  );
};

export default AppRoutes;
