import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from "./components/footer/footer";
import Explore from "./components/explore/explore";
import Products from "./components/products/products";
import Header from "./components/header/header";
import Booking from "./components/booking/booking";
import QuickBook from "./components/quick book/quickBook";
import Download from "./components/download/download";
import Explore2 from "./components/explore2/explore2";

function App() {
  return (
    <div className="App">
      <Header/>
      <Booking/>
      <QuickBook/>
      <Explore/>
      <Explore2/>
      <Download/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
