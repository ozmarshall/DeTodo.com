import iconos_styles from "../../ui/iconos/iconos_styles";
import "./nav.scss";


import { NavLink } from "react-router-dom";

export function Nav() {
  return (
    <nav className="nav">
      <ul>
      <li>
          <NavLink to="/mi-perfil" activeClassName="is-active"><img src={iconos_styles.img7} alt="" /></NavLink>
        </li>
        <li>
          <NavLink to="/vende-aqui" activeClassName="is-active">Vender</NavLink>
        </li>
        <li>
          <NavLink to="/registrate" activeClassName="is-active">Registrate</NavLink>
        </li>
        <li>
          <NavLink to="/contactanos" activeClassName="is-active">Contactanos</NavLink>
        </li>
        <li>
          <NavLink to="/carrito" activeClassName="is-active"><img src={iconos_styles.img8} alt="" /></NavLink>
        </li>
      </ul>
    </nav>
  );
}
