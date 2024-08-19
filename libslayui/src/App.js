// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ContactUsPage from "./pages/ContactUsPage";
import Layout from "./components/Layout";
import ReadingChallenge from "./components/ReadingChallenge";
import TrendingBooks from "./components/TrendingBooks";
import Suggestions from "./components/Suggestions";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      {/*<Header/>*/}
      {/*<Login/>*/}
      {/* <Signup/>*/}
      {/*  <ContactUsPage/>*/}
        <HomePage />
    </div>
  );
    // return (
    //     <Router>
    //         <div className="App">
    //             <Routes>
    //                 {/* Routes without Layout */}
    //                 <Route path="/" element={<Login />} />
    //                 <Route path="/signup" element={<Signup />} />
    //
    //                 {/* Routes with Layout */}
    //                 <Route
    //                     path="/contact"
    //                     element={
    //                         <Layout>
    //                             <ContactUsPage />
    //                         </Layout>
    //                     }
    //                 />
    //                 {/* Add other routes that should have Header and Footer */}
    //             </Routes>
    //         </div>
    //     </Router>
    // );
}

export default App;
