import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BarraNavegacion from "./componentes/NavBar";

import Home from "./Vistas/Home";
import Contacto from "./Vistas/Contacto";
import NotFound from "./Vistas/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BarraNavegacion />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
