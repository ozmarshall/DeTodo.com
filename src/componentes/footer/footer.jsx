import "./footer.scss";
import iconos_style from "./iconos/iconos_style";

export function Footer() {
  return (
    <footer className="footerF p-10">
      <hr className="py-4 " />
      <section className="footer_1">
        <div>
          <h2>Aviso Legal</h2>
          <div className="aviso">
            <img src={iconos_style.img5} alt="" />
            <img src={iconos_style.img3} alt="" />
          </div>
        </div>
        <div>
          <h2>Cuenta Protegida</h2>
          <div className="aviso">
            <img src={iconos_style.img6} alt="" />
            <img src={iconos_style.img3} alt="" />
          </div>
        </div>
        <div>
          <h2>Siguenos en:</h2>
          <div className="aviso">
            <img src={iconos_style.img2} alt="" />
            <img src={iconos_style.img4} alt="" />
            <img src={iconos_style.img5} alt="" />
          </div>
        </div>
      </section>
      <section className="footer_2">
        <h2>
          <a href="#">Compra y vende en DeTodo.com y disfruta</a>
        </h2>
        <p>
          Avisos Clasificados. @ 2010-2022 <a href="">DeTodo.com</a>{" "}
        </p>
      </section>
    </footer>
  );
}
