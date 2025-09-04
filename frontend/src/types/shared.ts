export interface Address {
  id: string;
  user_id: string;
  street: string;
  state: string;
  city: string;
  zipcode: string;
}

export interface User extends Record<string, unknown> {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  address?: Address; // Optional - populated when addresses are joined
}

export interface Post extends Record<string, unknown> {
  id: string;
  user_id: string;
  title: string;
  body: string;
  created_at: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  data: T[];
  count: number;
}

export interface PaginationParams {
  pageNumber: number;
  pageSize: number;
}

// Table component types
export interface TableColumn<T> {
  key: keyof T;
  label: string;
  width?: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

export interface TableProps<
  T extends Record<string, unknown> & { id: string | number }
> {
  columns: TableColumn<T>[];
  data: T[];
  loading?: boolean;
  total?: number;
  page?: number;
  pageSize?: number;
  handleRowClick?: (row: T) => void;
  setPage?: (page: number) => void;
}

export interface CreatePostData {
  title: string;
  body: string;
  userId: string;
}
