import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { AreaText } from "ui/areaText/area-text";
import { Input } from "ui/input/input";
import { Button } from "ui/buttons/button";
import { Uploadimage } from "ui/upload_image/upload-image";
import iconos_styles from "../../ui/iconos/iconos_styles";
import "./vende_aqui.scss";

export function VendeAqui() {
  let history = useHistory();
  const [form, setForm] = useState({
    image: "",
    price: "",
    tittle: "",
    description: "",
    stateS: "",
    stateRanking: "",
    numberItem: "",
    paymentMeth: "",
    deliveryPoint: "",
    receptionN: "",
    phoneNumber: "",
    typeCurrency: "",
  });

  function saveContato() {
    axios
      .post("https://61ef3d66d593d20017dbb3ad.mockapi.io/articulos", form)
      .then(() => {
        alert("la informacion se guardo correctamente");
        history.push("/");
      })
      .catch(() => {
        alert("la informacion no se guardo correctamente, intentalo otra vez");
      });
  }

  return (
    <div className="pagina_vende_aqui max-w-screen-xl mx-auto my-10">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          saveContato();
          //console.log("Esto se enviara al backend", form)
        }}
      >
        <div className="imagenes_venta grid gap-x-8 gap-y-4 grid-cols-3 pb-20">
          <Input
            type="text"
            placeholder="Copia Url de imagen"
            className="border-dashed border-4 border-black w-3/5 rounded-3xl "
            value={form.image}
            onChange={(event) => {
              console.log(event.target.value);
              setForm((state) => ({ ...state, image: event.target.value }));
            }}
          />
          <Uploadimage
            className="labelL w-48 h-48"
            value={form.image}
            onChange={(event) => {
              //console.log(event.target.value);
              //const copyObjet={...form, image: event.target.value}
              //console.log("copyObjet", copyObjet)
              setForm((state) => ({ ...state, image: event.target.value }));
            }}
          ></Uploadimage>
          <Uploadimage className="labelL w-48 h-48"></Uploadimage>
          <Uploadimage className="labelL w-48 h-48"></Uploadimage>
          <Uploadimage className="labelL w-48 h-48"></Uploadimage>
          <Uploadimage className="labelL w-48 h-48"></Uploadimage>
        </div>
        <div className="Titulo_Venta grid gap-x-8 gap-y-4 grid-cols-2 items-center">
          <div>
            <h2 className="pb-5">ID del Anuncio: GENERANDO ID ...</h2>
            <Input
              type="number"
              placeholder="Precio"
              className="w-full mb-8"
              value={form.price}
              onChange={(event) => {
                console.log(event.target.value);
                setForm((state) => ({ ...state, price: event.target.value }));
              }}
            />
            <Input
              type="text"
              placeholder="Titulo"
              className="w-full mb-8"
              value={form.tittle}
              onChange={(event) => {
                console.log(event.target.value);
                setForm((state) => ({ ...state, tittle: event.target.value }));
              }}
            />
          </div>
          <div className="text-red-500 font-bold">
            <p>
              Recuerda las normas, esta prohibido todo material que atente
              contra la salud publica, material que involucre niños, drogas,
              armas, articulos robados, etc, podria ser denunciado y entregado a
              las Autoridades.
            </p>
          </div>
        </div>
        <div className="detalles_venta gap-x-8">
          <div className="area_text resize-none outline-none">
            <AreaText
              rows="10"
              value={form.description}
              onChange={(event) => {
                console.log(event.target.value);
                setForm((state) => ({
                  ...state,
                  description: event.target.value,
                }));
              }}
            >
              Describe tu Producto ..
            </AreaText>
          </div>
          <Input
            type="text"
            placeholder="Nuevo o Usado?"
            className="w-full mb-8"
            value={form.stateS}
            onChange={(event) => {
              console.log(event.target.value);
              setForm((state) => ({ ...state, stateS: event.target.value }));
            }}
          />
          <Input
            type="number"
            placeholder="Estado 1/10"
            className="w-full mb-8"
            value={form.stateRanking}
            onChange={(event) => {
              console.log(event.target.value);
              setForm((state) => ({
                ...state,
                stateRanking: event.target.value,
              }));
            }}
          />
          <Input
            type="number"
            placeholder="Cantidad de articulos"
            className="w-full mb-8"
            value={form.numberItem}
            onChange={(event) => {
              console.log(event.target.value);
              setForm((state) => ({
                ...state,
                numberItem: event.target.value,
              }));
            }}
          />
          <Input
            type="text"
            placeholder="Metodo de Pago"
            className="w-full mb-8"
            value={form.paymentMeth}
            onChange={(event) => {
              console.log(event.target.value);
              setForm((state) => ({
                ...state,
                paymentMeth: event.target.value,
              }));
            }}
          />
          <Input
            type="text"
            placeholder="Punto de Entrega (Dirección)"
            className="w-full mb-8"
            value={form.deliveryPoint}
            onChange={(event) => {
              console.log(event.target.value);
              setForm((state) => ({
                ...state,
                deliveryPoint: event.target.value,
              }));
            }}
          />
          <Input
            type="text"
            placeholder="Punto de Recepcion (Dirección)"
            className="w-full mb-8"
            value={form.receptionN}
            onChange={(event) => {
              console.log(event.target.value);
              setForm((state) => ({
                ...state,
                receptionN: event.target.value,
              }));
            }}
          />
          <Input
            type="number"
            placeholder="Ingresa tu nro de celular"
            className="w-full mb-8"
            value={form.phoneNumber}
            onChange={(event) => {
              console.log(event.target.value);
              setForm((state) => ({
                ...state,
                phoneNumber: event.target.value,
              }));
            }}
          />
          <div className="col-span-2">
            <Button>Ultimo Paso</Button>
          </div>
        </div>
      </form>
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
