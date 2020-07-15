import React, { useState } from "react";
import './form.sass'
import {Link} from 'react-router-dom'
function Forms() {
  const [data] = useState([
    {
      pregunta:
        "La docente Luisa se enteró que cuatro de sus estudiantes presentan síntomas del COVID-19 y tiene temor de que se propague en su comunidad. Para ello, informa a los padres de familia que realicen las siguientes acciones para evitar la propagación. Elige una o más alternativas según creas conveniente.",
      tipo: "checkbox",
      respuestas: [
        {
          opcion:
            "Aislamiento social, lavado de manos, distanciamiento social, uso de mascarillas y desinfecciónrespuesta 1",
        },
        {
          opcion:
            "Distanciamiento social, lavado de manos, cuarentena, uso de mascarillas y desinfección",
        },
        {
          opcion:
            "Lavado de manos, aislamiento social, distanciamiento social y uso de mascarillas",
        },
        {
          opcion:
            "Uso de mascarillas, distanciamiento social, lavado de manos y aislamiento social",
        },
      ]
    },
    {
      pregunta:
        "¿Cuáles, de los siguientes, son los síntomas de una persona que padece COVID-19?Escoge una o más alternativas según creas conveniente.",
      tipo: "checkbox",
      respuestas: [
        {
          opcion: "Dificultad para respirar",
        },
        {
          opcion: "Tos y dolor de garganta",
        },
        {
          opcion: "Lagrimeo constante",
        },
        {
          opcion: "Fiebre alta",
        },
        {
          opcion: "Dolor de estómago",
        },
      ],
    },
    {
      pregunta:
        ".¿Qué medidas puedes tomar para prevenir la propagación del COVID-19 en la institución educativa? (Puedes marcar más de una alternativa)",
      tipo: "checkbox",
      respuestas: [
        {
          opcion:
            "Promover, en los miembros de la comunidad educativa, comportamientos saludables como           cubrirse la boca con un pañuelo o con el antebrazo al toser o estornudar, y mantener el 1          distanciamiento social",
        },
        {
          opcion: "Mantener las ventanas abiertas para una mejor ventilación",
        },
        {
          opcion:
            "Asistir a las reuniones masivas convocadas en tu barrio para informarse del COVID–19",
        },
        {
          opcion:
            "Promover el lavado de manos antes de tomar alimentos y después de ir al baño",
        },
        {
          opcion:
            "Promover el distanciamiento social en los estudiantes de manera permanente en las diversas áreas de la I.E.respues",
        },
      ],
    },
    {
      pregunta:
        "El director Alexander piensa promover, para la planificación, experiencias de      aprendizaje a partir de situaciones particulares presentadas en el contexto del       COVID-19. Indica qué tienen que tomar en cuenta en las situaciones problemáticas.      (Puedes marcar más de una alternativa)",
      tipo: "checkbox",
      respuestas: [
        {
          opcion:
            "A) Situaciones relacionadas al cuidado de la salud, al uso del tiempo libre, a la convivencia en          el hogar, el ambiente y la sobrevivencia",
        },
        {
          opcion:
            "B) Situaciones relacionadas al bienestar emocional, la ciudadanía y el bien común",
        },
        {
          opcion:
            "D) Situaciones relacionadas al uso de las tecnologías, al uso del tiempo libre, a la convivencia           en el hogar, el ambiente y la sobrevivencia",
        },
        {
          opcion: "a y b",
        },
        {
          opcion: "b y c",
        },
      ],
    },
    {
      pregunta:
        "Para recabar información sobre las emociones que están experimentando los niños y niñas, los      niveles de estrés, angustia o ansiedad a los cuales han estado expuestos, ¿cuál es la       estrategia que debe utilizar la docente Katherine para brindar soporte socioemocional a       sus estudiantes? (Selecciona las opciones que consideres correctas)",
      tipo: "checkbox",
      respuestas: [
        {
          opcion: "El árbol de las emociones",
        },
        {
          opcion: "Retos saludables",
        },
        {
          opcion: "¡Cuidándonos familia!",
        },
        {
          opcion: "Explorando nuestras emociones",
        },
      ],
    },
  ]);
  const [respuestas] = useState([]);
  const guardarRespuesta = (e, val) => {
    const data = {
      codigo: val,
      pregunta: e.target.name,
      respuestas: [e.target.value],
    };
    const existQuestion = respuestas.find(
      (item) => item.pregunta === data.pregunta
    );

    //logica miryan
    //1. hacer un for
    //obtener el id del for y hacer un for a las respuestas
    // si es igual poner si no quitar
    // for (let index = 0; index < respuestas.length; index++) {
    // if (existQuestion) {
    //   console.log(respuestas);
    //   console.log('existe la pregunta ahora averiguar ')
    //   for (let index = 0; index < respuestas.length; index++) {
    //     console.log(respuestas[index])
    //     if(respuestas[index]===)
    //   }
    // } else {
    //   respuestas.push(data);
    //   console.log(respuestas);
    // }
    // }
    // console.log(respuestas.indexOf(e.target.name))
    //otra logica de miryan
    if (existQuestion) {
      for (let i = 0; i < respuestas.length; i++) {
        if (respuestas[i].pregunta === data.pregunta) {
          if (e.target.checked) {
            respuestas[i].respuestas.push(e.target.value);
          } else {
            const valueIndex = respuestas[i].respuestas.indexOf(e.target.value);
            respuestas[i].respuestas.splice(valueIndex, 1);
          }
        }
      }
    } else {
      respuestas.push(data);
    }
  };
  const guardarFormulario = () => {
    console.log(respuestas);
  };
  return (
    <div className="content-form">
      <div className="form-header">
        Estimado(a) colega, te invitamos a responder las siguientes preguntas
        para comprobar lo aprendido. Recuerda que puedes escoger una o más
        alternativas según creas conveniente.
      </div>
    <Link to="/login">ir al link 1</Link> <br/>
    <Link to="/login2">ir al link 2</Link>
      {data.map((pregunta, id) => (
        <div className="form" key={id}>
          <p className="form-question">
            {id + 1}.{pregunta.pregunta}
          </p>
          <div className="content_respuestas">
            {pregunta.respuestas.map((respuesta, idPregunta) => (
              <div
                key={idPregunta}
                className="myradio"
                onChange={(e) => guardarRespuesta(e, id)}
              >
                <input
                  type={pregunta.tipo}
                  name={pregunta.pregunta}
                  value={respuesta.opcion}
                  id={idPregunta + "answer" + id}
                  className="custom"
                />
                <label htmlFor={idPregunta + "answer" + id}>
                  {respuesta.opcion}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button onClick={guardarFormulario}>ENVIAR CUESTIONARIO</button>
    </div>
  );
}

export default Forms;
