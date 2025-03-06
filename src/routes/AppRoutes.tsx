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
import Login from "../components/Login/login";
import Register from "../components/register/register";
import BookCoverForm from "../pages/GetACover/cover";
import ProtectedRoute from "./ProtectedRoute";
import Admin from "../pages/Admin/admin";
import User from "../components/AdminDashboard/user";
import Order from "../components/AdminDashboard/Order/order";
import PortfolioWrapperWithTabs from "../pages/Portfolio/Portfolio";
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
              packagesComponent={<Packages />}
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
        <Route path="/partner" element={<Partner />} />
        <Route path="/FAQs" element={<FAQ />} />
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
        </Route>
        ;
        <Route path="/aboutUs" element={<AboutUs />} />
      </Route>
      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

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
      </Route>
    </Routes>
  );
};

export default AppRoutes;
