export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
};

interface UserType {
  id: string;
  name: string;
  email: string;
  avatar: string;
  premiumSubscription: boolean;
  accessToken: string;
  refreshToken: string;
  subId: string;
}

type UserResponseType = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  premium_subscription: boolean;
  access_token: string;
  refresh_token: string;
  sub_id: string;
};

export type { UserType, UserResponseType };
