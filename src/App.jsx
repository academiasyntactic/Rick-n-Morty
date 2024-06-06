import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const array = [
    {
      titulo: "mouse gamer",
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_893511-MCO73780589735_012024-O.webp",
      precio: 50000,
    },
    {
      titulo: "Silla gamer",
      imagen:
        "https://www.tauretcomputadores.com/images/products/Product_20221110161325229045307.PL1000-Azul-1.webp",
      precio: 2000000,
    },
  ];

  const [numero, setNumero] = useState(0);
  const [nombre, setNombre] = useState(null);
  const [informacion, setInformacion] = useState(null);

  const solicitud = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${nombre}`
    );
    const datos = await response.json();
    console.log(datos);
  };

  return (
    <div>
      <div className="flex">
        <Card
          titulo={"Mouse Gamer"}
          imagen={
            "https://http2.mlstatic.com/D_NQ_NP_893511-MCO73780589735_012024-O.webp"
          }
        />
        <Card
          titulo={"Silla Gamer"}
          imagen={
            "https://www.tauretcomputadores.com/images/products/Product_20221110161325229045307.PL1000-Azul-1.webp"
          }
        />

        <h1 className="text-white">El numero es igual a {numero} </h1>
        <button className="text-white" onClick={() => setNumero(numero + 1)}>
          Aumentar numero
        </button>
      </div>

      <Navbar setNombre={setNombre} solicitud={solicitud} nombre={nombre} />
    </div>
  );
}

export default App;
