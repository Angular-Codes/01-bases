import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {

  characters: Character[] = [];

  // captureName(event: Event) {
  //   this.newCharacter.name = (event.target as HTMLInputElement).value;
  // }

  // capturePower(event: Event) {
  //   this.newCharacter.power = Number((event.target as HTMLInputElement).value);
  // }

  addCharacter(character: Character) {
    this.characters.push(character);
  }

}
