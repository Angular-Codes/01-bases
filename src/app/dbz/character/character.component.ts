import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  //@Input('name-prop') para renombrar la propiedad
  // @Input() characters: Character[] = [];

  get characters(): Character[] {
    return this.dbzService.characters;
  }

  constructor(
    private dbzService: DbzService
  ) { }

}
