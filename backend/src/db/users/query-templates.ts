export const selectUsersTemplate = `
SELECT 
  u.id,
  u.name,
  u.username,
  u.email,
  u.phone,
  a.id as address_id,
  a.street,
  a.state,
  a.city,
  a.zipcode
FROM users u
LEFT JOIN addresses a ON u.id = a.user_id
ORDER BY u.name
LIMIT ?, ?
`;

export const selectCountOfUsersTemplate = `
SELECT COUNT(*) as count
FROM users u
LEFT JOIN addresses a ON u.id = a.user_id
`;
