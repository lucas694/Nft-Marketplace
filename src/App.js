import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Footer";
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
