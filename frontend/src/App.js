import React from 'react';
import {Switch,  Route, BrowserRouter} from 'react-router-dom'
import "./App.css"
import Signup from "./views/signup/signup";
import Home from "./views/home/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

 const App = () => {
  return (
    <div>
      <BrowserRouter >
          <Navbar/>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/signup" exact component={Signup}/>
          </Switch>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
