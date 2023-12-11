import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SimpleDialogComponent } from 'src/app/dialogs/simple-dialog/simple-dialog.component';
import { CHARACTERS, ICharacterStatus } from 'src/app/helpers/characters';
import { LobbyService } from 'src/app/services/lobby.service';

@Component({
  selector: 'app-character-select',
  templateUrl: './character-select.component.html',
  styleUrls: ['./character-select.component.scss'],
})
export class CharacterSelectComponent implements OnInit {
  public characters = CHARACTERS;

  public selectedCharacter: ICharacterStatus = this.characters[0];

  public isSideBarOpened: boolean = false;

  constructor(
    private dialog: MatDialog,
    private lobbyService: LobbyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.selectedCharacter = this.characters[0];
  }

  public setCharacter(character: ICharacterStatus) {
    this.selectedCharacter = character;
    this.isSideBarOpened = true;
  }

  public cancelSelection() {
    this.isSideBarOpened = false;
  }

  public changeCharacter(direction: boolean) {
    let currIndex = this.characters.findIndex(
      (character) => character.className === this.selectedCharacter?.className
    );

    if (direction && currIndex < this.characters.length - 1) {
      this.selectedCharacter = this.characters[currIndex + 1];
    } else if (!direction && currIndex > 0) {
      this.selectedCharacter = this.characters[currIndex - 1];
    }
  }

  public setCharacterName() {
    this.dialog
      .open(SimpleDialogComponent, {
        width: '250px',
      })
      .afterClosed()
      .subscribe((res) => {
        console.log(res);
        this.lobbyService.addUserToLobby(res).subscribe();
        this.router.navigateByUrl('/lobby');
      });
  }
}
