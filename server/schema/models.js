const axios = require('axios');

class User {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:1337' // json-server endpoint
    })
  }

  list() {
    return this.api.get('/users').then(res => res.data)
  }
}

module.exports = new User()