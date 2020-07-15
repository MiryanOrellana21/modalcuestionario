import React, { useEffect, useState } from "react";
// import "./encuesta.sass";
import { temary } from "./temary.json";
function Encuesta() {
  const [dafas, setDafaas] = useState([]);
  // const [dafas, setDafaas] = useState([]);
  const [contenido, setcontenido] = useState([]);
  useEffect(() => {
    console.log(temary);
    setDafaas(temary);
  }, []);

  const mostrarContenido = (data) => {
    console.log(data);
    setcontenido(data);
  };
  return (
    <div className="content-encuesta">
      {" "}
      {console.log(dafas)}
      <div>  CARRUSEL
        {contenido.map((contenidos, idContenido) => (
          <div key={idContenido}>
          
            {contenidos.tipo === "pdf" ? <div>EL CONTEIDO PDF</div> : null}
            {contenidos.tipo === "actividad" ? <div>LAS ACTIVIDADES QUE TIENE</div> : null}
            {contenidos.tipo === "idea" ? <div>IDEA</div> : null}
          </div>
        ))}
      </div>
      <div>
        contenido del temario solo de titulos
        {dafas.map((modulo, id) => (
          <div key={id}>
            {modulo.name}
            {modulo.data.map((seccion, idSeccion) => (
              <div
                key={idSeccion}
                onClick={() => mostrarContenido(seccion.data)}
              >
                {seccion.name}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Encuesta;
