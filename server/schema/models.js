import axios from 'axios';
import dbConfig  from '../config';

const baseURL =  dbConfig.dbPath;
class Item {
  constructor() {
    this.api = axios.create({
      baseURL
    })
  }
  // will list all items with no specification to Id.
  list() {
    return this.api.get('/items')
    .then(res => res.data)
  }
  // model to create a new item via mutation
  create(data) {
    return this.api.post('/items', data)
    .then(res => res.data)
  }

  update(id, data) {
    return this.api.patch(`/items/${id}`, data)
    .then(res => res.data)
  }
}

export default new Item()