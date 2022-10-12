import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  //@Input('name-prop') para renombrar la propiedad
  @Input() characters: Character[] = [];

}
