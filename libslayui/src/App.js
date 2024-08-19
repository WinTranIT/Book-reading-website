import './App.css';
import Login from "./pages/login";
import Signup from "./pages/signup";
import Header from "./components/header";
import ContactForm from "./components/ContactForm";
import ContactUsPage from "./pages/ContactUsPage";
import ReadingChallenge from "./components/ReadingChallenge";
import TrendingBooks from "./components/TrendingBooks";
import BookCard from "./components/BookCard";

function App() {
  return (
    <div className="App">
      {/*<Header/>*/}
      {/*<Login/>*/}
      {/* <Signup/>*/}
      {/*  <ContactUsPage/>*/}
      {/*  <ReadingChallenge/>*/}
      {/*<TrendingBooks/>*/}
      <BookCard/>
    </div>
  );
}

export default App;
