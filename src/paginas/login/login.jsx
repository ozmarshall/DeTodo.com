import { Input } from "ui/input/input";
import { Button } from "ui/buttons/button";
import { createStore } from "redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getLoginServices } from "paginas/services/auth";

export function LoginL() {
  const [formLogin, setFormLogin] = useState({
    user: "",
    password: "",
    confirmpassword: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  function userExist(user, users) {
    return users.filter((dataUser) => dataUser.user === user.user)[0];
  }

  async function LoginL() {
    try {
      const { data } = await getLoginServices();

      return data;
    } catch (e) {
      console.log("error!!!!");
    }
  }

  async function onSubmit(evt) {
    evt.preventDefault();
    const usuarios = await LoginL();
    const response = userExist(formLogin, usuarios)?.response;
    const isLogin = userExist(formLogin, usuarios)?.response;

    if (isLogin) {
      dispatch({
        type: "SET_IS_LOGIN",
        payload: true,
      });
      dispatch({
        type: "SET_USER",
        payload: response.data,
      });
      history.push("/pagina-principal");
    } else {
      dispatch({
        type: "SET_IS_LOGIN",
        payload: false,
      });
    }
  }

  return (
    <div className="page-login text-center">
      <h1 className="mb-8 text-slate-400">LOGIN</h1>
      <form
        className="w-80 mx-auto text-center"
        onSubmit={onSubmit}
      >
        <Input
          placeholder="Usuario / alias"
          className="w-full mb-8"
          value={formLogin.user}
          onChange={(evt) =>
            setFormLogin((state) => ({ ...state, user: evt.target.value }))
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
        <Input
          type="password"
          placeholder="Comfirme Password"
          className="w-full mb-8"
          value={formLogin.confirmpassword}
          onChange={(evt) =>
            setFormLogin((state) => ({ ...state, confirmpassword: evt.target.value }))
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
      </form>
    </div>
  );
}
