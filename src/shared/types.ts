export type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type PrivateUser = {
  firstName: string;
  lastName: string;
  email: string;
};

export type Post = {
  user: PrivateUser;
  title: string;
  text: string;
  id: string;
};
