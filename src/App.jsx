import { Header } from "./componentes/header";
import { Main } from "./componentes/main";
import { Footer } from "./componentes/footer";

import { VendeAqui } from "./componentes/paginas/vende-aqui";
import { Registrate } from "./componentes/paginas/registrate";
import { Contactanos } from "./componentes/paginas/contactanos";

export function App() {
  return (
    <div className="wrapper">
      <h1>holas</h1>
      <Header />
      <Main>
        <VendeAqui />
        <Registrate />
        <Contactanos />
      </Main>
      <Footer />
    </div>
  );
}
