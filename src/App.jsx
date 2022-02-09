import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Header } from "./componentes/header";
import { Main } from "./componentes/main";
import { Footer } from "./componentes/footer";

import { VendeAqui } from "./paginas/vende-aqui";
import { Registrate } from "./paginas/registrate";
import { Contactanos } from "./paginas/contactanos";
import { PageNotFound } from "./paginas/not-found";

export function App() {
  return (
    <Router>
      <div className="wrapper">
        <h1>holas</h1>
        <Header />
        <Main>
          <Switch>
            <Route path="/vende-aqui">
              <VendeAqui />
            </Route>
            <Route path="/registrate">
              <Registrate />
            </Route>
            <Route path="/contactanos">
              <Contactanos />
            </Route>

            <Redirect exact from="/" to="/vende-aqui" />
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}
