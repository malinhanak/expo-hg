import axios from 'axios';

class Item {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:1337'
    })
  }
  // will list all items with no specification to Id.
  list() {
    return this.api.get('/items')
    .then(res => res.data)
  }
  // model to create a new item via mutation
  create(data) {
    return this.api.post('/item', data)
    .then(res => res.data)
  }
}

export default new Item()