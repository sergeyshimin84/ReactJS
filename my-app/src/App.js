import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Chats, Home, Profile, Messages } from "./components";
import { Link, Button, Switch, Toolbar, AppBar } from "@material-ui/core";

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
        <Switch>
          <Route path="/chats">
            <Chats>
              <Switch>
                <Route component={Messages} path="/chats/:chatId"></Route>
              </Switch>
            </Chats>
          </Route>
          <Route component={Profile} path="/profile"></Route>
          <Route component={Home} path="/"></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )

};

export default App;