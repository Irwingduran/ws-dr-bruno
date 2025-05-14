import React from "react";
import Home from "../components/en/home/Home";

// defaul (english)
export { Home }
// english export 
export const ServiceGrowth = React.lazy(() => import('../components/en/servicegrowth/ServiceGrowth'));
// spanish export
export const Inicio = React.lazy(() => import('../components/es/inicio/Inicio'));
export const ServiceGrowthEs = React.lazy(() => import('../components/es/servicegrowth/ServiceGrowth'));