import { IResponse } from "../axios-util";

interface userLogin {
  email: string;
  password: string;
}

interface addUser {
  email: string;
  password: string;
  username: string;
}

interface userInfo extends IResponse {
  user: {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
  };
}
interface userUpdate {
  email: string;
  username: string;
  bio: string;
  image: string;
  password?: string;
}
interface edituser {
  email: string;
  password: string;
  username: string;
  bio: string;
  image: string;
}

export type { userLogin, addUser, userInfo, edituser, userUpdate };
