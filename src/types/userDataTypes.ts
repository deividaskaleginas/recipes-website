export type UserData = {
  id: string;
  username: string;
  email: string;
  avatar: string;
  password: string;
  confirmPassword: string;
  favorites: string[];
  votes: string[];
};

export type LoggedUserData = {
  id: string;
  username: string;
  avatar: string;
  favorites: string[];
  votes: string[];
};

export type DishData = {
  id: string;
  date: string;
  authorData: AuthorType[];
  comment: string;
  portions: string;
  ingridents: IngredientType[];
  photo: string;
  procedure: ProcedureType[];
  time: string;
  title: string;
  votes: number[];
  category: string[];
};

export type CommentData = {
  dishId: string;
  id: string;
  date: string;
  authorData: AuthorType[];
  comment: string;
  votes: Votes[];
};

export type Votes = {
  likes: string[];
  dislikes: string[];
};

export interface IngredientType {
  ingredient: string;
  amount: string;
  measure?: string;
}

export interface ProcedureType {
  step: string;
}

export interface AuthorType {
  id: string;
  avatar: string;
  username: string;
}

export interface CategoryOption {
  value: string;
}
