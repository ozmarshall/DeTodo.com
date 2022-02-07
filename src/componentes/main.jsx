// This is a React Router v5 app
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { VendeAqui } from "./paginas/vende-aqui";
import { Registrate } from "./paginas/registrate";
import { Contactanos } from "./paginas/contactanos";

export function Main() {
  return (
    <Router>
      <main className="mainM">
        <section>
          <input type="text" placeholder="Ubicación ?" />
          <input type="text" placeholder="Que buscas ?" />
        </section>

        <div>
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
           
          </Switch>
        </div>
      </main>
    </Router>
  );
}
