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
  findTwo(id, name) {
    return this.api.get(`/items/name?"${name}"`)
    .then((res) => {
      // if(id){
      //   return res.data.filter((byId) => {
      //     return id === byId
      //   })
      // }
      if(name){
        return res.data.filter((byName) => {
          return name === byName
        })
      }
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
}

export default new Item()