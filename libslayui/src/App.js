import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ContactUsPage from "./pages/ContactUsPage";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import Profile from "./pages/profile";
import SearchBook from "./pages/SearchBook";
import ForgotPassword from "./pages/ForgotPassword";
import BookPage from "./pages/BookPage";
import ReadBookPage from "./pages/ReadBookPage";
import MyBook from "./pages/MyBook";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Routes without Layout */}
                    <Route path="/" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>

                    {/* Routes with Layout */}
                    <Route
                        path="/contact"
                        element={
                            <Layout>
                                <ContactUsPage/>
                            </Layout>
                        }
                    />
                    {/* Routes with Layout */}
                    <Route
                        path="/home"
                        element={
                            <Layout>
                                <HomePage/>
                            </Layout>
                        }
                    />

                    <Route path="/admin"
                           element={
                               <Layout>
                                   <AdminPage/>
                               </Layout>
                           }/>
                    <Route
                        path="/profile"
                        element={
                            <Layout>
                                <Profile/>
                            </Layout>
                        }
                    />
                    <Route
                        path="/search"
                        element={
                            <Layout>
                                <SearchBook/>
                            </Layout>
                        }
                    />
                    <Route
                        path="/forgotpassword"
                        element={
                            <ForgotPassword/>}
                    />
                    <Route
                        path="/book-detail"
                        element={
                            <Layout>
                                <BookPage/>
                            </Layout>
                        }
                    />
                    <Route
                        path="/read"
                        element={
                            <Layout>
                                <ReadBookPage/>
                            </Layout>
                        }
                    />
                    <Route
                        path="/my-book"
                        element={
                            <Layout>
                                <MyBook />
                            </Layout>
                        }
                    />
                </Routes>

            </div>
        </Router>

    );
}

export default App;