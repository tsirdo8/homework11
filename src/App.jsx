import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Hobbies from "./pages/hobbies/Hobbies";
import Hobby from "./pages/hobby/Hobby";
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/hobbies/:id" element={<Hobby/>} />
      </Routes>
    </Router>
  );
}

export default App;
