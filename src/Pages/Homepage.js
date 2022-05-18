import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import DetalleSigno from "../Components/DetalleSigno";
import Header from "../Components/Header";
import Horoscopo from "../Components/Horoscopo";
import buscarSigno from "../Utils/buscarSigno";
import Tarot from "../Components/Tarot";

function Homepage() {
  const [nombre, setNombre] = useState("");
  const [genero, setGenero] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [email, setEmail] = useState("");
  const [idSigno, setSigno] = useState(0);
  const [mostrarSigno, setMostrarSigno] = useState(false);
  const [mostrarTarot, setMostrarTarot] = useState(false);
  const [mostrarBotonTarot, setMostrarBotonTarot] = useState(false);

  const getNombre = (e) => {
    setNombre(e.target.value);
  };
  const getGenero = (e) => {
    setGenero(e.target.value);
  };
  const getFechaNacimiento = (e) => {
    let mes = parseInt(e.target.value.split("-")[1]);
    let dia = parseInt(e.target.value.split("-")[2]);
    setSigno(buscarSigno(mes, dia));
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const enviarFormulario = (e) => {
    e.preventDefault();
    setMostrarSigno(true);
    setMostrarBotonTarot(true);
  };

  const tirarCartasTarot = (e) => {
    setMostrarTarot(true);
  };

  const ocultarTarot = (e) => {
    setMostrarTarot(false);
  }

  return (
    <Container className="p-3">
      <Header />
      <Container className="p-5 mb-4 bg-light rounded-3 container-form">
        <Form onSubmit={enviarFormulario} >
          {/**NOMBRE */}
          <Form.Group controlId="formBasicName">
            <Form.Label>Nombre y Apellido:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su nombre y apellido"
              onChange={getNombre} required
            />
          </Form.Group>
          {/**EMAIL */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              onChange={getEmail}
              placeholder="Ingrese email" required
            />
            <Form.Text className="text-muted">
              Su información esta protegida.
            </Form.Text>
          </Form.Group>
          {/**GENERO */}
          <Form.Group controlId="formBasicGenero">
            <Form.Label>Género</Form.Label>
            <Form.Control as="select" onChange={getGenero} required>
              <option value="">Seleccione su género</option>
              <option value="F">Femenino</option>
              <option value="M">Masculino</option>
            </Form.Control>
          </Form.Group>
          {/**FECAH NACIMIENTO */}
          <Form.Group controlId="formBasicFechaNacimiento">
            <Form.Label>Fecha de nacimiento:</Form.Label>
            <Form.Control type="date" onChange={getFechaNacimiento} required />
          </Form.Group>
          {/**BOTON */}
          <Form.Group controlId="formBasicSigno" className="div-button">
            <Button type="submit" className="button">
              Calcular la magia
            </Button>
          </Form.Group>
        </Form>
      </Container>
      {/* MOSTRAR SIGNO */}
      {mostrarSigno && (
        <Container className="p-5 mb-4 bg-light rounded-3">
          <DetalleSigno signo={idSigno} />
          <Horoscopo signo={idSigno} />
        </Container>
      )}

      <Container>
        {/* MOSTRAR BOTON TAROT */}
        {mostrarBotonTarot && (<div className="text-center">
          <Button className="form-button bg-transparent border-0" onClick={tirarCartasTarot}>
            <img src="./tarot1.png" alt="tarot" className="img-fluid img" />
            <br />
            <h5 className="text-black">Tira las cartas!!</h5>
          </Button>
        </div>)}

        {mostrarTarot && (
          <Container className="p-5 mb-4 bg-light rounded-3">
            <Tarot tirarCartasTarot={tirarCartasTarot} ocultarTarot={ocultarTarot} />
          </Container>
        )}
      </Container>
    </Container>
  );
}

export default Homepage;
