import RutaProtegida from '../components/RutaProtegida'
import Home from '../Home'
import Clientes from '../pages/Clientes'
import CrearEnvio from '../pages/CrearEnvio'
import Envios from '../pages/Envios'
import Login from '../pages/Login'

export let enrutador = [
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/home/',
        element: <RutaProtegida proteger={<Home />} />,
        children: [
            {
                path: "envios",
                element: <Envios />
            },
            {
                path: "clientes",
                element: <Clientes />
            },
            {
                path: "crear",
                element: <CrearEnvio />
            }
        ]
    }
]


