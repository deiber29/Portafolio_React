import React from "react";

function DatosPersonales(){
    return (
    <>
    
    <div className="div-container-RedesSociales">
      <div className="div-img-RedeSociales">
        <img src="/public/RedesSociales.jpg" alt="imagen" className="img-RedesSociales" />
      </div>
      <div className="div-DatosPersonales">
        
        <h2 className="h2-deiberteran">Datos y Ubicacion</h2>
        <ul>
            <li><b>Nombre Completo</b>: Deiber Alexander Teran Diaz</li>
            <li><b>Edad</b>: 24 años</li>
            <li><b>Lugar de Residencia</b>: Caracas, Venezuela</li>
        </ul>

        <h2 className="h2-deiberteran">Educacion y Formacion</h2>
        <ul>
            <li><b>Universidad</b>: UNEXCA</li>
            <li><b>Curso</b>: CEBA INGLES</li>
            <li><b>Curso</b>: PROGRAMACION WEB CEPAV</li>
        </ul>

        <h2 className="h2-deiberteran">Contacto Directo</h2>
        <ul>
            <li><b>Correo Electronico</b>: <address><a href="deiberteran0204@gmail.com">deiberteran0204@gmail.com</a></address></li>
            <li><b>Numero Telefonico</b>: (0414)-307-9415</li>
        </ul>

      </div>
    </div>
    </>
    );
}

export default DatosPersonales;