import axios from 'axios';

class Item {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:1337'
    })
  }

  list() {
    return this.api.get('/users')
    .then(res => res.data)
  }
}

export default new Item()