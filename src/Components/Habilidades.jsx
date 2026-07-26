import React from "react";
import ProjectCards from "./ProjectCards";


function Habilidades(){
return (
    <>
     {/*Habilidades*/}
        
        <div className="div-Container-Habilidades">
          
          <div className="div-Habilidades">
            <img src="/public/Habilidades/HTML.png" alt="ICONO HTML"  className="img-Habilidades"/>
            <h3 className="h3-Hablidades">HTML</h3>
            <p className="p-Habilidades">Estructura de documentos web y marcado semántico.</p>
          </div>
          
          <div className="div-Habilidades">
            <img src="/public/Habilidades/CSS.png" alt="ICONO HTML"  className="img-Habilidades"/>
            <h3 className="h3-Hablidades">CSS</h3>
            <p className="p-Habilidades">Diseño responsivo y estilización de interfaces.</p>
            </div>

          <div className="div-Habilidades">
            <img src="/public/Habilidades/JS.png" alt="ICONO HTML"  className="img-Habilidades"/>
            <h3 className="h3-Hablidades">JS</h3>
            <p className="p-Habilidades">Lógica interactiva y dinamismo en el lado del cliente.</p>
          </div>

          <div className="div-Habilidades">
            <img src="/public/Habilidades/REACT.png" alt="ICONO HTML"  className="img-Habilidades"/>
            <h3 className="h3-Hablidades">REACT</h3>
            <p className="p-Habilidades">Desarrollo de interfaces basadas en componentes reutilizables.</p>
          </div>

        </div>
    </>
);
}

export default Habilidades;