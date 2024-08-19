import './App.css';
import Login from "./pages/login";
import Signup from "./pages/signup";
import Header from "./components/header";
import ContactForm from "./components/ContactForm";
import ContactUsPage from "./pages/ContactUsPage";
import Footer from "./components/footer";
import Profile from "./pages/profile";
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
    </div>
  );
}

export default App;
