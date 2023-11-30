import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import HotelView from "./components/HotelView";
import './css/style.css';


function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <SideBar />
        <HotelView />
        
      </div>
      
      
    </div>
  );
}

export default App;
