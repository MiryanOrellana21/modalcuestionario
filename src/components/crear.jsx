import React from "react";
import { useState } from "react";

export default function Crear() {
  const [cuestinario, setcuestinario] = useState({
    nombreCuestionario: "",
    preguntas: [],
  });
  const [respuestas, setRespuestas] = useState([]);
  const changeHandler = (e) => {
    if (e.target.name === "respuestas") {
      //    setcuestinario({...cuestinario, [e.target.name]: [e.target.value]})
      //   cuestinario.preguntas.push(e.target.value);
      console.log(e.target.value);
      const existAnswer = respuestas.find((item) => item === e.target.value);
      if (existAnswer) {
        console.log("misma respuesta");
        // existAnswer = respuestas
        console.log(existAnswer);
      } else {
        console.log("diferente");
        respuestas.push(e.target.value);
      }
    } else if (e.target.name === "answers") {
      console.log(e.target.checked);
      console.log(e.target.name);
      console.log(e.target.value);
    } else {
      setcuestinario({
        ...cuestinario,
        preguntas: { [e.target.name]: e.target.value },
      });
    }
    //   setcuestinario({...cuestinario})
  };
  const [num, setnum] = useState(0)
  const addAnswer = () => {
    var f = document.getElementById("input-add"); // create/insert new
    const contenedor = document.createElement("div");
    const input = document.createElement("input");
    const check = document.createElement("input");
    check.type = "checkbox";
    contenedor.appendChild(input);
    contenedor.appendChild(check);
    // contenedor.appendChild(check)
    input.name = "respuestas";
    input.id = "dName";
    check.name = "answers";
    check.value = `answer${num+1}`;
    check.id = "checkedid";
    check.onchange = function (e) {
      changeHandler(e);
    };
    input.onchange = function (e) {
      changeHandler(e);
    };
    // el.setAttribute('onchange', function(){changeHandler()})
    f.appendChild(contenedor);
  };
  const addQuestions = () => {
    console.log(cuestinario);
    console.log(respuestas);
    document.getElementById("input-add").innerHTML = "";
  };
  return (
    <div>
      <div>mostrar preguntas</div>
      <div>
        <div>
          <input autoComplete="off" onChange={changeHandler} type="text" name="pregunta" id="" />
          <div id="input-add"></div>
          <button onClick={addAnswer}>AÑADIR RESPUESTAR</button>
        </div>
        <button onClick={addQuestions}>AÑADIR PREGUNTA</button>
      </div>
    </div>
  );
}
