import { Button } from "ui/buttons/button";
import { Link } from "react-router-dom";

export function CardMisAnuncios(props) {
  const { image, description, price, title, brand, id } = props;
  return (
    <div className="contenedor-clasificado">
      <div className="bloque-anuncios py-10 my-10 px-10">
        <div className="descricion-articulo">
          <img
            className="w-40 h-40"
            src={image}
            alt=""
          />
          <p className="pl-5">{description}</p>
        </div>
      </div>
      <div className="button_modificar_guardar py-10 flex-col">
        <div className="py-5 px-5">
          <Button>Eliminar</Button>
        </div>
        <div className="py-5 px-5">
          <Button>Modificar</Button>
        </div>
      </div>
    </div>
  );
}
