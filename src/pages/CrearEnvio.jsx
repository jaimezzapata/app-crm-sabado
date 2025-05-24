import "./Login.css";
import { useNavigate } from "react-router-dom";
import { alertaError, alertaRedireccion } from "../helpers/funciones";
import { useState } from "react";
let apiEnvios = "https://back-json-server-sabado.onrender.com/envios/";

const CrearEnvio = () => {
  const [nombre, setNombre] = useState("");
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [fecha, setFecha] = useState("");
  const [estado, setEstado] = useState("");
  let redireccion = useNavigate();

  function registrarEnvio() {
    let usuario = JSON.parse(localStorage.getItem("usuario"))
    let envio = {
      nombre,
      origen,
      destino,
      fecha,
      estado,
      idUsuario: usuario.id
    };
    fetch(apiEnvios, {
      method: "POST",
      body: JSON.stringify(envio),
    })
      .then(() =>
        alertaRedireccion("Registro exitoso", "/home/envios", redireccion)
      )
      .catch(() => alertaError("Error", "No se pudo registrar", "error"));
  }

  return (
    <div className="envios">
      <form className="form_envio" action="">
        <div className="form_front">
          <div className="form_details">Login</div>
          <input
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            className="input"
            placeholder="Nombre"
          />
          <input
            onChange={(e) => setOrigen(e.target.value)}
            type="text"
            className="input"
            placeholder="Origen"
          />
          <input
            onChange={(e) => setDestino(e.target.value)}
            type="text"
            className="input"
            placeholder="Destino"
          />
          <input
            onChange={(e) => setFecha(e.target.value)}
            type="date"
            className="input"
            placeholder="Fecha"
          />
          <select name="" id="" onChange={(e) => setEstado(e.target.value)}>
            <option value="">Seleccione ...</option>
            <option value="Creado">Creado</option>
            <option value="Cancelado">Cancelado</option>
            <option value="Finalizado">Finalizado</option>
          </select>
          <button type="button" onClick={registrarEnvio} className="btn">
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrearEnvio;
