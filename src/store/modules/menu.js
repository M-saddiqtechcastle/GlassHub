import CRUD from "../crud"
let crud = new CRUD({
  endpoint: `${window.$ApiURL}/menu.php`,
  storename: "menu",
  primaryKey: "menuid",
})

const state = {
  ...crud.state,
}

const actions = {
  ...crud.actions,
}

const mutations = {
  ...crud.mutations,
}

const getters = {
  ...crud.getters,
}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true,
}
