import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroeModule } from './heroes/heroes.module';
// import { HeroeComponent } from './heroes/heroe/heroe.component';
// import { ListadoComponent } from './heroes/listado/listado.component';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
    // Declaro el componente para usarlo
    // HeroeComponent,
    // ListadoComponent
  ],
  imports: [
    BrowserModule,
    // Declaramos el modulo para usarlo
    HeroeModule,
    CounterModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
