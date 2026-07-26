//Componente: Proyectos
import React from "react";
//import { useContext } from "react";
//import { AuthContext } from "./AuthContext";

function ProjectCards({ src, titulo, link }) 
  /* const {usuario} = useContext(AuthContext); */
{
  return (
    <div>
      <img src={src} alt={`foto ${titulo}`} className="img-proyectos" />
      <h3>{titulo}</h3>
      <a href={link} className="a-proyectos">
        Ir a...
      </a>
    </div>
  );
}



export default ProjectCards;
