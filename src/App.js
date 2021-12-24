import React, {useState, useEffect} from 'react';
import './App.css';
import Email from './Commponent/Email';

function App() {


/* const [loading, setLoding] = useState(true)
const [tourse, setTourse] = useEffect ([])
const fetchTours = async () => {
  setLoding(true);
  try {
    const response = await fetch(url);
    const tours = await response.json()
    setLoding(false)
    setTourse(tours)

  }
  catch (error) {
    setLoding(false)
    console.log(error)
  }
}
useEffect(()=> {
  fetchTours()
}, [])
if (loading) {
  return (
    <div>
     
      <h1>gggggggggggggggggggggggggggggggggggggggggg</h1>
    </div>
  )
}
*/
  return (
    <div>
      <Email/>
    </div>
  );
}

export default App;
