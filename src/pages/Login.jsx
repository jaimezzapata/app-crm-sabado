import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { alertaRedireccion } from '../helpers/funciones'
function Login() {


  const [getUsuario, setUsuario] = useState("")
  const [getPassword, setPassword] = useState("")
  let redireccion = useNavigate()

  function iniciarSesion() {
    if (getUsuario === "admin" && getPassword === "admin") {
      localStorage.setItem("usuario", getUsuario)
      alertaRedireccion("Bienvenido " + getUsuario, "/home", redireccion)
    }
  }

  return (
    <div className="container">
      <input id="signup_toggle" type="checkbox" />
      <form className="form">
        <div className="form_front">
          <div className="form_details">Login</div>
          <input onChange={(e) => setUsuario(e.target.value)} type="text" className="input" placeholder="Username" />
          <input onChange={(e) => setPassword(e.target.value)} type="text" className="input" placeholder="Password" />
          <button type='button' onClick={iniciarSesion} className="btn">Login</button>
          <span className="switch">Don't have an account?
            <label for="signup_toggle" className="signup_tog">
              Sign Up
            </label>
          </span>
        </div>
        <div className="form_back">
          <div className="form_details">SignUp</div>
          <input type="text" className="input" placeholder="Firstname" />
          <input type="text" className="input" placeholder="Username" />
          <input type="text" className="input" placeholder="Password" />
          <input type="text" className="input" placeholder="Confirm Password" />
          <button className="btn">Signup</button>
          <span className="switch">Already have an account?
            <label for="signup_toggle" className="signup_tog">
              Sign In
            </label>
          </span>
        </div>
      </form>
    </div>
  )
}

export default Login