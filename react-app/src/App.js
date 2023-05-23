import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import axios from "axios";
import AddStudent from "./AddStudent";
import AboutUs from "./AboutUs";

function App() {
  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    try {
      const response = await axios.get("http://localhost:3001/student/all");
      console.log(response);
      setStudents(response.data.data.students);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home students={students} />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
