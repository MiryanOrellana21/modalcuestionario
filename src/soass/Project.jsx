import {
  Modal,
  Button,
  Navbar,
  Nav,
  Form,
  FormControl,
  Jumbotron,
} from "react-bootstrap";
import React from "react";
import { useState } from "react";
import axios from "axios";
function MyVerticallyCenteredModal(props) {
  const [proyecto, setProyecto] = useState({
    nombreProyecto: "",
    idEstudiante: 2,
    idCurso: 4,
  });
  const saveInputs = (e) => {
    const { name, value } = e.target;
    setProyecto({
      ...proyecto,
      [name]: value,
    });
  };
  const [archivoProyecto, setarchivoProyecto] = useState([]);
  const capturarArchivo = (e) => {
    console.log(e.target.files);
    setarchivoProyecto(e.target.files[0])
  };
  const GuardarProyecto = () => {
    console.log(proyecto);
    const formData = new FormData();
    // data.append("nombreProyecto", proyecto.nombreProyecto);
    // data.append("idEstudiante", 2);
    // data.append("idCurso", 4);
    formData.append("fileUpload", archivoProyecto);
    console.log(...formData);
    // const URL = "http://localhost:63938/api/project/publish/";
    axios.post("http://localhost:63938/api/proyecto/subir", ...formData,
    {
      header : {
          'Content-Type': 'multipart/form-data'
        }
        
    })
    .then((res)=> {
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Subir Proyecto
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre del proyecto</Form.Label>
            <Form.Control
              onChange={saveInputs}
              name="nombreProyecto"
              type="text"
              placeholder="ingrese nombre del proyecto"
            />
          </Form.Group>
          <Form.Group>
            <Form.File
              onChange={capturarArchivo}
              name="archivoProyecto"
              id="exampleFormControlFile1"
              label="Subir archivo del proyecto"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={GuardarProyecto} variant="primary">
          Guardar proyecto
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#features">Mis Cursos</Nav.Link>
          <Nav.Link href="#pricing">Membresia</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="inserte nombre del curso"
            className="mr-sm-2"
          />
          <Button variant="outline-info">Buscar Curso</Button>
        </Form>
      </Navbar>
      <Jumbotron>
        <h1>Curso fotografia</h1>
        <p>descripcion del curso</p>
        <p>
          <Button variant="primary">continuar </Button>{" "}
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Subir proyecto
          </Button>
        </p>
      </Jumbotron>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default App;
