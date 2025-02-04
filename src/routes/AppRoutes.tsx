import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home/home";
import FictionCover from "../pages/FictionCover/FictionCover";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      <Route path="/fictonCover" element={<FictionCover />} />

      </Route>
    </Routes>
  );
};

export default AppRoutes;
