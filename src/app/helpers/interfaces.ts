export interface ILobby {
  roomCode: string;
  chatEnable: boolean;
  mapMoveEnable: boolean;
  users: [];
}

export interface IUser {
  isMaster: boolean;
  username: string;
}

export interface ISocketMessage {
  type: string;
  data: any;
}
