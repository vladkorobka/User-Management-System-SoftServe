import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Error from "./Error/Error"
import Menu from "./Menu/Menu"
import Home from "./Home/Home"
import Departments from "./Departments/Departments"
import Department from "./Department/Department"


function App() {
  return (
    <Router>
      <div className="App">
        <Menu/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/departments/:id" component={Department}/>
          <Route path="/departments" component={Departments}/>
          <Route path="/*" component={Error}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
