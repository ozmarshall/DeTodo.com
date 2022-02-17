<<<<<<< HEAD
import { useHistory } from "react-router-dom";
=======
import { Link } from "react-router-dom";

>>>>>>> 46ea94b7c7f0a2e777337ad3a56f54d77ec7df7f
import { Input } from "ui/input/input";
import { Nav } from "../nav/nav";
import "./header.scss";

export function Header() {
  let history = useHistory();
  return (
<<<<<<< HEAD
    <header className="headerH">
      <h1><a href="#" className="" onClick={() => {history.push("/pagina-principal");}}>DeTodo.com</a></h1>
      <Input placeholder="Autos, Accesorios, restaurantes y mucho más..." className="w-2/5"/>
=======
    <header className="headerH text-white">
      <h1>
        <Link to="/">deTodo.com</Link>
      </h1>
      <Input
        placeholder="Autos, Accesorios, restaurantes y mucho más..."
        className="w-2/5"
      />
>>>>>>> 46ea94b7c7f0a2e777337ad3a56f54d77ec7df7f
      <Nav />
    </header>
  );
}
