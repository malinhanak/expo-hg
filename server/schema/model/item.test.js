import Item from './item';

jest.mock('axios');

test('Should create an item', () => {
  const resp = {data: [{name: "item1", description: "item one is awesome", quantity: "3", prize: "60", category: "RIDER"}]};
  const postMock = jest.fn().mockImplementation(() => Promise.resolve(resp))

  Item.api = {
    post: postMock
  }

  return Item.create({name: "item1", description: "item one is awesome", quantity: "3", prize: "60", category: "RIDER"})
  .then(item => {
    expect(postMock.mock.calls[0][0]).toEqual("/items")
    expect(postMock.mock.calls[0][1]).toEqual(resp.data[0])
    expect(postMock.mock.calls.length).toBe(1)
  })
});

test('Should update item', () => {
  const resp = {data: [{id: 3, name: "item1", description: "item one is awesome", quantity: "3"}]};
  const patchMock = jest.fn().mockImplementation(() => Promise.resolve(resp))
  Item.api = {
    patch: patchMock
  }

  return Item.update(3, {name: "item1", description: "item one is awesome, yaaay", quantity: "3"})
  .then(item => {
    expect(item).toEqual(resp.data)
  })
});