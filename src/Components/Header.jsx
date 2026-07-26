//Componente: Encabezado
import React from "react";

function Header({ cambiarVista }) {
  return (
    <header>
      <nav>
        {/* 1. Inicio -> Abre Biography */}
        <a href="#" onClick={(e) => { e.preventDefault(); cambiarVista('Biography'); }} className="a-header">
          Inicio
        </a>
        
        {/* 2. Datos Personales -> Abre DatosPersonales */}
        <a href="#" onClick={(e) => { e.preventDefault(); cambiarVista('DatosPersonales'); }} className="a-header">
          Datos Personales
        </a>
        
        {/* 3. Habilidades -> Abre ProjectCards (viendo tus archivos, asumo que es este) */}
        <a href="#" onClick={(e) => { e.preventDefault(); cambiarVista('Habilidades'); }} className="a-header">
          Habilidades
        </a>
        
        {/* 4. Redes Sociales -> Abre RedesSociales (Cambiado el href='#' y agregado el onClick) */}
        <a href="#" onClick={(e) => { e.preventDefault(); cambiarVista('RedesSociales'); }} className="a-header">
          Redes Sociales
        </a>
        
        {/* 5. Redes Sociales -> Conexion Api (Cambiado el href='#' y agregado el onClick) */}
       {/*  <a href="#" onClick={(e) => { e.preventDefault(); cambiarVista('Conexion'); }} className="a-header">
          Conexion
        </a> */}



       {/*  <button id="tema_claro" className="modo-claro">
          CAMBIAR TEMA
        </button> EN DESARROLLO */
        }
      </nav>
    </header>
  );
}

export default Header;
