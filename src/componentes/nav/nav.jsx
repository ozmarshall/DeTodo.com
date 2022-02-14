import "./nav.scss";

import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/vende-aqui">Vende Aqui</Link>
        </li>
        <li>
          <Link to="/registrate">Registrate</Link>
        </li>
        <li>
          <Link to="/contactanos">Contactanos</Link>
        </li>
        <li>
          <Link to="/mi-perfil">Mi Perfil</Link>
        </li>
      </ul>
    </nav>
  );
}