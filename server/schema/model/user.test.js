import Users from './user';

jest.mock('axios');

test('Should create user', () => {
  const resp = {data: [{id: 3, fullName: 'Bob', email: 'bobmarley@gmail.com'}]};

  const postMock = jest.fn().mockImplementation(() => Promise.resolve(resp))

  Users.api = {
    post: postMock
  }

  return Users.create({id: 3, fullName: 'Bob', email: 'bobmarley@gmail.com'})
  .then(users => {
    const firstCallToPost = postMock.mock.calls[0]
    expect(firstCallToPost[0]).toEqual("/users")
    expect(postMock.mock.calls[0][1]).toEqual(resp.data[0])
    expect(postMock.mock.calls.length).toBe(1)
  })
});

test('Should update user', () => {
  const resp = {data: [{id: 3, fullName: 'Bob', email: 'bobmarley@gmail.com'}]};

  const patchMock = jest.fn().mockImplementation(() => Promise.resolve(resp))
  Users.api = {
    patch: patchMock
  }

  return Users.update(3, {})
  .then(users => {
    expect(users).toEqual(resp.data)
  })
});

test('Should update inventory', () => {
  const resp = {data: { inventory: [{id: -1}]}};

  const getMock = jest.fn().mockImplementation(() => Promise.resolve(resp))
  const patchMock = jest.fn().mockImplementation((arg, res) => {
    return Promise.resolve({data: res})
  })

  Users.api = {
    get: getMock,
    patch: patchMock
  }

  return Users.updateInventory(3, {
    inventory: [{id: 1}]
  }).then(articles => {
    expect(getMock.mock.calls.length).toBe(1)
    expect(patchMock.mock.calls.length).toBe(1)
    expect(articles.inventory.length).toBe(2)
    expect(articles.inventory[0].id).toBeDefined()

  })
});
