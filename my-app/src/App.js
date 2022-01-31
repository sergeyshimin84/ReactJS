import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Routes } from 'react-router-dom';
import { Home, Profile } from "./components";
import { Chats } from "./components/Routes/Chats";
import { Button, Toolbar, AppBar } from "@material-ui/core";
import { Provider } from "react-redux";
import { store } from "./store";

export const App = () => {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppBar position="static">
          <Toolbar>
            <Button to="/" component={Link} color="inherit">Home</Button>
            <Button to="/profile" component={Link} color="inherit">Profile</Button>
            <Button to="/chats" component={Link} color="inherit">Chats</Button>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route component={Chats} path="/chats"></Route>
          <Route component={Profile} path="/profile"></Route>
          <Route component={Home} path="/"></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
};

export default App;