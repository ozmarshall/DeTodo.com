import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Header } from "./componentes/header/header";
import { Main } from "./componentes/main/main";
import { Footer } from "./componentes/footer/footer";

import { PagePrincipal } from "./paginas/pagina-principal";
import { MiPerfil } from "./paginas/mi-perfil/mi-perfil";
import { VendeAqui } from "./paginas/vende_aqui/vende-aqui";
import { DetalleVenta } from "./paginas/detalle-venta/detalle-venta";
import { DetalleCompra } from "./paginas/detalle-compra/detalle-compra";
import { LoginL } from "./paginas/login/login";
import { Registrate } from "./paginas/registrate/registrate";
import { Contactanos } from "./paginas/contactanos/contactanos";
import { Carrito } from "./paginas/carrito";
import { PagePoliticas } from "./paginas/politicas/politicas";
import { PageNotFound } from "./paginas/not-found";
//import "antd/dist/antd.css";
import "./styles.scss";
import { Provider } from "react-redux";
import { store } from "./paginas/store/store";

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="wrapper">
          <Header />
          <Main>
            <Switch>
              <Route path="/pagina-principal">
                <PagePrincipal />
              </Route>
              <Route path="/mi-perfil">
                <MiPerfil />
              </Route>
              <Route path="/mi-perfil/:id">
                <MiPerfil />
              </Route>
              <Route path="/vende-aqui">
                <VendeAqui />
              </Route>
              <Route path="/detalle-venta">
                <DetalleVenta />
              </Route>
              
              <Route path="/detalle-compra/:id">
                <DetalleCompra />
              </Route>
              <Route path="/login">
                <LoginL />
              </Route>
              <Route path="/registrate">
                <Registrate />
              </Route>
              <Route path="/contactanos">
                <Contactanos />
              </Route>
              <Route path="/carrito">
                <Carrito />
              </Route>
              <Route path="/politicas">
                <PagePoliticas />
              </Route>
              <Redirect exact from="/" to="/pagina-principal" />
              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>
          </Main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}
