import { useState, useEffect } from "react";
import { Button, makeStyles, Switch, Toolbar } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { Home, Profile } from "..";
import { Messages } from "./components";

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