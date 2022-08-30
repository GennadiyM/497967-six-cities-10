import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/store';
import { UserData } from '../../types/user-data';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authStatus;
export const getUserData = (state: State): UserData | null => state[NameSpace.User].user;

