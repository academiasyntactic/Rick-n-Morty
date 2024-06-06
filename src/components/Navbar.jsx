import React from "react";

const Navbar = ({ setNombre, nombre, solicitud }) => {
  return (
    <div>
      <input type="text" onChange={(e) => setNombre(e.target.value)} />
      <button onClick={solicitud} className="bg-red-500 text-white font-bold">
        Buscar
      </button>
    </div>
  );
};

export default Navbar;
