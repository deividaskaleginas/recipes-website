export type UserData = {
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

export type DishData = {
  id: string;
  comment: string;
  ingridents: {}[];
  photo: string;
  procedure: {}[];
  time: string;
  title: string;
};
