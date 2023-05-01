import React from "react";
import Navbar from "../src/components/Navbar";
import "./App.css";
// import PieChar from './components/PieChar';

const Dash = () => {
  return (
    <>
      <div className="bodydash">
        <div className="dleft">
          <h1 className="dashh">Board.</h1>
          <br />
          <h4 className="menu">Dashboard</h4>
          <br />
          <h4 className="menu">Transactions</h4>
          <br />
          <h4 className="menu">Schedules</h4>
          <br />
          <h4 className="menu">Users</h4>
          <br />
          <h4 className="menu">Settings</h4>
          <br />
          <br />
          <br /> <br />
          <br />
          <br />
          <h6 className="menu">Help</h6>
          <br />
          <h6 className="menu">Contact Us</h6>
        </div>
        <div>
          <Navbar />
        </div>
        {/* <PieChar /> */}
      </div>
    </>
  );
};

export default Dash;
