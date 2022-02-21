import iconos_styles from "../../ui/iconos/iconos_styles";
import { Input } from "ui/input/input";
import { Button } from "ui/buttons/button";
import "./mi-perfil.scss";
export function MiPerfil() {
  return (
    <div className="pagina_mi_perfil max-w-screen-xl mx-auto my-10">
      
      
      <section className="detalle_perfil h-96">
        <div className="contenedor_imagen_perfil w-80 h-80 mx-auto">
         
        </div>
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
        <div className="descripcion_sobreMi mx-auto text-slate-500" >
          <p className="w-3/4 mx-auto py-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            nostrum veniam enim, possimus doloribus natus reprehenderit, nulla
            rerum ratione libero, officia itaque! Corporis, sapiente odit
            adipisci sunt ratione dicta hic.lorem Lorem ipsum dolor modi optio aperiam culpa sed, earum corrupti officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat odio illo deserunt libero perferendis exercitationem voluptate delectus ab laudantium minus eum harum, repellendus sunt quam, fuga eos, distinctio quidem! Optio.
          </p>
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
