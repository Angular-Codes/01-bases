import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  // @Input() characters: Character[] = [];
  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  newCharacter = {
    name: '',
    power: 0
  }

  constructor(
    private dbzService: DbzService
  ) { }

  agregar() {
    if (this.newCharacter.name.trim().length === 0) { return; }
    // this.onNewCharacter.emit(this.newCharacter);
    this.dbzService.addCharacter(this.newCharacter);
    this.clear();
  }

  clear() {
    this.newCharacter = {
      name: '',
      power: 0
    }
  }
}
