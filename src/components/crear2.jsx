import React from "react";
import { useState } from "react";

export default function Crear() {
  const [cuestionario, setcuestionario] = useState({
    nameQuestion: "",
    respuesta1: "",
    respuesta2: "",
    respuesta3: "",
    respuesta4: "",
    respuesta5: "",
    respuestas: [],
    correctAnswer: [],
  });
  const [final, setFinal] = useState({
    nombre: "",
    preguntas: [],
  });
  const handleChange = (e) => {
    console.log(e.target.name);
    if(e.target.name==="respuestas"){
        const existAnswer = cuestionario.respuestas.find(
            (item) => item === e.target.value
          );
        //   console.log(e.target.checked)
          if(existAnswer) {
            // existAnswer.cuestionario.respuestas = e.target.value
            console.log('iguales')
          }else{
            cuestionario.respuestas.push(e.target.value)
          }
    }else {
        setcuestionario({ ...cuestionario, [e.target.name]: e.target.value });

    }
  };
  const saveQuestion = () => {
    console.log(cuestionario);
    final.preguntas.push(cuestionario);
    setFinal({ ...final, nombre: ":D" });
  };
  return (
    <div>
      <div>
        {final.preguntas ? (
          final.preguntas.map((pregunta, id) => (
            <div style={{ border: "1px solid red", marginBottom: "5px"}} key={id}>
              <p>{pregunta.nameQuestion}</p>
              <p>{pregunta.respuesta1}</p>
              <p>{pregunta.respuesta2}</p>
              <p>{pregunta.respuesta3}</p>
              <p>{pregunta.respuesta4}</p>
              <p>{pregunta.respuesta5}</p>
            </div>
          ))
        ) : (
          <h3>AUN NO HAY PREGUNTAS</h3>
        )}
      </div>
      <div onChange={handleChange}>
        <input
          type="text"
          name="nameQuestion"
          placeholder="nombre de la pregunta"
        />{" "}
        <br />
        <input
          type="checkbox"
          name="correctAnswer"
          value="answer1"
          id=""
        />{" "}
        <input type="text" name="respuestas" id="" /> <br />
        <input
          type="checkbox"
          name="correctAnswer"
          value="answer2"
          id=""
        />{" "}
        <input type="text" name="respuestas" id="" /> <br />
        <input
          type="checkbox"
          name="correctAnswer"
          value="answer3"
          id=""
        />{" "}
        <input type="text" name="respuestas" id="" />
        <br />
        <input
          type="checkbox"
          name="correctAnswer"
          value="answer4"
          id=""
        />{" "}
        <input type="text" name="respuestas" id="" />
        <br />
        <input
          type="checkbox"
          name="correctAnswer"
          value="answer5"
          id=""
        />{" "}
        <input type="text" name="respuestas" id="" />
        <br />
      </div>
      <button onClick={saveQuestion}>AGREGAR PREGUNTA</button>
    </div>
  );
}
