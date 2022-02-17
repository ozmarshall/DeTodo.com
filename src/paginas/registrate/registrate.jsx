import { AreaText } from "ui/areaText/area-text";
import { Input } from "ui/input/input";
import { Button } from "ui/buttons/button";
import { Uploadimage } from "ui/upload_image/upload-image";
import "./registrate.scss";

export function Registrate() {
  return (
    <div className="page-register text-center">
      <h1 className="mb-8">REGISTRATE</h1>
      <form className="formulario w-4/5 mx-auto text-center">
        <div>
          <Uploadimage className="w-96 h-96"></Uploadimage>
        </div>
        <div>
          <Input placeholder="Apellido" className="w-3/4 mb-8" />
          <Input type="number" placeholder="Telefono" className="w-3/4 mb-8" />
          <Input
            type="number"
            placeholder="Documento de Identidad"
            className="w-3/4 mb-8"
          />
          <Input type="email" placeholder="E-mail" className="w-3/4 mb-8" />
          <Input
            type="password"
            placeholder="Password"
            className="w-3/4 mb-8"
          />
        </div>
        <div className="area_text">
          <AreaText cols="110" rows="10">
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
