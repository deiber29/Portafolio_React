import React from "react";
//import { useContext } from "react";
//import { AuthContext } from "./AuthContext";
import ProjectCards from "./ProjectCards";



function ProjectCard({title, description, imageUrl}) {
    
    
    const {usuario} = useContext(AuthContext);


    if(usuario) {

    
    return (
        <div className="card">
            <img src={imageUrl} alt= {title} />
            <h2>{title}</h2>
            <p>
                {description}
            </p>
        </div>
    );

}else{
    return (
        <div className="card">
            <p>Inicia Sesion para ver los proyectos</p>

        </div>
    )
}
}

export default ProjectCard;