import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// layout
import Layout from "./Layout";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import OurMenu from "./pages/OurMenu";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Food from "./pages/Food";
import BecomeOurPartner from "./pages/BecomeOurPartner";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/our-menu" element={<OurMenu />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/food" element={<Food />} />
          <Route path="/become-our-partner" element={<BecomeOurPartner />} />

          {/* auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
