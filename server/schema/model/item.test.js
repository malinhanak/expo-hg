import Item from './item';

jest.mock('axios');
let mock;
let resp;

beforeEach(() => {
  mock = jest.fn().mockImplementation(() => Promise.resolve(resp))
});

test('Should create an item', () => {
  resp = {data: [{name: "item1", description: "item one is awesome", quantity: "3", prize: "60", category: "RIDER"}]};

  Item.api = {
    post: mock
  }

  return Item.create({name: "item1", description: "item one is awesome", quantity: "3", prize: "60", category: "RIDER"})
  .then(item => {
    expect(mock.mock.calls[0][0]).toEqual("/items")
    expect(mock.mock.calls[0][1]).toEqual(resp.data[0])
    expect(mock.mock.calls.length).toBe(1)
  })
});

test('Should update item', () => {
  resp = {data: [{id: 3, name: "item1", description: "item one is awesome", quantity: "3"}]};
  Item.api = {
    patch: mock
  }

  return Item.update(3, {name: "item1", description: "item one is awesome, yaaay", quantity: "3"})
  .then(item => {
    expect(item).toEqual(resp.data)
  })
});