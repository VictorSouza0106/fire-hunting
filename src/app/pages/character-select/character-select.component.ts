import { Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs';
import { CHARACTERS, ICharacterStatus } from 'src/app/helpers/characters';

@Component({
  selector: 'app-character-select',
  templateUrl: './character-select.component.html',
  styleUrls: ['./character-select.component.scss'],
})
export class CharacterSelectComponent implements OnInit {
  public characters = CHARACTERS;

  public selectedCharacter: ICharacterStatus | null;
  public animationDirection: boolean | null = null;

  constructor() {}

  ngOnInit(): void {
    this.selectedCharacter = this.characters[0];
  }

  public setCharacter(character: ICharacterStatus | null) {
    if (this.selectedCharacter) this.selectedCharacter = null;
    else this.selectedCharacter = character;
  }

  public changeCharacter(direction: boolean) {
    if (direction) {
      let nextIndex =
        (this.characters.findIndex(
          (character) =>
            character.className === this.selectedCharacter?.className
        ) +
          1) %
        this.characters.length;
      this.selectedCharacter = this.characters[nextIndex];
      this.animationDirection = true;
      console.log(this.animationDirection);
    } else {
      let prevIndex =
        (this.characters.findIndex(
          (character) =>
            character.className === this.selectedCharacter?.className
        ) -
          1) %
        this.characters.length;
      if (prevIndex === -1) prevIndex = this.characters.length - 1;
      this.selectedCharacter = this.characters[prevIndex];
      this.animationDirection = false;
    }
  }
}
