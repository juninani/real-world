interface userLogin {
  email: string;
  password: string;
}

interface addUser {
  email: string;
  password: string;
  username: string;
}

interface userInfo {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
}

interface edituser {
  email: string;
  password: string;
  username: string;
  bio: string;
  image: string;
}

export type { userLogin, addUser, userInfo, edituser };
