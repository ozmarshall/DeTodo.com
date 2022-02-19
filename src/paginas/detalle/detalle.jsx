import { useHistory } from "react-router-dom";
import { Button } from "ui/buttons/button";
import iconos_styles from "../../ui/iconos/iconos_styles";
import "./detalle.scss";

export function Detalle() {
  return (
    <div className="detalle_1 max-w-screen-xl mx-auto my-10">
      <section>
        <div className="detalle_2">
          <div className="detalle_3">
            <div>
              <h2>Colocar en mis Favoritos</h2>
              <h2>Mandar al Carrito</h2>
            </div>
            <div className="w-64">
              <p>
                Tu anuncio se presentará asi, si esta correcto pulse boton
                VENDER AHORA, si no pulse:
              </p>
              <Button>Modificar</Button>
            </div>
          </div>
          <div>
            <img
              src="https://images.ecestaticos.com/aIGpEv4YaBeFT6H9Pky-erHP_1E=/0x0:640x361/1440x810/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fee7%2Fa9f%2F226%2Fee7a9f226660c503832fd08fcd638d75.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="detalle_4">
          <p className="id_anuncio">ID del Anuncio: 7868675987</p>
          <p className="id_precio text-green-500 py-8 text-9xl">S/ 2000</p>
          <p>Bicicleta montañera negra</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            adipisci doloremque suscipit eum deserunt est inventore, accusantium
            similique unde animi iusto harum quaerat, quas necessitatibus
            reiciendis aliquid totam ullam voluptatum!
          </p>
          <div className="detalle_5">
            <p>Nuevo/Usado</p>
            <p>Estado 1/10</p>
            <p>Cantidad de articulos</p>
            <p>Metodo de Pago</p>
            <p>Punto de Entrega</p>
            <p>Punto de Recepcion</p>
            <Button>Vender Ahora</Button>
          </div>
        </div>
      </section>
      <section className="grid gap-y-4 mx-auto">
        <div className="w-48 h-64">
          <a href="https://www.pardoschicken.pe/">
            <img src={iconos_styles.img9} alt="" />
          </a>
        </div>
        <div className="w-48 h-64">
          <a href="https://www.tottus.com.pe/">
            <img src={iconos_styles.img9} alt="" />
          </a>
        </div>
        <div className="w-48 h-64">
          <a href="https://movistarofertas.pe/">
            <img src={iconos_styles.img9} alt="" />
          </a>
        </div>
        <div className="w-48 h-64">
          <a href="https://larosanautica.com/">
            <img src={iconos_styles.img9} alt="" />
          </a>
        </div>
      </section>
    </div>
  );
}
