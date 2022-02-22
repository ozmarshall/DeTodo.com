import iconos_styles from "../../ui/iconos/iconos_styles";
import { Button } from "ui/buttons/button";
import "./mi-perfil.scss";
export function MiPerfil() {
  return (
    <div className="pagina_mi_perfil max-w-screen-xl mx-auto my-10">
      <section className="detalle_perfil">
        <div className="contenedor_imagen_perfil w-full h-96 mx-auto"></div>
        <div className="mx-auto w-64 text-slate-500">
          <p>Nombre :</p>
          <p>Apellido :</p>
          <p>Edad :</p>
          <p>Alias :</p>
          <p>Telefono :</p>
          <p>Nro de Documento :</p>
          <p>Email :</p>
          <p>Dirección :</p>
          <p>Calificación :</p>
          <p>ID :</p>
          <div className="button_modificar_guardar py-10 ">
            <div>
              <Button>Modificar</Button>
            </div>
            <div>
              <Button>Guardar</Button>
            </div>
          </div>
        </div>
        <div className="descripcion_sobreMi mx-auto text-slate-500">
          <p className="w-3/4 mx-auto py-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            nostrum veniam enim, possimus doloribus natus reprehenderit, nulla
            rerum ratione libero, officia itaque! Corporis, sapiente odit
            adipisci sunt ratione dicta hic.lorem Lorem ipsum dolor modi optio
            aperiam culpa sed, earum corrupti officiis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quaerat odio illo deserunt libero
            perferendis exercitationem voluptate delectus ab laudantium minus
            eum harum, repellendus sunt quam, fuga eos, distinctio quidem!
            Optio.
          </p>
        </div>
        <section className="mis-anuncios my-10">
          <h2>MIS ANUNCIOS</h2>
          <div className="contenedor-clasificado">
            <div className="bloque-anuncios py-10  px-10">
              <div className="descricion-articulo">
                <img
                  className="w-40 h-40"
                  src="https://www.clikisalud.net/wp-content/uploads/2016/03/comida-r%C3%A1pida.jpg"
                  alt=""
                />
                <p className="pl-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores rem eum sequi cupiditate, nisi saepe unde inventore
                  corporis quas fuga veniam, architecto quidem nam quisquam
                  provident eius eligendi sapiente? Autem? Lorem, ipsum dolor
                  sit amet consectetur adipisicing elit. Excepturi adipisci
                  optio voluptatibus laboriosam deleniti commodi harum soluta
                  sed perferendis nobis minus sit iusto, eos, sapiente
                  accusantium ex itaque aliquid eum!
                </p>
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
          <div className="contenedor-clasificado">
            <div className="bloque-anuncios py-10 my-10 px-10">
              <div className="descricion-articulo">
                <img
                  className="w-40 h-40"
                  src="https://www.clikisalud.net/wp-content/uploads/2016/03/comida-r%C3%A1pida.jpg"
                  alt=""
                />
                <p className="pl-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores rem eum sequi cupiditate, nisi saepe unde inventore
                  corporis quas fuga veniam, architecto quidem nam quisquam
                  provident eius eligendi sapiente? Autem? Lorem, ipsum dolor
                  sit amet consectetur adipisicing elit. Excepturi adipisci
                  optio voluptatibus laboriosam deleniti commodi harum soluta
                  sed perferendis nobis minus sit iusto, eos, sapiente
                  accusantium ex itaque aliquid eum!
                </p>
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
        </section>
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
