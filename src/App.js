import './App.css';
import {useEffect, useState } from 'react';
import axios from 'axios';

function App() {
const [excuse, setExcuse] = useState("")


const fetchExcuse1 = () => {
  axios.get("https://excuser-three.vercel.app/v1/excuse/family/").then((res) =>{
    setExcuse(res.data[0].excuse)
    console.log(res.data)
  })  
}
 

return (
    <div className="App">
  <div> 
    <h1>Generate an Excuse</h1>
  </div>
  <div><button >Party</button></div>
  <div><button onClick={fetchExcuse1} >Family</button></div>
  <div><button>Office</button></div>
  
  <p> {excuse} </p>
    </div>
  )

}
export default App;
