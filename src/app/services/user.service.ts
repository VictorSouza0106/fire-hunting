import { Injectable } from '@angular/core';
import { IUser } from '../helpers/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public currentUser: IUser;

  constructor() {}

  public createDefaultUser(isMaster: boolean) {
    this.currentUser = {
      isMaster: isMaster,
      username: isMaster ? 'Mestre' : '',
    };
  }
}
