import { CardProduct } from "componentes/card-product/card-product";

export function PagePrincipal() {
  const products = [
    {
      id: 1,
      image:
        "https://http2.mlstatic.com/D_Q_NP_974377-MPE47679042385_092021-AB.webp",
      price: "S/. 200.00",
      title: "TITULO DE PRODUCTO",
      brand: "Sony",
    },
   
  ];

  return (
    <div className="pagina_mi_perfil">
      <h1 className="mt-4 mb-10">
        <span className="inline-block pl-4 border-l-8 border-solid border-primary font-bold">
          Bienvenidos a tu tienda favorita
        </span>
      </h1>
      <div className="grid grid-cols-4 gap-8">
        {products.map((product) => (
          <CardProduct {...product} />
        ))}
      </div>
    </div>
  );
}
