import localforage from 'localforage';

interface User {
  username: string;
  email: string;
  phone: string;
  password: string;
}

export const getUsersFromLocalForage = async (): Promise<User[]> => {
  const users = await localforage.getItem<User[]>('users');
  return users || [];
};

export const addUserToLocalForage = async (user: User): Promise<void> => {
  const users = await getUsersFromLocalForage();
  users.push(user);
  await localforage.setItem('users', users);
};
