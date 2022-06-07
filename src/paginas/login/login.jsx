import { Input } from "ui/input/input";
import { Button } from "ui/buttons/button";
import { createStore } from "redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getLoginServices } from "paginas/services/auth";
import axios from "axios"

export function LoginL() {
  let history = useHistory();
  const [formLogin, setFormLogin] = useState({
    username: "",
    password: "",
   
  });

  function getUsers() {
    axios
      .post("http://127.0.0.1:8000/usuarios/login/", formLogin)
      .then((respuesta) => {
        console.log(respuesta)
        
        if (respuesta.status===200){
          history.push("/vende-aqui")
        }
        
      })
      .catch((e) => {
        console.log(e);
      });
  }
  console.log(formLogin)



  return (
    <div className="page-login text-center">
      <h1 className="mb-8 text-slate-400">LOGIN</h1>
      <form
        className="w-80 mx-auto text-center"
        onSubmit={(event) => {
          event.preventDefault();
          getUsers();
          //console.log("Esto se enviara al backend", form)
        }}
      >
        <Input
          placeholder="Usuario / alias"
          className="w-full mb-8"
          value={formLogin.username}
          onChange={(evt) =>
            setFormLogin((state) => ({ ...state, username: evt.target.value }))
          }
        />
        <Input
          type="password"
          placeholder="Password"
          className="w-full mb-8"
          value={formLogin.password}
          onChange={(evt) =>
            setFormLogin((state) => ({ ...state, password: evt.target.value }))
          }
        />
        
        <Button
          // htmlType="submit"
          //type="primary"
          // size="large"
          //onClick={() => {
           // console.log("click!!!");
          //}}
        >
          Ingresar
        </Button>
        <p className="py-8">Quieres comprar o vender de forma gratuita? Entonces Registrate es GRATIS!!</p>
      </form>
    </div>
  );
}
