export interface Post {
  id: string; // Fixed: database uses TEXT IDs (UUIDs)
  user_id: string; // Fixed: references users.id which is TEXT
  title: string;
  body: string;
  created_at: string;
}
