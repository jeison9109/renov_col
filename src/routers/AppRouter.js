import React from "react";
import { Navbar } from "../components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "../components/screens/Home";
import { Nosotros } from "../components/screens/Nosotros";
import { Candidatos } from "../components/screens/Candidatos";
import { Contactenos } from "../components/screens/Contactenos";
import { CandidatePerfil } from "../components/candidates/CandidatePerfil";
import { Search } from "../components/screens/Search";

function AppRouter() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Nosotros" component={Nosotros} />
          <Route path="/Candidatos" component={Candidatos} />
          <Route path="/Contactenos" component={Contactenos} />
          <Route path="/candidate/:candidatoId" component={CandidatePerfil} />
          <Route path="/Search" component={Search} />
        </Switch>
      </Router>
    </>
  );
}

export default AppRouter;
