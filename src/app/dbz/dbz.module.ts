import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { CharacterComponent } from './character/character.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { DbzService } from './services/dbz.service';



@NgModule({
  declarations: [
    MainPageComponent,
    CharacterComponent,
    AddCharacterComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    // Manejo de formularios
    FormsModule
  ],
  providers: [
    // Servicios
    DbzService
  ],
})
export class DbzModule { }
