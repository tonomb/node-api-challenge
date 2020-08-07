import React from "react";
import {Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import ProjectsList from "./components/ProjectsList";
import ActionsList from "./components/ActionsList";

function App() {
  return (
    <div className="App">
      <h1>Node API Sprint challenge</h1>
      <Link to="/projects">Projects</Link>
      <Link to="/actions">Actions</Link> 
      <Switch>
        <Route path="/projects">
          <ProjectsList />
        </Route>

        <Route path="/actions">
          <ActionsList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
