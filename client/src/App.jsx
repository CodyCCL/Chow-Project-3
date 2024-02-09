import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// layout
import Layout from './Layout';

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Menu from "./pages/SearchMenu";
const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search-menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
