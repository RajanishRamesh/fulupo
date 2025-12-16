import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Common/Header/Header.jsx";
import Footer from "./Components/Common/Footer/Footer.jsx";
import HomePage from "../src/Components/Pages/Home.jsx";


function App() {
  return (


    <BrowserRouter>
      
      <Header />

        <Routes>
        <Route path="/" element={<HomePage />} />
        </Routes>

      <Footer />

    </BrowserRouter>



  );
}

export default App;
