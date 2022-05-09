import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import DetalleSigno from "../Components/DetalleSigno";
import Header from "../Components/Header";
import Horoscopo from "../Components/Horoscopo";
import buscarSigno from "../Utils/buscarSigno";

function Homepage() {
  const [nombre, setNombre] = useState("");
  const [genero, setGenero] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [email, setEmail] = useState("");
  const [idSigno, setSigno] = useState(0);
  const [mostrarSigno, setMostrarSigno] = useState(false);

  const getNombre = (e) => {
    setNombre(e.target.value);
  };
  const getGenero = (e) => {
    setGenero(e.target.value);
  };
  const getFechaNacimiento = (e) => {
    setFechaNacimiento(new Date(e.target.value));
    let mes = parseInt(e.target.value.split("/")[1]);
    let dia = parseInt(e.target.value.split("/")[2]);
    setSigno(buscarSigno(mes, dia));
  };
  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const enviarFormulario = (e) => {
    e.preventDefault();
    setMostrarSigno(true);
    console.log(nombre, genero, fechaNacimiento, idSigno, email);
  };

  return (
    <Container className="p-3 ">
      <Header />
      <Container className="p-5 mb-4 bg-light rounded-3">
        <Form onSubmit={enviarFormulario}>
          {/**NOMBRE */}
          <Form.Group controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su nombre"
              onChange={getNombre}
            />
          </Form.Group>
          {/**EMAIL */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              onChange={getEmail}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              Nunca compartiremos tu email con nadie.
            </Form.Text>
          </Form.Group>
          {/**GENERO */}
          <Form.Group controlId="formBasicGenero">
            <Form.Label>Genero</Form.Label>
            <Form.Control as="select" onChange={getGenero}>
              <option value="">Seleccione su genero</option>
              <option value="F">Femenino</option>
              <option value="M">Masculino</option>
              <option value="O">Otro</option>
            </Form.Control>
          </Form.Group>
          {/**FECAH NACIMIENTO */}
          <Form.Group controlId="formBasicFechaNacimiento">
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control type="date" onChange={getFechaNacimiento} />
          </Form.Group>
          {/**BOTON */}
          <Form.Group controlId="formBasicSigno">
            <Button variant="primary" type="submit">
              Calcular la magia
            </Button>
          </Form.Group>
        </Form>
      </Container>
      {mostrarSigno && (
        <Container className="p-5 mb-4 bg-light rounded-3">
          <DetalleSigno signo={idSigno} />
          <Horoscopo signo={idSigno} />
        </Container>
      )}
    </Container>
  );
}

export default Homepage;
