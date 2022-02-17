import "./contactanos.scss";
import { Input } from "ui/input/input";
import banner_styles from "../../ui/banners/banner_styles";

export function Contactanos() {
  return (
    <div className="pagina_contacto">
      <section>
        <img src={banner_styles.img10} alt="" className="w-2/3 mx-auto" />
      </section>
      <div className="contactanosC">
        <section className="text-slate-400">
          <h2>Contactanos:</h2>
          <p>Pais: Perú</p>
          <p>Departamento: Lima</p>
          <p>Distrito: Santiago de surco</p>
          <p>Jiron: Lomas</p>
          <p>telefono: 986614976</p>
          <p>E-mail: parc.tec20@yahoo.com</p>
        </section>
        <section>
          <form
            className="w-3/4 mx-auto text-center"
            onSubmit={(event) => {
              event.preventDefault();
              console.log("submit!!!!");
            }}
          >
            <Input placeholder="Ingresa Tu Nombre" className="w-full mb-8" />
            <Input placeholder="Ingresa Tu Apellido" className="w-full mb-8" />
            <Input
              type="email"
              placeholder="Ingresa tu E-mail"
              className="w-full mb-8"
            />
            <textarea
              className="text-gray-900 w-full resize-none outline-none border border-gray-400 rounded-2xl focus:outline-none focus:border-gray-900 text-center text-inherit mb-10"
              name=""
              id=""
              rows="10"
            >
              Ingresa tu Mensaje
            </textarea>

            <button
              onClick={() => {
                console.log("click!!!");
              }}
              className="p-4 bg-primary rounded w-40 text-slate-100"
            >
              ENVIAR
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
