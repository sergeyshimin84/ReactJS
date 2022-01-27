import { useState, useEffect } from "react";
import { Button, makeStyles, Switch, Toolbar } from "@material-ui/core";
import { ChatList, MessageList, MessageInput } from "./components";
import { AppBar } from "@material-ui/core";
import { Home, Profile } from "..";

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
          <Route component={Chats} path="/chats"></Route>
          <Route component={Profile} path="/profile"></Route>
          <Route component={Home} path="/"></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )

};

export default App;