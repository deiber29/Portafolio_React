import ProjectCards from "./ProjectCards";

function Biography() {
  return (
    <>
    <div className="div-container">
      <div className="div-img">
        <img src="/public/imagen.jpg" alt="imagen" className="img-deiber" />
      </div>
      <div className="div-biografia">
        <h2 className="h2-deiberteran">Deiber Terán</h2>
        <p>Hola, soy Deiber Terán. Tengo 24 años y vivo en Caracas. Naci el 29 de abril del 2002. 
            Soy estudiante de la UNEXCA de altamira, trabajo como Analista y soy estudiante del curso de programacion web
            del CEPAV</p>
      </div>
    </div>
    {/*Titulo de Proyectos Recientes*/}
    <h2 className="h2-proyectosrecientes">Proyectos Recientes</h2>

    {/*Porjectos Realizados*/}
    <div className="div-proyectos">
      <ProjectCards titulo="Tarea 1" src="/tarea1.PNG" link="/public/TAREA 1/formulario_numeros.html"/>
      <ProjectCards titulo="Tarea 1" src="/tarea2.PNG" link="/public/TAREA 2/registro_usuario.html"/>
      <ProjectCards titulo="Tarea 3" src="/tarea3.PNG" link="/public/TAREA 3/solicitud_citas.html"/>
    </div>
    </>
  );
}


export default Biography;