import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Form from "./Component/Form";
import Edetails from "./Component/Edetails";
import Project from "./Component/Project";
import Expdetail from "./Component/Expdetail";
import Extradetail from "./Component/Extradetail";
const routing = (
  <div>
    <Router>
      <Link to="/"></Link>
      <Link to="Education"></Link>
      <Route exact path="/" component={Form}></Route>
      <Route path="/Education" component={Edetails}></Route>
      <Link to="/"></Link>
      <Link to="Edu"></Link>
      <Route path="/Edu" component={Project}></Route>
      <Link to="/"></Link>
      <Link to="Ede"></Link>
      <Route path="/Ede" component={Expdetail}></Route>
      <Link to="Ed"></Link>
      <Route path="/Ed" component={Extradetail}></Route>
      <Link to="Back"></Link>
      <Route path="/Back" component={Form}></Route>
      <Link to="Bac"></Link>
      <Route path="/Bac" component={Edetails}></Route>
      <Link to="Ba"></Link>
      <Route path="/Ba" component={Project}></Route>
      <Link to="Bk"></Link>
      <Route path="/Bk" component={Project}></Route>
    </Router>
  </div>
);
export default routing;
