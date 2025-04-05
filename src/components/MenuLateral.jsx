import { Link } from "react-router-dom"
import { alertaRedireccion } from "../helpers/funciones"
import { useNavigate } from "react-router-dom"
const MenuLateral = () => {
  let redireccion = useNavigate()
  function cerrarSesion() {
    alertaRedireccion("Cerrando sesión", "/", redireccion)
  }

  return (
    <aside className="aplicacion__menu-lateral">
      <h1 className="aplicacion__menu-lateral-logo">Track <span className="aplicacion__menu-lateral-logo--resaltado">X</span></h1>
      <h2>Usuario: {localStorage.getItem("usuario")}</h2>
      <img className="aplicacion__menu-lateral-logo-imagen" src="/logo.jpg" alt="Logo" />
      <nav className="aplicacion__menu-lateral-navegacion">
        <a className="aplicacion__menu-lateral-navegacion-item" href="">Inicio</a>
        <a className="aplicacion__menu-lateral-navegacion-item" href="">Gestión de envíos</a>
        <a className="aplicacion__menu-lateral-navegacion-item" href="">Gestión de clientes</a>
        <button onClick={cerrarSesion} type='button' className="aplicacion__menu-lateral-navegacion-item">Cerrar sesión</button>
      </nav>
    </aside>
  )
}

export default MenuLateral