import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import { HomeScreen } from "../components/screens/HomeScreen";
import { ProductScreen } from "../components/screens/ProductScreen";

export const AppRouter = () => {
  return (
    <div className="grid-container">
      <Router>
        <header className="row">
          <Navbar />
        </header>
        <main>
          <Switch>
            {/* <Route exact path="/login" component={LoginScreen} /> */}
            <Route path="/" component={HomeScreen} exact />
            <Route path="/product/:SKU" component={ProductScreen} />
            <Redirect to="/" />
          </Switch>
        </main>
        <footer className="row center">
          <Footer />
        </footer>
      </Router>
    </div>
  );
};
