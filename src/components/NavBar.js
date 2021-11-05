import { Route, Switch } from "react-router-dom";
import NavLinks from "./NavLinks";

import Home from "../pages/Home";
import Adventure from "../pages/Adventure";
import Hotels from "../pages/Hotels";
import Restaurant from "../pages/Restaurant";

function NavBar() {
  return (
    <div>
      <NavLinks />
      <Switch path="/">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/hotels">
          <Hotels />
        </Route>
        <Route path="/adventure">
          <Adventure />
        </Route>
        <Route path="/restaurant">
          <Restaurant />
        </Route>
      </Switch>
    </div>
  );
}

export default NavBar;