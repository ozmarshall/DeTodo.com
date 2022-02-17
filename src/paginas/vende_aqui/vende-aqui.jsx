import { AreaText } from "ui/areaText/area-text";
import { Input } from "ui/input/input";
import { Button } from "ui/buttons/button";
import { Uploadimage } from "ui/upload_image/upload-image";
import "./vende_aqui.scss";

export function VendeAqui() {
  return (
    <div className="pagina_vende_aqui">
      <form>
        <div>
          <Uploadimage className="w-48 h-48"></Uploadimage>
        </div>
        <div>
          <Uploadimage className="w-48 h-48"></Uploadimage>
        </div>
        <div>
          <Uploadimage className="w-48 h-48"></Uploadimage>
        </div>
        <div>
          <Uploadimage className="w-48 h-48"></Uploadimage>
        </div>
        <div>
          <Uploadimage className="w-48 h-48"></Uploadimage>
        </div>
        <div>
          <Uploadimage className="w-48 h-48"></Uploadimage>
        </div>
      </form>
    </div>
  );
}
