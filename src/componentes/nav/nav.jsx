import iconos_styles from "../../ui/iconos/iconos_styles";
import "./nav.scss";


import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav className="nav">
      <ul>
      <li>
          <Link to="/mi-perfil"><img src={iconos_styles.img7} alt="" /></Link>
        </li>
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
          <Link to="/carrito"><img src={iconos_styles.img8} alt="" /></Link>
        </li>
      </ul>
    </nav>
  );
}
