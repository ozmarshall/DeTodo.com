import React from "react";
import ReactDOM from "react-dom";
import "./recursos/styles/main.css"

function Pedro_App(props) {
  console.log(props);
  return <h1>halo {props.name.toUpperCase()}</h1>;
}

function IMprime_grupo(props) {
  console.log("props", props);
  return (
    <ul>
      <li>java </li>
      <li>react </li>
      <li>cad </li>
      <li>pearl </li>
    </ul>
  );
}

function Lista(props) {
  console.log("props", props);
  return (
    <ul>
      {props.item.map((alumno) => (
        <li>{alumno}</li>
      ))}
    </ul>
  );
}

function Card(props) {
  const {
    titulo = "cualquiercosa",
    imagen = "https://us.123rf.com/450wm/natalyaa/natalyaa1909/natalyaa190900004/131969431-gallina-marr%C3%B3n-aislada-sobre-fondo-blanco-.jpg?ver=6",
    descripcion = "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
    lugares = ["china", "korea", "rusia", "belagica"],
  } = props;

  return (
    <div>
      <article>
        <img src={imagen} alt="" with="200" height="200" />
        <div>
          <h2>{titulo}</h2>
          <p>{descripcion}</p>
          <Lista item={lugares} />
        </div>
      </article>
    </div>
  );
}
const destinos = [
  {
    titulo: "paracas",
    imagen: "",
    descripcion: "",
    lugares: ["chincha", "islas", "cerro"],
  },
  {
    titulo: "puno",
    imagen: "",
    descripcion: "",
    lugares: ["chincha", "islas", "cerro"],
  },
  {
    titulo: "arequipa",
    imagen: "",
    descripcion: "",
    lugares: ["chincha", "islas", "cerro"],
  },
  {
    titulo: "selva",
    imagen: "",
    descripcion: "",
    lugares: ["chincha", "islas", "cerro"],
  },
];

function App() {
  return <div className= "wrapper">
    <header>header</header>
    <main>
    <Card />
    </main>
    <footer>footer</footer>
  </div>
  
}

/*


ReactDOM.render(
  <div>
    <Pedro_App name="abr" />
    <Pedro_App name="jtk" />
    <Pedro_App name="cor" />

    <Lista item={["pollo", "perro", "caballo", "boa"]} />
    <Lista item={["cerdo", "gallina", "bhuo", "mantis"]} />
    <Card
      titulo="perro 1"
      imagen="https://okdiario.com/img/2021/09/17/perro-655x368.jpg"
      descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptate consequatur saepe autem quia accusantium quam consequuntur hic vero ex? Odio cumque modi, delectus culpa perferendis placeat assumenda vero suscipit."
      lugares={[""]}
    />
    <Card
      titulo="perro 2"
      imagen="https://dam.ngenespanol.com/wp-content/uploads/2019/10/perros-personalidad-2.jpg"
      descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptate consequatur saepe autem quia accusantium quam consequuntur hic vero ex? Odio cumque modi, delectus culpa perferendis placeat assumenda vero suscipit."
      lugares={[""]}
    />
    <Card
      
    />
  </div>,
  document.getElementById("root")
);*/

ReactDOM.render(<App />, document.getElementById("root"));
