import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import Home from './Pages/Home';
import TshirtContext from './Pages/TshirtContext';
import CoutonContext from './Pages/CoutonContext';
import BlazarContext from './Pages/BlazarContext';
import './App.css';
import Couton from './Pages/Couton';
import Blazar from './Pages/Blazar';
import Tshirt from './Pages/Tshirt';
import Product from './Pages/Product';
import About from './Pages/About';
import Contact from './Pages/Contact';

const App=()=>{
  return(
    <>
    <BlazarContext>
    <CoutonContext>
      <TshirtContext>
        <Router>
          <Navbar/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route path="/Registration" component={Registration}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/product" component={Product}/>
              <Route path="/tshirt" component={Tshirt}/>
              <Route path="/couton" component={Couton}/>
              <Route path="/blazar" component={Blazar}/>
              
              <Route component={NotFound}/>
            </Switch>
        </Router>
      </TshirtContext>
     </CoutonContext>
     </BlazarContext>
    </>
  )
}
export default App;
