import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home/home";
import FictionCover from "../pages/FictionCover/FictionCover";
import Illustrated from "../pages/Services/coverpages/illustrated";
import fictonCoverImg from "../assets/PageBanners/indieLUMEARTWEBPAGEFICTIONCOVER-01.jpg";
import BenefitsSection from "../pages/Benefits/benefits";
import { benefitsData } from "../services/benefits";
import Reviews from "../pages/reviews/reviews";
import DesignProcess from "../pages/DesignProcess/designProcess";
import Packages from "../pages/ourPackages/packages";
import SpecialEditionAddOns from "../pages/SpecialEditionAddOns/SpecialEditionAddOns";
// import { myPackagesData } from "../pages/ourPackages/packagesData";
import BookCoverRedesign from "../pages/BookCoverRedesign/BookCoverRedesign";
import LogoBranding from "../pages/logo&branding/logo&branding";
import NonFictonalCover from "../pages/NonFictionalCovers/NonFictonalCover";
import AudioBookCover from "../pages/AudioBookCover/AudioBookCover";
import ContactUs from "../components/ContactUs/ContactUs";
// import PortFolio from "../pages/Portfolio/Portfolio";
// import PortfolioWrapperWithTabs from "../pages/Portfolio/portfolio";
import AboutUs from "../components/AboutUs/AboutUs";
import PremiumCover from "../components/PremiumCover/premiumcovers";
import KindleVellaCover from "../components/KindleVellaCover/kindleVellacover";
import IllustratedCover from "../components/IllustratedCovers/illustratedcover";
import LogoDesign from "../components/LogoDesign/logodesign";
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
import UserDashboard from "../pages/UserDashboard/sidebar";
import Partner from "../components/Partner/Partner";
import FAQ from "../components/FAQs/FAQs";
import GetACover from "../components/GetACover/GetACover";
import Services from "../components/ServicesComponent/Services";
import OrderForm from "../pages/OrderForm/orderform";
import OrdersTable from "../pages/UserDashboard/myorder";
import DashboardContent from "../pages/UserDashboard/dashboard";
import ProfilePage from "../pages/UserDashboard/Profile/profile";
import InvoiceTable from "../pages/UserDashboard/Invoices/invoices";
import FormOrder from "../pages/UserDashboard/Form/form";
import PreviewPage from "../pages/UserDashboard/Form/preview";
import OrderSubmittedPage from "../pages/UserDashboard/Form/ordersubmitted";
// import IllustrationOrderForm from "../pages/OrderForm/illustratedorder";
// import Login from "../components/Login/login";
// import Register from "../components/register/register";
import BookCoverForm from "../pages/GetACover/cover";
import ProtectedRoute from "./ProtectedRoute";
import Admin from "../pages/Admin/admin";
import User from "../components/AdminDashboard/user";
import Order from "../components/AdminDashboard/Order/order";
import PortfolioWrapperWithTabs from "../pages/Portfolio/portfolio";
import TermsAndConditions from "../components/TermsAndConditions/TermsAndConditions";
import AdminCoverIdea from "../pages/adminCoverIdeas/AdminCoverIdea";
import MarketingMaterial from "../components/Marketing Material/marketing";
import { Helmet } from "react-helmet-async";
import VerifyEmailPage from "../pages/UserDashboard/Navbar/VerifyEmailPage";
import PrivacyPolicy from "../components/TermsAndConditions/PrivacyPolicy";
// import TopBar from "../components/TopBar/TopBar";
// import PortfolioWrapperWithTabs from "../pages/Portfolio/Portfolio";
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/book-cover-form" element={<BookCoverForm />} />
        {/* Wrap FictionCover inside Route and pass its props */}
        <Route
          path="/fictionCover"
          element={
            <>
              {" "}
              <Helmet>
                <title>Book Cover Design For Indie Authors</title>
                <meta
                  name="description"
                  content="Pay only when you are satisfied with the final book cover result."
                />
              </Helmet>
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
                // Pass the 'myPackagesData' as a prop to 'Packages' component
                packagesComponent={<Packages />}
                reviewsComponent={<Reviews />}
                specialEditionAddOnsComponent={<SpecialEditionAddOns />}
              />
            </>
          }
        />
        {/* Other Routes */}
        <Route
          path="/illustrated"
          element={
            <>
              <Helmet>
                <title>Illustrated Covers</title>
              </Helmet>
              <Illustrated />
            </>
          }
        />
        {/* Book Cover Redesign Route */}
        <Route
          path="/bookCoverRedesign"
          element={
            <>
              <Helmet>
                <title>Book Cover Redesign</title>
              </Helmet>
              <BookCoverRedesign />
            </>
          }
        />
        {/* Logo Branding Route and */}
        <Route
          path="/logoBrand"
          element={
            <>
              <Helmet>
                <title>Logo Branding</title>
              </Helmet>
              <LogoBranding />
            </>
          }
        />
        {/* Non-Fiction Route */}
        <Route
          path="/nonFiction"
          element={
            <>
              <Helmet>
                <title>Non-Fiction Book Covers</title>
              </Helmet>
              <NonFictonalCover />
            </>
          }
        />
        {/* Audio Book Cover Route */}
        <Route
          path="/audioBookCover"
          element={
            <>
              <Helmet>
                <title>Audio Book Covers</title>
              </Helmet>
              <AudioBookCover />
            </>
          }
        />
        <Route path="/verify-email/:token" element={<VerifyEmailPage />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/FAQs" element={<FAQ />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/GetACover" element={<GetACover />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio/*" element={<PortfolioWrapperWithTabs />}>
          {/* Default Route: When visiting /portfolio/, show CustomCover */}
          <Route index element={<CustomCover />} />

          {/* Subcategories directly under /portfolio/ */}
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
        ;
        <Route path="/aboutUs" element={<AboutUs />} />
      </Route>
      {/* <Route path="/login" element={<Login />} /> */}

      {/* <Route path="/register" element={<Register />} /> */}

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
      {/* <Route path="/order" element={<OrderForm />} /> */}
      <Route path="/order/:packageId" element={<OrderForm />} />

      {/* <Route path="/order/illustration" element={<IllustrationOrderForm />} /> */}

      <Route path="/Admin" element={<Admin />}>
        {/* Use relative path for nested routes */}
        <Route path="users" element={<User />} />
        <Route path="orders" element={<Order />} />
        <Route path="coverIdeas" element={<AdminCoverIdea />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
