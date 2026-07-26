import React from "react";

function RedesSociales(){
    return(
        <>
        <div className="RedesSociales">

        <div className="div-RedSocial" id="div-Linkedin">
        <img src="/public/Redes Sociales/Linkedin.png" className="img-RedSocial"/>
        <h3 className="h3-RedesSociales">Linkedin</h3>
        <div className="div-p-RedesSociales">
        <p className="p-RedesSociales">Conectate conmigo para ver mi trayectoria profesional y red de contactos</p>
        </div>
        <a href="https://github.com/deiber29" className="a-RedesSociales">Ir a...</a>
        </div>

        <div className="div-RedSocial" id="div-Github">
        <img src="/public/Redes Sociales/Github.png" className="img-RedSocial"/>
        <h3 className="h3-RedesSociales">GitHub</h3>
        <div className="div-p-RedesSociales">
        <p className="p-RedesSociales">Repositorios de mis proyectos de código abierto y experimentaciones</p>
        </div>
        <a href="https://github.com/deiber29" className="a-RedesSociales">Ir a...</a>
        </div>

        <div className="div-RedSocial" id="div-Instagram">
        <img src="/public/Redes Sociales/Instagram.png" className="img-RedSocial"/>
        <h3 className="h3-RedesSociales">Instagram</h3>
        <div className="div-p-RedesSociales">
        <p className="p-RedesSociales">Mi perfil de instagram para comunicarte al personal y seguir en contacto conmigo</p>
        </div>
        <a href="https://www.instagram.com/deiber_teran/"  className="a-RedesSociales">Ir a...</a>
        </div>

        </div>
        </>
    );
}

export default RedesSociales;
