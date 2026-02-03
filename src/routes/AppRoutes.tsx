import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home/home";
import fictonCoverImg from "../assets/PageBanners/indieLUMEARTWEBPAGEFICTIONCOVER-01.webp";
import BenefitsSection from "../pages/Benefits/benefits";
import { benefitsData } from "../services/benefits";
import Reviews from "../pages/reviews/reviews";
import DesignProcess from "../pages/DesignProcess/designProcess";
import Packages from "../pages/ourPackages/packages";
import SpecialEditionAddOns from "../pages/SpecialEditionAddOns/SpecialEditionAddOns";
import ProtectedRoute from "./ProtectedRoute";
// Lazy load components for code splitting
const FictionCover = lazy(() => import("../pages/FictionCover/FictionCover"));
const Illustrated = lazy(() => import("../pages/Services/coverpages/illustrated"));
const BookCoverRedesign = lazy(() => import("../pages/BookCoverRedesign/BookCoverRedesign"));
const LogoBranding = lazy(() => import("../pages/logo&branding/logo&branding"));
const NonFictonalCover = lazy(() => import("../pages/NonFictionalCovers/NonFictonalCover"));
const AudioBookCover = lazy(() => import("../pages/AudioBookCover/AudioBookCover"));
const ContactUs = lazy(() => import("../components/ContactUs/ContactUs"));
const AboutUs = lazy(() => import("../components/AboutUs/AboutUs"));
const PremiumCover = lazy(() => import("../components/PremiumCover/premiumcovers"));
const KindleVellaCover = lazy(() => import("../components/KindleVellaCover/kindleVellacover"));
const IllustratedCover = lazy(() => import("../components/IllustratedCovers/illustratedcover"));
const LogoDesign = lazy(() => import("../components/LogoDesign/logodesign"));
const CustomCover = lazy(() => import("../components/CustomBookCovers/custombookcover"));
const Romance = lazy(() => import("../components/CustomBookCovers/SubCatagories/romance"));
const Fantasy = lazy(() => import("../components/CustomBookCovers/SubCatagories/fantasy"));
const UrbanFantasy = lazy(() => import("../components/CustomBookCovers/SubCatagories/urbanfantasy"));
const Fiction = lazy(() => import("../components/CustomBookCovers/SubCatagories/fiction"));
const Horror = lazy(() => import("../components/CustomBookCovers/SubCatagories/horror"));
const MysteryThrillerSuspense = lazy(() => import("../components/CustomBookCovers/SubCatagories/mysterythrillersuspense"));
const NonFiction = lazy(() => import("../components/CustomBookCovers/SubCatagories/nonfiction"));
const Paranormal = lazy(() => import("../components/CustomBookCovers/SubCatagories/paranormal"));
const SciFi = lazy(() => import("../components/CustomBookCovers/SubCatagories/sciFi"));
const YoungAdult = lazy(() => import("../components/CustomBookCovers/SubCatagories/youngadult"));
const CozyMystery = lazy(() => import("../components/CustomBookCovers/SubCatagories/cozymystery"));
const UserDashboard = lazy(() => import("../pages/UserDashboard/sidebar"));
const Partner = lazy(() => import("../components/Partner/Partner"));
const FAQ = lazy(() => import("../components/FAQs/FAQs"));
const GetACover = lazy(() => import("../components/GetACover/GetACover"));
const Services = lazy(() => import("../components/ServicesComponent/Services"));
const OrderForm = lazy(() => import("../pages/OrderForm/orderform"));
const OrdersTable = lazy(() => import("../pages/UserDashboard/myorder"));
const DashboardContent = lazy(() => import("../pages/UserDashboard/dashboard"));
const ProfilePage = lazy(() => import("../pages/UserDashboard/Profile/profile"));
const InvoiceTable = lazy(() => import("../pages/UserDashboard/Invoices/invoices"));
const FormOrder = lazy(() => import("../pages/UserDashboard/Form/form"));
const PreviewPage = lazy(() => import("../pages/UserDashboard/Form/preview"));
const OrderSubmittedPage = lazy(() => import("../pages/UserDashboard/Form/ordersubmitted"));
const BookCoverForm = lazy(() => import("../pages/GetACover/cover"));
const Admin = lazy(() => import("../pages/Admin/admin"));
const User = lazy(() => import("../components/AdminDashboard/user"));
const Order = lazy(() => import("../components/AdminDashboard/Order/order"));
const PortfolioWrapperWithTabs = lazy(() => import("../pages/Portfolio/portfolio"));
const TermsAndConditions = lazy(() => import("../components/TermsAndConditions/TermsAndConditions"));
const AdminCoverIdea = lazy(() => import("../pages/adminCoverIdeas/AdminCoverIdea"));
const MarketingMaterial = lazy(() => import("../components/Marketing Material/marketing"));
const PrivacyPolicy = lazy(() => import("../components/TermsAndConditions/PrivacyPolicy"));
const BlogList = lazy(() => import("../pages/Blog/BlogList"));
const BlogPost = lazy(() => import("../pages/Blog/BlogPost"));
const BlogManagement = lazy(() => import("../components/AdminDashboard/Blog/BlogManagement"));
const BlogEditor = lazy(() => import("../pages/Admin/BlogEditor"));

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
          path="/fiction-cover"
          element={
            <Suspense fallback={null}>
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
            </Suspense>
          }
        />
        {/* Other Routes */}
        <Route
          path="/illustrated"
          element={
            <Suspense fallback={null}>
              <Illustrated />
            </Suspense>
          }
        />
        {/* Book Cover Redesign Route */}
        <Route
          path="/book-cover-redesign"
          element={
            <Suspense fallback={null}>
              <BookCoverRedesign />
            </Suspense>
          }
        />
        {/* Logo Branding Route and */}
        <Route path="/logo-branding" element={<Suspense fallback={null}><LogoBranding /></Suspense>} />
        {/* Non-Fiction Route */}
        <Route
          path="/non-fiction-cover"
          element={
            <Suspense fallback={null}>
              <NonFictonalCover />
            </Suspense>
          }
        />
        {/* Audio Book Cover Route */}
        <Route
          path="/audio-book-cover"
          element={
            <Suspense fallback={null}>
              <AudioBookCover />
            </Suspense>
          }
        />
        {/* <Route path="/verify-email" element={<VerifyEmailPage />} /> */}
        <Route path="/contact-us" element={<Suspense fallback={null}><ContactUs /></Suspense>} />
        <Route path="/partner" element={<Suspense fallback={null}><Partner /></Suspense>} />
        <Route path="/faqs" element={<Suspense fallback={null}><FAQ /></Suspense>} />
        <Route path="/terms-and-conditions" element={<Suspense fallback={null}><TermsAndConditions /></Suspense>} />
        <Route path="/privacy-policy" element={<Suspense fallback={null}><PrivacyPolicy /></Suspense>} />
        <Route path="/get-a-cover" element={<Suspense fallback={null}><GetACover /></Suspense>} />
        <Route path="/services" element={<Suspense fallback={null}><Services /></Suspense>} />
        <Route path="/portfolio/*" element={<Suspense fallback={null}><PortfolioWrapperWithTabs /></Suspense>}>
          {/* Default Route: When visiting /portfolio/, show CustomCover */}
          <Route index element={<Suspense fallback={null}><CustomCover /></Suspense>} />

          {/* Subcategories directly under /portfolio/ */}
          <Route path="fantasy" element={<Suspense fallback={null}><Fantasy /></Suspense>} />
          <Route path="romance" element={<Suspense fallback={null}><Romance /></Suspense>} />
          <Route path="urban-fantasy" element={<Suspense fallback={null}><UrbanFantasy /></Suspense>} />
          <Route path="young-adult" element={<Suspense fallback={null}><YoungAdult /></Suspense>} />
          <Route path="cozy-mystery" element={<Suspense fallback={null}><CozyMystery /></Suspense>} />
          <Route path="paranormal" element={<Suspense fallback={null}><Paranormal /></Suspense>} />
          <Route
            path="mystery-thriller-suspense"
            element={<Suspense fallback={null}><MysteryThrillerSuspense /></Suspense>}
          />
          <Route path="horror" element={<Suspense fallback={null}><Horror /></Suspense>} />
          <Route path="sci-fi" element={<Suspense fallback={null}><SciFi /></Suspense>} />
          <Route path="non-fiction" element={<Suspense fallback={null}><NonFiction /></Suspense>} />
          <Route path="fiction" element={<Suspense fallback={null}><Fiction /></Suspense>} />

          <Route path="premium-covers" element={<Suspense fallback={null}><PremiumCover /></Suspense>} />
          <Route path="kindle-vella-covers" element={<Suspense fallback={null}><KindleVellaCover /></Suspense>} />
          <Route path="illustrated-covers" element={<Suspense fallback={null}><IllustratedCover /></Suspense>} />
          <Route path="logo-design" element={<Suspense fallback={null}><LogoDesign /></Suspense>} />
          <Route path="marketing-materials" element={<Suspense fallback={null}><MarketingMaterial /></Suspense>} />
        </Route>
        <Route path="/about-us" element={<Suspense fallback={null}><AboutUs /></Suspense>} />
        <Route path="/blog" element={<Suspense fallback={null}><BlogList /></Suspense>} />
        <Route path="/blog/:slug" element={<Suspense fallback={null}><BlogPost /></Suspense>} />
      </Route>
      {/* <Route path="/login" element={<Login />} /> */}

      {/* <Route path="/register" element={<Register />} /> */}

      <Route element={<ProtectedRoute />}>
        <Route path="/portal" element={<Suspense fallback={null}><UserDashboard /></Suspense>}>
          <Route index element={<Suspense fallback={null}><DashboardContent /></Suspense>} />
          <Route path="orders" element={<Suspense fallback={null}><OrdersTable /></Suspense>} />
          <Route path="profile" element={<Suspense fallback={null}><ProfilePage /></Suspense>} />
          <Route path="invoices" element={<Suspense fallback={null}><InvoiceTable /></Suspense>} />
          <Route path="orders/form" element={<Suspense fallback={null}><FormOrder /></Suspense>} />

          <Route path="orders/preview" element={<Suspense fallback={null}><PreviewPage /></Suspense>} />
          <Route path="orders/submitted" element={<Suspense fallback={null}><OrderSubmittedPage /></Suspense>} />
        </Route>
      </Route>
      {/* <Route path="/order" element={<OrderForm />} /> */}
      <Route path="/order/:packageId" element={<Suspense fallback={null}><OrderForm /></Suspense>} />

      {/* <Route path="/order/illustration" element={<IllustrationOrderForm />} /> */}

      <Route path="/admin" element={<Suspense fallback={null}><Admin /></Suspense>}>
        {/* Use relative path for nested routes */}
        <Route path="users" element={<Suspense fallback={null}><User /></Suspense>} />
        <Route path="orders" element={<Suspense fallback={null}><Order /></Suspense>} />
        <Route path="coverIdeas" element={<Suspense fallback={null}><AdminCoverIdea /></Suspense>} />
        <Route path="blog" element={<Suspense fallback={null}><BlogManagement /></Suspense>} />
        <Route path="blog/edit/:id" element={<Suspense fallback={null}><BlogEditor /></Suspense>} />
        <Route path="blog/new" element={<Suspense fallback={null}><BlogEditor /></Suspense>} />
      </Route>
      <Route path="/book-cover-form" element={<Suspense fallback={null}><BookCoverForm /></Suspense>} />
    </Routes>
  );
};

export default AppRoutes;
