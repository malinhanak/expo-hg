import Item from './item';

jest.mock('axios');
let mockFn;
let resp;

beforeEach(() => {
  mockFn = jest.fn().mockImplementation(() => Promise.resolve(resp))
});

test('Should delete an item', () => {
  resp = {data: [{id: 3}]};

  Item.api = {
    delete: mockFn
  }


  return Item.delete(null)
  .then(item => {
    console.log(item)
    expect(mockFn.mock.calls.length).toBe(1)
    expect(item.id).toBeNull()
  })
});


test('Should create an item', () => {
  resp = {data: [{name: "item1", description: "item one is awesome", quantity: "3", prize: "60", category: "RIDER"}]};

  Item.api = {
    post: mockFn
  }

  return Item.create({name: "item1", description: "item one is awesome", quantity: "3", prize: "60", category: "RIDER"})
  .then(item => {
    expect(mockFn.mock.calls[0][0]).toEqual("/items")
    expect(mockFn.mock.calls[0][1]).toEqual(resp.data[0])
    expect(mockFn.mock.calls.length).toBe(1)
  })
});

test('Should update item', () => {
  resp = {data: [{id: 3, name: "item1", description: "item one is awesome", quantity: "3"}]};
  Item.api = {
    patch: mockFn
  }

  return Item.update(3, {name: "item1", description: "item one is awesome, yaaay", quantity: "3"})
  .then(item => {
    expect(item).toEqual(resp.data)
  })
});
