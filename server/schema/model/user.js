import axios from 'axios';
import dbConfig  from '../../config';

const baseURL =  dbConfig.dbPath;

class User {
  constructor() {
    this.api = axios.create({
      baseURL
    })
  }
  list() {
    return this.api.get('/users')
    .then(res => res.data)
  }
  find(id) {
    return this.api.get(`/users/${id}`)
    .then((res) => res.data)
  }
  create(data) {
    return this.api.post('/users', data)
    .then(res => res.data)
  }
  update(id) {
    return this.api.patch(`/users/${id}`, data)
    .then(res => res.data)
  }
  delete(id) {
    return this.api.delete(`/users/${id}`)
    .then(() => {id})
  }
  updateInventory(id, data) {
    return this.api.get(`/users/${id}`)
    .then((articles) => {
      let inventory = articles.data.inventory;
      inventory = [...inventory, data.inventory]
      data.inventory = inventory
      return this.api.patch(`/users/${id}`, data)
      .then(res => res.data)
    })
  }
}

export default new User()