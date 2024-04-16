import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import Projects from "../pages/projects/Projects";
import NotFound from "../pages/NotFound";
import Footer from "../components/Footer/Footer";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar /> <Home /> <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar /> <About /> <Footer />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Navbar /> <Projects /> <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar /> <Contact /> <Footer />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
