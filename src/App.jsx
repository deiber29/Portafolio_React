import React from "react";
import Header from "./components/Header";
import Biography from "./components/Biography";
import RedesSociales from "./Components/RedesSociales";
import DatosPersonales from "./Components/DatosPersonales";
import Habilidades from "./Components/Habilidades";
//import Conexion from "./Components/Conexion";
import Login from "./Components/Login";
import { useState } from "react";

function App() {
  const [InLogin, setInLogin] = useState (false);
  const [VistaActual, setVistaActual] = useState('Biography');

const handleLogin = (usuario, password) => {
    if (usuario === "Deiber" && password === "Teran") {
      setInLogin(true);
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };


  if (InLogin === false) {
  return <Login Entrar={handleLogin} />; 
}


  return (
    <>

      {/*Encabezado*/}
      <Header cambiarVista={setVistaActual} />
      

      {/*Div que encierra todo el contenido del porfafolio*/}
      <div class="div-principal">


      {/*Biografia*/}
      {/* Si es Biography, muestra el Inicio */}
      {VistaActual === 'Biography' && (
          <>
            <h1>Bienvenido a mi Portafolio</h1>
            <Biography />
          </>
        )}

      {/*Datos Personales*/}
      {/* Si es Datos Personales, muestra el Inicio */}
      {VistaActual === 'DatosPersonales' && (
          <>
            <h1>Mis Datos Personales</h1>
            <DatosPersonales />
          </>
        )}

      {/*Redes Sociales*/}
      {/* Si es Redes Sociales, muestra el Inicio */}
      {VistaActual === 'RedesSociales' && (
          <>
            <h1>Mis Redes Sociales</h1>
            <RedesSociales />
          </>
        )}

      {/*Habilidades*/}
      {/* Si es Habilidades, muestra el Inicio */}
      {VistaActual === 'Habilidades' && (
          <>
            <h1>Mis Habilidades</h1>
            <Habilidades />
          </>
        )}


      {/*Conexion Api*/}
      {/* Si es Habilidades, muestra el Inicio */}
      {/* {VistaActual === 'Conexion' && (
          <>
            <h1>Conexion Api</h1>
            <Conexion />
          </>
        )} */}



      </div>
    </>
  );
}

export default App;