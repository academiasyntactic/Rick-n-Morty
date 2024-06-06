import React from "react";

const Card = ({ imagen, titulo }) => {
  // const {titulo, imagen, precio} = props
  return (
    <div className="w-80 backdrop-blur-sm p-5 border border-gray-200">
      <img
        src={imagen}
        onClick={() => alert("Hola, mi nombre de producto es: " + titulo)}
        alt=""
      />
      <h2 className="text-white font-extrabold">{titulo}</h2>
    </div>
  );
};

export default Card;
