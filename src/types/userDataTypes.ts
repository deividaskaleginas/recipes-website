export type UserData = {
  // find(arg0: (user: any) => any): unknown;
  id: string;
  username: string;
  email: string;
  avatar: string;
  password: string;
  confirmPassword: string;
  favorites: string[];
};

export type LoggedUserData = {
  id: string;
  username: string;
  avatar: string;
  favorites: string[];
};
