import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { AreaText } from "ui/areaText/area-text";
import { Input } from "ui/input/input";
import { Button } from "ui/buttons/button";
import { Uploadimage } from "ui/upload_image/upload-image";
import "./registrate.scss";

export function Registrate() {
  let history = useHistory();
  const [registr, setRegistr] = useState({
    email: "",
    password: "",
    last_login: "2022-05-28T18:09:20.784Z",
    is_superuser: false,
    username: "",
    first_name: "",
    last_name: "",
    is_staff: false,
    is_active: true,
    date_joined: "2022-05-28T18:09:20.784Z",
    groups: [],
    user_permissions: [],
    //image: "",
    //phone: "",
    //document: "",
    //confirmpassword: "",
    //description: "",
  });

  function saveRegistered() {
    axios
      .post("http://127.0.0.1:8000/usuarios/register/", registr)
      .then((response) => {
        console.log(response)
        
        alert("la informacion se guardo correctamente");
        history.push("/login");
      })
      .catch(() => {
        alert("la informacion no se guardo correctamente, intentalo otra vez");
      });
  }

  return (
    <div className="page-register text-center max-w-screen-lg mx-auto">
      <h1 className="mb-8 text-slate-400">REGISTRATE</h1>
      <form
        className="formulario w-4/5 mx-auto text-center"
        onSubmit={(event) => {
          event.preventDefault();
          saveRegistered();
          //console.log("Esto se enviara al backend", form)
        }}
      >
        
        <div>
          <Uploadimage
            className="label_registrate w-80 h-80 "
            // value={registr.image}
            // onChange={(event) => {
            //   console.log(event.target.value);
            //   setRegistr((state) => ({ ...state, image: event.target.value }));
            // }}
          ></Uploadimage>
        </div>
        <div>
          <Input
            placeholder="Nombre obligatorio"
            className="w-full mb-8"
            value={registr.first_name}
            onChange={(event) => {
              console.log(event.target.value);
              setRegistr((state) => ({
                ...state,
                first_name: event.target.value,
              }));
            }}
          />
          <Input
            placeholder="Apellido obligatorio"
            className="w-full mb-8"
            value={registr.last_name}
            onChange={(event) => {
              console.log(event.target.value);
              setRegistr((state) => ({
                ...state,
                last_name: event.target.value,
              }));
            }}
          />
            <Input
            placeholder="Escoja un Nombre de Usuario o alias...obligatorio"
            className="w-full mb-8"
            value={registr.username}
            onChange={(event) => {
              console.log(event.target.value);
              setRegistr((state) => ({
                ...state,
                username: event.target.value,
              }));
            }}
          />
          {/* <Input
            type="number"
            placeholder="Telefono"
            className="w-full mb-8"
            // value={registr.phone}
            // onChange={(event) => {
            //   console.log(event.target.value);
            //   setRegistr((state) => ({
            //     ...state,
            //     phone: event.target.value,
            //   }));
            // }}
          /> */}
          {/* <Input
            type="number"
            placeholder="Documento de Identidad"
            className="w-full mb-8"
            // value={registr.document}
            // onChange={(event) => {
            //   console.log(event.target.value);
            //   setRegistr((state) => ({
            //     ...state,
            //     document: event.target.value,
            //   }));
            // }}
          /> */}
          <Input
            type="email"
            placeholder="E-mail obligatorio"
            className="w-full mb-8"
            value={registr.email}
            onChange={(event) => {
              console.log(event.target.value);
              setRegistr((state) => ({
                ...state,
                email: event.target.value,
              }));
            }}
          />
          <Input
            type="password"
            placeholder="Password obligatorio"
            className="w-full mb-8"
            value={registr.password}
            onChange={(event) => {
              console.log(event.target.value);
              setRegistr((state) => ({
                ...state,
                password: event.target.value,
              }));
            }}
          />
          {/* <Input
            type="password"
            placeholder="Confirme Password"
            className="w-full mb-8"
            // value={registr.confirmpassword}
            // onChange={(event) => {
            //   console.log(event.target.value);
            //   setRegistr((state) => ({
            //     ...state,
            //     confirmpassword: event.target.value,
            //   }));
            // }}
          /> */}
        </div>
        <div className="area_texto resize-none outline-none ">
          <AreaText
            rows="10"
            // value={registr.description}
            // onChange={(event) => {
            //   console.log(event.target.value);
            //   setRegistr((state) => ({
            //     ...state,
            //     description: event.target.value,
            //   }));
            // }}
          >
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
