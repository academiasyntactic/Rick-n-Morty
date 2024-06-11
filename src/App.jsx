import { useEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import CardRick from "./components/CardRick";

function App() {

  const [nombre, setNombre] = useState(null);
  const [informacion, setInformacion] = useState(null);

  const solicitud = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${nombre}`
    );
    const datos = await response.json();
    setInformacion(datos);
  };

  useEffect(
    ()=>{
      const salsa = async ()=>{
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const datos = await response.json();
        setInformacion(datos)
      }
      salsa()
    },[]
  )

  return (
    <div className="flex flex-col flex-wrap justify-center items-center">
      {/* <div className="flex">
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
      </div> */}

      <Navbar setNombre={setNombre} solicitud={solicitud} nombre={nombre} />

      {informacion && (<h1 className="text-white">El numero de resultados es: {informacion.results.length}</h1>)}
      <div className="flex flex-wrap justify-center items-center">


        {informacion &&
          informacion.results.map((elemento) => (
            <div key={elemento.id}>
              <img className="rounded-full" src={elemento.image} alt="" />
              <h1 className="text-white">{elemento.name}</h1>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
