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
  find(id) {
    return this.api.get(`/items/${id}`)
    .then((res) => res.data)
  }
  findTwo(category, name) {
    console.log('name', name)
    console.log('category', category)
    const key = name ? 'name' : 'category'
    const term = name ? name : category.toUpperCase()
    console.log('api', `/items?${key}=${term}`)
    return this.api.get(`/items?${key}=${term}`)
    .then((res) => {
      return res.data
    })
  }
  create(data) {
    return this.api.post('/items', data)
    .then(res => res.data)
  }
  update(id, data) {
    return this.api.patch(`/items/${id}`, data)
    .then(res => res.data)
  }
  delete(id) {
    return this.api.delete(`/items/${id}`)
    .then(() => { id })
  }
}

export default new Item()