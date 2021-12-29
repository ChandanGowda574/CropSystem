import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout'
import Orders from './components/Orders';
import Login from './components/Login';
import Footer from './components/Footer';
import ListCropDetails from './components/ListCropDetails';
import AddCropDetails from './components/AddCropDetails';
import Signup from './components/Signup';


function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/Farmer" element={[<ListCropDetails/>]}></Route>
          <Route path = "/crops" element = {<ListCropDetails/>}></Route>
          <Route path = "/add-crops" element = {<AddCropDetails/>} ></Route>
          <Route path = "/edit-crops/:id" element = {<AddCropDetails/>}></Route>
          <Route path="/checkout" element={[<Header/>,<Checkout/>]}>         
          </Route>
          <Route path="/returns" element={[<Header/>,<Orders/>]}>
          </Route>
          <Route path="/signup" element={<Signup/>} >
          </Route>
          <Route path="/login" element={<Login/>} >
          </Route>
          <Route path="/" element={[<Header/>,<Home/>,<Footer/>]}>
          </Route>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;