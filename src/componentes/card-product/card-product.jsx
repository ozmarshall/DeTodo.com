import {
  ShoppingCartOutlined,
  HeartFilled,
  MailOutlined,
} from "@ant-design/icons";

import axios from "axios";
import { useEffect, useState } from "react";
import "./card-product.scss";

export function CardProduct(props) {
  const { image, price, title, brand } = props;

  //defino un estado inicial con una array vacio-001
  const [datos_Api, setdatos_Api] = useState([]);
  //esto me da el estado inicial del componente, luego ejecutamos axios con la ruta-002
  useEffect(() => {
    console.log("esto se ejecuta");
    axios
      .get("https://61ef3d66d593d20017dbb3ad.mockapi.io/articulos")
      .then((respuesta) => {
        setdatos_Api(respuesta.data);//seteo el estado inicialque defini al componente con los datos de la respuesta-003
      });
  }, []);

  return (
    <article className="card-product relative cursor-pointer text-black border border-solid rounded-xl border-gray-400 hover:shadow-xl">
      <HeartFilled
        className="text-2xl -mt-2 card-product__heart"
        twoToneColor="#f00000"
      />
      <img className="mx-auto" src={image} alt={title} />
      <div className="card-product__text p-4">
        <ul className="card-product__cart flex items-center justify-between mb-4">
          <li>{price}</li>
          <li>
            <ShoppingCartOutlined className="text-2xl -mt-2" />
          </li>
        </ul>
        <h2 className="text-xl font-bold">{title}</h2>
        <h3 className="mb-4">{brand}</h3>
        <ul className="card-product__benefit flex items-center justify-between">
          <li className="bg-yellow-200 rounded-full py-1 px-2 text-xs font-bold">
            Envio gratis
          </li>
          <li>
            <MailOutlined className="text-2xl -mt-2" />
          </li>
        </ul>
      </div>
    </article>
  );
}
