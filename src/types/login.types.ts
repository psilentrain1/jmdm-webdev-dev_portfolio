export type UserCredentials = {
  username: string;
  password: string;
  type: string;
};

type SocialCredentialsType = {
  auth_code: string;
};

export type { SocialCredentialsType };
