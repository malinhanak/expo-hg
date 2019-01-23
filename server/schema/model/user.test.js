import Users from './user';

jest.mock('axios');
let mockFn;
let resp;

beforeEach(() => {
  mockFn = jest.fn().mockImplementation(() => Promise.resolve(resp))
});

test('Should create user', () => {
  resp = {data: [{id: 3, fullName: 'Bob', email: 'bobmarley@gmail.com'}]};

  Users.api = {
    post: mockFn
  }

  return Users.create({id: 3, fullName: 'Bob', email: 'bobmarley@gmail.com'})
  .then(users => {
    expect(mockFn.mock.calls[0][0]).toEqual("/users")
    expect(mockFn.mock.calls[0][1]).toEqual(resp.data[0])
    expect(mockFn.mock.calls.length).toBe(1)
  })
});

test('Should update user', () => {
  resp = {data: [{id: 3, fullName: 'Bob', email: 'bobmarley@gmail.com'}]};

  Users.api = {
    patch: mockFn
  }

  return Users.update(3, {fullName: 'Bobby', email: 'bobmarley@gmail.com'})
  .then(users => {
    expect(users).toEqual(resp.data)
  })
});

test('Should update inventory', () => {
  resp = {data: { inventory: [{id: -1}]}};
  const patchMock = jest.fn().mockImplementation((arg, res) => Promise.resolve({data: res}))

  Users.api = {
    get: mockFn,
    patch: patchMock
  }

  return Users.updateInventory(3, {
    inventory: [{id: 1}]
  }).then(articles => {
    expect(mockFn.mock.calls.length).toBe(1)
    expect(patchMock.mock.calls.length).toBe(1)
    expect(articles.inventory.length).toBe(2)
    expect(articles.inventory[0].id).toBeDefined()

  })
});
