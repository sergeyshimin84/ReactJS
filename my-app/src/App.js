import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Routes } from 'react-router-dom';
import { Home, Profile } from "./components";
import { Chats } from "./components/Routes/Chats";
import { Button, Toolbar, AppBar } from "@material-ui/core";

export const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <AppBar position="static">
          <Toolbar>
            <Button to="/" component={Link} color="inherit">Home</Button>
            <Button to="/profile" component={Link} color="inherit">Profile</Button>
            <Button to="/chats" component={Link} color="inherit">Chats</Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route component={Chats} path="/chats"></Route>
          <Route component={Profile} path="/profile"></Route>
          <Route component={Home} path="/"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;