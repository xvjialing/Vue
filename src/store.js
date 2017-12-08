const STORYGE_KEY = 'todos-vuejs'

export default {
  fetch () {
    return JSON.parse(window.localStorage.getItem(STORYGE_KEY) || '[]')
  },
  save (items) {
    window.localStorage.setItem(STORYGE_KEY, JSON.stringify(items))
  }
}
