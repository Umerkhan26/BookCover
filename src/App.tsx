import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/authContext";
import { HelmetProvider } from "react-helmet-async";
import "aos/dist/aos.css";
import AosInit from "./components/AosInit/AosInit";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AosInit />
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
