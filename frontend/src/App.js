import React from 'react';
import {Switch,  Route, BrowserRouter} from 'react-router-dom'
import "./App.css"
import Signup from "./views/signup";
import Home from "./views/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Contact from "./views/contact";
import Privacy from "./views/privacy";
import Terms from "./views/terms";
import Login from "./views/login";
 const App = () => {

  return (
    <div>
      <BrowserRouter>
          <Navbar/>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/login" exact component={Login}/>
              <Route path="/signup" exact component={Signup}/>
              <Route path="/contact" exact component={Contact}/>
              <Route path="/terms" exact component={Terms}/>
              <Route path="/privacy" exact component={Privacy}/>
          </Switch>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
