import React from 'react'
import Login from './Login'
 import Dash from './Dash'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dash" element={<Dash/>} />
        </Routes>
      </BrowserRouter>
     {/* <Dash />
    <Login /> */}
    </>
  )
}

export default App

// import Chart from "chart.js/auto";
// import { CategoryScale } from "chart.js";
// import { useState } from "react";
// import { Data } from "./utils/Data";
// import PieChar from "./components/PieChar";
// // import "./styles.css";

// Chart.register(CategoryScale);

// export default function App() {
//   const [chartData, setChartData] = useState({
//     // ...chart data
    
//   });
 
//   return (
//     <div className="App">
//       <PieChar chartData={chartData} />
//     </div>
//   );}