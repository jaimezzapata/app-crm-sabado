import { alertaRedireccion } from "../helpers/funciones"
import { useNavigate, Link } from "react-router-dom"
const MenuLateral = () => {
  let redireccion = useNavigate()
  function cerrarSesion() {
    localStorage.removeItem("token")
    localStorage.removeItem("usuario")
    alertaRedireccion("Cerrando sesión", "/", redireccion)
  }

  return (
    <aside className="aplicacion__menu-lateral">
      <h1 className="aplicacion__menu-lateral-logo">Track <span className="aplicacion__menu-lateral-logo--resaltado">X</span></h1>
      <h2>Usuario: {localStorage.getItem("usuario")}</h2>
      <img className="aplicacion__menu-lateral-logo-imagen" src="/logo.jpg" alt="Logo" />
      <nav className="aplicacion__menu-lateral-navegacion">
        <Link className="aplicacion__menu-lateral-navegacion-item" to="/home">Inicio</Link>
        <Link className="aplicacion__menu-lateral-navegacion-item" to="envios">Gestión de envíos</Link>
        <Link className="aplicacion__menu-lateral-navegacion-item" to="clientes">Gestión de clientes</Link>
        <Link className="aplicacion__menu-lateral-navegacion-item" to="crear">Registrar envio</Link>
        <button onClick={cerrarSesion} type='button' className="aplicacion__menu-lateral-navegacion-item">Cerrar sesión</button>
      </nav>
    </aside>
  )
}

export default MenuLateral