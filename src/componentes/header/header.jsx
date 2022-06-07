
import { NavLink } from "react-router-dom";
import { Input } from "ui/input/input";
import { Nav } from "../nav/nav";
import "./header.scss";

export function Header() {
  
  return (
    <header className="headerH text-white">
      <h1>
        <NavLink to="/pagina-principal" activeClassName="is-active">DeTodo.com</NavLink>
      </h1>
      <Input
        placeholder="Autos, Accesorios, restaurantes y mucho más..."
        className="buscador w-2/5"
      />
      <Nav />
    </header>
    
    
  );
}
