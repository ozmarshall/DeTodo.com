import { Button } from "ui/buttons/button";
import "./card-detalle-compra.scss";
import { useHistory } from "react-router-dom";

export function CardDetalleCompra(props) {
  let history = useHistory();
  const {
    image,
    price,
    title,
    brand,
    description,
    stateS,
    stateRanking,
    numberItem,
    paymentMeth,
    deliveryPoint,
    receptionN,
    id,
    phoneNumber,
    contact
  } = props;

  return (
    <article>
      <section className="mx-auto">
        <div>
          <h2 className="text-green-500 py-5">FELICIDADES</h2>
          <p className="text-green-500 py-5">
            ESTE ARTICULO ESTA APUNTO DE SER TUYO !!!!!
          </p>
          <div>
            <img src={image} alt="" className="mx-auto py-10" />
          </div>
        </div>
        <div>
          <p className="id_anuncio py-5"> ID DEL ANUNCIO : XWT2THJ7{id}</p>
          <p className="id_precio text-green-500 py-8 text-9xl">S/ {price}</p>
          <p>Titulo del Articulo : {title}</p>
          <p>Descripción del Articulo : {description}</p>
          <div className="detalle_5">
            <p>Estado : {stateS}</p>
            <p>Estado ranking : {stateRanking}</p>
            <p>Cantidad : {numberItem}</p>
            <p>Metodo de pago : {paymentMeth}</p>
            <p>Punto de Entrega : {deliveryPoint}</p>
            <p>Punto de Recepción : {receptionN}</p>
            <p>Nro de contacto : {phoneNumber}</p>
            <p>Contacto : {contact}</p>
            <Button>COMPRAR !</Button>
          </div>
        </div>
      </section>
    </article>
  );
}
