import React, { useState, useEffect } from "react";
import "./App.css";
import Email from "./Commponent/Email";
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
      setTours(tours);
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
        <Password />{" "}
      </main>
    );
  }

  return (
    <div>
      <Email tours={tours} />
    </div>
  );
}

export default App;
