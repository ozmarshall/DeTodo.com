import { useState } from "react";
import  axios  from "axios";
import { useHistory } from "react-router-dom";
import { AreaText } from "ui/areaText/area-text";
import { Input } from "ui/input/input";
import { Button } from "ui/buttons/button";
import { Uploadimage } from "ui/upload_image/upload-image";
import iconos_styles from "../../ui/iconos/iconos_styles";
import "./detalle.scss";

export function Detalle() {
  let history = useHistory();
  
  return (
    <div className="detalle max-w-screen-xl mx-auto my-10">
      <section>

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
