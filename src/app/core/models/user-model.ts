import {RoleModel} from './role-model';

export interface UserModel {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  user: string;
  username: string;
  password: string;
  photo?: string;
  active: boolean;
  role: RoleModel;
}
