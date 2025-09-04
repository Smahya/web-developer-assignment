export interface Address {
  id: string;
  user_id: string;
  street: string;
  state: string;
  city: string;
  zipcode: string;
}

export interface User {
  id: string; // Fixed: database uses TEXT IDs (UUIDs)
  name: string;
  username: string;
  email: string;
  phone: string;
  address?: Address; // Optional - populated when addresses are joined
}

export type Pagination = {
  pageNumber: number;
  pageSize: number;
  totalUsers: number;
};
