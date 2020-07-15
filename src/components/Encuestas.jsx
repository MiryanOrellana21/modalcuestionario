import React, { useState } from "react";
import "./encuesta.sass";
function Encuestas(props) {
  const [encuesta, setencuesta] = useState([
    {
      aspecto:
        "Nivel de involucramiento y compromiso con el desarrollo del módulo 0",
      preguntas: [
        {
          pregunta:
            "¿Te fue suficiente el tiempo para el desarrollo de las actividades propuestas?",
        },
        {
          pregunta:
            "¿Te has sentido involucrado y comprometido con el desarrollo del módulo 0?",
        },
        {
          pregunta:
            "¿Te has sentido motivado al ir desarrollando las actividades propuestas en la          sección 1: Situación problematizadora?",
        },
        {
          pregunta:
            "¿Te has sentido motivado al ir desarrollando las actividades propuestas en la sección 2: Análisis a la luz de la teoría?",
        },
        {
          pregunta:
            "¿Te has sentido motivado al ir desarrollando las actividades propuestas en la          sección 3: Manos a la obra?",
        },
        {
          pregunta:
            "¿Te has sentido motivado al ir respondiendo el cuestionario en la sección 4:          Evaluando lo aprendido?",
        },
      ],
    },
    {
      aspecto: "Sobre el contenido y metodología del módulo 0",
      preguntas: [
        {
          pregunta: "¿Te fue fácil participar en el foro chat?  ",
        },
        {
          pregunta:
            "¿Tuviste dificultades al realizar las actividades planteadas en la sección 1:       Situación problematizadora?",
        },
        {
          pregunta:
            "¿Tuviste dificultades al realizar las actividades planteadas en la sección 2:          Análisis a la luz de la teoría?",
        },
        {
          pregunta:
            "¿Tuviste dificultades al realizar las actividades planteadas en la sección 3:          Manos a la obra?",
        },
        {
          pregunta:
            "¿Tuviste dificultades al realizar las actividades planteadas en la sección 4:          Evaluando lo aprendido?",
        },
        {
          pregunta:
            "¿Las lecturas fueron fáciles de entender para el desarrollo de las          actividades?",
        },
        {
          pregunta:
            "¿Consideras haber fortalecido tu práctica pedagógica al desarrollar el módulo          0?",
        },
      ],
    },
  ]);
  const [Preguntas] = useState([{ nombre: "" }]);
  const GuardarEncuesta = () => {
    console.log("Lo hicimos ---inserte meme---");
    console.log(respuestas);
  };
  const [respuestas] = useState([]);
  const capturarInput = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.checked);
    // if(){
    const data = {
      pregunta: e.target.name,
      respuesta: e.target.value,
    };
    const existQuestion = respuestas.find(
      (item) => item.pregunta === data.pregunta
    );
    if (existQuestion) {
      existQuestion.respuesta = data.respuesta;
    } else {
      respuestas.push(data);
    }
    // }else {
    // console.log(respuestas);
    // }
  };
  return (
    <div>
      <div className="content-encuesta">
        <div className="titulo">
          Estimado (a) participante, es para nosotros importante saber cómo has
          percibido el desarrollo de este primer módulo. Por eso, te pedimos que
          realices la siguiente encuesta de satisfacción.
        </div>
        <div className="content-tittle">
          <label>ASPECTOS</label>
        </div>
        {encuesta
          ? encuesta.map((enc, id) => (
              <div className="table-encuesta" key={id}>
                <div className="content-aspecto">
                  <label>{enc.aspecto}</label>
                </div>
                {enc.preguntas.map((pregunta, idPregunta) => (
                  <div className="form-encuesta" key={idPregunta}>
                    <div className="pregunta">
                      <label>{pregunta.pregunta}</label>
                    </div>
                    <div
                      className="form-respuesta"
                      onChange={(e) => capturarInput(e)}
                    >
                      <span className="form-encuesta--group">
                        <input
                          type="radio"
                          className="radio-button"
                          name={pregunta.pregunta}
                          id={idPregunta + "si" + id}
                          value="si"
                        />
                        <label
                          className="pregunta-seleccionada"
                          htmlFor={idPregunta + "si" + id}
                        >
                          SI
                        </label>
                      </span>
                      <span className="form-encuesta--group">
                        <input
                          type="radio"
                          name={pregunta.pregunta}
                          className="radio-button"
                          id={idPregunta + "no" + id}
                          value="no"
                        />
                        <label
                          className="pregunta-seleccionada"
                          htmlFor={idPregunta + "no" + id}
                        >
                          NO
                        </label>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))
          : null}
        <button onClick={() => GuardarEncuesta()} className="button-encuesta">
          ENVIAR ENCUESTA
        </button>
      </div>
    </div>
  );
}

export default Encuestas;
