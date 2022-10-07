import { Container } from "react-bootstrap";

export default function Home () {
    return (
        <Container className="container-home">
            <h1>Bienvenido a <span className="fw-bold">Happy Cake</span></h1>
            <h6>El lugar de los pasteles felices</h6>
            <img id="cake" src="https://cdn-icons-png.flaticon.com/512/1725/1725735.png" alt="Pastel de cumpleaños"/>
            
        </Container>
    );
};