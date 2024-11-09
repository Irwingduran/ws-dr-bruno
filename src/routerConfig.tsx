import Inicio from "./components/es/inicio/Inicio";
import { Home, ServiceCancer, ServiceGrowth, ServiceCancerEs, ServiceGrowthEs } from "./pages";

export const routes = [
    // english version 
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/ServiceCancer',
        element: <ServiceCancer/>
    },
    {
        path: '/ServiceGrowth',
        element: <ServiceGrowth/>
    },
    // spanish version
    {
        path: '/es/Inicio',
        element: <Inicio/>
    },
    {
        path: '/es/ServiceCancer',
        element: <ServiceCancerEs/>
    },
    {
        path: '/es/ServiceGrowth',
        element: <ServiceGrowthEs/>
    },
]