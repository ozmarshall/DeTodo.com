import { AreaText } from "ui/areaText/area-text";
import { Input } from "ui/input/input";
import { Button } from "ui/buttons/button";

export function Registrate() {
  return (
    <div className="page-register text-center">
      <h1 className="mb-8">REGISTRATE</h1>
      <form className="w-80 mx-auto text-center">
        <Input
          type="number"
          placeholder="Documento de Identidad"
          className="w-full mb-8"
        />
        <Input placeholder="Apellido" className="w-full mb-8" />
        <Input type="number" placeholder="Telefono" className="w-full mb-8" />
        <Input
          type="number"
          placeholder="Documento de Identidad"
          className="w-full mb-8"
        />
        <Input type="email" placeholder="E-mail" className="w-full mb-8" />
        <Input type="password" placeholder="Password" className="w-full mb-8" />
        <AreaText cols="80" rows="10">
          Cuentanos sobre ti ..
        </AreaText>
        <Button>GUARDAR</Button>
      </form>
    </div>
  );
}
