import { connection } from "../connection";

import {
  selectCountOfUsersTemplate,
  selectUsersTemplate,
} from "./query-templates";
import { User, Address } from "./types";

export const getUsersCount = (): Promise<number> =>
  new Promise((resolve, reject) => {
    connection.get<{ count: number }>(
      selectCountOfUsersTemplate,
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.count);
      }
    );
  });

// Raw database row type for the joined query
interface UserWithAddressRow {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  address_id: string | null;
  street: string | null;
  state: string | null;
  city: string | null;
  zipcode: string | null;
}

export const getUsers = (
  pageNumber: number,
  pageSize: number
): Promise<User[]> =>
  new Promise((resolve, reject) => {
    connection.all<UserWithAddressRow>(
      selectUsersTemplate,
      [pageNumber * pageSize, pageSize],
      (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        // Transform the joined data into proper User objects
        const users: User[] = results.map((row) => {
          const user: User = {
            id: row.id,
            name: row.name,
            username: row.username,
            email: row.email,
            phone: row.phone,
          };

          // Add address if it exists
          if (row.address_id) {
            user.address = {
              id: row.address_id,
              user_id: row.id,
              street: row.street!,
              state: row.state!,
              city: row.city!,
              zipcode: row.zipcode!,
            };
          }

          return user;
        });

        resolve(users);
      }
    );
  });
