import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Layout from "./Components/Layouts";
import Terms from "./Components/Terms";
import Policy from "./Components/Policy";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar /> <Layout /> <Footer /></>} />
          <Route path="/tnc" element={<Terms />} />
          <Route path="/privacy-policy" element={<Policy />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
