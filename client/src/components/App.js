import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      Page One
      <Link to="/pagetwo">Page Two</Link>
    </div>);
};
const PageTwo = () => {
  return (
    <div>      
      <Link to="/">Page One</Link>
      Page Two
    </div>);
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
