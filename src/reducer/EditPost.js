import { EDIT_POST } from '../constants'

export default (state = JSON.parse(localStorage.getItem("posts")), action) => {
    return action.type === EDIT_POST ? JSON.parse(localStorage.getItem("posts")) : state;
}