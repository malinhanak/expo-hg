import axios from 'axios';
import dbConfig  from '../../config';

const baseURL =  dbConfig.dbPath;

class Item {
  constructor() {
    this.api = axios.create({
      baseURL
    })
  }
  list() {
    return this.api.get('/items')
    .then(res => res.data)
  }
  create(data) {
    return this.api.post('/items', data)
    .then(res => res.data)
  }
  update(id, data) {
    console.log('id', id)
    console.log('data', data)
    return this.api.patch(`/items/${id}`, data)
    .then(res => res.data)
  }
}

export default new Item()