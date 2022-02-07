import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

import {Header} from "./componentes/header";
import {Main} from "./componentes/main";
import {Footer} from "./componentes/footer";


function Aplication() {
  return (
    <div className="wrapper">
      <h1>holas</h1>
      <Header />
      <Main />|
      <Footer />
    </div>
  );
}

ReactDOM.render(<Aplication />, document.getElementById("root"));
