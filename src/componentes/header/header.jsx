import { Link } from "react-router-dom";

import { Input } from "ui/input/input";
import { Nav } from "../nav/nav";
import "./header.scss";

export function Header() {
  return (
    <header className="headerH text-white">
      <h1>
        <Link to="/">deTodo.com</Link>
      </h1>
      <Input
        placeholder="Autos, Accesorios, restaurantes y mucho más..."
        className="w-2/5"
      />
      <Nav />
    </header>
  );
}
