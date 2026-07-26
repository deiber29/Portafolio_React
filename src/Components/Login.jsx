import React, { useState } from "react";

function Login({ Entrar }) {
  // Estados para capturar los datos que el usuario escribe
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    Entrar(nombre, password); // Envía los datos hacia App.jsx
  };

  return (
    <div className="div-container-login">
      <div className="div-login">
        <h1>Acceso de Administrador</h1>

        {/* Al hacer submit, ejecutamos handleSubmit */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="Nombre" className="Nombre">Nombre</label>
          <input 
            type="text" 
            id="Nombre" 
            className="input-nombre" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} // Guarda lo que escribe
            placeholder="Inserte su Nombre" 
            required 
          />

          <label htmlFor="Contraseña" className="Contraseña">Contraseña</label>
          <input 
            type="password" 
            id="Contraseña" 
            className="input-contraseña" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Guarda lo que escribe
            placeholder="Insertar Contraseña" 
            required 
          />

          <button type="submit" className="btn-enviar">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;