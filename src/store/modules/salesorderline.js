import CRUD from "../crud"
let crud = new CRUD({
  endpoint: `${window.$ApiURL}/salesorderline.php`,
  storename: "salesorderline",
  primaryKey: "salesorderlineid",
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
