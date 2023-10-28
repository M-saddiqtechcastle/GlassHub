import CRUD from "../crud"
let crud = new CRUD({
  endpoint: `${window.$ApiURL}/transportdropline.php`,
  storename: "transportdropline",
  primaryKey: "transportdroplineid",
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
