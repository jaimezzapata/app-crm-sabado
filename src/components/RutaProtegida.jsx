import { Navigate } from "react-router-dom"

function RutaProtegida({ proteger }) {
    let token = localStorage.getItem("token")
    return token ? proteger : <Navigate to="/" />
}

export default RutaProtegida