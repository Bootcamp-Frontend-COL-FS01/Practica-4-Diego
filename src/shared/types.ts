export type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

// Rationale: In many instances, the password is not required
// The majority of components just use the name and email
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
