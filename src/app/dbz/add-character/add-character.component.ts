import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  // @Input() characters: Character[] = [];
  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  newCharacter = {
    name: '',
    power: 0
  }

  agregar() {
    if (this.newCharacter.name.trim().length === 0) { return; }
    this.onNewCharacter.emit(this.newCharacter);
    this.clear();
  }

  clear() {
    this.newCharacter = {
      name: '',
      power: 0
    }
  }
}
