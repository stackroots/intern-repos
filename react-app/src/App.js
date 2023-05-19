import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);

  // const handleIncrement = () => {
  //   setCount(count + 1);
  // };

  // const handledecrement = () => {
  //   setCount(count - 1);
  // };

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
    <div>
      <Header />
      {/* <h1>Count is {count}</h1> */}
      {/* <button onClick={handleIncrement}>Increment</button> */}
      {/* <button onClick={handledecrement}>Decrement</button> */}
      <Home students={students} />
      <Footer />
    </div>
  );
}

export default App;
