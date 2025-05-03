import RutaProtegida from '../components/RutaProtegida'
import Home from '../Home'
import Login from '../pages/Login'

export let enrutador = [
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/home',
        element: <RutaProtegida proteger={<Home />} />
    }
]


