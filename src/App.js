import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import page1 from "./components/page1";
import page2 from "./components/page2";
import page3 from "./components/page3"

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";



function App() {
 
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
         
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
           <center> <h3>Test</h3></center>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/page1"}><h6>Page1</h6></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/page2"}><h6>Page2</h6></Link>
              </li>
                <li className="nav-item">
                <Link className="nav-link" to={"/page3"}><h6>Page3</h6></Link>
              </li>
              
            </ul>
          </div>
          
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={page1} />
            <Route exact path="/page1" component={page1} />
            <Route exact path="/page2" component={page2} />
            <Route exact path="/page3" component={page3} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}


export default App;