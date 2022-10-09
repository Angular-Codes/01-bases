import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    // declaro el componente para usarlo
    CounterComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
