import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ContactUsPage from "./pages/ContactUsPage";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import BookList from "./components/BookList";
import AdminPage from "./pages/AdminPage";
import Profile from "./pages/profile";
import SearchBook from "./pages/SearchBook";
import BookPage from "./pages/BookPage";
import ReadBookPage from "./pages/ReadBookPage";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Routes without Layout */}
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />

                    {/* Routes with Layout */}
                    <Route
                        path="/contact"
                        element={
                            <Layout>
                                <ContactUsPage />
                            </Layout>
                        }
                    />
                    {/* Routes with Layout */}
                    <Route
                        path="/home"
                        element={
                            <Layout>
                                <HomePage />
                            </Layout>
                        }
                    />

                    <Route path="/admin"
                    element={
                        <Layout>
                            <AdminPage/>
                        </Layout>
                    }/>

                    {/* Add other routes that should have Header and Footer */}
                    {/* Routes with Layout */}
                    <Route
                        path="/profile"
                        element={
                            <Layout>
                                <Profile />
                            </Layout>
                        }
                    />
                    <Route
                        path="/search"
                        element={
                            <Layout>
                                <SearchBook />
                            </Layout>
                        }
                    />
                    <Route
                        path="/book"
                        element={
                            <Layout>
                                <BookPage />
                            </Layout>
                        }
                    />
                    <Route
                        path="/read"
                        element={
                            <Layout>
                                <ReadBookPage />
                            </Layout>
                        }
                    />
                </Routes>

            </div>
        </Router>
    );
}

export default App;