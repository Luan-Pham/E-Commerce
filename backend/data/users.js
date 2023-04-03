import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'Luan Pham',
    email: 'Luan@example.com',
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: 'Lauren Kwok',
    email: 'Lauren@example.com',
    password: bcrypt.hashSync('12345', 10),
  },
];

export default users;
