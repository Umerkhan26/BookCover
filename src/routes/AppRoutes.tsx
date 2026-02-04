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
// Lazy load components for code splitting
const FictionCover = lazy(() => import("../pages/FictionCover/FictionCover"));
const Illustrated = lazy(
  () => import("../pages/Services/coverpages/illustrated"),
);
const BookCoverRedesign = lazy(
  () => import("../pages/BookCoverRedesign/BookCoverRedesign"),
);
const LogoBranding = lazy(() => import("../pages/logo&branding/logo&branding"));
const NonFictonalCover = lazy(
  () => import("../pages/NonFictionalCovers/NonFictonalCover"),
);
const AudioBookCover = lazy(
  () => import("../pages/AudioBookCover/AudioBookCover"),
);
const ContactUs = lazy(() => import("../components/ContactUs/ContactUs"));
const AboutUs = lazy(() => import("../components/AboutUs/AboutUs"));
const PremiumCover = lazy(
  () => import("../components/PremiumCover/premiumcovers"),
);
const KindleVellaCover = lazy(
  () => import("../components/KindleVellaCover/kindleVellacover"),
);
const IllustratedCover = lazy(
  () => import("../components/IllustratedCovers/illustratedcover"),
);
const LogoDesign = lazy(() => import("../components/LogoDesign/logodesign"));
const CustomCover = lazy(
  () => import("../components/CustomBookCovers/custombookcover"),
);
const Romance = lazy(
  () => import("../components/CustomBookCovers/SubCatagories/romance"),
);
const Fantasy = lazy(
  () => import("../components/CustomBookCovers/SubCatagories/fantasy"),
);
const UrbanFantasy = lazy(
  () => import("../components/CustomBookCovers/SubCatagories/urbanfantasy"),
);
const Fiction = lazy(
  () => import("../components/CustomBookCovers/SubCatagories/fiction"),
);
const Horror = lazy(
  () => import("../components/CustomBookCovers/SubCatagories/horror"),
);
const MysteryThrillerSuspense = lazy(
  () =>
    import("../components/CustomBookCovers/SubCatagories/mysterythrillersuspense"),
);
const NonFiction = lazy(
  () => import("../components/CustomBookCovers/SubCatagories/nonfiction"),
);
const Paranormal = lazy(
  () => import("../components/CustomBookCovers/SubCatagories/paranormal"),
);
const SciFi = lazy(
  () => import("../components/CustomBookCovers/SubCatagories/sciFi"),
);
const YoungAdult = lazy(
  () => import("../components/CustomBookCovers/SubCatagories/youngadult"),
);
const CozyMystery = lazy(
  () => import("../components/CustomBookCovers/SubCatagories/cozymystery"),
);
const UserDashboard = lazy(() => import("../pages/UserDashboard/sidebar"));
const Partner = lazy(() => import("../components/Partner/Partner"));
const FAQ = lazy(() => import("../components/FAQs/FAQs"));
const GetACover = lazy(() => import("../components/GetACover/GetACover"));
const Services = lazy(() => import("../components/ServicesComponent/Services"));
const OrderForm = lazy(() => import("../pages/OrderForm/orderform"));
const OrdersTable = lazy(() => import("../pages/UserDashboard/myorder"));
const DashboardContent = lazy(() => import("../pages/UserDashboard/dashboard"));
const ProfilePage = lazy(
  () => import("../pages/UserDashboard/Profile/profile"),
);
const InvoiceTable = lazy(
  () => import("../pages/UserDashboard/Invoices/invoices"),
);
const FormOrder = lazy(() => import("../pages/UserDashboard/Form/form"));
const PreviewPage = lazy(() => import("../pages/UserDashboard/Form/preview"));
const OrderSubmittedPage = lazy(
  () => import("../pages/UserDashboard/Form/ordersubmitted"),
);
const BookCoverForm = lazy(() => import("../pages/GetACover/cover"));
const Admin = lazy(() => import("../pages/Admin/admin"));
const User = lazy(() => import("../components/AdminDashboard/user"));
const Order = lazy(() => import("../components/AdminDashboard/Order/order"));
const PortfolioWrapperWithTabs = lazy(
  () => import("../pages/Portfolio/portfolio"),
);
const TermsAndConditions = lazy(
  () => import("../components/TermsAndConditions/TermsAndConditions"),
);
const AdminCoverIdea = lazy(
  () => import("../pages/adminCoverIdeas/AdminCoverIdea"),
);
const MarketingMaterial = lazy(
  () => import("../components/Marketing Material/marketing"),
);
const PrivacyPolicy = lazy(
  () => import("../components/TermsAndConditions/PrivacyPolicy"),
);
const BlogList = lazy(() => import("../pages/Blog/BlogList"));
const BlogPost = lazy(() => import("../pages/Blog/BlogPost"));
const BlogManagement = lazy(
  () => import("../components/AdminDashboard/Blog/BlogManagement"),
);
const BlogEditor = lazy(() => import("../pages/Admin/BlogEditor"));

// import TopBar from "../components/TopBar/TopBar";
// import PortfolioWrapperWithTabs from "../pages/Portfolio/Portfolio";
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
        <Route
          path="/about-us"
          element={
            <Suspense fallback={null}>
              <AboutUs />
            </Suspense>
          }
        />
        <Route
          path="/blog"
          element={
            <Suspense fallback={null}>
              <BlogList />
            </Suspense>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <Suspense fallback={null}>
              <BlogPost />
            </Suspense>
          }
        />
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

      {/* <Route path="/order/illustration" element={<IllustrationOrderForm />} /> */}

      <Route
        path="/admin"
        element={
          <Suspense fallback={null}>
            <Admin />
          </Suspense>
        }
      >
        {/* Use relative path for nested routes */}
        <Route
          path="users"
          element={
            <Suspense fallback={null}>
              <User />
            </Suspense>
          }
        />
        <Route
          path="orders"
          element={
            <Suspense fallback={null}>
              <Order />
            </Suspense>
          }
        />
        <Route
          path="coverIdeas"
          element={
            <Suspense fallback={null}>
              <AdminCoverIdea />
            </Suspense>
          }
        />
        <Route
          path="blog"
          element={
            <Suspense fallback={null}>
              <BlogManagement />
            </Suspense>
          }
        />
        <Route
          path="blog/edit/:id"
          element={
            <Suspense fallback={null}>
              <BlogEditor />
            </Suspense>
          }
        />
        <Route
          path="blog/new"
          element={
            <Suspense fallback={null}>
              <BlogEditor />
            </Suspense>
          }
        />
      </Route>

      <Route path="/book-cover-form" element={<BookCoverForm />} />
    </Routes>
  );
};

export default AppRoutes;
