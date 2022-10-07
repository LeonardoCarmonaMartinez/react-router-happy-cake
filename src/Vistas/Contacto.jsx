import { Container, Form, Button } from "react-bootstrap";

export default function Contacto () {
    return (
      <Container className="container-contact">
        <h1>Cuéntanos, ¿en qué te podemos ayudar?</h1>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="nombre@ejemplo.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
        <Button variant="danger">Enviar</Button>{' '}
      </Container>
    )
};