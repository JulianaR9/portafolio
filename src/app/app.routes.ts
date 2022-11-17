
import { RouterModule, Routes } from "@angular/router";

import {

    ContentComponent,
    ClasificacionComponent,
    HorariosComponent,
    AlarmaComponent,
    PuntosComponent,
    RecoleccionComponent

} from "./components/index.paginas";

const app_routes: Routes =  [
    { path:'home', component: ContentComponent },
    { path:'clasificacion', component: ClasificacionComponent },
    { path:'horarios', component: HorariosComponent },
    { path:'alarma', component: AlarmaComponent },
    { path:'puntos', component: PuntosComponent },
    { path:'recoleccion', component: RecoleccionComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash:true}) ;
