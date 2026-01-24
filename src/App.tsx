import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/authContext";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    // Initialize AOS globally
    AOS.init({
      once: false, // Allow animations to repeat on scroll
      duration: 1000,
      easing: "ease-out",
      offset: 100,
      delay: 0,
    });
    // Refresh AOS after initial render
    AOS.refresh();
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
