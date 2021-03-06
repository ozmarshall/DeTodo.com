import { useEffect, useState } from "react";
import axios from "axios";
import { CardProduct } from "componentes/card-product-venta/card-product-venta";

export function PagePrincipal() {
  //codigo para poder subir a la pagina principal no desde el servidor
  const products = [
    {
      id: 1,
      image:
        "https://http2.mlstatic.com/D_Q_NP_974377-MPE47679042385_092021-AB.webp",
      price: "S/. 200.00",
      title: "TITULO DE PRODUCTO",
      brand: "Sony",
    },
    {
      id: 1,
      image:
        "https://http2.mlstatic.com/D_Q_NP_974377-MPE47679042385_092021-AB.webp",
      price: "S/. 200.00",
      title: "TITULO DE PRODUCTO",
      brand: "Sony",
    },
  ];
  //codigo para poder subir a la pagina principal no desde el servidor

  //////////////////////////////////////////////////////////////////////////////////////////

  //codigo para poder subir a la pagina principal desde el servidor
  const [articulos, setArticulos] = useState([]);

  function getProducts() {
    axios
      .get("http://127.0.0.1:8000/catalogo/articulo/")
      .then((respuesta) => {
        console.log("respuesta", respuesta.data);
        setArticulos(respuesta.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);
  //codigo para poder subir a la pagina principal desde el servidor

  return (
    <div className="">
      <h1 className="mt-4 mb-10">
        <span className="inline-block pl-4 border-l-8 border-solid border-primary font-bold">
          Bienvenidos a tu tienda favorita
        </span>
      </h1>
      <div className="grid grid-cols-4 gap-8 w-5/6 mx-auto">
        {articulos.length > 0 &&
          articulos.map((product) => (
            <CardProduct
              image={product.image}
              price={product.price}
              title={product.tittle}
              id={product.id}
              key={product.id}
            />
          ))}
      </div>
    </div>
  );
}
