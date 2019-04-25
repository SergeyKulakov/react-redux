import { createStore } from 'redux'
import reducer from '../reducer'

const initialState = { 
  posts: JSON.parse(localStorage.getItem("posts"))
};

const store = createStore(reducer, initialState)

//dev only, no need in prod
window.store = store

export default store 