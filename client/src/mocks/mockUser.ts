import { User } from '../interface/User';

const mockLoggedInUser: User = {
  id: '619e8b9740af3e16d8176360',
  email: 'mockLoggedInUser@gmail.com',
  username: 'mock LoggedIn user',
};

const mockOtherUser1: User = {
  id: '619e8b9740af3e16d8176345',
  username: 'Mock test user 1',
  email: 'mockTestUser1@gmail.com',
};
const mockOtherUser2: User = {
  id: '619e8b9740af3e16d8176341',
  username: 'Mock test user 2',
  email: 'mockTestUser2@gmail.com',
};
const mockOtherUser3: User = {
  id: '619e8b9740af3e16d8176340',
  username: 'Mock test user 3',
  email: 'mockTestUser3@gmail.com',
};

const mockOtherUsers: User[] = [mockOtherUser1, mockOtherUser2, mockOtherUser3];

export { mockLoggedInUser, mockOtherUsers };
