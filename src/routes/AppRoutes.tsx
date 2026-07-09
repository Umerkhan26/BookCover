import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home/home";
import BenefitsSection from "../pages/Benefits/benefits";
import { benefitsData } from "../services/benefits";
import Reviews from "../pages/reviews/reviews";
import DesignProcess from "../pages/DesignProcess/designProcess";
import Packages from "../pages/ourPackages/packages";
import SpecialEditionAddOns from "../pages/SpecialEditionAddOns/SpecialEditionAddOns";
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
const AdminCoverIdeaDetails = lazy(
  () => import("../pages/adminCoverIdeas/AdminCoverIdeaDetails"),
);
const AdminContacts = lazy(
  () => import("../pages/adminContacts/AdminContacts"),
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
const Ebook = lazy(() => import("../pages/Ebook/Ebook"));
const FunnelModule = lazy(() => import("../pages/SuperAdmin/FunnelModule"));
const TemplatesModule = lazy(
  () => import("../pages/SuperAdmin/TemplatesModule"),
);
const AnalyticsModule = lazy(
  () => import("../pages/SuperAdmin/AnalyticsModule"),
);
const BulkEmailCampaignHistory = lazy(
  () => import("../pages/SuperAdmin/BulkEmailCampaignHistory"),
);
const CategoriesModule = lazy(
  () => import("../pages/SuperAdmin/CategoriesModule"),
);

// import TopBar from "../components/TopBar/TopBar";
// import PortfolioWrapperWithTabs from "../pages/Portfolio/Portfolio";
const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="/fiction-cover"
            element={
              <FictionCover
                title="Book Cover Design For Indie Authors"
                subtitle=""
                bookCoversText=""
                layoutVariant="modern"
                modernHeroKey="fiction"
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
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/get-a-cover" element={<GetACover />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ebook" element={<Ebook />} />

          <Route path="/book-cover-form" element={<BookCoverForm />} />

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
            path="/blog/preview"
            element={
              <Suspense fallback={null}>
                <BlogPost />
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
          <Route
            path="/admin"
            element={
              <Suspense fallback={null}>
                <Admin />
              </Suspense>
            }
          >
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
              path="coverIdeas/:id"
              element={
                <Suspense fallback={null}>
                  <AdminCoverIdeaDetails />
                </Suspense>
              }
            />
            <Route
              path="contacts"
              element={
                <Suspense fallback={null}>
                  <AdminContacts />
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
            <Route
              path="funnel"
              element={
                <Suspense fallback={null}>
                  <FunnelModule />
                </Suspense>
              }
            />
            <Route
              path="email-templates"
              element={
                <Suspense fallback={null}>
                  <TemplatesModule />
                </Suspense>
              }
            />
            <Route
              path="templates"
              element={
                <Suspense fallback={null}>
                  <TemplatesModule />
                </Suspense>
              }
            />
            <Route
              path="analytics"
              element={
                <Suspense fallback={null}>
                  <AnalyticsModule />
                </Suspense>
              }
            />
            <Route
              path="categories"
              element={
                <Suspense fallback={null}>
                  <CategoriesModule />
                </Suspense>
              }
            />
            <Route
              path="email-campaigns"
              element={
                <Suspense fallback={null}>
                  <Navigate to="/admin/templates" replace />
                </Suspense>
              }
            />
            <Route
              path="campaign-history"
              element={
                <Suspense fallback={null}>
                  <BulkEmailCampaignHistory />
                </Suspense>
              }
            />
          </Route>
        </Route>
        <Route path="/order/:packageId" element={<OrderForm />} />

        {/* Catch-all route: redirect any unmatched URLs to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
