
import React, { useState, useEffect } from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom"; 
import "./App.css";
import Email from "./Commponent/Email";
import Logo from "./Commponent/Logo";
import Login from "./Login";
import Password from "./Commponent/Password";
const url = "https://course-api.com/react-tours-project";

function App() {
 
  
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Logo />{" "}
      </main>
    );
  }
  

  return (
 <BrowserRouter>
 <Routes>
   <Route path='/' element={<Email />} />
    <Route path='/login' element={<Login />} />
    <Route path='/password' element={<Password />} />
    </Routes>
 </BrowserRouter>
  );
}

export default App



