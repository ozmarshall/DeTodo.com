import { Button } from "ui/buttons/button";
import iconos_styles from "../../ui/iconos/iconos_styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { CardDetalleCompra } from "../../componentes/card-detalle-compra/card-detalle-compra";
import "./detalle-compra.scss";

export function DetalleCompra() {
  const params= useParams();
  const [product, setProduct]= useState({})

  function getDetalleCompra (id){
    axios.get(`https://61ef3d66d593d20017dbb3ad.mockapi.io/articulos/${id}`)
    .then((product)=>{
      setProduct(product.data)

    }).catch((error)=>{
      alert("no se pudo hacer la consulta")
    })

  }
  useEffect (()=>{
    getDetalleCompra(params.id)
  }, [])
  
  return (
    <div className="detalle_1 max-w-screen-xl mx-auto my-10">
      <section>
        <CardDetalleCompra
            image={product.image}
            price={product.price}
            title={product.tittle}
            description={product.description}
            stateS={product.stateS}
            stateRanking={product.stateRanking}
            numberItem={product.numberItem}
            paymentMeth={product.paymentMeth}
            deliveryPoint={product.deliveryPoint}
            receptionN={product.receptionN}
            id={product.id}
          />
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
