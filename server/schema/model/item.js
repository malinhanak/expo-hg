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
    .catch((error) => console.log(error))
  }
  find(id) {
    return this.api.get(`/items/${id}`)
    .then((res) => res.data)
    .catch((error) => console.log(error))
  }
  search(category, name) {
    const key = name ? 'name' : 'category'
    const term = name ? name : category.toUpperCase()
    return this.api.get(`/items?${key}=${term}`)
    .then((res) => res.data)
    .catch((error) => console.log(error))
  }
  create(data) {
    return this.api.post('/items', data)
    .then(res => res.data)
    .catch((error) => console.log(error))
  }
  update(id, data) {
    return this.api.patch(`/items/${id}`, data)
    .then(res => res.data)
    .catch((error) => console.log(error))
  }
  delete(id) {
    if (id === null || id === undefined) {
      throw new Error("invalidId")
    }
    return this.api.delete(`/items/${id}`)
    .then(() => {
      return { id }
    })
    .catch((error) => {
      throw new Error(error)
    })
  }
}

export default new Item()