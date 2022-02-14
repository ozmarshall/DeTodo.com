import "./card.scss";

function Card(props) {
  const { image, tittle, descripcion } = props;

  return (
    <div className="card">
      <img src={image} alt="" />
      <div>
        <h2> {tittle} </h2>
        <p> {descripcion} </p>
      </div>
    </div>
  );
}
