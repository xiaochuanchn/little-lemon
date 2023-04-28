import React from "react";
import Home from "./components/home/Home";
import Reservations from "./components/reservations/Reservations";
import About from "./components/about/About";
import  Menu  from "./components/menu/Menu"
import {Route, Routes} from "react-router-dom";
import Order from "./components/orderonline/OrderOnline";
import Login from "./components/login/Login";
import HeaderElement from './components/ui/HeaderElement';
import Footer from './components/ui/Footer';

function App() {
  return (
    <>
      <HeaderElement />
      <div style={{marginTop:'80px'}}>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "about" element = {<About />}/>
        <Route path = "menu" element = {<Menu />}/>
        <Route path = "reservations" element = {<Reservations />}/>
        <Route path = "orderonline" element = {<Order />}/>
        <Route path = "login" element = {<Login />}/>
      </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
