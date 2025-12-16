import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMMON HEADER
import Header from "./Components/Common/Header/Header.jsx";

import Footer from "./Components/Common/Footer/Footer.jsx";
import "./Components/Global.css/Global.css";


// HOME PAGE
import HomePage from "../src/Components/Pages/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* ALWAYS SHOW HEADER */}
      <Header />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
