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
  create(data) {
    return this.api.post('/user', data)
    .then(res => res.data)
  }
  update(id, data) {
    return this.api.patch(`/user/${id}`, data)
    .then(res => res.data)
  }
}

export default new User()