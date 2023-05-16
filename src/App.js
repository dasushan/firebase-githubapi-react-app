import React, {useState, } from "react"

import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"

//react-router
import {BrowserRouter as Router, Routes, Route, Link, Switch} from "react-router-dom"

//toast 
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

//firebase
import firebase from "firebase/compat/app"
import "firebase/compat/auth"

//Components 
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import PageNotFound from "./pages/PageNotFound"
import Footer from "./layout/Footer"
import Header from "./layout/Header"

//Context
import {UserContext} from "./context/UserContext"

import firebaseConfig from "./Config/firebaseConfig"
//initialize firebase
 firebase.initializeApp(firebaseConfig)


const App = () => {
  
  const [user, setUser] = useState(null)
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user, setUser}}>
        <Header />
        <Routes>
          
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/signin" element={<Signin/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="*" element={<PageNotFound/>}/>
        </Routes>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
