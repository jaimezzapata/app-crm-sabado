import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import {
  alertaError,
  alertaRedireccion,
  generaToken,
} from "../helpers/funciones";
let apiUsuarios = "https://back-json-server-sabado.onrender.com/usuarios/";

function Login() {
  const [getUsuario, setUsuario] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getName, setName] = useState("");
  const [getEmail, setEmail] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  let redireccion = useNavigate();

  function getUsuarios() {
    fetch(apiUsuarios)
      .then((response) => response.json())
      .then((data) => setUsuarios(data));
  }

  useEffect(() => {
    getUsuarios();
  }, []);

  function iniciarSesion() {
    let usuario = usuarios.find(
      (item) => item.usuario == getUsuario && item.password == getPassword
    );
    if (usuario) {
      let token = generaToken();
      localStorage.setItem("token", token);
      localStorage.setItem("usuario", usuario.nombre);
      alertaRedireccion("Bienvenido " + usuario.nombre, "/home", redireccion);
    } else {
      alertaError("Error", "Usuario y/o contraseña incorrecto", "error");
    }
  }

  function registrarUsuario() {
    let usuario = usuarios.find(
      (item) => item.usuario == getUsuario || item.email == getEmail
    );
    if (usuario) {
      alertaError("Error", "Usuario ya existe en la base de datos", "error");
    } else {
      fetch(apiUsuarios, {
        method: "POST",
        body: JSON.stringify({
          usuario: getUsuario,
          password: getPassword,
          nombre: getName,
          correo: getEmail,
        }),
      }).then(() => {
        console.log("Usuario registrado...");
        getUsuarios();
      });
    }
  }

  return (
    <div className="container">
      <input id="signup_toggle" type="checkbox" />
      <form className="form">
        <div className="form_front">
          <div className="form_details">Login</div>
          <input
            onChange={(e) => setUsuario(e.target.value)}
            type="text"
            className="input"
            placeholder="Username"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            className="input"
            placeholder="Password"
          />
          <button type="button" onClick={iniciarSesion} className="btn">
            Login
          </button>
          <span className="switch">
            Don't have an account?
            <label for="signup_toggle" className="signup_tog">
              Sign Up
            </label>
          </span>
        </div>
        <div className="form_back">
          <div className="form_details">SignUp</div>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="input"
            placeholder="Firstname"
          />
          <input
            onChange={(e) => setUsuario(e.target.value)}
            type="text"
            className="input"
            placeholder="Username"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            className="input"
            placeholder="Password"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="input"
            placeholder="Email"
          />
          <button type="button" onClick={registrarUsuario} className="btn">
            Signup
          </button>
          <span className="switch">
            Already have an account?
            <label for="signup_toggle" className="signup_tog">
              Sign In
            </label>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
