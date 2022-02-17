import { AreaText } from "ui/areaText/area-text";
import { Input } from "ui/input/input";
import { Button } from "ui/buttons/button";
import { Uploadimage } from "ui/upload_image/upload-image";
import "./registrate.scss";

export function Registrate() {
  return (
    <div className="page-register text-center max-w-screen-lg mx-auto">
      <h1 className="mb-8 text-slate-400">REGISTRATE</h1>
      <form className="formulario w-4/5 mx-auto text-center">
        <div>
          <Uploadimage className="w-80 h-80"></Uploadimage>
        </div>
        <div>
          <Input placeholder="Apellido" className="w-full mb-8" />
          <Input type="number" placeholder="Telefono" className="w-full mb-8" />
          <Input
            type="number"
            placeholder="Documento de Identidad"
            className="w-full mb-8"
          />
          <Input type="email" placeholder="E-mail" className="w-full mb-8" />
          <Input
            type="password"
            placeholder="Password"
            className="w-full mb-8"
          />
          <Input
            type="password"
            placeholder="Confirme Password"
            className="w-full mb-8"
          />
        </div>
        <div className="area_text resize-none outline-none ">
          <AreaText  rows="10">
            Cuentanos sobre ti ..
          </AreaText>
        </div>
        <div className="col-span-2">
          <Button>GUARDAR</Button>
        </div>
      </form>
    </div>
  );
}
