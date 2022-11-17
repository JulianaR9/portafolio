import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { app_routing } from "./app.routes";



//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { ClasificacionComponent } from './components/clasificacion/clasificacion.component';
import { HorariosComponent } from './components/horarios/horarios.component';
import { AlarmaComponent } from './components/alarma/alarma.component';
import { PuntosComponent } from './components/puntos/puntos.component';
import { RecoleccionComponent } from './components/recoleccion/recoleccion.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ClasificacionComponent,
    HorariosComponent,
    AlarmaComponent,
    PuntosComponent,
    RecoleccionComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
