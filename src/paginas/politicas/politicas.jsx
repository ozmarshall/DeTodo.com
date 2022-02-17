import "./politicas.scss";

export function PagePoliticas() {
  return (
    <div className="pagina_politicas w-8/12 mx-auto ">
      <h2>Política de privacidad DeTodo.com CLASIFICADOS</h2>
      <h3>Política de Privacidad USUARIOS DeTodo.com CLASIFICADOS</h3>
      <p>
        DeTodo.com respeta la jurisdicción de cada país, por lo que pone a
        disposición del público peruano, la siguiente política de privacidad, en
        cumplimiento de lo establecido en el artículo 18 de la Ley No. 29733 –
        Ley de Protección de Datos Personales, y su reglamento aprobado por
        Decreto Supremo No. 00-2013-JUS
      </p>
      <p>
        Identidad y domicilio del “Responsable del Tratamiento”: DeTodo.com
        B.V., sociedad constituida bajo las leyes del Reino de los Países
        Bajos., con domicilio en Gustav Mahlerplein 5, 1082 MS Amsterdam, con
        registro tributario RSIN 861989545.
      </p>

      <p>
        Banco de Datos: La información será almacenada en el Banco de Datos
        denominado “USUARIOS DeTodo.com CLASIFICADOS”, inscrito ante la Autoridad
        Peruana de Protección de Datos Personales, a cargo del “Encargado de
        Tratamiento”. Los datos son almacenados en servidores ubicados en los
        Países Bajos.
      </p>

      <p>
        Datos Personales que recopilamos:  DeTodo.com recopila los nombres, correo
        electrónico, teléfono móvil, tarjeta de crédito, si se utiliza Facebook
        se recopila nombre y apellidos, conforme a los permisos otorgados en
        dicha red social. Para más información, por favor remítase al apartado 2
        de la presente política.
      </p>

      <p>
        DeTodo.com requiere su consentimiento para finalidades adicionales por
        separado, y conforme a lo establecido en su “Política para Finalidades
        Adicionales”.
      </p>

      <p>
        Finalidad y Usos Previstos: Mantener actualizada la información de los
        clientes en la plataforma web y mobile de DeTodo.com en www.DeTodo.com.com.pe, que
        actúa como intermediaria entre compradores y vendedores de diversos
        bienes, tanto muebles como inmuebles. En ese sentido, las finalidades se
        pueden agrupar en:
      </p>

      <p>Dar acceso y proveer servicios desde nuestra plataforma.</p>

      <p>
        Si inicia sesión, utilizaremos los datos proporcionados para
        identificarlo como usuario y darle acceso a la plataforma.{" "}
      </p>

      <p>
        Si inicia sesión con su cuenta de Facebook, usaremos su nombre y
        apellido del perfil de Facebook y la dirección de correo electrónico de
        Facebook para identificarlo como usuario y darle acceso a la Plataforma.
      </p>

      <p>
        Utilizamos los datos de inicio de sesión mencionados para brindarle
        nuestros servicios de conformidad con nuestros “Términos y Condiciones”.
      </p>

      <div className="text-center text-slate-100">
        <button
          onClick={() => {
            console.log("click!!!");
          }}
          className="p-4 bg-primary rounded w-40 "
        >
          Cargar Más
        </button>
      </div>
    </div>
  );
}
