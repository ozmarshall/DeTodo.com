import { Button } from "ui/buttons/button";
import iconos_styles from "../../ui/iconos/iconos_styles";
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
  } = props;

  return (
    <article>
      <section className="mx-auto">
        <div>
          <h2 className="text-green-500">FELICIDADES</h2>
          <p className="text-green-500">
            ESTE ARTICULO ESTA APUNTO DE SER TUYO !!!!!
          </p>
          <div>
            <img src={image} alt="" />
          </div>
        </div>
        <div>
          <p className="id_anuncio py-10"> ID DEL ANUNCIO : {id}</p>
          <p className="id_precio text-green-500 py-8 text-9xl">S/ {price}</p>
          <p>{title}</p>
          <p>{description}</p>
          <div className="detalle_5">
            <p>{stateS}</p>
            <p>{stateRanking}</p>
            <p>{numberItem}</p>
            <p>{paymentMeth}</p>
            <p>{deliveryPoint}</p>
            <p>{receptionN}</p>
            <Button>COMPRAR !</Button>
          </div>
        </div>
      </section>
    </article>
  );
}
