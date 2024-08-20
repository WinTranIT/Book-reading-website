// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ContactUsPage from "./pages/ContactUsPage";
import Footer from "./components/footer";
import Profile from "./pages/profile";
import Layout from "./components/Layout";
import ReadingChallenge from "./components/ReadingChallenge";
import TrendingBooks from "./components/TrendingBooks";
import Suggestions from "./components/Suggestions";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header/>
      {/*<Login/>*/}
      {/* <Signup/>*/}
      {/*  <ContactUsPage/>*/}
        <Profile/>
      {/*  <Login/>*/}
      {/*  <Signup/>*/}
      {/*  <Footer/>*/}
      {/* <HomePage />*/}
    </div>
  );
}

export default App;
